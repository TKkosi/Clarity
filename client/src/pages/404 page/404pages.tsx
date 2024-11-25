import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-200 to-purple-200 text-gray-800 font-mono">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-emerald-800 mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Oops! Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for does not exist. It might have been moved or deleted.
        </p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-emerald-800 text-white font-medium rounded-lg shadow hover:bg-emerald-600 transition">
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
