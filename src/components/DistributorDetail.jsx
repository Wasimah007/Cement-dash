import React from 'react';
import { X, Truck, FileText, Calendar, User } from 'lucide-react';
import './DistributorDetail.css';

const DistributorDetail = ({ distributor, dispatchData, onClose }) => {
  if (!distributor || !dispatchData) return null;

  // Calculate totals
  const totalTrucks = dispatchData.reduce((sum, record) => sum + record.trucks, 0);
  const totalQuantity = dispatchData.reduce((sum, record) => sum + record.quantity, 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <h2 className="modal-title">{distributor.name}</h2>
            <p className="modal-subtitle">Cement Dispatch Details - Last 10 Days</p>
          </div>
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
        </div>

        <div className="modal-stats">
          <div className="stat-card">
            <Truck size={24} />
            <div>
              <div className="stat-value">{totalTrucks}</div>
              <div className="stat-label">Total Trucks</div>
            </div>
          </div>
          <div className="stat-card">
            <FileText size={24} />
            <div>
              <div className="stat-value">{dispatchData.length}</div>
              <div className="stat-label">Total Dispatches</div>
            </div>
          </div>
          <div className="stat-card">
            <Calendar size={24} />
            <div>
              <div className="stat-value">{totalQuantity} MT</div>
              <div className="stat-label">Total Quantity</div>
            </div>
          </div>
        </div>

        <div className="dispatch-table-container">
          <table className="dispatch-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Challan No.</th>
                <th>Vehicle No.</th>
                <th>Trucks</th>
                <th>Quantity (MT)</th>
                <th>Driver</th>
              </tr>
            </thead>
            <tbody>
              {dispatchData.map((record, index) => (
                <tr key={index} className="dispatch-row">
                  <td>
                    <div className="date-cell">
                      <Calendar size={14} />
                      {new Date(record.date).toLocaleDateString('en-IN', { 
                        day: '2-digit', 
                        month: 'short' 
                      })}
                    </div>
                  </td>
                  <td>
                    <div className="challan-cell mono">{record.challanNo}</div>
                  </td>
                  <td>
                    <div className="vehicle-cell mono">{record.vehicleNo}</div>
                  </td>
                  <td>
                    <div className="trucks-cell">
                      <Truck size={14} />
                      {record.trucks}
                    </div>
                  </td>
                  <td>
                    <div className="quantity-cell mono">{record.quantity} MT</div>
                  </td>
                  <td>
                    <div className="driver-cell">
                      <User size={14} />
                      {record.driver}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DistributorDetail;