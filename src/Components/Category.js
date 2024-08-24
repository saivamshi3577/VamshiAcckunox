

import React, { useRef } from 'react';
import Chart from '../Chart';
import './Category.css';

const Category = ({ category, onAddWidget, onRemoveWidget }) => {
  const lastWidgetRef = useRef(null);

  const handleAddWidgetClick = () => {
    if (lastWidgetRef.current) {
      const rect = lastWidgetRef.current.getBoundingClientRect();
      const position = {
        top: rect.bottom + window.scrollY,
        left: rect.right + window.scrollX,
      };
      onAddWidget(position);
    }
  };

  return (
    <div className="category">
      <h2>{category.title}</h2>
      <div className="widgets-container">
        {category.widgets.map((widget, index) => (
          <div
            key={widget.id}
            className="widget"
            ref={index === category.widgets.length - 1 ? lastWidgetRef : null}
          >
            <h3>{widget.title}</h3>
            <Chart type={widget.type} data={widget.data} />
            <button onClick={() => onRemoveWidget(category.id, widget.id)}>Remove Widget</button>
          </div>
        ))}
        <div className="add-widget-container">
          <button onClick={handleAddWidgetClick}>Add Widget</button>
        </div>
      </div>
    </div>
  );
};

export default Category;