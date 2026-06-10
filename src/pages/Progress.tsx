import { ArrowLeft } from 'lucide-react';

export default function Progress() {
  return (
    <div className="flex flex-col min-h-[80vh] bg-slate-950 text-white p-6 rounded-3xl overflow-hidden">
      <header className="flex items-center gap-4 mb-8">
        <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
          <ArrowLeft size={24} />
        </button>
        <span className="text-xl font-bold">PeakMind</span>
      </header>

      <h1 className="text-3xl font-bold mb-8">Progress Tracking</h1>

      <div className="flex flex-col items-center mb-10">
        <div className="relative h-48 w-48 flex items-center justify-center">
          {/* SVG Progress Ring */}
          <svg className="h-full w-full -rotate-90">
            <circle
              cx="96"
              cy="96"
              r="80"
              fill="transparent"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="12"
            />
            <circle
              cx="96"
              cy="96"
              r="80"
              fill="transparent"
              stroke="#10b981"
              strokeWidth="12"
              strokeDasharray={502}
              strokeDashoffset={502 * 0.2}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute flex flex-col items-center">
            <span className="text-sm text-gray-400">Daily Goal</span>
            <span className="text-5xl font-bold">80%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 mb-10">
        <div className="bg-slate-900 rounded-2xl p-4 flex flex-col items-center text-center">
          <span className="text-xs text-gray-400 mb-1">Minutes Watched</span>
          <span className="text-2xl font-bold text-emerald-400">34</span>
        </div>
        <div className="bg-slate-900 rounded-2xl p-4 flex flex-col items-center text-center">
          <span className="text-xs text-gray-400 mb-1">Days Streak</span>
          <span className="text-2xl font-bold text-emerald-400">5</span>
        </div>
        <div className="bg-slate-900 rounded-2xl p-4 flex flex-col items-center text-center">
          <span className="text-xs text-gray-400 mb-1">Challenges Done</span>
          <span className="text-2xl font-bold text-emerald-400">3</span>
        </div>
      </div>

      <div className="space-y-4 mb-10">
        <h2 className="text-xl font-bold">Offline Storage</h2>
        <div className="bg-slate-900 rounded-3xl p-6 border border-slate-800">
          <div className="flex justify-between items-center mb-4">
            <span className="text-sm font-medium text-gray-400">3.4 GB used</span>
            <span className="text-sm font-medium text-emerald-400">2.6 GB free</span>
          </div>
          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-blue-600 rounded-full" style={{ width: '56.6%' }}></div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold">Activity</h2>
        <div className="grid grid-cols-7 gap-2">
          {/* Mock Activity Grid */}
          {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map(day => (
            <span key={day} className="text-center text-xs text-gray-500">{day}</span>
          ))}
          {[...Array(28)].map((_, i) => (
            <div 
              key={i} 
              className={`aspect-square rounded-md ${
                i % 5 === 0 ? 'bg-emerald-500' : 
                i % 3 === 0 ? 'bg-emerald-700' : 
                i % 2 === 0 ? 'bg-slate-800' : 'bg-slate-900'
              }`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
}
