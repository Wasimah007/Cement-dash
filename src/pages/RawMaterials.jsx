import React from 'react';
import RawMaterialKPI from '../components/RawMaterialKPI';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';
import { 
  rawMaterialsStock, 
  dailyReceivedData, 
  dailyConsumptionData,
  stockLevelTrends 
} from '../data/sampleData';
import { Download, Filter, Calendar } from 'lucide-react';
import './RawMaterials.css';

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

const RawMaterials = () => {
  return (
    <div className="raw-materials-page">
      <div className="page-header animate-in">
        <div>
          <h1>Raw Materials Stock Analysis</h1>
          <p className="page-subtitle">
            Monitor stock levels, daily receipts, and consumption of raw materials
          </p>
        </div>
        
        <div className="page-actions">
          <button className="action-btn secondary">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="action-btn secondary">
            <Calendar size={18} />
            <span>Last 7 Days</span>
          </button>
          <button className="action-btn primary">
            <Download size={18} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="rm-kpi-grid">
        {rawMaterialsStock.map((material, index) => (
          <RawMaterialKPI key={material.id} material={material} index={index} />
        ))}
      </div>

      {/* Charts Section */}
      <div className="rm-charts-section">
        {/* Daily Received Chart */}
        <div className="chart-card animate-in" style={{ animationDelay: '400ms' }}>
          <div className="chart-header">
            <div>
              <h3 className="chart-title">Daily Received Materials</h3>
              <p className="chart-subtitle">Metric tons received per day (Last 7 days)</p>
            </div>
          </div>
          
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyReceivedData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis dataKey="day" stroke="#64748b" style={{ fontSize: '0.875rem' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '0.875rem' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ paddingTop: '20px' }} iconType="line" />
                <Line type="monotone" dataKey="limestone" stroke="#00f5ff" strokeWidth={2} name="Limestone" />
                <Line type="monotone" dataKey="clay" stroke="#ff00ea" strokeWidth={2} name="Clay" />
                <Line type="monotone" dataKey="silica" stroke="#ffaa00" strokeWidth={2} name="Silica" />
                <Line type="monotone" dataKey="ironOre" stroke="#ff3366" strokeWidth={2} name="Iron Ore" />
                <Line type="monotone" dataKey="gypsum" stroke="#00ff88" strokeWidth={2} name="Gypsum" />
                <Line type="monotone" dataKey="coal" stroke="#8b5cf6" strokeWidth={2} name="Coal" />
                <Line type="monotone" dataKey="rawMix" stroke="#06b6d4" strokeWidth={2} name="Raw Mix" />
                <Line type="monotone" dataKey="clinker" stroke="#f59e0b" strokeWidth={2} name="Clinker" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Daily Consumption Chart */}
        <div className="chart-card animate-in" style={{ animationDelay: '500ms' }}>
          <div className="chart-header">
            <div>
              <h3 className="chart-title">Daily Consumption</h3>
              <p className="chart-subtitle">Metric tons consumed per day (Last 7 days)</p>
            </div>
          </div>
          
          <div className="chart-container">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyConsumptionData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
                <XAxis dataKey="day" stroke="#64748b" style={{ fontSize: '0.875rem' }} />
                <YAxis stroke="#64748b" style={{ fontSize: '0.875rem' }} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ paddingTop: '20px' }} iconType="line" />
                <Line type="monotone" dataKey="limestone" stroke="#00f5ff" strokeWidth={2} name="Limestone" />
                <Line type="monotone" dataKey="clay" stroke="#ff00ea" strokeWidth={2} name="Clay" />
                <Line type="monotone" dataKey="silica" stroke="#ffaa00" strokeWidth={2} name="Silica" />
                <Line type="monotone" dataKey="ironOre" stroke="#ff3366" strokeWidth={2} name="Iron Ore" />
                <Line type="monotone" dataKey="gypsum" stroke="#00ff88" strokeWidth={2} name="Gypsum" />
                <Line type="monotone" dataKey="coal" stroke="#8b5cf6" strokeWidth={2} name="Coal" />
                <Line type="monotone" dataKey="rawMix" stroke="#06b6d4" strokeWidth={2} name="Raw Mix" />
                <Line type="monotone" dataKey="clinker" stroke="#f59e0b" strokeWidth={2} name="Clinker" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Stock Level Trends with Critical Levels */}
      <div className="chart-card animate-in full-width" style={{ animationDelay: '600ms' }}>
        <div className="chart-header">
          <div>
            <h3 className="chart-title">Stock Level Trends vs Minimum Levels</h3>
            <p className="chart-subtitle">Current stock monitoring with critical level indicators</p>
          </div>
          <div className="status-legend">
            <span className="status-item safe">🟢 Safe (&gt;120%)</span>
            <span className="status-item warning">🟡 Warning (100-120%)</span>
            <span className="status-item critical">🔴 Critical (&lt;100%)</span>
          </div>
        </div>
        
        <div className="chart-container-large">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={stockLevelTrends} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
              <XAxis dataKey="day" stroke="#64748b" style={{ fontSize: '0.875rem' }} />
              <YAxis stroke="#64748b" style={{ fontSize: '0.875rem' }} />
              <Tooltip content={<CustomTooltip />} />
              <Legend wrapperStyle={{ paddingTop: '20px' }} iconType="line" />
              
              {/* Reference lines for minimum levels */}
              <ReferenceLine y={10000} stroke="#00f5ff" strokeDasharray="3 3" strokeOpacity={0.3} label={{ value: 'Limestone Min', position: 'right', fill: '#00f5ff', fontSize: 10 }} />
              <ReferenceLine y={6000} stroke="#ff00ea" strokeDasharray="3 3" strokeOpacity={0.3} label={{ value: 'Clay Min', position: 'right', fill: '#ff00ea', fontSize: 10 }} />
              
              <Line type="monotone" dataKey="limestone" stroke="#00f5ff" strokeWidth={2} name="Limestone" dot={{ r: 4 }} />
              <Line type="monotone" dataKey="clay" stroke="#ff00ea" strokeWidth={2} name="Clay" dot={{ r: 4 }} />
              <Line type="monotone" dataKey="silica" stroke="#ffaa00" strokeWidth={2} name="Silica" dot={{ r: 4 }} />
              <Line type="monotone" dataKey="ironOre" stroke="#ff3366" strokeWidth={2} name="Iron Ore" dot={{ r: 4 }} />
              <Line type="monotone" dataKey="gypsum" stroke="#00ff88" strokeWidth={2} name="Gypsum" dot={{ r: 4 }} />
              <Line type="monotone" dataKey="coal" stroke="#8b5cf6" strokeWidth={2} name="Coal" dot={{ r: 4 }} />
              <Line type="monotone" dataKey="rawMix" stroke="#06b6d4" strokeWidth={2} name="Raw Mix" dot={{ r: 4 }} />
              <Line type="monotone" dataKey="clinker" stroke="#f59e0b" strokeWidth={2} name="Clinker" dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Status Table */}
      <div className="status-table-card animate-in" style={{ animationDelay: '700ms' }}>
        <div className="table-header">
          <div>
            <h3 className="table-title">Current Stock Status Summary</h3>
            <p className="table-subtitle">Real-time stock levels vs minimum requirements</p>
          </div>
        </div>
        
        <div className="table-container">
          <table className="status-table">
            <thead>
              <tr>
                <th>Material</th>
                <th>Current Stock</th>
                <th>Min Level</th>
                <th>Difference</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {rawMaterialsStock.map((material) => {
                const diff = material.stock - material.minLevel;
                const percentage = ((material.stock / material.minLevel) * 100).toFixed(0);
                let status, statusColor, statusIcon;
                
                if (percentage >= 120) {
                  status = 'Safe';
                  statusColor = 'safe';
                  statusIcon = '🟢';
                } else if (percentage >= 100) {
                  status = 'Warning';
                  statusColor = 'warning';
                  statusIcon = '🟡';
                } else {
                  status = 'Critical';
                  statusColor = 'critical';
                  statusIcon = '🔴';
                }
                
                return (
                  <tr key={material.id} className="status-row">
                    <td>
                      <div className="material-name">{material.name}</div>
                    </td>
                    <td>
                      <div className="stock-value mono">{material.stock.toLocaleString()} MT</div>
                    </td>
                    <td>
                      <div className="min-value mono">{material.minLevel.toLocaleString()} MT</div>
                    </td>
                    <td>
                      <div className={`diff-value mono ${diff >= 0 ? 'positive' : 'negative'}`}>
                        {diff >= 0 ? '+' : ''}{diff.toLocaleString()} MT
                      </div>
                    </td>
                    <td>
                      <div className={`status-badge ${statusColor}`}>
                        <span>{statusIcon}</span>
                        <span>{status}</span>
                        <span className="status-percent">({percentage}%)</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RawMaterials;