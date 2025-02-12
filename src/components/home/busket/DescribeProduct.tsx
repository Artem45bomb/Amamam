import { nutritionalValueInt } from "@/app/test";
import { useState } from "react";



export interface TabsProps{
  name: string|undefined,
  id: number|undefined,
  describe: string|undefined,
  energyValue: number|undefined,
  nutritionalValue: nutritionalValueInt|undefined
  
}

const tabsNames = [
  { name: "Описание" },
  { name: "Пищевая ценность" },
  { name: "Энергетическая ценность" }
];

export const Tabs = ({name, id, describe,energyValue,nutritionalValue}:TabsProps) => {
  const [activeTab, setActiveTab] = useState<string>(tabsNames[0].name);

  return (
    <div className="w-2/3">
      <div className="relative flex border-b border-gray-300">
        {tabsNames.map((tab) => (
          <button
            key={tab.name}
            className={`flex-1 text-center py-2 transition-colors duration-200 text-lg ${
              activeTab === tab.name ? "text-blue-600 font-semibold" : "text-secondary"
            }`}
            onClick={() => setActiveTab(tab.name)}
          >
            {tab.name}
          </button>
        ))}
        <div
          className="absolute bottom-0 h-0.5 bg-blue-600 transition-all duration-300"
          style={{
            width: `${100 / tabsNames.length}%`,
            left: `${(tabsNames.findIndex((t) => t.name === activeTab) * 100) / tabsNames.length}%`,
          }}
        />
      </div>
      <div className="p-4 text-gray-700">
        {activeTab == tabsNames[0].name && (
          <div>
            <p>{name}</p>
            <p>артикул: {id}</p>
            <p>{describe}</p>
          </div>
        )}
        {activeTab == tabsNames[1].name && nutritionalValue!== undefined && (
          <div>
            <p>Белки: {nutritionalValue.protein}</p>
            <p>Жиры: {nutritionalValue.fats}</p>
            <p>Углеводы: {nutritionalValue.carbohydrates}</p>
            <p>Витамины: {nutritionalValue.vitamins}</p>
            <p>Минералы: {nutritionalValue.minerals}</p>
          </div>
        )}
        {activeTab == tabsNames[2].name &&(
          <div>
            <p>{energyValue} ккал ({energyValue!== undefined?4.184*energyValue:""}) кДж</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tabs;
