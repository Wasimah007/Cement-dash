import React from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Users, 
  ShoppingCart, 
  Package, 
  FileText,
  Settings,
  HelpCircle,
  Boxes
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = ({ currentPage, onPageChange }) => {
  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', page: 'dashboard' },
    { icon: Boxes, label: 'Raw Materials', page: 'raw-materials' },
    { icon: BarChart3, label: 'Analytics', page: 'analytics' },
    { icon: Users, label: 'Customers', page: 'customers' },
    { icon: ShoppingCart, label: 'Orders', page: 'orders' },
    { icon: Package, label: 'Products', page: 'products' },
    { icon: FileText, label: 'Reports', page: 'reports' },
  ];

  const bottomItems = [
    { icon: Settings, label: 'Settings', page: 'settings' },
    { icon: HelpCircle, label: 'Help', page: 'help' },
  ];

  return (
    <aside className="sidebar animate-in-left">
      <nav className="sidebar-nav">
        <div className="sidebar-section">
          {menuItems.map((item, index) => (
            <button 
              key={index}
              className={`sidebar-item ${currentPage === item.page ? 'active' : ''}`}
              onClick={() => onPageChange(item.page)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        
        <div className="sidebar-section sidebar-bottom">
          {bottomItems.map((item, index) => (
            <button 
              key={index} 
              className="sidebar-item"
              onClick={() => onPageChange(item.page)}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;