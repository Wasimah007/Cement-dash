import React from 'react';
import { Mountain, Layers, Gem, Hammer, Boxes, Flame, Package, AlertTriangle, CheckCircle } from 'lucide-react';
import './RawMaterialKPI.css';

const iconMap = {
  Mountain,
  Layers,
  Gem,
  Hammer,
  Boxes,
  Flame,
  Blend: Boxes,
  Package,
};

const getStockStatus = (stock, minLevel) => {
  const percentage = (stock / minLevel) * 100;
  if (percentage >= 120) return { status: 'safe', color: '#00ff88', label: 'Safe', icon: CheckCircle };
  if (percentage >= 100) return { status: 'warning', color: '#ffaa00', label: 'Warning', icon: AlertTriangle };
  return { status: 'critical', color: '#ff3366', label: 'Critical', icon: AlertTriangle };
};

const RawMaterialKPI = ({ material, index }) => {
  const Icon = iconMap[material.icon];
  const statusInfo = getStockStatus(material.stock, material.minLevel);
  const StatusIcon = statusInfo.icon;
  const percentage = ((material.stock / material.minLevel) * 100).toFixed(0);

  return (
    <div 
      className="raw-material-kpi animate-in"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="rm-kpi-header">
        <div className={`rm-kpi-icon ${statusInfo.status}`}>
          <Icon size={24} />
        </div>
        <div className={`rm-kpi-status ${statusInfo.status}`}>
          <StatusIcon size={16} />
          <span>{statusInfo.label}</span>
        </div>
      </div>
      
      <div className="rm-kpi-content">
        <h4 className="rm-kpi-title">{material.name}</h4>
        <div className="rm-kpi-stock">{material.stock.toLocaleString()} {material.unit}</div>
        <div className="rm-kpi-details">
          <span className="rm-kpi-label">Min Level:</span>
          <span className="rm-kpi-min">{material.minLevel.toLocaleString()} {material.unit}</span>
        </div>
      </div>
      
      <div className="rm-kpi-progress">
        <div 
          className={`rm-progress-bar ${statusInfo.status}`}
          style={{ width: `${Math.min(percentage, 100)}%` }}
        />
      </div>
      <div className="rm-kpi-percentage">{percentage}% of minimum</div>
    </div>
  );
};

export default RawMaterialKPI;