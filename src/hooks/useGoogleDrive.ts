import { createSignal, onMount } from 'solid-js';
import { GoogleDriveService } from '../services/googleDrive';

export function useGoogleDrive() {
  const [isInitialized, setIsInitialized] = createSignal(false);
  const [isLoading, setIsLoading] = createSignal(false);
  const [error, setError] = createSignal<string | null>(null);

  const driveService = GoogleDriveService.getInstance();

  onMount(async () => {
    try {
      setIsLoading(true);
      const initialized = await driveService.initialize();
      setIsInitialized(initialized);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to initialize Google Drive');
    } finally {
      setIsLoading(false);
    }
  });

  const listFiles = async (pageSize?: number) => {
    try {
      setIsLoading(true);
      setError(null);
      return await driveService.listFiles(pageSize);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to list files');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const uploadFile = async (name: string, mimeType: string, content: any) => {
    try {
      setIsLoading(true);
      setError(null);
      return await driveService.uploadFile(name, mimeType, content);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to upload file');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const downloadFile = async (fileId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      return await driveService.downloadFile(fileId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to download file');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteFile = async (fileId: string) => {
    try {
      setIsLoading(true);
      setError(null);
      return await driveService.deleteFile(fileId);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete file');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isInitialized,
    isLoading,
    error,
    listFiles,
    uploadFile,
    downloadFile,
    deleteFile,
  };
}