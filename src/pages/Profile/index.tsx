import { Component, createSignal, onMount } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import toast from 'solid-toast';
import { jwtDecode } from 'jwt-decode';
import Navbar from '../../components/Navbar/Navbar';
import "../../styles/transitions.css";

interface UserInfo {
  email: string;
  name: string;
  createdAt: string;
}

const Profile: Component = () => {
  const [userInfo, setUserInfo] = createSignal<UserInfo | null>(null);
  const [isDeleting, setIsDeleting] = createSignal(false);
  const [isPageVisible, setIsPageVisible] = createSignal(false);
  const navigate = useNavigate();

  onMount(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      const decoded = jwtDecode(token) as any;
      setUserInfo({
        email: decoded.email,
        name: decoded.name || 'User',
        createdAt: new Date(decoded.iat * 1000).toLocaleDateString(),
      });
      
      // Trigger entrance animation
      requestAnimationFrame(() => {
        setIsPageVisible(true);
      });
    } catch (error) {
      console.error('Error decoding token:', error);
      navigate('/login');
    }
  });

  const handleDeleteAccount = async () => {
    if (!confirm('Are you sure you want to delete your account? This action cannot be undone.')) {
      return;
    }

    try {
      setIsDeleting(true);
      const token = localStorage.getItem('token');
      const response = await fetch('/api/user/delete', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error('Failed to delete account');
      }

      localStorage.removeItem('token');
      toast.success('Account deleted successfully');
      navigate('/');
    } catch (error) {
      console.error('Error deleting account:', error);
      toast.error('Failed to delete account. Please try again.');
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <div 
      class={`page-wrapper bg-gray-50 dark:bg-[#21204F] text-gray-900 dark:text-white ${
        isPageVisible() ? 'page-enter-active' : 'page-enter'
      }`}
    >
      <Navbar />
      <div class="pt-24 px-4 sm:px-6 lg:px-8">
        <div class="max-w-2xl mx-auto">
          <div class="bg-white dark:bg-[#2d2c5e] rounded-2xl shadow-xl dark:shadow-2xl p-8 space-y-8">
            <div class="text-center">
              <h1 class="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                Profile
              </h1>
            </div>
            
            {userInfo() ? (
              <div class="space-y-8">
                <div class="border-b border-gray-200 dark:border-gray-700 pb-6">
                  <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">User Information</h2>
                  <div class="space-y-4">
                    <div class="bg-gray-50 dark:bg-[#21204F] p-4 rounded-lg">
                      <label class="text-sm font-medium text-gray-500 dark:text-gray-400">Name</label>
                      <p class="text-lg mt-1">{userInfo()?.name}</p>
                    </div>
                    <div class="bg-gray-50 dark:bg-[#21204F] p-4 rounded-lg">
                      <label class="text-sm font-medium text-gray-500 dark:text-gray-400">Email</label>
                      <p class="text-lg mt-1">{userInfo()?.email}</p>
                    </div>
                    <div class="bg-gray-50 dark:bg-[#21204F] p-4 rounded-lg">
                      <label class="text-sm font-medium text-gray-500 dark:text-gray-400">Member Since</label>
                      <p class="text-lg mt-1">{userInfo()?.createdAt}</p>
                    </div>
                  </div>
                </div>

                <div class="pt-4">
                  <h2 class="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">Danger Zone</h2>
                  <div class="bg-red-50 dark:bg-[#3a1f1f] p-6 rounded-lg">
                    <button
                      onClick={handleDeleteAccount}
                      disabled={isDeleting()}
                      class="w-full px-4 py-3 text-white bg-[#853232] hover:bg-[#9a3a3a] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02]"
                    >
                      {isDeleting() ? 'Deleting Account...' : 'Delete Account'}
                    </button>
                    <p class="mt-3 text-sm text-gray-500 dark:text-gray-400 text-center">
                      This action cannot be undone.
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              <div class="text-center py-8">
                <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 dark:border-white mx-auto"></div>
                <p class="mt-4 text-gray-500 dark:text-gray-400">Loading...</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;