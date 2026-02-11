import React from 'react';
import { Layers, Box, Droplet, Factory, TrendingUp, TrendingDown } from 'lucide-react';
import './KPICard.css';
const iconMap = {
  Layers,
  Box,
  Droplet,
  Factory,
};

const KPICard = ({ metric, index }) => {
  const Icon = iconMap[metric.icon];
  const TrendIcon = metric.trend === 'up' ? TrendingUp : TrendingDown;
  const isPositive = metric.trend === 'up';

  return (
    <div 
      className="kpi-card animate-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="kpi-header">
        <div className={`kpi-icon ${isPositive ? 'positive' : 'negative'}`}>
          <Icon size={24} />
        </div>
        <div className={`kpi-change ${isPositive ? 'positive' : 'negative'}`}>
          <TrendIcon size={16} />
          <span>{metric.change}</span>
        </div>
      </div>
      
      <div className="kpi-content">
        <h3 className="kpi-title">{metric.title}</h3>
        <div className="kpi-value">{metric.value}</div>
      </div>
      
      <div className="kpi-sparkline"></div>
    </div>
  );
};

export default KPICard;
