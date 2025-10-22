import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight, Code, Github, Chrome, AlertCircle } from 'lucide-react';

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Handle successful login
    }, 2000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 flex">
      {/* Left Side - Welcome Message */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-primary-600 to-primary-700 p-8 items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-4 h-4 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-white rounded-full animate-bounce-subtle"></div>
          <div className="absolute bottom-40 left-32 w-2 h-2 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-60 left-1/3 w-1 h-1 bg-white rounded-full animate-bounce-subtle"></div>
          <div className="absolute bottom-60 right-1/4 w-3 h-3 bg-white rounded-full animate-pulse"></div>
        </div>

        <div className="relative z-10 max-w-md text-white text-center">
          <div className="w-20 h-20 bg-primary-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl">
            <Code className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold mb-6">
            Welcome Back to CodeWithZee!
          </h2>
          <p className="text-primary-100 mb-8 text-lg leading-relaxed">
            Continue your learning journey and build the tech career you've always dreamed of.
          </p>
          
          <div className="grid grid-cols-2 gap-4 text-center">
            <div className="p-4 bg-primary-500/30 rounded-xl border border-primary-400/30 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-primary-200 text-sm">Courses</div>
            </div>
            <div className="p-4 bg-primary-500/30 rounded-xl border border-primary-400/30 backdrop-blur-sm">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-primary-200 text-sm">Students</div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-primary-500/20 rounded-2xl border border-primary-400/20 backdrop-blur-sm">
            <p className="text-primary-100 italic">
              "CodeWithZee ne meri life change kar di. Ab main confident developer hun!"
            </p>
            <div className="mt-3 text-primary-200 text-sm">- Ahmed, Full Stack Developer</div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Welcome Back</h1>
            <p className="text-neutral-600">Sign in to continue your learning journey</p>
          </div>

          {/* Social Login */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-neutral-200 rounded-xl font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 group">
              <Github className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Continue with GitHub
            </button>
            <button className="w-full flex items-center justify-center px-4 py-3 border-2 border-neutral-200 rounded-xl font-medium text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 group">
              <Chrome className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
              Continue with Google
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-neutral-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 text-neutral-500 font-medium">
                Or sign in with email
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 ${
                    errors.email 
                      ? 'border-red-300 bg-red-50' 
                      : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}
                  placeholder="Enter your email"
                />
                {errors.email && (
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <AlertCircle className="w-5 h-5 text-red-500" />
                  </div>
                )}
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-neutral-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 ${
                    errors.password 
                      ? 'border-red-300 bg-red-50' 
                      : 'border-neutral-200 bg-white hover:border-neutral-300'
                  }`}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600 transition-colors"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-primary-600 bg-white border-2 border-neutral-300 rounded focus:ring-primary-500 focus:ring-2"
                />
                <span className="ml-2 text-sm text-neutral-600">Remember me</span>
              </label>
              <Link
                to="/forgot-password"
                className="text-sm text-primary-600 hover:text-primary-700 font-medium hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-all duration-200 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>

          {/* Signup Link */}
          <p className="mt-6 text-center text-sm text-neutral-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-primary-600 hover:text-primary-700 font-semibold hover:underline">
              Create one here
            </Link>
          </p>

          {/* Demo Account */}
          <div className="mt-6 p-4 bg-cream-50 border border-cream-200 rounded-xl">
            <p className="text-sm text-neutral-600 text-center mb-2">
              <strong>Demo Account:</strong>
            </p>
            <p className="text-xs text-neutral-500 text-center">
              Email: demo@codewithzee.com | Password: demo123456
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;