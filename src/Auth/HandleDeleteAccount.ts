interface DeleteAccountResponse {
    success: boolean;
    message: string;
  }
  
  export const handleDeleteAccount = async (token: string): Promise<DeleteAccountResponse> => {
    try {
      const response = await fetch('/api/user/delete', {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to delete account');
      }
  
      return {
        success: true,
        message: 'Account deleted successfully',
      };
    } catch (error) {
      console.error('Error in handleDeleteAccount:', error);
      return {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to delete account',
      };
    }
  }