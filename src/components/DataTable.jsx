import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './DataTable.css';

const DataTable = ({ data }) => {
  return (
    <div className="data-table-card animate-in" style={{ animationDelay: '600ms' }}>
      <div className="table-header">
        <div>
          <h3 className="table-title">Top Distributors</h3>
          <p className="table-subtitle">Best performing Distributors this month</p>
        </div>
      </div>
      
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Distributor</th>
              <th>Sales</th>
              <th>Revenue</th>
              <th>Trend</th>
            </tr>
          </thead>
          <tbody>
            {data.map((product, index) => (
              <tr key={product.id} className="table-row">
                <td>
                  <div className="rank-badge">{index + 1}</div>
                </td>
                <td>
                  <div className="distributor-name">{product.name}</div>
                </td>
                <td>
                  <div className="sales-count mono">{product.sales.toLocaleString()}</div>
                </td>
                <td>
                  <div className="revenue-amount mono">${product.revenue.toLocaleString()}</div>
                </td>
                <td>
                  <div className={`trend-badge ${product.status}`}>
                    {product.status === 'up' ? (
                      <TrendingUp size={14} />
                    ) : (
                      <TrendingDown size={14} />
                    )}
                    <span>{product.trend}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
