import { Link, Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="border-b border-gray-200 dark:border-gray-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-purple-600">PeakMind</span>
          </div>
          <div className="flex gap-6">
            <Link to="/" className="hover:text-purple-600 transition-colors">Home</Link>
            <Link to="/videos" className="hover:text-purple-600 transition-colors">Videos</Link>
            <Link to="/challenges" className="hover:text-purple-600 transition-colors">Challenges</Link>
          </div>
          <div className="flex items-center gap-4">
            <button className="text-sm font-medium hover:text-purple-600 transition-colors">Sign In</button>
            <button className="px-4 py-2 bg-purple-600 text-white rounded-md text-sm font-medium hover:bg-purple-700 transition-colors">
              Go Premium
            </button>
          </div>
        </nav>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Outlet />
      </main>
      <footer className="border-t border-gray-200 dark:border-gray-800 py-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} PeakMind. All rights reserved.
      </footer>
    </div>
  );
}
