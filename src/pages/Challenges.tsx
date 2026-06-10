import { Trophy, Users, Star, ChevronRight } from 'lucide-react';

export default function Challenges() {
  const challenges = [
    {
      id: 1,
      title: "7-Day Wake Up Call",
      description: "Wake up at 6:00 AM for 7 days in a row.",
      participants: 1240,
      reward: "Early Bird Badge",
      progress: 4,
      total: 7,
      color: "bg-orange-500"
    },
    {
      id: 2,
      title: "Mindset Mastery",
      description: "Watch 10 motivational videos this week.",
      participants: 850,
      reward: "100 XP",
      progress: 6,
      total: 10,
      color: "bg-blue-500"
    },
    {
      id: 3,
      title: "Focus Friday",
      description: "Complete 3 focus sessions on Friday.",
      participants: 420,
      reward: "Focus Master Title",
      progress: 0,
      total: 3,
      color: "bg-purple-500"
    }
  ];

  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Challenges</h1>
        <p className="text-gray-600 dark:text-gray-400">Push your limits with the community.</p>
      </header>

      <div className="space-y-4">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-slate-800 space-y-4 group transition-all hover:shadow-md">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{challenge.title}</h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{challenge.description}</p>
              </div>
              <div className={`p-3 rounded-2xl ${challenge.color} text-white`}>
                <Trophy size={20} />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-gray-400">Progress</span>
                <span className="text-blue-600">{challenge.progress}/{challenge.total} Days</span>
              </div>
              <div className="h-3 w-full bg-gray-100 dark:bg-slate-800 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${challenge.color} transition-all duration-1000`} 
                  style={{ width: `${(challenge.progress / challenge.total) * 100}%` }}
                ></div>
              </div>
            </div>

            <div className="flex justify-between items-center pt-2">
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
                <div className="flex items-center gap-1">
                  <Users size={14} />
                  <span>{challenge.participants} Joined</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star size={14} className="text-yellow-500" fill="currentColor" />
                  <span>{challenge.reward}</span>
                </div>
              </div>
              <button className="flex items-center gap-1 text-blue-600 font-bold text-sm">
                View Details
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
