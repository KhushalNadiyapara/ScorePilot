import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleStart = () => {
    navigate('/home');
  };

  const handleExplore = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-teal-50 to-teal-100 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 mt-3 lg:px-8">
        <div className="max-w-7xl w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-12">
            
            {/* Left Side - Content */}
            <div className={`flex-1 text-center lg:text-left transform transition-all duration-1000 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="mb-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-800 mb-4 leading-tight">
                  Welcome to
                  <span className="block bg-teal-600 bg-clip-text text-transparent font-bold">
                    SmartResult
                  </span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                  Discover powerful tools and features designed to enhance your productivity and streamline your workflow.
                </p>
              </div>

              {/* Feature Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">👥</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">User Management</h3>
                  <p className="text-sm text-gray-600">Manage users efficiently</p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">📊</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Analytics</h3>
                  <p className="text-sm text-gray-600">Track performance metrics</p>
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 sm:col-span-2 lg:col-span-1">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-1">Fast & Secure</h3>
                  <p className="text-sm text-gray-600">Lightning-fast performance</p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={handleStart}
                  className="bg-teal-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Get Started</span>
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
                
              </div>
            </div>

            {/* Right Side - Image/Illustration */}
            <div className={`flex-1 flex items-center justify-center lg:justify-end transform transition-all duration-1000 delay-300 ${loaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-800 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/024/346/446/small_2x/3d-happy-cartoon-boy-on-transparent-background-generative-ai-png.png"
                  alt="Dashboard Illustration"
                  className="relative z-10 w-112 h-112 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
