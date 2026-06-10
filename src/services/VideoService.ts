import { apiFetch } from './BaseService';

export interface Video {
  id: number;
  title: string;
  url: string;
  category: string;
  duration: number;
  thumbnailUrl?: string;
  author?: string;
  tags?: string[];
}

export const VideoService = {
  getVideos: async (category?: string): Promise<Video[]> => {
    const query = category ? `?category=${encodeURIComponent(category)}` : '';
    return apiFetch<Video[]>(`/videos${query}`);
  },

  getVideoById: async (id: number): Promise<Video> => {
    return apiFetch<Video>(`/videos/${id}`);
  },

  getRandomVideo: async (): Promise<Video> => {
    return apiFetch<Video>('/videos/random');
  }
};
