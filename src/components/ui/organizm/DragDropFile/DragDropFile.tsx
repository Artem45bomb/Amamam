import { ChangeEvent, FC, DragEvent, useMemo } from 'react';
import { Props } from './types';
import {cn} from "@/utils/style";

export const DragDropFile: FC<Props> = ({
  onFileChange,
  typeFile = 'image',
  className,
  inputRef,
}) => {
  const typeAccept = useMemo(() => {
    let accept = ['image/*'];
    switch (typeFile) {
      case 'image': {
        accept = ['image/*'];
        break;
      }
      case 'video': {
        accept = ['video/*'];
        break;
      }
      case 'image/video': {
        accept = ['video/*', 'image/*'];
        break;
      }
    }
    return accept;
  }, [typeFile]);

  const handleButtonClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    onFileChange?.(file);
  };
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onFileChange?.(file);
    }
  };

  const handleDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onClick={handleButtonClick}
      className={cn(
        'w-28 aspect-square bg-white',
        className,
      )}
    >
      <input
        type="file"
        ref={inputRef}
        onChange={handleInput}
        className="hidden" // Скрываем стандартный input
        accept={typeAccept.join(',')}
      />
    </div>
  );
};
