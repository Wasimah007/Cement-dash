import React, { useState } from 'react';
import KPICard from '../components/KPICard';
import RevenueChart from '../components/RevenueChart';
import CategoryChart from '../components/CategoryChart';
import PerformanceChart from '../components/PerformanceChart';
import DataTable from '../components/DataTable';
import { 
  qcData,
  regionData, 
  clinkerProductionData, 
  topDistributors, 
  kpiMetrics 
} from '../data/sampleData';
import { Calendar, Download, Filter } from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  const [dateRange, setDateRange] = useState('Last 30 days');

  return (
    <div className="dashboard">
      <div className="dashboard-header animate-in">
        <div>
          <h1>Dashboard Overview</h1>
          <p className="dashboard-subtitle">
            Welcome back! Here's what's happening with your business today.
          </p>
        </div>
        
        <div className="dashboard-actions">
          <button className="action-btn secondary">
            <Filter size={18} />
            <span>Filter</span>
          </button>
          <button className="action-btn secondary">
            <Calendar size={18} />
            <span>{dateRange}</span>
          </button>
          <button className="action-btn primary">
            <Download size={18} />
            <span>Export</span>
          </button>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="kpi-grid">
        {kpiMetrics.map((metric, index) => (
          <KPICard key={metric.id} metric={metric} index={index} />
        ))}
      </div>

      {/* Main Charts Grid */}
      <div className="charts-grid">
        <div className="chart-full">
          <RevenueChart data={qcData} />
        </div>
        
        <div className="chart-half">
          <CategoryChart data={regionData} />
        </div>
        
        <div className="chart-half">
          <PerformanceChart data={clinkerProductionData} />
        </div>
      </div>

      {/* Data Table */}
      <div className="table-section">
        <DataTable data={topDistributors} />
      </div>
    </div>
  );
};

export default Dashboard;
