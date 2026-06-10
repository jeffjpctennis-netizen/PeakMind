import { Link, Outlet, useLocation } from 'react-router-dom';
import { Home, Play, Bell, BarChart2, User } from 'lucide-react';

export default function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/videos', icon: Play, label: 'Library' },
    { path: '/alarm', icon: Bell, label: 'Alarm' },
    { path: '/progress', icon: BarChart2, label: 'Progress' },
    { path: '/profile', icon: User, label: 'Profile' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 text-gray-900 dark:text-gray-100 pb-20 md:pb-0 md:pt-16">
      {/* Desktop Header */}
      <header className="hidden md:block fixed top-0 w-full bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-gray-200 dark:border-slate-800 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-blue-600">PeakMind</span>
          </div>
          <div className="flex gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`flex items-center gap-2 font-medium transition-colors ${
                  isActive(item.path) ? 'text-blue-600' : 'text-gray-500 hover:text-blue-600'
                }`}
              >
                <item.icon size={20} />
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <button className="px-5 py-2 bg-blue-600 text-white rounded-full text-sm font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20">
              Go Premium
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto md:max-w-7xl px-4 py-6 md:py-12">
        <Outlet />
      </main>

      {/* Mobile Bottom Tab Bar */}
      <nav className="md:hidden fixed bottom-0 w-full bg-white dark:bg-slate-900 border-t border-gray-200 dark:border-slate-800 px-6 py-3 flex justify-between items-center z-50">
        {navItems.map((item) => (
          <Link 
            key={item.path}
            to={item.path} 
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive(item.path) ? 'text-blue-600' : 'text-gray-400'
            }`}
          >
            <item.icon size={24} fill={isActive(item.path) ? 'currentColor' : 'none'} className={isActive(item.path) ? 'fill-blue-600/20' : ''} />
            <span className="text-[10px] font-bold uppercase tracking-wider">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
