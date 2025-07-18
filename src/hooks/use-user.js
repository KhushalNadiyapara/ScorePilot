// hooks/useUsers.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getData, deleteData, getSingleData } from '../services/api';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';

export const useUsers = () => {
  return useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await getData();
      return response.data;
    }
  });
};


export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (userId) => {
      const confirmed = window.confirm('Are you sure you want to delete this user?');
      if (!confirmed) {
        throw new Error('User cancelled deletion');
       
      }

      const response = await deleteData(userId);
      return { userId, response };
    },
    onSuccess: (data) => {
      queryClient.setQueryData(['users'], (oldUsers) => {
        return oldUsers ? oldUsers.filter((user) => user._id !== data.userId) : [];
      });

      toast.success(data.response.data.msg || 'User deleted successfully', {
        position: 'top-center'
      });
       Swal.fire("Successfully deleted User");
    },
    onError: (error) => {
      if (error.message !== 'User cancelled deletion') {
        console.error('Delete error:', error);
        toast.error('Failed to delete user', { position: 'top-center' });
        Swal.fire("Fail to delete User");
      }
    },
  });
};

export const useSingleUser = (userId) => {
  return useQuery({
    queryKey: ['user', userId],
    queryFn: async () => {
      const response = await getSingleData(userId);
      return response.data;

    },
    enabled: !!userId, // Only run query if userId exists

  });
};

export const useUserManagement = () => {
  const usersQuery = useUsers();
  const deleteUserMutation = useDeleteUser();

  return {
    users: usersQuery.data || [],
    isLoading: usersQuery.isLoading,
    isError: usersQuery.isError,
    error: usersQuery.error,
    refetch: usersQuery.refetch,

    deleteUser: deleteUserMutation.mutate,
    isDeleting: deleteUserMutation.isPending,
    deleteError: deleteUserMutation.error,
  };
};