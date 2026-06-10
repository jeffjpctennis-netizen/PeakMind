import { useState, useEffect } from 'react';
import { type Video, VideoService } from '../services/VideoService';
import { Download, CheckCircle, Trash2 } from 'lucide-react';
import { OfflineService } from '../services/OfflineService';

export default function VideoLibrary() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [downloadedVideos, setDownloadedVideos] = useState<number[]>([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const data = await VideoService.getVideos();
        setVideos(data);
        
        // Check which videos are already downloaded
        const status = await Promise.all(
          data.map(async (v) => ({ id: v.id, isDownloaded: await OfflineService.isDownloaded(v.id) }))
        );
        setDownloadedVideos(status.filter(s => s.isDownloaded).map(s => s.id));
      } catch (error) {
        console.error("Error fetching videos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  const handleDownload = async (video: Video) => {
    try {
      if (downloadedVideos.includes(video.id)) {
        await OfflineService.removeDownload(video.id);
        setDownloadedVideos(prev => prev.filter(id => id !== video.id));
      } else {
        await OfflineService.downloadVideo(video.url, video.id);
        setDownloadedVideos(prev => [...prev, video.id]);
      }
    } catch (error) {
      alert("Failed to manage offline video");
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Video Library</h1>
          <p className="text-gray-600 dark:text-gray-400">Curated motivational content to keep you inspired.</p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <div key={video.id} className="group relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 shadow-sm border border-gray-100 dark:border-slate-800 transition-all hover:shadow-xl">
            <div className="aspect-video w-full overflow-hidden relative">
              <img 
                src={video.thumbnailUrl || `https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1000&auto=format&fit=crop`} 
                alt={video.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="h-14 w-14 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-all transform scale-90 group-hover:scale-100 shadow-xl">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              {/* Offline Badge */}
              {downloadedVideos.includes(video.id) && (
                <div className="absolute top-3 right-3 bg-emerald-500 text-white p-1.5 rounded-full shadow-lg">
                  <CheckCircle size={14} />
                </div>
              )}
            </div>
            
            <div className="p-5 space-y-4">
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-[10px] font-bold uppercase tracking-wider">
                  {video.category}
                </span>
                {video.tags?.map(tag => (
                  <span key={tag} className="text-[10px] text-gray-400 dark:text-gray-500 font-medium">#{tag}</span>
                ))}
              </div>
              
              <div className="flex justify-between items-start gap-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1 group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 font-medium">{video.author || 'PeakMind Coach'} • {Math.floor(video.duration / 60)}m</p>
                </div>
                
                <button 
                  onClick={() => handleDownload(video)}
                  className={`p-2 rounded-xl transition-all ${
                    downloadedVideos.includes(video.id) 
                    ? 'bg-red-50 dark:bg-red-900/10 text-red-500 hover:bg-red-100' 
                    : 'bg-gray-50 dark:bg-gray-800 text-gray-400 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                  title={downloadedVideos.includes(video.id) ? "Remove Download" : "Download for Offline"}
                >
                  {downloadedVideos.includes(video.id) ? <Trash2 size={18} /> : <Download size={18} />}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
