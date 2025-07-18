// components/Home.jsx
import React from 'react';
import Navbar from '../component/Navbar';
import { Link } from 'react-router-dom';
import { useUserManagement } from '../hooks/use-user';

const Home = () => {
  const { 
    users, 
    isLoading, 
    isError, 
    error, 
    deleteUser, 
    isDeleting 
  } = useUserManagement();

  if (isError) {
    return (
      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong!</h2>
          <p className="text-gray-600">{error?.message || 'Failed to load users'}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="lg:ml-64 px-4 sm:px-6 lg:px-8 py-6 lg:py-8">
        {/* Header Section */}
        <div className="mb-8 pt-16 lg:pt-0 flex">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3">
              User Management
            </h1>
            <p className="text-base sm:text-lg text-gray-600 font-light">
              Manage your users with ease
            </p>
          </div>
        </div>

        {/* Add User Button */}
        <div className="mb-8 text-center lg:text-left">
          <Link 
            to="/add" 
            className="inline-flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg border border-gray-200"
          >
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600">+</span>
            </div>
            <span>Add New User</span>
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Users</p>
                <p className="text-2xl font-light text-gray-800">{users.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">👥</span>
              </div>
            </div>
          </div>

          <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-white/20 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Active Users</p>
                <p className="text-2xl font-light text-gray-800">{users.length}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Card View */}
        <div className="lg:hidden">
          {isLoading ? (
            <div className="flex items-center justify-center p-12">
              <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-200 border-t-blue-600"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {users.length > 0 ? (
                users.map((user, index) => (
                  <div 
                    key={user._id} 
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-white/30 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center text-white font-medium">
                          {user.fname?.charAt(0)?.toUpperCase() || 'U'}
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">
                            {user.fname} {user.lname}
                          </p>
                          <p className="text-sm text-gray-600">
                            {user.email}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Link 
                          to={`/edit/${user._id}`}
                          className="w-9 h-9  bg-blue-100 hover:bg-blue-300 rounded-full flex items-center justify-center text-blue-600 transition-colors duration-200"
                          title="Edit User"
                        >
                         <b>E</b>
                        </Link>
                        <Link 
                         to={`/user/${user._id}`}
                          className="w-9 h-9 bg-green-100 hover:bg-green-300 rounded-full flex items-center justify-center text-green-600 transition-colors duration-200"
                          title="View User"
                        >
                         👤
                        </Link>
                        <button 
                          className={`w-9 h-9 bg-red-100 hover:bg-red-300 rounded-full flex items-center justify-center text-red-600 transition-colors duration-200 ${
                            isDeleting ? 'opacity-50 cursor-not-allowed' : ''
                          }`}
                          title="Delete User"
                          onClick={() => deleteUser(user._id)}
                          disabled={isDeleting}
                        >
                          {isDeleting ? (
                            <div className="animate-spin rounded-full h-4 w-4 border-2 border-red-600 border-t-transparent"></div>
                          ) : (
                             '❌'
                          )}
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-12 text-center border border-white/30">
                  <div className="text-6xl mb-4">👥</div>
                  <h3 className="text-xl font-medium text-gray-800 mb-2">No users yet</h3>
                  <p className="text-gray-600">Start by adding your first user</p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Desktop Table View */}
        <div className="hidden lg:block">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 shadow-sm overflow-hidden">
            {isLoading ? (
              <div className="flex items-center justify-center p-12">
                <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-200 border-t-blue-600"></div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-300">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">#</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">User</th>
                      <th className="px-6 py-4 text-left text-sm font-medium text-gray-700">Email</th>
                      <th className="px-6 py-4 text-center text-sm font-medium text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {users.length > 0 ? (
                      users.map((user, index) => (
                        <tr key={user._id} className="hover:bg-white/50 transition-colors duration-200">
                          <td className="px-6 py-4 text-sm text-gray-600">{index + 1}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <div className="w-10 h-10 bg-gray-400 rounded-full flex items-center justify-center text-white font-medium mr-4">
                                {user.fname?.charAt(0)?.toUpperCase() || 'U'}
                              </div>
                              <div className="font-medium text-gray-800">
                                {user.fname} {user.lname}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-600">{user.email}</td>
                          <td className="px-6 py-4 text-center">
                            <div className="flex justify-center space-x-2">
                              <Link 
                                to={`/edit/${user._id}`}
                                className="w-8 h-8 bg-blue-100 hover:bg-blue-300 rounded-full flex items-center justify-center text-blue-600 transition-colors duration-200"
                                title="Edit User"
                              >
                              <b>E</b>
                              </Link>
                              <Link 
                               to={`/user/${user._id}`}
                                className="w-8 h-8 bg-green-100 hover:bg-green-300 rounded-full flex items-center justify-center text-green-600 transition-colors duration-200"
                                title="View User"
                              >
                               👤
                              </Link>
                              <button 
                                className={`w-8 h-8 bg-red-100 hover:bg-red-300 rounded-full flex items-center justify-center text-red-600 transition-colors duration-200 ${
                                  isDeleting ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                                title="Delete User"
                                onClick={() => deleteUser(user._id)}
                                disabled={isDeleting}
                              >
                                {isDeleting ? (
                                  <div className="animate-spin rounded-full h-4 w-4 border-2 border-red-600 border-t-transparent"></div>
                                ) : (
                                 '❌'
                                )}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="4" className="px-6 py-16 text-center">
                          <div className="flex flex-col items-center">
                            <div className="text-6xl mb-4">👥</div>
                            <h3 className="text-xl font-medium text-gray-800 mb-2">No users yet</h3>
                            <p className="text-gray-600">Start by adding your first user</p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
