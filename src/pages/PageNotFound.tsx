import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-slate-900">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-bold text-white">404</h1>
        <p className="mb-8 text-xl text-gray-400">Page not found</p>
        <Link
          to="/"
          className="inline-block rounded bg-green-700 px-6 py-3 text-white hover:bg-green-600 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
