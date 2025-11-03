import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  Trophy,
  Clock,
  Target,
  TrendingUp,
  Calendar,
  Users,
  Star,
  Play,
  CheckCircle,
  Award,
  Zap,
  Brain,
  Code,
  FileText,
  MessageCircle,
  Bell,
  Settings,
  Search,
  Filter,
  ChevronRight,
  BarChart3,
  Flame,
  BookMarked,
  GraduationCap,
  Lightbulb,
  ArrowRight
} from 'lucide-react';
import DashboardNav from '../../components/DashboardNav';
import { useAuth } from '../../contexts/AuthContext';
import { getCourses } from '../../lib/database';

const DashboardPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const { user } = useAuth();
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadCourses = async () => {
      const data = await getCourses();
      setCourses(data.slice(0, 3));
      setLoading(false);
    };
    loadCourses();
  }, []);

  // Mock data - in real app, this would come from API
  const studentData = {
    name: 'Ahmed Khan',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    level: 'Intermediate Developer',
    xp: 2450,
    nextLevelXp: 3000,
    streak: 12,
    coursesCompleted: 8,
    totalCourses: 15,
    weeklyGoal: 10,
    weeklyProgress: 7,
  };

  const currentCourses = [
    {
      id: 1,
      title: 'Complete React Development',
      instructor: 'Zee Ahmad',
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      nextLesson: 'React Hooks Deep Dive',
      timeLeft: '2h 30m',
      difficulty: 'Intermediate',
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      accentColor: 'text-blue-600',
      borderColor: 'border-blue-200',
    },
    {
      id: 2,
      title: 'Python for Data Science',
      instructor: 'Sarah Khan',
      progress: 45,
      totalLessons: 32,
      completedLessons: 14,
      nextLesson: 'Pandas Data Manipulation',
      timeLeft: '1h 45m',
      difficulty: 'Beginner',
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
      accentColor: 'text-green-600',
      borderColor: 'border-green-200',
    },
    {
      id: 3,
      title: 'Freelancing Mastery',
      instructor: 'Ali Hassan',
      progress: 90,
      totalLessons: 16,
      completedLessons: 14,
      nextLesson: 'Client Communication',
      timeLeft: '45m',
      difficulty: 'Advanced',
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      accentColor: 'text-purple-600',
      borderColor: 'border-purple-200',
    },
  ];

  const recentAchievements = [
    {
      id: 1,
      title: 'Code Warrior',
      description: 'Completed 5 coding challenges',
      icon: Code,
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600',
      date: '2 days ago',
    },
    {
      id: 2,
      title: 'Streak Master',
      description: '10 days learning streak',
      icon: Flame,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      date: '1 week ago',
    },
    {
      id: 3,
      title: 'Quick Learner',
      description: 'Finished course in record time',
      icon: Zap,
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      date: '2 weeks ago',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Live Q&A Session',
      instructor: 'Zee Ahmad',
      time: 'Today, 8:00 PM',
      type: 'Live Session',
      bgColor: 'bg-red-50',
      accentColor: 'text-red-600',
    },
    {
      id: 2,
      title: 'React Workshop',
      instructor: 'Sarah Khan',
      time: 'Tomorrow, 6:00 PM',
      type: 'Workshop',
      bgColor: 'bg-blue-50',
      accentColor: 'text-blue-600',
    },
    {
      id: 3,
      title: 'Career Guidance',
      instructor: 'Ali Hassan',
      time: 'Friday, 7:00 PM',
      type: 'Mentorship',
      bgColor: 'bg-green-50',
      accentColor: 'text-green-600',
    },
  ];

  const weeklyStats = [
    { day: 'Mon', hours: 2.5 },
    { day: 'Tue', hours: 1.8 },
    { day: 'Wed', hours: 3.2 },
    { day: 'Thu', hours: 2.1 },
    { day: 'Fri', hours: 1.5 },
    { day: 'Sat', hours: 4.0 },
    { day: 'Sun', hours: 2.8 },
  ];

  const maxHours = Math.max(...weeklyStats.map(stat => stat.hours));

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50">
      {/* Dashboard Navigation */}
      <DashboardNav />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 mb-8 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-2xl font-bold">
                {user?.email?.charAt(0).toUpperCase()}
              </div>
              <div>
                <h1 className="text-2xl font-bold">
                  Welcome back, {user?.email?.split('@')[0]}!
                </h1>
                <p className="text-primary-100">{studentData.level}</p>
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
              
              <button className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* XP Progress */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                <Trophy className="w-6 h-6 text-primary-600" />
              </div>
              <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                Level 5
              </span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-1">
              {studentData.xp.toLocaleString()} XP
            </h3>
            <p className="text-sm text-neutral-600 mb-3">
              {studentData.nextLevelXp - studentData.xp} XP to next level
            </p>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(studentData.xp / studentData.nextLevelXp) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Learning Streak */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                <Flame className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-sm font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded-full">
                On Fire!
              </span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-1">
              {studentData.streak} Days
            </h3>
            <p className="text-sm text-neutral-600">Learning streak</p>
          </div>

          {/* Course Progress */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full">
                {Math.round((studentData.coursesCompleted / studentData.totalCourses) * 100)}%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-1">
              {studentData.coursesCompleted}/{studentData.totalCourses}
            </h3>
            <p className="text-sm text-neutral-600">Courses completed</p>
          </div>

          {/* Weekly Goal */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                {Math.round((studentData.weeklyProgress / studentData.weeklyGoal) * 100)}%
              </span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-1">
              {studentData.weeklyProgress}/{studentData.weeklyGoal}
            </h3>
            <p className="text-sm text-neutral-600">Weekly goal</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Continue Learning */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-neutral-900">Continue Learning</h2>
                <Link 
                  to="/courses" 
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
                >
                  View All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="space-y-4">
                {currentCourses.map((course) => (
                  <div
                    key={course.id}
                    className={`${course.bgColor} ${course.borderColor} border-2 p-4 rounded-xl hover:shadow-md transition-all duration-300 group`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-900 mb-1">{course.title}</h3>
                        <p className="text-sm text-neutral-600">by {course.instructor}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs font-medium ${course.accentColor} bg-white px-2 py-1 rounded-full`}>
                          {course.difficulty}
                        </span>
                        <Link 
                          to={`/course/${course.id}`}
                          className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md transition-shadow group-hover:scale-110 transform duration-200"
                        >
                          <Play className={`w-4 h-4 ${course.accentColor}`} />
                        </Link>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex items-center justify-between text-sm text-neutral-600 mb-1">
                        <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                        <span>{course.progress}% complete</span>
                      </div>
                      <div className="w-full bg-white rounded-full h-2">
                        <div 
                          className={`bg-gradient-to-r ${course.accentColor.replace('text-', 'from-').replace('-600', '-400')} ${course.accentColor.replace('text-', 'to-').replace('-600', '-600')} h-2 rounded-full transition-all duration-300`}
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-neutral-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {course.timeLeft} left
                      </div>
                      <div className="text-sm font-medium text-neutral-700">
                        Next: {course.nextLesson}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Learning Activity */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-neutral-900">Weekly Activity</h2>
                <div className="flex items-center text-sm text-neutral-600">
                  <BarChart3 className="w-4 h-4 mr-1" />
                  18.9 hours this week
                </div>
              </div>
              
              <div className="flex items-end justify-between h-32 mb-4">
                {weeklyStats.map((stat, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-8 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-lg mb-2 transition-all duration-300 hover:from-primary-700 hover:to-primary-500"
                      style={{ height: `${(stat.hours / maxHours) * 100}%` }}
                    ></div>
                    <span className="text-xs text-neutral-600 font-medium">{stat.day}</span>
                    <span className="text-xs text-neutral-500">{stat.hours}h</span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-primary-50 to-cream-50 p-4 rounded-xl border border-primary-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-900">Great progress this week!</p>
                    <p className="text-xs text-neutral-600">You're 70% towards your weekly goal</p>
                  </div>
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Recent Achievements */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-neutral-900">Recent Achievements</h3>
                <Link 
                  to="/achievements" 
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                >
                  View All
                </Link>
              </div>
              
              <div className="space-y-3">
                {recentAchievements.map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={achievement.id}
                      className={`${achievement.bgColor} p-3 rounded-xl border-2 border-transparent hover:border-neutral-200 transition-all duration-200`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-4 h-4 ${achievement.iconColor}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-neutral-900 text-sm">{achievement.title}</h4>
                          <p className="text-xs text-neutral-600 mb-1">{achievement.description}</p>
                          <span className="text-xs text-neutral-500">{achievement.date}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-neutral-900">Upcoming Events</h3>
                <Calendar className="w-5 h-5 text-neutral-400" />
              </div>
              
              <div className="space-y-3">
                {upcomingEvents.map((event) => (
                  <div
                    key={event.id}
                    className={`${event.bgColor} p-3 rounded-xl border-2 border-transparent hover:border-neutral-200 transition-all duration-200 cursor-pointer group`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="font-medium text-neutral-900 text-sm mb-1">{event.title}</h4>
                        <p className="text-xs text-neutral-600 mb-1">by {event.instructor}</p>
                        <div className="flex items-center text-xs text-neutral-500">
                          <Clock className="w-3 h-3 mr-1" />
                          {event.time}
                        </div>
                      </div>
                      <span className={`text-xs font-medium ${event.accentColor} bg-white px-2 py-1 rounded-full`}>
                        {event.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              <button className="w-full mt-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white py-2 px-4 rounded-xl font-medium text-sm hover:from-primary-700 hover:to-primary-800 transition-all duration-200 flex items-center justify-center">
                View Calendar
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Quick Actions</h3>
              
              <div className="grid grid-cols-2 gap-3">
                <Link 
                  to="/courses"
                  className="bg-gradient-to-br from-blue-50 to-blue-100 border-2 border-blue-200 p-3 rounded-xl hover:shadow-md transition-all duration-200 group"
                >
                  <BookMarked className="w-6 h-6 text-blue-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-blue-700">Browse Courses</span>
                </Link>
                
                <button className="bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 p-3 rounded-xl hover:shadow-md transition-all duration-200 group">
                  <Users className="w-6 h-6 text-green-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-green-700">Join Community</span>
                </button>
                
                <button className="bg-gradient-to-br from-purple-50 to-purple-100 border-2 border-purple-200 p-3 rounded-xl hover:shadow-md transition-all duration-200 group">
                  <Trophy className="w-6 h-6 text-purple-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-purple-700">Take Challenge</span>
                </button>
                
                <button className="bg-gradient-to-br from-orange-50 to-orange-100 border-2 border-orange-200 p-3 rounded-xl hover:shadow-md transition-all duration-200 group">
                  <MessageCircle className="w-6 h-6 text-orange-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-medium text-orange-700">Get Help</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;