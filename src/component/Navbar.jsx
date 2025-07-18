import React from 'react';

const Navbar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-200 shadow-xl flex flex-col">

      {/* Logo */}
      <div className="flex items-center justify-center py-8 border-b border-gray-200">
        <span className="text-3xl font-extrabold text-black">Smart</span>
        <span className="text-3xl font-extrabold text-cyan-700 ml-0.5">Result</span>
      </div>
      {/* Navigation Links */}
      <nav className="flex flex-col gap-6 mt-10 px-8">
        <a href="#dashboard" className="flex items-center gap-3 text-lg text-black hover:bg-cyan-600 hover:text-white px-4 py-2 rounded transition font-medium">
          <span>🏠</span> Dashboard
        </a>
        <a href="#about" className="flex items-center gap-3 text-lg text-black hover:bg-cyan-600 hover:text-white px-4 py-2 rounded transition font-medium">
          <span>ℹ️</span> About
        </a>
        <a href="#contact" className="flex items-center gap-3 text-lg text-black hover:bg-cyan-600 hover:text-white px-4 py-2 rounded transition font-medium">
          <span>📞</span> Contact
        </a>
        <a href="#profile" className="flex items-center gap-3 text-lg text-black hover:bg-cyan-600 hover:text-white px-4 py-2 rounded transition font-medium">
          <span>👤</span> Profile
        </a>
        <a href="#settings" className="flex items-center gap-3 text-lg text-black hover:bg-cyan-600 hover:text-white px-4 py-2 rounded transition font-medium">
          <span>⚙️</span> Settings
        </a>
      </nav>
      {/* Footer */}
      <div className="mt-auto px-8 py-6 border-t border-gray-200 text-sm text-gray-700">
        &copy; 2025 SmartResult. All rights reserved.
      </div>
    </aside>
  );
};

export default Navbar;