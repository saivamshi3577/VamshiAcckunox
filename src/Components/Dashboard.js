import React, { useState, useEffect } from "react";
import Category from "./Category";
import AddWidgetForm from "./AddWidgetForm";
import initialDashboardConfig from "../data/dashboardConfig";

function Dashboard() {
  const [config, setConfig] = useState(() => {
    const storedConfig = localStorage.getItem("dashboardConfig");
    return storedConfig ? JSON.parse(storedConfig) : initialDashboardConfig;
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState(""); 

  useEffect(() => {
    localStorage.setItem("dashboardConfig", JSON.stringify(config));
  }, [config]);

  const handleOpenModal = (categoryId) => {
    setActiveCategory(categoryId);
    setIsModalOpen(true);
  };

  const handleAddWidget = (categoryId, widgetData) => {
    setConfig((prevConfig) => {
      const updatedCategories = prevConfig.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: [...category.widgets, widgetData],
          };
        }
        return category;
      });
      return { ...prevConfig, categories: updatedCategories };
    });
  };
  const handleRemoveWidget = (categoryId, widgetId) => {
    setConfig((prevConfig) => {
      const updatedCategories = prevConfig.categories.map((category) => {
        if (category.id === categoryId) {
          return {
            ...category,
            widgets: category.widgets.filter(
              (widget) => widget.id !== widgetId
            ),
          };
        }
        return category;
      });
      return { ...prevConfig, categories: updatedCategories };
    });
  };
  const filteredCategories = config.categories.map((category) => {
    const filteredWidgets = category.widgets.filter((widget) =>
      widget.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return { ...category, widgets: filteredWidgets };
  });

  return (
    <div className="dashboard">
      <input 
        type="text" 
        placeholder="Search widgets..."
        value={searchTerm}
        
        onChange={(e) => setSearchTerm(e.target.value)
          
        }
        className="search-bar"
      />

      {filteredCategories.map((category) => (
        <div key={category.id} style={{ position: "relative" }}>
          <Category
            category={category}
            onAddWidget={() => handleOpenModal(category.id)}
            onRemoveWidget={handleRemoveWidget}
          />
          {isModalOpen && activeCategory === category.id && (
            <AddWidgetForm
              categoryId={activeCategory}
              onClose={() => setIsModalOpen(false)}
              onAddWidget={handleAddWidget}
              position="absolute"
            />
          )}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
