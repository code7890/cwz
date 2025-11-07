import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Bell, Sparkles, Home, UserPlus } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const ComingSoonOverlay: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-900/60 backdrop-blur-md">
      <div className="max-w-2xl mx-4 bg-white rounded-3xl shadow-2xl border-2 border-primary-200 p-8 md:p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400"></div>

        <div className="absolute top-4 right-4 animate-bounce">
          <Sparkles className="w-8 h-8 text-yellow-400" />
        </div>

        <div className="absolute top-8 left-8 animate-pulse">
          <Sparkles className="w-6 h-6 text-primary-400" />
        </div>

        <div className="relative">
          <div className="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg animate-float">
            <Rocket className="w-12 h-12 text-white" />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Coming Soon!
          </h2>

          <p className="text-xl text-neutral-600 mb-6 leading-relaxed">
            We're building something amazing for you!
          </p>

          <div className="bg-gradient-to-r from-primary-50 to-cream-50 rounded-2xl p-6 mb-8 border border-primary-100">
            <p className="text-neutral-700 text-lg mb-4">
              CodeWithZee is launching very soon. Be the first to know when we go live!
            </p>
            <div className="flex items-center justify-center space-x-2 text-primary-600 font-semibold">
              <Bell className="w-5 h-5" />
              <span>Sign up now to get early access</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
            <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
              <div className="text-3xl font-bold text-primary-600 mb-1">50+</div>
              <div className="text-sm text-neutral-600">Courses Ready</div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
              <div className="text-3xl font-bold text-primary-600 mb-1">10+</div>
              <div className="text-sm text-neutral-600">Expert Instructors</div>
            </div>
            <div className="bg-neutral-50 rounded-xl p-4 border border-neutral-200">
              <div className="text-3xl font-bold text-primary-600 mb-1">24/7</div>
              <div className="text-sm text-neutral-600">Support Available</div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="flex items-center justify-center px-6 py-3 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 font-semibold rounded-xl transition-all duration-200 border-2 border-neutral-200 hover:border-neutral-300"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </Link>
            {!user && (
              <Link
                to="/signup"
                className="flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <UserPlus className="w-5 h-5 mr-2" />
                Sign Up Now
              </Link>
            )}
          </div>

          <div className="mt-6 text-sm text-neutral-500">
            <p>🚀 Platform launching soon</p>
            <p className="mt-2">Currently accepting early registrations</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonOverlay;
