import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarVibrant = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: '/home', icon: '👥', label: 'Users', color: 'gray' },
    { path: '/', icon: '🏠', label: 'Dashboard', color: 'gray' },
    { path: '/students', icon: '🎓', label: 'Students', color: 'gray' },

    { path: '/teachers', icon: '👨‍🏫', label: 'Teachers', color: 'gray' },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-6 left-6 z-50 p-3 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-black shadow-xl hover:shadow-2xl hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 hover:scale-105"
        onClick={toggleMobileMenu}
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isMobileMenuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        h-screen w-69 bg-white  flex flex-col z-50 transition-all duration-300 ease-out border-r border-gray-200
        lg:fixed lg:left-0 lg:top-0 lg:translate-x-0
        fixed left-0 top-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo */}
        <div className="flex items-center justify-center py-8 border-b border-gray-200 flex-shrink-0 bg-gray-200">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">Smart</span>
              <span className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent ml-0.5">Result</span>
            </div>
            <div className="w-16 h-1 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full mx-auto"></div>
          </div>
        </div>
        
        {/* Navigation Links */}
        <nav className="flex flex-col gap-2 mt-8 px-6 flex-1 overflow-y-auto scrollbar-hide">
          {menuItems.map((item, index) => (
            <Link 
              key={item.path}
              to={item.path} 
              className={`
                flex items-center gap-4 px-4 py-3 rounded-xl font-medium transition-all duration-200 group relative
                ${isActive(item.path) 
                  ? `bg-gradient-to-r from-${item.color}-500 to-${item.color}-600 text-black shadow-lg shadow-${item.color}-500/20 transform scale-105` 
                  : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900 hover:transform hover:scale-105'
                }
              `}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className={`
                w-9 h-9 rounded-lg flex items-center justify-center text-lg transition-all duration-200 flex-shrink-0
                ${isActive(item.path) 
                  ? 'bg-white/20 backdrop-blur-sm shadow-lg' 
                  : `bg-${item.color}-100 group-hover:bg-${item.color}-200`
                }
              `}>
                <span>{item.icon}</span>
              </div>
              <span className="text-sm font-medium">{item.label}</span>
              {isActive(item.path) && (
                <div className="ml-auto w-2 h-2 bg-white rounded-full shadow-lg animate-pulse"></div>
              )}
            </Link>
          ))}
        </nav>

        {/* Quick Actions */}
        <div className="px-6 py-4">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-4 border border-emerald-200">
            <h4 className="text-sm font-medium text-gray-800 mb-3">Quick Actions</h4>
            <div className="flex gap-2">
              <Link to="/add" className="flex-1 text-xs bg-emerald-500 hover:bg-emerald-600 text-black py-2 rounded-lg transition-colors duration-200">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Add User
              </Link>
              <button className="flex-1 text-xs bg-teal-500 hover:bg-teal-600 text-black py-2 rounded-lg transition-colors duration-200">
                Reports
              </button>
            </div>
          </div>
        </div>

      
        
        {/* Footer */}
        <div className="px-6 py-4 text-center bg-gray-50">
          <p className="text-xs text-gray-500 font-light">
            &copy; 2025 SmartResult. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
};

export default NavbarVibrant;
