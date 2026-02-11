import React from 'react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine } from 'recharts';
import './ChartCard.css';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    // Helper function to check if value is out of range
    const isOutOfRange = (value, min, max) => value < min || value > max;
    
    return (
      <div className="custom-tooltip">
        <p className="tooltip-label">{label}</p>
        {payload.map((entry, index) => {
          let statusIndicator = '';
          let color = entry.color;
          
          // Check ranges
          if (entry.dataKey === 'SM') {
            if (isOutOfRange(entry.value, 2.2, 2.6)) {
              statusIndicator = ' ⚠️';
              color = '#ff3366';
            }
          } else if (entry.dataKey === 'AM') {
            if (isOutOfRange(entry.value, 1.4, 1.8)) {
              statusIndicator = ' ⚠️';
              color = '#ff3366';
            }
          } else if (entry.dataKey === 'LSF') {
            if (isOutOfRange(entry.value, 0.88, 0.96)) {
              statusIndicator = ' ⚠️';
              color = '#ff3366';
            }
          }
          
          return (
            <p key={index} style={{ color: color }} className="tooltip-value">
              {entry.name}: {entry.value.toFixed(2)}{statusIndicator}
            </p>
          );
        })}
      </div>
    );
  }
  return null;
};

const QCChart = ({ data }) => {
  // Helper function to determine stroke color based on value
  const getStrokeColor = (dataKey) => {
    const colors = {
      SM: '#00f5ff',
      AM: '#ff00ea',
      LSF: '#00ff88'
    };
    return colors[dataKey] || '#ffffff';
  };

  return (
    <div className="chart-card animate-in">
      <div className="chart-header">
        <div>
          <h3 className="chart-title">Q & C Overview</h3>
          <p className="chart-subtitle">Daily Q & C overview for SM AM And LSF</p>
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
          <div>SM: 2.2-2.6 | AM: 1.4-1.8 | LSF: 0.88-0.96</div>
        </div>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="smGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00f5ff" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00f5ff" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="amGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ff00ea" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#ff00ea" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="lsfGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#00ff88" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#00ff88" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(148, 163, 184, 0.1)" />
            <XAxis 
              dataKey="hour" 
              stroke="#64748b"
              style={{ fontSize: '0.75rem' }}
              interval={2}
            />
            <YAxis 
              stroke="#64748b"
              style={{ fontSize: '0.875rem' }}
              domain={[0, 3]}
              ticks={[0, 0.5, 1.0, 1.5, 2.0, 2.5, 3.0]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="circle"
            />
            
            {/* Reference lines for acceptable ranges */}
            <ReferenceLine y={2.6} stroke="#ffaa00" strokeDasharray="3 3" strokeOpacity={0.3} />
            <ReferenceLine y={2.2} stroke="#ffaa00" strokeDasharray="3 3" strokeOpacity={0.3} />
            <ReferenceLine y={1.8} stroke="#ff00ea" strokeDasharray="3 3" strokeOpacity={0.3} />
            <ReferenceLine y={1.4} stroke="#ff00ea" strokeDasharray="3 3" strokeOpacity={0.3} />
            <ReferenceLine y={0.96} stroke="#00ff88" strokeDasharray="3 3" strokeOpacity={0.3} />
            <ReferenceLine y={0.88} stroke="#00ff88" strokeDasharray="3 3" strokeOpacity={0.3} />
            
            <Area 
              type="monotone" 
              dataKey="SM" 
              stroke="#00f5ff" 
              strokeWidth={2}
              fill="url(#smGradient)" 
              name="Silica Modulus"
            />
            <Area 
              type="monotone" 
              dataKey="AM" 
              stroke="#ff00ea" 
              strokeWidth={2}
              fill="url(#amGradient)" 
              name="Alumina Modulus"
            />
            <Area 
              type="monotone" 
              dataKey="LSF" 
              stroke="#00ff88" 
              strokeWidth={2}
              fill="url(#lsfGradient)" 
              name="LSF"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default QCChart;