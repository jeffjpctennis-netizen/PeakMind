import { Settings, Bell, Shield, LogOut, ChevronRight } from 'lucide-react';

export default function Profile() {
  return (
    <div className="space-y-8">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h1>
        <button className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full">
          <Settings size={20} />
        </button>
      </header>

      <div className="flex flex-col items-center space-y-4">
        <div className="relative">
          <div className="h-24 w-24 rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 flex items-center justify-center text-white text-3xl font-bold border-4 border-white dark:border-gray-900 shadow-lg">
            JD
          </div>
          <div className="absolute -bottom-1 -right-1 h-8 w-8 bg-emerald-500 rounded-full border-4 border-white dark:border-gray-900 flex items-center justify-center">
            <Shield size={14} className="text-white" fill="currentColor" />
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white">John Doe</h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Achiever Level 5</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-2xl border border-purple-100 dark:border-purple-800/30">
          <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mb-1">Current Streak</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">12 Days</p>
        </div>
        <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-2xl border border-blue-100 dark:border-blue-800/30">
          <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-1">Peak Streak</p>
          <p className="text-2xl font-bold text-gray-900 dark:text-white">45 Days</p>
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider px-2">Account</h3>
        <div className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700">
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 rounded-lg">
                <Bell size={20} />
              </div>
              <span className="font-medium text-gray-800 dark:text-white">Notifications</span>
            </div>
            <ChevronRight size={18} className="text-gray-400" />
          </button>
          
          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 rounded-lg">
                <Shield size={20} />
              </div>
              <span className="font-medium text-gray-800 dark:text-white">Premium Subscription</span>
            </div>
            <span className="text-xs font-bold text-purple-600 bg-purple-100 px-2 py-1 rounded-md">ACTIVE</span>
          </button>

          <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 text-red-500">
              <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-lg">
                <LogOut size={20} />
              </div>
              <span className="font-medium">Log Out</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
