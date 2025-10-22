import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus,
  BookOpen,
  Users,
  DollarSign,
  TrendingUp,
  Star,
  Eye,
  Edit,
  Trash2,
  MoreHorizontal,
  Calendar,
  Clock,
  Award,
  MessageCircle,
  BarChart3,
  Target,
  Zap,
  Heart,
  Download,
  Share2,
  Settings,
  Bell,
  Search,
  Filter,
  ChevronRight,
  Play,
  Pause,
  Upload,
  FileText,
  Video,
  Image,
  CheckCircle,
  AlertCircle,
  XCircle
} from 'lucide-react';

const InstructorDashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [selectedCourse, setSelectedCourse] = useState(null);

  // Mock instructor data
  const instructorData = {
    name: 'Zee Ahmad',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    title: 'Senior Full Stack Developer & Instructor',
    totalStudents: 12450,
    totalCourses: 8,
    totalRevenue: 245000,
    avgRating: 4.8,
    totalReviews: 2340,
    joinDate: 'January 2023',
  };

  const stats = [
    { label: 'Total Students', value: '12.4K', change: '+12%', icon: Users, color: 'text-blue-600', bgColor: 'bg-blue-50' },
    { label: 'Active Courses', value: '8', change: '+2', icon: BookOpen, color: 'text-green-600', bgColor: 'bg-green-50' },
    { label: 'Total Revenue', value: '₹2.45L', change: '+18%', icon: DollarSign, color: 'text-purple-600', bgColor: 'bg-purple-50' },
    { label: 'Avg Rating', value: '4.8', change: '+0.2', icon: Star, color: 'text-yellow-600', bgColor: 'bg-yellow-50' },
  ];

  const courses = [
    {
      id: 1,
      title: 'Complete React Development Bootcamp',
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      students: 3200,
      rating: 4.9,
      reviews: 892,
      revenue: 89000,
      status: 'published',
      lastUpdated: '2 days ago',
      progress: 100,
      lessons: 24,
      duration: '12 hours',
    },
    {
      id: 2,
      title: 'Python for Data Science & AI',
      thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      students: 2100,
      rating: 4.7,
      reviews: 567,
      revenue: 65000,
      status: 'published',
      lastUpdated: '1 week ago',
      progress: 100,
      lessons: 32,
      duration: '18 hours',
    },
    {
      id: 3,
      title: 'Advanced JavaScript Concepts',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      students: 1800,
      rating: 4.8,
      reviews: 423,
      revenue: 54000,
      status: 'published',
      lastUpdated: '3 days ago',
      progress: 100,
      lessons: 18,
      duration: '8 hours',
    },
    {
      id: 4,
      title: 'Node.js Backend Development',
      thumbnail: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      students: 0,
      rating: 0,
      reviews: 0,
      revenue: 0,
      status: 'draft',
      lastUpdated: '1 hour ago',
      progress: 65,
      lessons: 8,
      duration: '0 hours',
    },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'enrollment',
      message: '15 new students enrolled in React Bootcamp',
      time: '2 hours ago',
      icon: Users,
      color: 'text-blue-600',
    },
    {
      id: 2,
      type: 'review',
      message: 'New 5-star review on Python course',
      time: '4 hours ago',
      icon: Star,
      color: 'text-yellow-600',
    },
    {
      id: 3,
      type: 'revenue',
      message: 'Revenue milestone: ₹2.5L reached',
      time: '1 day ago',
      icon: DollarSign,
      color: 'text-green-600',
    },
    {
      id: 4,
      type: 'question',
      message: '3 new student questions in Q&A',
      time: '2 days ago',
      icon: MessageCircle,
      color: 'text-purple-600',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'published': return 'text-green-600 bg-green-50 border-green-200';
      case 'draft': return 'text-orange-600 bg-orange-50 border-orange-200';
      case 'review': return 'text-blue-600 bg-blue-50 border-blue-200';
      default: return 'text-neutral-600 bg-neutral-50 border-neutral-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'published': return CheckCircle;
      case 'draft': return Edit;
      case 'review': return Clock;
      default: return AlertCircle;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <img
                src={instructorData.avatar}
                alt={instructorData.name}
                className="w-10 h-10 rounded-full border-2 border-primary-200"
              />
              <div>
                <h1 className="text-lg font-semibold text-neutral-900">
                  Welcome back, {instructorData.name}!
                </h1>
                <p className="text-sm text-neutral-600">{instructorData.title}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-64 pl-10 pr-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
              </div>
              
              <button className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors relative">
                <Bell className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
              </button>
              
              <Link
                to="/instructor/course-creation"
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Plus className="w-4 h-4" />
                <span>New Course</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${stat.bgColor}`}>
                    <Icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-neutral-900 mb-1">{stat.value}</h3>
                <p className="text-sm text-neutral-600">{stat.label}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Tab Navigation */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <div className="flex space-x-1 bg-neutral-100 rounded-lg p-1 mb-6">
                {[
                  { id: 'overview', name: 'Overview' },
                  { id: 'courses', name: 'My Courses' },
                  { id: 'analytics', name: 'Analytics' },
                  { id: 'students', name: 'Students' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 py-2 px-4 rounded-md font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    {tab.name}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Link
                        to="/instructor/course-creation"
                        className="flex items-center space-x-3 p-4 bg-primary-50 border border-primary-200 rounded-xl hover:bg-primary-100 transition-colors"
                      >
                        <Plus className="w-5 h-5 text-primary-600" />
                        <span className="font-medium text-primary-700">Create New Course</span>
                      </Link>
                      
                      <button className="flex items-center space-x-3 p-4 bg-green-50 border border-green-200 rounded-xl hover:bg-green-100 transition-colors">
                        <Upload className="w-5 h-5 text-green-600" />
                        <span className="font-medium text-green-700">Upload Content</span>
                      </button>
                      
                      <button className="flex items-center space-x-3 p-4 bg-blue-50 border border-blue-200 rounded-xl hover:bg-blue-100 transition-colors">
                        <BarChart3 className="w-5 h-5 text-blue-600" />
                        <span className="font-medium text-blue-700">View Analytics</span>
                      </button>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-neutral-900 mb-4">Course Performance</h3>
                    <div className="space-y-4">
                      {courses.filter(course => course.status === 'published').slice(0, 3).map((course) => (
                        <div key={course.id} className="flex items-center space-x-4 p-4 bg-neutral-50 rounded-xl">
                          <img
                            src={course.thumbnail}
                            alt={course.title}
                            className="w-16 h-12 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h4 className="font-medium text-neutral-900">{course.title}</h4>
                            <div className="flex items-center space-x-4 text-sm text-neutral-600 mt-1">
                              <span>{course.students} students</span>
                              <span>₹{course.revenue.toLocaleString()}</span>
                              <span>{course.rating} ⭐</span>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-neutral-400" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'courses' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-neutral-900">My Courses</h3>
                    <div className="flex items-center space-x-2">
                      <button className="p-2 text-neutral-600 hover:text-neutral-900 border border-neutral-200 rounded-lg">
                        <Filter className="w-4 h-4" />
                      </button>
                      <Link
                        to="/instructor/course-creation"
                        className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                        <span>New Course</span>
                      </Link>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6">
                    {courses.map((course) => {
                      const StatusIcon = getStatusIcon(course.status);
                      return (
                        <div key={course.id} className="bg-neutral-50 rounded-2xl p-6 border border-neutral-200 hover:shadow-md transition-shadow">
                          <div className="flex items-start space-x-4">
                            <img
                              src={course.thumbnail}
                              alt={course.title}
                              className="w-24 h-18 object-cover rounded-xl"
                            />
                            
                            <div className="flex-1">
                              <div className="flex items-start justify-between mb-2">
                                <div>
                                  <h4 className="text-lg font-bold text-neutral-900 mb-1">{course.title}</h4>
                                  <div className="flex items-center space-x-2">
                                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(course.status)}`}>
                                      <StatusIcon className="w-3 h-3 mr-1" />
                                      {course.status}
                                    </span>
                                    <span className="text-sm text-neutral-600">Updated {course.lastUpdated}</span>
                                  </div>
                                </div>
                                
                                <div className="flex items-center space-x-2">
                                  <Link
                                    to={`/instructor/course-edit/${course.id}`}
                                    className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-white rounded-lg transition-colors"
                                  >
                                    <Edit className="w-4 h-4" />
                                  </Link>
                                  <button className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-white rounded-lg transition-colors">
                                    <MoreHorizontal className="w-4 h-4" />
                                  </button>
                                </div>
                              </div>
                              
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                <div className="text-center">
                                  <div className="text-lg font-bold text-neutral-900">{course.students}</div>
                                  <div className="text-xs text-neutral-600">Students</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-lg font-bold text-neutral-900">{course.lessons}</div>
                                  <div className="text-xs text-neutral-600">Lessons</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-lg font-bold text-neutral-900">{course.rating || 'N/A'}</div>
                                  <div className="text-xs text-neutral-600">Rating</div>
                                </div>
                                <div className="text-center">
                                  <div className="text-lg font-bold text-green-600">₹{course.revenue.toLocaleString()}</div>
                                  <div className="text-xs text-neutral-600">Revenue</div>
                                </div>
                              </div>
                              
                              {course.status === 'draft' && (
                                <div className="mb-4">
                                  <div className="flex items-center justify-between text-sm text-neutral-600 mb-2">
                                    <span>Course Progress</span>
                                    <span>{course.progress}%</span>
                                  </div>
                                  <div className="w-full bg-neutral-200 rounded-full h-2">
                                    <div 
                                      className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                                      style={{ width: `${course.progress}%` }}
                                    ></div>
                                  </div>
                                </div>
                              )}
                              
                              <div className="flex items-center space-x-3">
                                {course.status === 'published' ? (
                                  <>
                                    <Link
                                      to={`/course/${course.id}`}
                                      className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                                    >
                                      <Eye className="w-4 h-4" />
                                      <span>View Course</span>
                                    </Link>
                                    <button className="flex items-center space-x-2 px-4 py-2 border border-neutral-200 text-neutral-700 rounded-lg hover:bg-white transition-colors">
                                      <BarChart3 className="w-4 h-4" />
                                      <span>Analytics</span>
                                    </button>
                                  </>
                                ) : (
                                  <Link
                                    to={`/instructor/course-edit/${course.id}`}
                                    className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                                  >
                                    <Edit className="w-4 h-4" />
                                    <span>Continue Editing</span>
                                  </Link>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {activeTab === 'analytics' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-neutral-900">Course Analytics</h3>
                  <div className="bg-neutral-50 rounded-xl p-8 text-center">
                    <BarChart3 className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-neutral-900 mb-2">Detailed Analytics Coming Soon</h4>
                    <p className="text-neutral-600">
                      Get insights into student engagement, course performance, and revenue analytics.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'students' && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-neutral-900">Student Management</h3>
                  <div className="bg-neutral-50 rounded-xl p-8 text-center">
                    <Users className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                    <h4 className="text-lg font-semibold text-neutral-900 mb-2">Student Dashboard Coming Soon</h4>
                    <p className="text-neutral-600">
                      Manage student enrollments, track progress, and communicate with your learners.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivity.map((activity) => {
                  const Icon = activity.icon;
                  return (
                    <div key={activity.id} className="flex items-start space-x-3">
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center bg-neutral-50`}>
                        <Icon className={`w-4 h-4 ${activity.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-neutral-900">{activity.message}</p>
                        <p className="text-xs text-neutral-500">{activity.time}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">This Month</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">New Enrollments</span>
                  <span className="font-semibold text-neutral-900">234</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Course Completions</span>
                  <span className="font-semibold text-neutral-900">89</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Revenue</span>
                  <span className="font-semibold text-green-600">₹45,600</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-neutral-600">Avg Rating</span>
                  <span className="font-semibold text-yellow-600">4.8 ⭐</span>
                </div>
              </div>
            </div>

            {/* Tips */}
            <div className="bg-gradient-to-br from-primary-50 to-cream-50 rounded-2xl border border-primary-200 p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">💡 Instructor Tips</h3>
              <div className="space-y-3 text-sm">
                <p className="text-neutral-700">
                  <strong>Engage with students:</strong> Respond to Q&A within 24 hours to maintain high ratings.
                </p>
                <p className="text-neutral-700">
                  <strong>Update content:</strong> Keep your courses current with latest industry trends.
                </p>
                <p className="text-neutral-700">
                  <strong>Promote courses:</strong> Share on social media to reach more students.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDashboardPage;