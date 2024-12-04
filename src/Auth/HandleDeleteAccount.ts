interface DeleteAccountResponse {
    success: boolean;
    message: string;
  }
  
  export const handleDeleteAccount = async (token: string): Promise<DeleteAccountResponse> => {
    try {
      const apiKey = import.meta.env.VITE_BASE_URL;
      const response = await fetch(`${apiKey}/delete-account`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || 'Failed to delete account');
      }
  
      // Clear all stored user data from local storage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('userData');
  
      return {
        success: true,
        message: data.message || 'Account deleted successfully',
      };
    } catch (error) {
      console.error('Error in handleDeleteAccount:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to delete account',
      };
    }
  }