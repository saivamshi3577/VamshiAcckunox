import React, { useState } from "react";
import "./AddWidgetForm.css";

function AddWidgetForm({ categoryId, onClose, onAddWidget, position }) {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("pie");
  const [numValues, setNumValues] = useState(1);
  const [values, setValues] = useState([""]);
  const [colors, setColors] = useState([""]);

  const handleNumValuesChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0) {
      setNumValues(value);
      setValues(Array(value).fill(""));
      setColors(Array(value).fill(""));
    } else {
      setNumValues(1);
      setValues([""]);
      setColors([""]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddWidget(categoryId, {
      id: new Date().toISOString(),
      title,
      type,
      data: {
        labels: values,
        colors,
      },
    });
    setTitle("");
    setType("pie");
    setNumValues(1);
    setValues([""]);
    setColors([""]);
  };

  return (
    <form onSubmit={handleSubmit} className="widget-form" style={{ position }}>
      <h3>Add New Widget</h3>
      <div className="form-group">
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          placeholder="Enter widget title"
        />
      </div>

      <div className="form-group">
        <label>Chart Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="pie">Pie</option>
          <option value="doughnut">Doughnut</option>
          <option value="bar">Bar</option>
        </select>
      </div>

      <div className="form-group">
        <label>Number of Values:</label>
        <input
          type="number"
          value={numValues}
          onChange={handleNumValuesChange}
          min="1"
          required
        />
      </div>

      {Array.from({ length: numValues }).map((_, index) => (
        <div key={index} className="form-group">
          <label>Value {index + 1}:</label>
          <input
            type="text"
            value={values[index]}
            onChange={(e) => {
              const newValues = [...values];
              newValues[index] = e.target.value;
              setValues(newValues);
            }}
            required
            placeholder={`Enter value ${index + 1}`}
          />
          <label>Color {index + 1}:</label>
          <input
            type="text"
            value={colors[index]}
            onChange={(e) => {
              const newColors = [...colors];
              newColors[index] = e.target.value;
              setColors(newColors);
            }}
            required
            placeholder="e.g., red, blue"
          />
        </div>
      ))}

      <button type="submit" className="submit-btn">Add Widget</button>
      <button type="button" className="close-btn" onClick={onClose}>Close</button>
    </form>
  );
}

export default AddWidgetForm;