import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import './ChartCard.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ color: entry.color }} className="tooltip-value">
            {entry.name}: {entry.value.toLocaleString()} MT
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const PerformanceChart = ({ data }) => {
  return (
    <div className="chart-card animate-in" style={{ animationDelay: '400ms' }}>
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Performance Tracking of Clinker Production</h3>
          <p className="chart-subtitle">Week wise Metric Tons Produced per week</p>
        </div>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
            <XAxis 
              dataKey="week" 
              stroke="#64748b"
              style={{ fontSize: '0.875rem' }}
            />
            <YAxis 
              stroke="#64748b"
              style={{ fontSize: '0.875rem' }}
              tickFormatter={(value) => `${(value / 1000).toFixed(1)}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="circle"
            />
            <Bar 
              dataKey="target" 
              fill="#ffaa00" 
              radius={[8, 8, 0, 0]}
              name="Target"
            />
            <Bar 
              dataKey="actual" 
              fill="#00f5ff" 
              radius={[8, 8, 0, 0]}
              name="Actual"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default PerformanceChart;
