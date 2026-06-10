export const OfflineService = {
  downloadVideo: async (videoUrl: string, videoId: number): Promise<void> => {
    try {
      const response = await fetch(videoUrl);
      const blob = await response.blob();
      
      const cache = await caches.open('offline-videos');
      await cache.put(`/offline/video/${videoId}`, new Response(blob));
      
      console.log(`Video ${videoId} downloaded for offline access`);
    } catch (error) {
      console.error('Failed to download video:', error);
      throw error;
    }
  },

  isDownloaded: async (videoId: number): Promise<boolean> => {
    const cache = await caches.open('offline-videos');
    const response = await cache.match(`/offline/video/${videoId}`);
    return !!response;
  },

  removeDownload: async (videoId: number): Promise<void> => {
    const cache = await caches.open('offline-videos');
    await cache.delete(`/offline/video/${videoId}`);
  },

  getOfflineVideoUrl: async (videoId: number): Promise<string | null> => {
    const cache = await caches.open('offline-videos');
    const response = await cache.match(`/offline/video/${videoId}`);
    if (response) {
      const blob = await response.blob();
      return URL.createObjectURL(blob);
    }
    return null;
  }
};
