import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-400 text-white shadow-lg hover:bg-cyan-700 transition-colors"
        onClick={toggleMobileMenu}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          className="lg:hidden fixed inset-0 bg-transparent bg-opacity-80 z-40"
          onClick={toggleMobileMenu}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        h-screen w-64 bg-gray-200 shadow-xl flex flex-col z-50 transition-transform duration-300 ease-in-out
        lg:fixed lg:left-0 lg:top-0 lg:translate-x-0
        fixed left-0 top-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo */}
        <div className="flex items-center justify-center py-8 border-b border-gray-200 flex-shrink-0">
          <span className="text-3xl font-extrabold text-black">Smart</span>
          <span className="text-3xl font-extrabold text-cyan-700 ml-0.5">Result</span>
        </div>
        
        {/* Navigation Links - Scrollable */}
        <nav className="flex flex-col gap-6 mt-10 px-8 flex-1 overflow-y-hidden">
          <Link to="/home" className="flex items-center gap-3 text-lg text-black hover:bg-gray-400 hover:text-white px-4 py-2 rounded transition font-medium">
            <span>👥</span> Users
          </Link>
          <Link to="/" className="flex items-center gap-3 text-lg text-black hover:bg-gray-400 hover:text-white px-4 py-2 rounded transition font-medium">
            <span>🏠</span> Dashboard
          </Link>
          
          <a href="#students" className="flex items-center gap-3 text-lg text-black hover:bg-gray-400 hover:text-white px-4 py-2 rounded transition font-medium">
            <span>🎓</span> Students
          </a>
          <a href="#results" className="flex items-center gap-3 text-lg text-black hover:bg-gray-400 hover:text-white px-4 py-2 rounded transition font-medium">
            <span>📊</span> Results
          </a>
          <a href="#exams" className="flex items-center gap-3 text-lg text-black hover:bg-gray-400 hover:text-white px-4 py-2 rounded transition font-medium">
            <span>📝</span> Exams
          </a>
          <a href="#subjects" className="flex items-center gap-3 text-lg text-black hover:bg-gray-400 hover:text-white px-4 py-2 rounded transition font-medium">
            <span>📚</span> Subjects
          </a>
          <a href="#classes" className="flex items-center gap-3 text-lg text-black hover:bg-gray-400 hover:text-white px-4 py-2 rounded transition font-medium">
            <span>🏫</span> Classes
          </a>
          <a href="#teachers" className="flex items-center gap-3 text-lg text-black hover:bg-gray-400 hover:text-white px-4 py-2 rounded transition font-medium">
            <span>👨‍🏫</span> Teachers
          </a>
          

        </nav>
        
        {/* Footer */}
        <div className="mt-auto px-8 py-6 border-t border-gray-200 text-sm text-gray-700 flex-shrink-0">
          &copy; 2025 SmartResult. All rights reserved.
        </div>
      </aside>
    </>
  );
};

export default Navbar;