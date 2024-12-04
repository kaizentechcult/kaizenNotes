import { google } from 'googleapis';
import { authenticate } from '@google-cloud/local-auth';
import { OAuth2Client } from 'google-auth-library';

// If modifying these scopes, delete token.json.
const SCOPES = [
  'https://www.googleapis.com/auth/drive.file',
  'https://www.googleapis.com/auth/drive.metadata.readonly'
];

export class GoogleDriveService {
  private static instance: GoogleDriveService;
  private auth: OAuth2Client | null = null;
  private drive: any = null;

  private constructor() {}

  public static getInstance(): GoogleDriveService {
    if (!GoogleDriveService.instance) {
      GoogleDriveService.instance = new GoogleDriveService();
    }
    return GoogleDriveService.instance;
  }

  public async initialize() {
    try {
      this.auth = await authenticate({
        keyfilePath: 'credentials.json',
        scopes: SCOPES,
      });
      
      this.drive = google.drive({ version: 'v3', auth: this.auth });
      return true;
    } catch (error) {
      console.error('Error initializing Google Drive service:', error);
      return false;
    }
  }

  public async listFiles(pageSize: number = 10) {
    try {
      const response = await this.drive.files.list({
        pageSize,
        fields: 'nextPageToken, files(id, name, mimeType, createdTime)',
      });
      return response.data.files;
    } catch (error) {
      console.error('Error listing files:', error);
      throw error;
    }
  }

  public async uploadFile(name: string, mimeType: string, content: any) {
    try {
      const fileMetadata = {
        name,
      };

      const media = {
        mimeType,
        body: content,
      };

      const response = await this.drive.files.create({
        requestBody: fileMetadata,
        media: media,
        fields: 'id',
      });

      return response.data;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  }

  public async downloadFile(fileId: string) {
    try {
      const response = await this.drive.files.get(
        { fileId, alt: 'media' },
        { responseType: 'stream' }
      );
      return response.data;
    } catch (error) {
      console.error('Error downloading file:', error);
      throw error;
    }
  }

  public async deleteFile(fileId: string) {
    try {
      await this.drive.files.delete({ fileId });
      return true;
    } catch (error) {
      console.error('Error deleting file:', error);
      throw error;
    }
  }
}