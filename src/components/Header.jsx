import React from 'react';
import { LayoutDashboard, Bell, Settings, Search, User } from 'lucide-react';
import './Header.css';

const Header = () => {
  return (
    <header className="header animate-in-left">
      <div className="header-left">
        <div className="logo">
          <LayoutDashboard size={28} />
          <span className="logo-text gradient-text">Cement Analytics</span>
        </div>
      </div>
      
      <div className="header-center">
        <div className="search-bar">
          <Search size={18} />
          <input 
            type="text" 
            placeholder="Search metrics, reports, customers..." 
            className="search-input"
          />
          <kbd className="search-kbd">⌘K</kbd>
        </div>
      </div>
      
      <div className="header-right">
        <button className="header-icon-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        <button className="header-icon-btn">
          <Settings size={20} />
        </button>
        <button className="user-avatar">
          <User size={20} />
        </button>
      </div>
    </header>
  );
};

export default Header;
