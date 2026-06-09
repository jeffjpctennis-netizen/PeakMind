export interface Video {
  id: number;
  title: string;
  url: string;
  category: string;
  duration: number;
  thumbnailUrl: string;
  author: string;
  tags: string[];
}

const MOCK_VIDEOS: Video[] = [
  {
    id: 1,
    title: "Morning Motivation - Focus",
    url: "https://www.youtube.com/watch?v=26U_S0TvIz0",
    category: "Morning",
    duration: 180,
    thumbnailUrl: "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1000&auto=format&fit=crop",
    author: "PeakMind Assets",
    tags: ["focus", "morning", "discipline"]
  },
  {
    id: 2,
    title: "Disciplined Mindset - Strength",
    url: "https://www.youtube.com/watch?v=wnHW6o8WMas",
    category: "Mindset",
    duration: 300,
    thumbnailUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop",
    author: "Mindset Mastery",
    tags: ["strength", "discipline", "workout"]
  },
  {
    id: 3,
    title: "Unlock Your Potential - Resilience",
    url: "https://www.youtube.com/watch?v=7oxv7UoZ-2U",
    category: "Personal Growth",
    duration: 420,
    thumbnailUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop",
    author: "Growth Academy",
    tags: ["resilience", "potential", "growth"]
  },
  {
    id: 4,
    title: "The Power of Habit",
    url: "https://www.youtube.com/watch?v=OMbsGBlpP30",
    category: "Habits",
    duration: 600,
    thumbnailUrl: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1000&auto=format&fit=crop",
    author: "Habit Lab",
    tags: ["habits", "psychology", "success"]
  }
];

export const VideoService = {
  getVideos: async (): Promise<Video[]> => {
    // In a real app, this would be a fetch call to an API
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_VIDEOS), 500);
    });
  },

  getVideoById: async (id: number): Promise<Video | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_VIDEOS.find(v => v.id === id)), 200);
    });
  },

  getVideosByCategory: async (category: string): Promise<Video[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(MOCK_VIDEOS.filter(v => v.category === category)), 300);
    });
  }
};
