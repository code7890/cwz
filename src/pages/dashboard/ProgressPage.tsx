import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Trophy, 
  Target, 
  Calendar, 
  Clock, 
  Award, 
  Star, 
  Flame, 
  Zap, 
  BookOpen, 
  Code, 
  Users, 
  CheckCircle, 
  ArrowUp, 
  ArrowDown, 
  BarChart3, 
  PieChart, 
  Activity, 
  Brain,
  Heart,
  Eye,
  Download,
  Share2,
  Filter,
  ChevronDown,
  ChevronRight,
  Medal,
  Rocket,
  Lightbulb,
  Shield,
  Crown
} from 'lucide-react';

const ProgressPage: React.FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('week');
  const [selectedMetric, setSelectedMetric] = useState('xp');
  const [showDetailedStats, setShowDetailedStats] = useState(false);

  const periods = [
    { id: 'week', name: 'This Week' },
    { id: 'month', name: 'This Month' },
    { id: 'quarter', name: 'This Quarter' },
    { id: 'year', name: 'This Year' },
    { id: 'all', name: 'All Time' },
  ];

  const metrics = [
    { id: 'xp', name: 'Experience Points', icon: Zap },
    { id: 'time', name: 'Learning Time', icon: Clock },
    { id: 'courses', name: 'Courses Progress', icon: BookOpen },
    { id: 'challenges', name: 'Challenges Solved', icon: Trophy },
  ];

  // Mock user data
  const userData = {
    name: 'Ahmed Khan',
    level: 15,
    currentXP: 12450,
    nextLevelXP: 15000,
    totalXP: 12450,
    rank: 156,
    streak: 12,
    joinDate: 'January 2024',
    totalLearningTime: 145, // hours
    coursesCompleted: 8,
    totalCourses: 15,
    challengesSolved: 23,
    badges: 18,
    certificates: 5,
  };

  const weeklyData = [
    { day: 'Mon', xp: 120, time: 2.5, courses: 0.3, challenges: 1 },
    { day: 'Tue', xp: 80, time: 1.8, courses: 0.2, challenges: 0 },
    { day: 'Wed', xp: 200, time: 3.2, courses: 0.5, challenges: 2 },
    { day: 'Thu', xp: 150, time: 2.1, courses: 0.4, challenges: 1 },
    { day: 'Fri', xp: 90, time: 1.5, courses: 0.2, challenges: 1 },
    { day: 'Sat', xp: 300, time: 4.0, courses: 0.8, challenges: 3 },
    { day: 'Sun', xp: 180, time: 2.8, courses: 0.6, challenges: 2 },
  ];

  const achievements = [
    {
      id: 1,
      title: 'Code Warrior',
      description: 'Solved 20+ coding challenges',
      icon: Code,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      earned: true,
      earnedDate: '2 days ago',
      rarity: 'Common',
    },
    {
      id: 2,
      title: 'Learning Streak',
      description: '10 days consecutive learning',
      icon: Flame,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200',
      earned: true,
      earnedDate: '1 week ago',
      rarity: 'Rare',
    },
    {
      id: 3,
      title: 'Course Master',
      description: 'Completed 5 courses with 90%+ score',
      icon: BookOpen,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200',
      earned: true,
      earnedDate: '2 weeks ago',
      rarity: 'Epic',
    },
    {
      id: 4,
      title: 'Community Helper',
      description: 'Helped 50+ students in community',
      icon: Users,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      earned: false,
      progress: 32,
      total: 50,
      rarity: 'Legendary',
    },
    {
      id: 5,
      title: 'Speed Learner',
      description: 'Complete a course in under 2 weeks',
      icon: Rocket,
      bgColor: 'bg-pink-50',
      iconColor: 'text-pink-600',
      borderColor: 'border-pink-200',
      earned: false,
      progress: 8,
      total: 14,
      rarity: 'Rare',
    },
    {
      id: 6,
      title: 'Perfect Score',
      description: 'Get 100% in any assessment',
      icon: Star,
      bgColor: 'bg-yellow-50',
      iconColor: 'text-yellow-600',
      borderColor: 'border-yellow-200',
      earned: false,
      progress: 0,
      total: 1,
      rarity: 'Epic',
    },
  ];

  const courseProgress = [
    {
      id: 1,
      title: 'Complete React Development',
      progress: 75,
      totalLessons: 24,
      completedLessons: 18,
      timeSpent: 32,
      lastActivity: '2 hours ago',
      bgColor: 'bg-blue-50',
      accentColor: 'text-blue-600',
    },
    {
      id: 2,
      title: 'Python for Data Science',
      progress: 45,
      totalLessons: 32,
      completedLessons: 14,
      timeSpent: 28,
      lastActivity: '1 day ago',
      bgColor: 'bg-green-50',
      accentColor: 'text-green-600',
    },
    {
      id: 3,
      title: 'Freelancing Mastery',
      progress: 90,
      totalLessons: 16,
      completedLessons: 14,
      timeSpent: 18,
      lastActivity: '3 hours ago',
      bgColor: 'bg-purple-50',
      accentColor: 'text-purple-600',
    },
  ];

  const skillsData = [
    { skill: 'JavaScript', level: 85, xp: 2400, color: 'bg-yellow-400' },
    { skill: 'React', level: 78, xp: 2100, color: 'bg-blue-400' },
    { skill: 'Python', level: 65, xp: 1800, color: 'bg-green-400' },
    { skill: 'CSS', level: 82, xp: 2200, color: 'bg-pink-400' },
    { skill: 'Node.js', level: 45, xp: 1200, color: 'bg-purple-400' },
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'course_completed',
      title: 'Completed "React Hooks Deep Dive"',
      time: '2 hours ago',
      xp: 150,
      icon: CheckCircle,
      color: 'text-green-600',
    },
    {
      id: 2,
      type: 'challenge_solved',
      title: 'Solved "Two Sum Problem"',
      time: '5 hours ago',
      xp: 50,
      icon: Trophy,
      color: 'text-yellow-600',
    },
    {
      id: 3,
      type: 'badge_earned',
      title: 'Earned "Code Warrior" badge',
      time: '1 day ago',
      xp: 100,
      icon: Award,
      color: 'text-purple-600',
    },
    {
      id: 4,
      type: 'streak_milestone',
      title: 'Reached 10-day learning streak',
      time: '2 days ago',
      xp: 200,
      icon: Flame,
      color: 'text-orange-600',
    },
  ];

  const maxValue = Math.max(...weeklyData.map(d => d[selectedMetric as keyof typeof d] as number));

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'Common': return 'text-neutral-600 bg-neutral-50 border-neutral-200';
      case 'Rare': return 'text-blue-600 bg-blue-50 border-blue-200';
      case 'Epic': return 'text-purple-600 bg-purple-50 border-purple-200';
      case 'Legendary': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      default: return 'text-neutral-600 bg-neutral-50 border-neutral-200';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">Learning Progress</h1>
            <p className="text-neutral-600">Track your journey and celebrate your achievements</p>
          </div>
          <div className="flex items-center space-x-3">
            <button className="flex items-center space-x-2 px-4 py-2 bg-white border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors">
              <Download className="w-4 h-4" />
              <span>Export Report</span>
            </button>
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
              <Share2 className="w-4 h-4" />
              <span>Share Progress</span>
            </button>
          </div>
        </div>

        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Level & XP */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
                <Crown className="w-6 h-6 text-primary-600" />
              </div>
              <span className="text-sm font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                Level {userData.level}
              </span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-1">
              {userData.currentXP.toLocaleString()} XP
            </h3>
            <p className="text-sm text-neutral-600 mb-3">
              {(userData.nextLevelXP - userData.currentXP).toLocaleString()} XP to next level
            </p>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(userData.currentXP / userData.nextLevelXP) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Rank */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div className="flex items-center text-green-600 text-sm">
                <ArrowUp className="w-4 h-4 mr-1" />
                +12
              </div>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-1">
              #{userData.rank}
            </h3>
            <p className="text-sm text-neutral-600">Global Rank</p>
          </div>

          {/* Streak */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center">
                <Flame className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-sm font-medium text-red-600 bg-red-50 px-2 py-1 rounded-full">
                On Fire!
              </span>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-1">
              {userData.streak} Days
            </h3>
            <p className="text-sm text-neutral-600">Learning Streak</p>
          </div>

          {/* Learning Time */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <div className="flex items-center text-green-600 text-sm">
                <ArrowUp className="w-4 h-4 mr-1" />
                +2.5h
              </div>
            </div>
            <h3 className="text-2xl font-bold text-neutral-900 mb-1">
              {userData.totalLearningTime}h
            </h3>
            <p className="text-sm text-neutral-600">Total Learning Time</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Analytics */}
          <div className="lg:col-span-2 space-y-8">
            {/* Activity Chart */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-neutral-900">Learning Activity</h2>
                <div className="flex items-center space-x-3">
                  <select
                    value={selectedMetric}
                    onChange={(e) => setSelectedMetric(e.target.value)}
                    className="px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {metrics.map(metric => (
                      <option key={metric.id} value={metric.id}>{metric.name}</option>
                    ))}
                  </select>
                  <select
                    value={selectedPeriod}
                    onChange={(e) => setSelectedPeriod(e.target.value)}
                    className="px-3 py-2 border border-neutral-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  >
                    {periods.map(period => (
                      <option key={period.id} value={period.id}>{period.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              {/* Chart */}
              <div className="flex items-end justify-between h-48 mb-4">
                {weeklyData.map((data, index) => (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div 
                      className="w-8 bg-gradient-to-t from-primary-600 to-primary-400 rounded-t-lg mb-2 transition-all duration-300 hover:from-primary-700 hover:to-primary-500"
                      style={{ height: `${(data[selectedMetric as keyof typeof data] as number / maxValue) * 100}%` }}
                    ></div>
                    <span className="text-xs text-neutral-600 font-medium">{data.day}</span>
                    <span className="text-xs text-neutral-500">
                      {selectedMetric === 'time' ? `${data[selectedMetric]}h` : data[selectedMetric as keyof typeof data]}
                    </span>
                  </div>
                ))}
              </div>
              
              <div className="bg-gradient-to-r from-primary-50 to-cream-50 p-4 rounded-xl border border-primary-100">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-neutral-900">This week's performance</p>
                    <p className="text-xs text-neutral-600">You're doing great! Keep up the momentum</p>
                  </div>
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <TrendingUp className="w-6 h-6 text-primary-600" />
                  </div>
                </div>
              </div>
            </div>

            {/* Course Progress */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-neutral-900">Course Progress</h2>
                <Link 
                  to="/courses" 
                  className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center"
                >
                  View All
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="space-y-4">
                {courseProgress.map((course) => (
                  <div key={course.id} className={`${course.bgColor} p-4 rounded-xl border-2 border-transparent hover:border-neutral-200 transition-all duration-200`}>
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h3 className="font-semibold text-neutral-900 mb-1">{course.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-neutral-600">
                          <span>{course.completedLessons}/{course.totalLessons} lessons</span>
                          <span>{course.timeSpent}h spent</span>
                          <span>Last: {course.lastActivity}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className={`text-lg font-bold ${course.accentColor}`}>{course.progress}%</div>
                      </div>
                    </div>
                    
                    <div className="w-full bg-white rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${course.accentColor.replace('text-', 'from-').replace('-600', '-400')} ${course.accentColor.replace('text-', 'to-').replace('-600', '-600')} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Progress */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h2 className="text-xl font-bold text-neutral-900 mb-6">Skills Development</h2>
              
              <div className="space-y-4">
                {skillsData.map((skill, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="w-20 text-sm font-medium text-neutral-700">{skill.skill}</div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm text-neutral-600">Level {Math.floor(skill.level / 10)}</span>
                        <span className="text-sm font-medium text-neutral-900">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div 
                          className={`${skill.color} h-2 rounded-full transition-all duration-300`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="text-sm text-neutral-500">{skill.xp} XP</div>
                  </div>
                ))}
              </div>
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
                        <p className="text-sm font-medium text-neutral-900">{activity.title}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-xs text-neutral-500">{activity.time}</span>
                          <span className="text-xs font-medium text-primary-600">+{activity.xp} XP</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-neutral-900">Achievements</h3>
                <span className="text-sm text-neutral-600">{achievements.filter(a => a.earned).length}/{achievements.length}</span>
              </div>
              
              <div className="space-y-3">
                {achievements.slice(0, 4).map((achievement) => {
                  const Icon = achievement.icon;
                  return (
                    <div
                      key={achievement.id}
                      className={`${achievement.bgColor} ${achievement.borderColor} border-2 p-3 rounded-xl ${
                        achievement.earned ? '' : 'opacity-60'
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <div className={`w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0`}>
                          <Icon className={`w-4 h-4 ${achievement.iconColor}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center space-x-2 mb-1">
                            <h4 className="font-medium text-neutral-900 text-sm">{achievement.title}</h4>
                            <span className={`text-xs px-1 py-0.5 rounded border ${getRarityColor(achievement.rarity)}`}>
                              {achievement.rarity}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-600 mb-2">{achievement.description}</p>
                          {achievement.earned ? (
                            <span className="text-xs text-green-600 font-medium">Earned {achievement.earnedDate}</span>
                          ) : (
                            <div className="space-y-1">
                              <div className="flex items-center justify-between text-xs text-neutral-600">
                                <span>Progress</span>
                                <span>{achievement.progress}/{achievement.total}</span>
                              </div>
                              <div className="w-full bg-white rounded-full h-1">
                                <div 
                                  className={`bg-gradient-to-r ${achievement.iconColor.replace('text-', 'from-').replace('-600', '-400')} ${achievement.iconColor.replace('text-', 'to-').replace('-600', '-600')} h-1 rounded-full`}
                                  style={{ width: `${(achievement.progress! / achievement.total!) * 100}%` }}
                                ></div>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              <Link 
                to="/achievements" 
                className="block text-center text-primary-600 hover:text-primary-700 text-sm font-medium mt-4"
              >
                View All Achievements
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Quick Stats</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4 text-blue-600" />
                    <span className="text-sm text-neutral-700">Courses Completed</span>
                  </div>
                  <span className="font-semibold text-neutral-900">{userData.coursesCompleted}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Trophy className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm text-neutral-700">Challenges Solved</span>
                  </div>
                  <span className="font-semibold text-neutral-900">{userData.challengesSolved}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="w-4 h-4 text-purple-600" />
                    <span className="text-sm text-neutral-700">Badges Earned</span>
                  </div>
                  <span className="font-semibold text-neutral-900">{userData.badges}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Medal className="w-4 h-4 text-green-600" />
                    <span className="text-sm text-neutral-700">Certificates</span>
                  </div>
                  <span className="font-semibold text-neutral-900">{userData.certificates}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressPage;