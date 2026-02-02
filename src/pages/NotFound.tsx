import { Link } from 'react-router-dom';
import { Seo } from '../components/Seo';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <Seo
        title="Page Not Found - Jeremy Cabral"
        description="The page you're looking for doesn't exist."
        noindex
      />
      <div className="text-center">
        <h1 className="text-9xl font-bold text-orange-600 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-xl text-gray-600 mb-8">
          Sorry, we couldn't find the page you're looking for.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
          >
            <Home className="mr-2" size={20} />
            Go Home
          </Link>
          <button 
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-orange-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="mr-2" size={20} />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
