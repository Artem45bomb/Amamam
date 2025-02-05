import { useState } from "react";

interface TabProps {
  name: string;
}

const tabs: TabProps[] = [
  { name: "Описание" },
  { name: "Пищевая ценность" },
  { name: "Энергетическая ценность" },
  { name: "Состав продукта" },
];

const Tabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].name);

  return (
    <div className="w-2/3">
      <div className="relative flex border-b border-gray-300">
        {tabs.map((tab) => (
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
            width: `${100 / tabs.length}%`,
            left: `${(tabs.findIndex((t) => t.name === activeTab) * 100) / tabs.length}%`,
          }}
        />
      </div>
      <div className="p-4 text-gray-700">Содержимое: {activeTab}</div>
    </div>
  );
};

export default Tabs;
