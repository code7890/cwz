import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  Award,
  BookOpen,
  CheckCircle,
  Play,
  Download,
  Globe,
  TrendingUp,
  Target,
  Zap,
  Code
} from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';
import ComingSoonOverlay from '../../components/ComingSoonOverlay';

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourse = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from('courses')
        .select(`
          *,
          instructor:instructors(id, name, avatar_url, bio),
          category:categories(id, name, slug)
        `)
        .eq('id', courseId)
        .single();

      if (error) {
        console.error('Error fetching course:', error);
      } else {
        setCourse(data);
      }

      setLoading(false);
    };

    loadCourse();
  }, [courseId]);

  const handleEnroll = () => {
    if (!user) {
      navigate('/login');
      return;
    }
    navigate(`/learn/${courseId}`);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading course details...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">Course Not Found</h2>
          <Link to="/courses" className="text-primary-600 hover:text-primary-700">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const bgColors = ['bg-gradient-to-br from-blue-50 to-blue-100', 'bg-gradient-to-br from-green-50 to-green-100', 'bg-gradient-to-br from-purple-50 to-purple-100'];
  const borderColors = ['border-blue-200', 'border-green-200', 'border-purple-200'];
  const accentColors = ['text-blue-600', 'text-green-600', 'text-purple-600'];
  const index = parseInt(course.id.substring(0, 8), 16) % 3;

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 relative">
      <ComingSoonOverlay />
      {/* Header */}
      <div className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/courses"
            className="inline-flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Courses
          </Link>
        </div>
      </div>

      {/* Course Header */}
      <div className={`${bgColors[index]} ${borderColors[index]} border-b-2`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <span className={`text-sm font-medium ${accentColors[index]} bg-white px-3 py-1 rounded-full border ${borderColors[index]}`}>
                  {course.level}
                </span>
                {course.is_bestseller && (
                  <span className="text-sm font-medium bg-orange-500 text-white px-3 py-1 rounded-full">
                    Bestseller
                  </span>
                )}
                {course.is_popular && (
                  <span className="text-sm font-medium bg-primary-600 text-white px-3 py-1 rounded-full">
                    Popular
                  </span>
                )}
              </div>

              <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                {course.title}
              </h1>

              <p className="text-xl text-neutral-700 mb-6 leading-relaxed">
                {course.description}
              </p>

              <div className="flex items-center flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                  <span className="font-semibold text-neutral-900">{course.rating}</span>
                  <span className="text-neutral-600 ml-1">({course.total_reviews?.toLocaleString()} reviews)</span>
                </div>
                <div className="flex items-center text-neutral-600">
                  <Users className="w-5 h-5 mr-1" />
                  {course.students_enrolled?.toLocaleString()} students
                </div>
                <div className="flex items-center text-neutral-600">
                  <Clock className="w-5 h-5 mr-1" />
                  {course.duration_hours} hours
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <img
                  src={course.instructor?.avatar_url}
                  alt={course.instructor?.name}
                  className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
                />
                <div>
                  <p className="text-sm text-neutral-600">Instructor</p>
                  <p className="font-semibold text-neutral-900">{course.instructor?.name}</p>
                </div>
              </div>
            </div>

            {/* Right Content - Price Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border-2 border-neutral-200 p-6 shadow-lg sticky top-4">
                <img
                  src={course.thumbnail_url}
                  alt={course.title}
                  className="w-full h-48 object-cover rounded-xl mb-6"
                />

                <div className="mb-6">
                  <div className="flex items-baseline space-x-2 mb-2">
                    <span className="text-3xl font-bold text-neutral-900">₹{course.price?.toLocaleString()}</span>
                    {course.original_price && (
                      <span className="text-lg text-neutral-500 line-through">₹{course.original_price?.toLocaleString()}</span>
                    )}
                  </div>
                  {course.original_price && (
                    <div className="text-sm text-green-600 font-medium">
                      Save {Math.round(((course.original_price - course.price) / course.original_price) * 100)}%
                    </div>
                  )}
                </div>

                <button
                  onClick={handleEnroll}
                  className="w-full bg-primary-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary-700 transition-all duration-200 shadow-lg hover:shadow-xl mb-4"
                >
                  {user ? 'Enroll Now' : 'Sign In to Enroll'}
                </button>

                <div className="space-y-3 text-sm text-neutral-600">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    Lifetime access
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    Certificate of completion
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    24/7 support
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-600" />
                    Language: {course.language}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What You'll Learn */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">What You'll Learn</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Master core concepts and fundamentals</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Build real-world projects</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Best practices and industry standards</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-neutral-700">Practical hands-on experience</span>
                </div>
              </div>
            </div>

            {/* Course Description */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Course Description</h2>
              <div className="prose max-w-none text-neutral-700">
                <p className="mb-4">{course.description}</p>
                <p>
                  This comprehensive course is designed to take you from beginner to advanced level.
                  You'll learn through hands-on projects and real-world examples, ensuring you gain
                  practical skills that you can apply immediately.
                </p>
              </div>
            </div>

            {/* Instructor */}
            <div className="bg-white rounded-2xl border border-neutral-200 p-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Your Instructor</h2>
              <div className="flex items-start space-x-4">
                <img
                  src={course.instructor?.avatar_url}
                  alt={course.instructor?.name}
                  className="w-20 h-20 rounded-full border-2 border-neutral-200"
                />
                <div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {course.instructor?.name}
                  </h3>
                  <p className="text-neutral-600">{course.instructor?.bio}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl border border-neutral-200 p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-4">Course Features</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-neutral-700">
                    <BookOpen className="w-5 h-5 mr-3 text-primary-600" />
                    <span>Full lifetime access</span>
                  </div>
                  <div className="flex items-center text-neutral-700">
                    <Award className="w-5 h-5 mr-3 text-primary-600" />
                    <span>Certificate of completion</span>
                  </div>
                  <div className="flex items-center text-neutral-700">
                    <Users className="w-5 h-5 mr-3 text-primary-600" />
                    <span>Community access</span>
                  </div>
                  <div className="flex items-center text-neutral-700">
                    <Download className="w-5 h-5 mr-3 text-primary-600" />
                    <span>Downloadable resources</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-4">Requirements</h3>
                <ul className="space-y-2 text-neutral-700 text-sm">
                  <li>• Basic understanding of computers</li>
                  <li>• Willingness to learn</li>
                  <li>• No prior coding experience needed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;
