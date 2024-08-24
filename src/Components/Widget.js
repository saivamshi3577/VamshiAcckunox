


import React from "react";
import { Pie, Doughnut, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

function Widget({ widget, onRemove }) {
  const { title, type, data } = widget;

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: data.colors,
      },
    ],
  };

  const chartOptions = {
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
    },
  };

  return (
    <div className="widget">
      <h3>{title}</h3>
      <div className="chart-container">
        {type === "pie" && <Pie data={chartData} options={chartOptions} />}
        {type === "doughnut" && <Doughnut data={chartData} options={chartOptions} />}
        {type === "bar" && <Bar data={chartData} options={chartOptions} />}
      </div>
      <button className="remove-widget" onClick={onRemove}>
        ×
      </button>
    </div>
  );
}

export default Widget;
