import { Play, Bell, Flame, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="space-y-8">
      <header className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Morning, John</h1>
          <p className="text-gray-500 text-sm">Ready to peak today?</p>
        </div>
        <div className="flex items-center gap-2 bg-orange-100 dark:bg-orange-900/30 text-orange-600 px-3 py-1.5 rounded-full font-bold text-sm">
          <Flame size={16} fill="currentColor" />
          <span>12</span>
        </div>
      </header>

      {/* Featured Card */}
      <div className="relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-xl group">
        <img 
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000&auto=format&fit=crop" 
          alt="Daily Motivation" 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-6 text-white">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-blue-400">Daily Highlights</span>
          <h2 className="text-2xl font-bold mb-4">Master Your Morning Routine</h2>
          <Link to="/videos" className="w-fit flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-lg shadow-blue-500/40">
            <Play size={18} fill="currentColor" />
            Watch Now
          </Link>
        </div>
      </div>

      {/* Quick Actions */}
      <section className="space-y-4">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-2">Quick Access</h3>
        <div className="grid grid-cols-2 gap-4">
          <Link to="/alarm" className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col gap-4 group transition-all hover:shadow-md hover:border-blue-200 dark:hover:border-blue-900">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 w-fit rounded-2xl group-hover:scale-110 transition-transform">
              <Bell size={24} />
            </div>
            <div className="flex justify-between items-end">
              <span className="font-bold text-gray-800 dark:text-white">Alarm</span>
              <ChevronRight size={16} className="text-gray-300" />
            </div>
          </Link>

          <Link to="/progress" className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-slate-800 flex flex-col gap-4 group transition-all hover:shadow-md hover:border-emerald-200 dark:hover:border-emerald-900">
            <div className="p-3 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 w-fit rounded-2xl group-hover:scale-110 transition-transform">
              <Flame size={24} />
            </div>
            <div className="flex justify-between items-end">
              <span className="font-bold text-gray-800 dark:text-white">Streaks</span>
              <ChevronRight size={16} className="text-gray-300" />
            </div>
          </Link>
        </div>
      </section>

      {/* Recommended Section */}
      <section className="space-y-4">
        <div className="flex justify-between items-center px-2">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Recommended</h3>
          <Link to="/videos" className="text-blue-600 text-xs font-bold">See all</Link>
        </div>
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-4 flex gap-4 border border-gray-100 dark:border-slate-800 shadow-sm">
          <div className="h-20 w-24 rounded-2xl bg-gray-200 dark:bg-slate-800 overflow-hidden shrink-0">
             <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=300&auto=format&fit=crop" className="h-full w-full object-cover" />
          </div>
          <div className="flex flex-col justify-center">
            <h4 className="font-bold text-gray-800 dark:text-white leading-snug">The 5 AM Club Strategy</h4>
            <p className="text-xs text-gray-500 mt-1">12m • Productivity</p>
          </div>
        </div>
      </section>
    </div>
  );
}
