import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import { getSingleData, updateData } from '../services/api';
import Navbar from '../component/Navbar';
import * as yup from "yup";

// Validation Schema for Edit (without password)
const editUserSchema = yup.object().shape({
  fname: yup.string().required("First name is required"),
  lname: yup.string().required("Last name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
});

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setValue
  } = useForm({
    resolver: yupResolver(editUserSchema),
    defaultValues: {
      fname: "",
      lname: "",
      email: ""
    },
    mode: 'onChange'
  });

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await getSingleData(id);
        const userData = response.data;
        
        // Set form values
        setValue('fname', userData.fname || '');
        setValue('lname', userData.lname || '');
        setValue('email', userData.email || '');
        
      } catch (error) {
        console.error('Error fetching user:', error);
        toast.error('Failed to fetch user data', { position: "top-center" });
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      const response = await updateData(id, data);
      toast.success(response.data.msg || 'User updated successfully', { position: "top-center" });
      navigate("/home");
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error(error.response?.data?.msg || 'Failed to update user', { position: "top-center" });
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <div className="lg:ml-64 px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-8 pt-16 lg:pt-0">
            <div className="flex items-center gap-4 mb-4">
              <Link 
                to="/" 
                className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-300 backdrop-blur-sm hover:bg-white text-gray-700 transition-all duration-200 shadow-md hover:shadow-lg"
              >
               ◀️
              </Link>
              <h1 className="text-2xl lg:text-3xl font-light text-gray-800">
                Update User
              </h1>
            </div>
            <p className="text-gray-600 ml-14">
              Update user information below
            </p>
          </div>

          {/* Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/30 p-6 lg:p-8">
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
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                    errors.fname 
                      ? 'border-red-500 bg-red-50/50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                />
                {errors.fname && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
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
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                    errors.lname 
                      ? 'border-red-500 bg-red-50/50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                />
                {errors.lname && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
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
                  className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm ${
                    errors.email 
                      ? 'border-red-500 bg-red-50/50' 
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
                    <i className="fa-solid fa-circle-exclamation"></i>
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-xl font-medium text-white transition-all duration-200 transform hover:scale-105 ${
                    isSubmitting
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-gray-500 hover:bg-black shadow-lg hover:shadow-xl'
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      Updating User...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      <i className="fa-solid fa-user-pen"></i>
                      Update User
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

export default Edit;
