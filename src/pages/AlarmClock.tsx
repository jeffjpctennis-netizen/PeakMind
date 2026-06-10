import { useState } from 'react';
import { Play, Menu, ChevronDown } from 'lucide-react';

export default function AlarmClock() {
  const [time] = useState('06:00');
  const [category] = useState('Aggressive Motivation');

  return (
    <div className="flex flex-col items-center justify-between min-h-[80vh] bg-gray-50 dark:bg-gray-900 p-6 rounded-3xl">
      <header className="w-full flex justify-between items-center px-2">
        <Menu className="text-gray-600 dark:text-gray-400" />
        <span className="text-xl font-bold text-gray-800 dark:text-white">PeakMind</span>
        <div className="w-6"></div> {/* Spacer */}
      </header>

      <div className="flex flex-col items-center">
        <div className="relative">
          <span className="text-[120px] font-bold text-slate-800 dark:text-white leading-none">
            {time}
          </span>
          <span className="absolute bottom-6 -right-16 text-3xl font-bold text-slate-800 dark:text-white">
            AM
          </span>
        </div>
      </div>

      <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-sm space-y-4">
        <h2 className="text-center text-xl font-bold text-gray-800 dark:text-white">
          Set Motivational Speech
        </h2>
        
        <div className="relative">
          <button className="w-full flex justify-between items-center p-4 bg-gray-100 dark:bg-gray-700 rounded-2xl text-gray-800 dark:text-white font-medium">
            {category}
            <ChevronDown size={20} />
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-8">
        {/* Mock Waveform */}
        <div className="flex items-center gap-1 h-16">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="w-1 bg-slate-400 dark:bg-slate-600 rounded-full"
              style={{ height: `${Math.random() * 100}%` }}
            ></div>
          ))}
        </div>

        <button className="h-20 w-20 rounded-full bg-slate-800 dark:bg-white flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
          <Play className="text-white dark:text-slate-900 ml-1" size={32} fill="currentColor" />
        </button>
      </div>
    </div>
  );
}
