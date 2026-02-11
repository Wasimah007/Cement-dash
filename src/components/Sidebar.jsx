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
  Cpu,
  Zap,
  Thermometer,
  Activity,
  Clipboard,
  Truck
} from 'lucide-react';
import './Sidebar.css';

const menuItems = [
  { icon: LayoutDashboard, label: 'Cement Plant Dashboard', active: true },
  { icon: BarChart3, label: 'Analytics', active: false },
  { icon: Users, label: 'Suppliers', active: false },
  { icon: ShoppingCart, label: 'Raw Materials', active: false },
  { icon: Package, label: 'Raw Mill', active: false },
  { icon: FileText, label: 'Preheater/Pre calciner', active: false },
  { icon: Cpu, label: 'Cement Mill', active: false },
  { icon: Zap, label: 'Coal Mill', active: false },
  { icon: Thermometer, label: 'Kiln', active: false },
  { icon: Activity, label: 'Clinker Cooling', active: false },
  { icon: Clipboard, label: 'Q & C', active: false },
  { icon: Truck, label: 'Packing and Dispatch', active: false },
];

const bottomItems = [
  { icon: Settings, label: 'Settings' },
  { icon: HelpCircle, label: 'Help' },
];

const Sidebar = () => {
  return (
    <aside className="sidebar animate-in-left">
      <nav className="sidebar-nav">
        {/* Scrollable main menu section */}
        <div className="sidebar-section scrollable">
          {menuItems.map((item, index) => (
            <button 
              key={index}
              className={`sidebar-item ${item.active ? 'active' : ''}`}
            >
              <item.icon size={20} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
        
        {/* Bottom fixed section */}
        <div className="sidebar-section sidebar-bottom">
          {bottomItems.map((item, index) => (
            <button key={index} className="sidebar-item">
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
