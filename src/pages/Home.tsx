export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Welcome to PeakMind
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl text-center">
        Your AI-powered ecosystem for personal growth and habit change.
      </p>
      <div className="mt-8 flex gap-4">
        <button className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors">
          Get Started
        </button>
        <button className="px-6 py-3 bg-gray-200 text-gray-900 rounded-lg font-medium hover:bg-gray-300 transition-colors dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700">
          Learn More
        </button>
      </div>
    </div>
  );
}
