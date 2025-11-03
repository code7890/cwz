import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Code, Home, BookOpen, User, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const DashboardNav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  const getUserInitials = () => {
    if (!user?.email) return 'U';
    return user.email.charAt(0).toUpperCase();
  };

  const isActive = (path: string) => location.pathname === path;

  const navigation = [
    { name: 'Dashboard', href: '/dashboard', icon: Home },
    { name: 'My Courses', href: '/dashboard', icon: BookOpen },
    { name: 'Profile', href: `/profile/${user?.id}`, icon: User },
  ];

  return (
    <nav className="bg-white border-b border-neutral-200 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-105 transition-all duration-300">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-neutral-900">CodeWithZee</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center space-x-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(item.href)
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* User Menu */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/"
              className="text-sm font-medium text-neutral-700 hover:text-neutral-900 px-3 py-2 rounded-lg hover:bg-neutral-50 transition-all duration-200"
            >
              Back to Website
            </Link>

            <div className="flex items-center space-x-3 pl-3 border-l border-neutral-200">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-semibold text-sm">
                  {getUserInitials()}
                </div>
                <span className="text-sm font-medium text-neutral-900">
                  {user?.email?.split('@')[0]}
                </span>
              </div>

              <button
                onClick={handleSignOut}
                className="text-neutral-600 hover:text-red-600 transition-colors"
                title="Sign Out"
              >
                <LogOut className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-neutral-200 bg-white animate-fade-in">
            <div className="space-y-1">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-primary-50 text-primary-700'
                        : 'text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
            <div className="mt-4 pt-4 border-t border-neutral-200 space-y-2">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors"
              >
                Back to Website
              </Link>
              <button
                onClick={() => {
                  handleSignOut();
                  setIsMenuOpen(false);
                }}
                className="flex items-center w-full px-3 py-2 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default DashboardNav;
