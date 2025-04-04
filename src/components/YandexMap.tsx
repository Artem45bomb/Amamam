import React, { useCallback } from 'react';

// Определяем типы для Yandex Maps API
interface YMaps {
    ready: (callback: () => void) => void;
    Map: new (element: HTMLElement, options: MapOptions) => YMap;
    geocode: (address: string) => Promise<GeocoderResult>;
    Placemark: new (coordinates: [number, number], options: PlacemarkOptions) => Placemark;
}

interface MapOptions {
    center: [number, number];
    zoom: number;
}

interface YMap {
    setCenter: (coordinates: [number, number]) => void;
    geoObjects: {
        add: (object: Placemark) => void;
    };
}

interface GeocoderResult {
    geoObjects: {
        get: (index: number) => {
            geometry: {
                getCoordinates: () => [number, number];
            };
        };
    };
}

// Используем тип object вместо пустого интерфейса
type Placemark = object;

interface PlacemarkOptions {
    hintContent: string;
}

// Расширяем Window для доступа к ymaps
declare global {
    interface Window {
        ymaps: YMaps;
    }
}

interface YandexMapProps {
    address: string;
    showMarker?: boolean;
}

export default function YandexMap({ address, showMarker = false }: YandexMapProps) {
    const mapRef = React.useRef<HTMLDivElement>(null);
    
    const initMap = useCallback(() => {
        window.ymaps.ready(() => {
            if (!mapRef.current) return;
            
            const map = new window.ymaps.Map(mapRef.current, {
                center: [53.9, 27.56], // Примерные координаты Минска
                zoom: 15
            });
            
            const geocoder = window.ymaps.geocode(address);
            geocoder.then((res) => {
                const coordinates = res.geoObjects.get(0).geometry.getCoordinates();
                map.setCenter(coordinates);
                
                // Добавляем маркер только если showMarker = true
                if (showMarker) {
                    const placemark = new window.ymaps.Placemark(coordinates, {
                        hintContent: address
                    });
                    map.geoObjects.add(placemark);
                }
            });
        });
    }, [address, showMarker]);
    
    React.useEffect(() => {
        // Load Yandex Maps API
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=c75daa79-a901-4ff3-8c3c-f9349da8df57&lang=ru_RU';
        script.async = true;
        script.onload = initMap;
        document.body.appendChild(script);
        
        return () => {
            document.body.removeChild(script);
        };
    }, [initMap]);
    
    return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
} 