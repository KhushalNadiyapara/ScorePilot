import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/home');
  };

  return (
    <div className='flex items-center justify-center h-screen bg-gradient-to-br from-cyan-400 via-green-200 to-green-300 text-black'>
      <div className='flex flex-row items-center justify-center w-full max-w-4xl bg-opacity-30 rounded-2xl p-10'>
        {/* Left Side - Image */}
        <div className='flex-1 flex items-center justify-center'>
          <img
            src='https://static.vecteezy.com/system/resources/thumbnails/024/346/446/small_2x/3d-happy-cartoon-boy-on-transparent-background-generative-ai-png.png'
            alt='Dashboard Illustration'
            className='w-92 h-92 object-cover mr-9 rounded-xl animate-pulse'
          />
        </div>
        {/* Right Side - Text and Button */}
        <div className='flex-1 flex flex-col items-start justify-center pl-10 ' >
          <h1 className='text-5xl font-bold mb-8 animate-bounce'>
            Welcome to the Dashboard
          </h1>
          <p className='text-xl mb-10 text-left max-w-md animate-fade-in '>
            Get ready to explore our awesome features and enjoy the experience.
          </p>
          <button
            onClick={handleStart}
            className='bg-amber-400 text-black font-semibold px-6 py-3 rounded-xl shadow-lg hover:bg-black hover:text-white transition duration-300 ease-in-out'
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;