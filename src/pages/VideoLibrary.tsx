import { useState, useEffect } from 'react';
import { Video, VideoService } from '../services/VideoService';

export default function VideoLibrary() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await VideoService.getVideos();
        setVideos(data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Video Library</h1>
        <p className="text-gray-600 dark:text-gray-400">Curated motivational content to keep you inspired.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 transition-all hover:shadow-xl">
            <div className="aspect-video w-full overflow-hidden">
              <img 
                src={video.thumbnailUrl} 
                alt={video.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="h-14 w-14 rounded-full bg-purple-600 text-white flex items-center justify-center hover:bg-purple-700 transition-colors shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="p-4 space-y-3">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 text-xs font-semibold uppercase tracking-wider">
                  {video.category}
                </span>
                {video.tags.map(tag => (
                  <span key={tag} className="text-xs text-gray-500 dark:text-gray-400 italic">#{tag}</span>
                ))}
              </div>
              
              <div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-purple-600 transition-colors">
                  {video.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{video.author} • {Math.floor(video.duration / 60)}m</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
