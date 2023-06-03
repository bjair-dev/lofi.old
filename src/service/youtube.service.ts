import { Injectable } from '@angular/core';

declare const gapi: any;

@Injectable({
  providedIn: 'root',
})
export class YoutubeApiService {
  private api_key = 'AIzaSyAUYErpq79vvCUMQtjT_SnxSXTkW2xR4E0';
  private discoveryUrl =
    'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest';

  constructor() {}

  public async getVideoInfo(videoId: string) {
    try {
      await this.loadClient();

      const response = await gapi.client.youtube.videos.list({
        part: 'snippet',
        id: 'videoId',
      });

      return response.result;
    } catch (error) {
      console.error('Error al obtener información del video:', error);
      throw error;
    }
  }

  private loadClient(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      gapi.load('client', () => {
        gapi.client
          .init({
            apiKey: this.api_key,
            discoveryDocs: [this.discoveryUrl],
          })
          .then(() => {
            resolve();
          })
          .catch((error: any) => {
            reject(error);
          });
      });
    });
  }
}
