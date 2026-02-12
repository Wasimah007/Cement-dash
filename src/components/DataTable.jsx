import React, { useState } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';
import DistributorDetail from './DistributorDetail';
import { distributorDispatchData } from '../data/sampleData';
import './DataTable.css';

const DataTable = ({ data }) => {
  const [selectedDistributor, setSelectedDistributor] = useState(null);

  const handleDistributorClick = (distributor) => {
    setSelectedDistributor(distributor);
  };

  const handleCloseModal = () => {
    setSelectedDistributor(null);
  };

  return (
    <>
      <div className="data-table-card animate-in" style={{ animationDelay: '600ms' }}>
        <div className="table-header">
          <div>
            <h3 className="table-title">Top Distributors</h3>
            <p className="table-subtitle">Best performing Distributors this month (Click name for details)</p>
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
              {data.map((distributor, index) => (
                <tr key={distributor.id} className="table-row">
                  <td>
                    <div className="rank-badge">{index + 1}</div>
                  </td>
                  <td>
                    <div 
                      className="distributor-name clickable"
                      onClick={() => handleDistributorClick(distributor)}
                    >
                      {distributor.name}
                    </div>
                  </td>
                  <td>
                    <div className="sales-count mono">{distributor.sales.toLocaleString()}</div>
                  </td>
                  <td>
                    <div className="revenue-amount mono">${distributor.revenue.toLocaleString()}</div>
                  </td>
                  <td>
                    <div className={`trend-badge ${distributor.status}`}>
                      {distributor.status === 'up' ? (
                        <TrendingUp size={14} />
                      ) : (
                        <TrendingDown size={14} />
                      )}
                      <span>{distributor.trend}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {selectedDistributor && (
        <DistributorDetail
          distributor={selectedDistributor}
          dispatchData={distributorDispatchData[selectedDistributor.id]}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default DataTable;