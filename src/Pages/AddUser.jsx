import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { userSchema, initialValues } from '../lib/Uservalidate';
import { addData } from '../services/api';
import Navbar from '../component/Navbar';

const Add = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch
  } = useForm({
    resolver: yupResolver(userSchema),
    defaultValues: initialValues,
    mode: 'onChange'
  });

  const onSubmit = async (data) => {
    try {
      const response = await addData(data);
      toast.success(response.data.msg, { position: "top-center" });
      reset();
      navigate("/home");
    } catch (error) {
      console.error('Error adding user:', error);
      toast.error(error.response?.data?.msg || 'Failed to add user', { 
        position: "top-center" 
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="lg:ml-64 px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8 pt-16 lg:pt-0">
            <div className="flex items-center gap-4 mb-4">
              <Link 
                to="/home" 
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-400 text-white transition-colors duration-200"
              >
                ◀️
              </Link>
              <h1 className="text-2xl lg:text-3xl font-bold text-gray-800">
                Add New User
              </h1>
            </div>
            <p className="text-gray-600 ml-14">
              Fill in the information below to create a new user account
            </p>
          </div>

          {/* Form */}
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6 lg:p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* First Name */}
              <div>
                <label 
                  htmlFor="fname" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  First Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="fname" 
                  placeholder='Enter first name'
                  {...register('fname')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200 ${
                    errors.fname 
                      ? 'border-red-500 bg-red-50 animate-pulse' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                />
                {errors.fname && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errors.fname.message}
                  </p>
                )}
              </div>

              {/* Last Name */}
              <div>
                <label 
                  htmlFor="lname" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  id="lname" 
                  placeholder='Enter last name'
                  {...register('lname')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200 ${
                    errors.lname 
                      ? 'border-red-500 bg-red-50 animate-pulse' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                />
                {errors.lname && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errors.lname.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder='Enter email address'
                  {...register('email')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200 ${
                    errors.email 
                      ? 'border-red-500 bg-red-50 animate-pulse' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <label 
                  htmlFor="password" 
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password <span className="text-red-500">*</span>
                </label>
                <input 
                  type="password" 
                  id="password" 
                  placeholder='Enter password (min 6 characters)'
                  {...register('password')}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-colors duration-200 ${
                    errors.password 
                      ? 'border-red-500 bg-red-50 animate-pulse' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                />
                {errors.password && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-medium text-white transition-all duration-200 transform hover:scale-105 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gray-500 hover:bg-black shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Adding User...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <i className="fa-solid fa-user-plus"></i>
                      Add User
                    </span>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
