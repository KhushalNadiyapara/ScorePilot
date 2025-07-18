// components/UserDetail.jsx
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSingleUser } from '../hooks/use-user';
import Navbar from '../component/Navbar';

const UserDetail = () => {
  const { id } = useParams();
  const { data: user, isLoading, isError, error } = useSingleUser(id);

  if (isError) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="lg:ml-64 px-4 py-8">
          <div className="max-w-4xl mx-auto pt-16 lg:pt-0">
            <div className="text-center">
              <div className="text-6xl mb-4">⚠️</div>
              <h2 className="text-2xl font-bold text-red-600 mb-4">Error Loading User</h2>
              <p className="text-gray-600 mb-6">{error?.message || 'Failed to load user details'}</p>
              <Link
                to="/home"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
              >
                <i className="fa-solid fa-arrow-left"></i>
                Back to Users
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="lg:ml-64 px-4 py-8">
        <div className="max-w-4xl mx-auto pt-16 lg:pt-0">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <Link
                to="/home"
                className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white text-gray-700 px-4 py-2 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
              >
                <i className="fa-solid fa-arrow-left"></i>
                <span>Back to Users</span>
              </Link>

              <div className="flex items-center gap-2">
                <Link
                  to={`/edit/${id}`}
                  className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors duration-200"
                >
                  <i className="fa-solid fa-pen"></i>
                  <span>Edit User</span>
                </Link>
              </div>
            </div>

            <h1 className="text-2xl lg:text-3xl font-light text-gray-800">
              User Details
            </h1>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="bg-gray-300 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg p-8">
              <div className="flex items-center justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-2 border-blue-200 border-t-blue-600"></div>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* User Profile Card */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl border border-white/30 shadow-lg overflow-hidden">
                <div className="bg-gray-500 px-8 py-6">
                  <div className="flex items-center gap-6">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white font-bold text-2xl">
                      {user?.fname?.charAt(0)?.toUpperCase() || 'U'}
                    </div>
                    <div>
                      <h2 className="text-2xl font-light text-white mb-1">
                        {user?.fname} {user?.lname}
                      </h2>
                      <p className="text-blue-100">
                        {user?.email}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 flex justify-center items-center">
                  <div className="grid grid-cols-1">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
                        <i className="fa-solid fa-user text-blue-500"></i>
                        Personal Information
                      </h3>

                      <div className="space-y-3">
                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-sm font-medium text-gray-600">First Name</span>
                          <span className="text-sm text-gray-800">{user?.fname || 'N/A'}</span>
                        </div>

                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-sm font-medium text-gray-600">Last Name</span>
                          <span className="text-sm text-gray-800">{user?.lname || 'N/A'}</span>
                        </div>

                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-sm font-medium text-gray-600">Email</span>
                          <span className="text-sm text-gray-800">{user?.email || 'N/A'}</span>
                        </div>

                        <div className="flex items-center justify-between py-2 border-b border-gray-100">
                          <span className="text-sm font-medium text-gray-600">User ID</span>
                          <span className="text-sm text-gray-800 font-mono">{user?._id || 'N/A'}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
