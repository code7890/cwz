import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  User, 
  MapPin, 
  Calendar, 
  Globe, 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  Edit, 
  Settings, 
  Trophy, 
  Star, 
  Award, 
  BookOpen, 
  Code, 
  Target, 
  Zap, 
  Clock, 
  Users, 
  Heart, 
  Eye, 
  MessageCircle, 
  Share2, 
  Download, 
  ExternalLink, 
  CheckCircle, 
  Flame, 
  Crown, 
  Medal, 
  Rocket, 
  Lightbulb, 
  Shield, 
  Brain,
  ChevronRight,
  Plus,
  Camera,
  Upload,
  Link as LinkIcon
} from 'lucide-react';

const UserProfilePage: React.FC = () => {
  const { userId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [isOwnProfile] = useState(true); // In real app, check if current user's profile

  // Mock user data
  const userData = {
    id: 1,
    name: 'Ahmed Khan',
    username: 'ahmed_dev',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
    coverImage: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1200&h=400&fit=crop',
    title: 'Full Stack Developer',
    bio: 'Passionate developer from Karachi, Pakistan. Love building web applications and helping others learn to code. Currently working as a freelancer and building my own startup.',
    location: 'Karachi, Pakistan',
    joinDate: 'January 2024',
    website: 'https://ahmedkhan.dev',
    email: 'ahmed@example.com',
    social: {
      github: 'ahmedkhan',
      linkedin: 'ahmed-khan-dev',
      twitter: 'ahmed_codes',
    },
    stats: {
      level: 15,
      xp: 12450,
      nextLevelXp: 15000,
      rank: 156,
      streak: 12,
      coursesCompleted: 8,
      totalCourses: 15,
      challengesSolved: 23,
      badges: 18,
      certificates: 5,
      reputation: 1250,
      helpfulAnswers: 45,
      projectsShared: 12,
      followers: 234,
      following: 89,
    },
    skills: [
      { name: 'JavaScript', level: 85, xp: 2400, color: 'bg-yellow-400' },
      { name: 'React', level: 78, xp: 2100, color: 'bg-blue-400' },
      { name: 'Node.js', level: 72, xp: 1950, color: 'bg-green-400' },
      { name: 'Python', level: 65, xp: 1800, color: 'bg-purple-400' },
      { name: 'CSS', level: 82, xp: 2200, color: 'bg-pink-400' },
      { name: 'MongoDB', level: 58, xp: 1500, color: 'bg-indigo-400' },
    ],
    recentActivity: [
      {
        id: 1,
        type: 'course_completed',
        title: 'Completed "Advanced React Patterns"',
        time: '2 hours ago',
        xp: 150,
        icon: CheckCircle,
        color: 'text-green-600',
      },
      {
        id: 2,
        type: 'challenge_solved',
        title: 'Solved "Binary Tree Traversal"',
        time: '5 hours ago',
        xp: 75,
        icon: Trophy,
        color: 'text-yellow-600',
      },
      {
        id: 3,
        type: 'project_shared',
        title: 'Shared "E-commerce Dashboard"',
        time: '1 day ago',
        xp: 100,
        icon: Rocket,
        color: 'text-purple-600',
      },
      {
        id: 4,
        type: 'badge_earned',
        title: 'Earned "React Expert" badge',
        time: '2 days ago',
        xp: 200,
        icon: Award,
        color: 'text-blue-600',
      },
    ],
  };

  const achievements = [
    {
      id: 1,
      title: 'React Master',
      description: 'Completed all React courses with 90%+ score',
      icon: Code,
      bgColor: 'bg-blue-50',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      earned: true,
      earnedDate: '1 week ago',
      rarity: 'Epic',
    },
    {
      id: 2,
      title: 'Community Helper',
      description: 'Helped 50+ students in community',
      icon: Users,
      bgColor: 'bg-green-50',
      iconColor: 'text-green-600',
      borderColor: 'border-green-200',
      earned: true,
      earnedDate: '2 weeks ago',
      rarity: 'Rare',
    },
    {
      id: 3,
      title: 'Streak Champion',
      description: '30 days consecutive learning',
      icon: Flame,
      bgColor: 'bg-orange-50',
      iconColor: 'text-orange-600',
      borderColor: 'border-orange-200',
      earned: true,
      earnedDate: '1 month ago',
      rarity: 'Legendary',
    },
    {
      id: 4,
      title: 'Project Showcase',
      description: 'Shared 10+ projects with community',
      icon: Rocket,
      bgColor: 'bg-purple-50',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      earned: true,
      earnedDate: '3 weeks ago',
      rarity: 'Epic',
    },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Dashboard',
      description: 'A comprehensive admin dashboard for e-commerce management built with React and Node.js',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
      likes: 45,
      views: 234,
      comments: 12,
      liveUrl: 'https://ecommerce-dashboard.demo',
      githubUrl: 'https://github.com/ahmed/ecommerce-dashboard',
      featured: true,
    },
    {
      id: 2,
      title: 'Weather App',
      description: 'Beautiful weather application with location-based forecasts and interactive maps',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'API Integration', 'CSS3'],
      likes: 32,
      views: 189,
      comments: 8,
      liveUrl: 'https://weather-app.demo',
      githubUrl: 'https://github.com/ahmed/weather-app',
      featured: false,
    },
    {
      id: 3,
      title: 'Task Management Tool',
      description: 'Collaborative task management application with real-time updates and team features',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      technologies: ['React', 'Socket.io', 'Express', 'PostgreSQL'],
      likes: 67,
      views: 456,
      comments: 23,
      liveUrl: 'https://taskmanager.demo',
      githubUrl: 'https://github.com/ahmed/task-manager',
      featured: true,
    },
  ];

  const certificates = [
    {
      id: 1,
      title: 'Complete React Development',
      issuer: 'CodeWithZee',
      issueDate: 'March 2024',
      credentialId: 'CWZ-REACT-2024-001',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      skills: ['React', 'JavaScript', 'Redux'],
      verified: true,
    },
    {
      id: 2,
      title: 'Full Stack Web Development',
      issuer: 'CodeWithZee',
      issueDate: 'February 2024',
      credentialId: 'CWZ-FULLSTACK-2024-001',
      image: 'https://images.pexels.com/photos/267507/pexels-photo-267507.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
      skills: ['HTML', 'CSS', 'JavaScript', 'Node.js'],
      verified: true,
    },
  ];

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
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50">
      {/* Cover Image */}
      <div className="relative h-64 bg-gradient-to-r from-primary-600 to-primary-700">
        <img
          src={userData.coverImage}
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20"></div>
        {isOwnProfile && (
          <button className="absolute top-4 right-4 bg-white/90 text-neutral-700 p-2 rounded-lg hover:bg-white transition-colors">
            <Camera className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Profile Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 p-6">
          <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-6">
            {/* Avatar */}
            <div className="relative">
              <img
                src={userData.avatar}
                alt={userData.name}
                className="w-32 h-32 rounded-2xl border-4 border-white shadow-lg"
              />
              {isOwnProfile && (
                <button className="absolute bottom-2 right-2 bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition-colors">
                  <Camera className="w-4 h-4" />
                </button>
              )}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                {userData.stats.level}
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h1 className="text-2xl font-bold text-neutral-900 mb-1">{userData.name}</h1>
                  <p className="text-primary-600 font-semibold mb-2">@{userData.username}</p>
                  <p className="text-lg text-neutral-700 mb-2">{userData.title}</p>
                </div>
                {isOwnProfile ? (
                  <div className="flex items-center space-x-2">
                    <Link
                      to="/profile/edit"
                      className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <Edit className="w-4 h-4" />
                      <span>Edit Profile</span>
                    </Link>
                    <button className="p-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg transition-colors">
                      <Settings className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <button className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                      Follow
                    </button>
                    <button className="px-4 py-2 border border-neutral-200 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors">
                      Message
                    </button>
                  </div>
                )}
              </div>

              <p className="text-neutral-700 mb-4 leading-relaxed">{userData.bio}</p>

              {/* Quick Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-600 mb-4">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {userData.location}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  Joined {userData.joinDate}
                </div>
                <div className="flex items-center">
                  <Globe className="w-4 h-4 mr-1" />
                  <a href={userData.website} className="text-primary-600 hover:text-primary-700">
                    {userData.website}
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-3">
                <a href={`https://github.com/${userData.social.github}`} className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href={`https://linkedin.com/in/${userData.social.linkedin}`} className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={`https://twitter.com/${userData.social.twitter}`} className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={`mailto:${userData.email}`} className="text-neutral-600 hover:text-neutral-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-6">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200 text-center">
            <div className="text-2xl font-bold text-primary-600 mb-1">{userData.stats.xp.toLocaleString()}</div>
            <div className="text-sm text-neutral-600">Total XP</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">#{userData.stats.rank}</div>
            <div className="text-sm text-neutral-600">Rank</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200 text-center">
            <div className="text-2xl font-bold text-red-600 mb-1 flex items-center justify-center">
              <Flame className="w-6 h-6 mr-1" />
              {userData.stats.streak}
            </div>
            <div className="text-sm text-neutral-600">Streak</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200 text-center">
            <div className="text-2xl font-bold text-green-600 mb-1">{userData.stats.coursesCompleted}</div>
            <div className="text-sm text-neutral-600">Courses</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">{userData.stats.badges}</div>
            <div className="text-sm text-neutral-600">Badges</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200 text-center">
            <div className="text-2xl font-bold text-blue-600 mb-1">{userData.stats.reputation}</div>
            <div className="text-sm text-neutral-600">Reputation</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 mt-6">
          <div className="border-b border-neutral-200 px-6">
            <div className="flex space-x-8 overflow-x-auto">
              {[
                { id: 'overview', name: 'Overview', icon: User },
                { id: 'projects', name: 'Projects', icon: Rocket },
                { id: 'achievements', name: 'Achievements', icon: Trophy },
                { id: 'certificates', name: 'Certificates', icon: Award },
                { id: 'activity', name: 'Activity', icon: Clock },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'border-primary-600 text-primary-600'
                        : 'border-transparent text-neutral-500 hover:text-neutral-700'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Skills */}
                <div className="lg:col-span-2">
                  <h3 className="text-lg font-bold text-neutral-900 mb-4">Skills & Expertise</h3>
                  <div className="space-y-4">
                    {userData.skills.map((skill, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-20 text-sm font-medium text-neutral-700">{skill.name}</div>
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

                {/* Recent Activity */}
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 mb-4">Recent Activity</h3>
                  <div className="space-y-4">
                    {userData.recentActivity.slice(0, 5).map((activity) => {
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
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-neutral-900">Projects Portfolio</h3>
                  {isOwnProfile && (
                    <button className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                      <Plus className="w-4 h-4" />
                      <span>Add Project</span>
                    </button>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {projects.map((project) => (
                    <div key={project.id} className="bg-neutral-50 rounded-2xl overflow-hidden border border-neutral-200 hover:shadow-lg transition-all duration-300 group">
                      <div className="relative">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-48 object-cover"
                        />
                        {project.featured && (
                          <div className="absolute top-3 left-3 bg-primary-600 text-white px-2 py-1 rounded-full text-xs font-bold">
                            Featured
                          </div>
                        )}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                          <a
                            href={project.liveUrl}
                            className="bg-white text-neutral-900 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                            title="View Live"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                          <a
                            href={project.githubUrl}
                            className="bg-white text-neutral-900 p-2 rounded-lg hover:bg-neutral-100 transition-colors"
                            title="View Code"
                          >
                            <Github className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="font-bold text-neutral-900 mb-2">{project.title}</h4>
                        <p className="text-neutral-700 text-sm mb-3 line-clamp-2">{project.description}</p>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <span key={index} className="text-xs bg-white text-neutral-600 px-2 py-1 rounded-full border border-neutral-200">
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-xs text-neutral-500 px-2 py-1">
                              +{project.technologies.length - 3}
                            </span>
                          )}
                        </div>
                        <div className="flex items-center justify-between text-sm text-neutral-600">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center">
                              <Heart className="w-4 h-4 mr-1" />
                              {project.likes}
                            </div>
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 mr-1" />
                              {project.views}
                            </div>
                            <div className="flex items-center">
                              <MessageCircle className="w-4 h-4 mr-1" />
                              {project.comments}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-neutral-900">Achievements & Badges</h3>
                  <span className="text-sm text-neutral-600">{achievements.length} earned</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {achievements.map((achievement) => {
                    const Icon = achievement.icon;
                    return (
                      <div
                        key={achievement.id}
                        className={`${achievement.bgColor} ${achievement.borderColor} border-2 p-6 rounded-2xl hover:shadow-lg transition-all duration-300`}
                      >
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                            <Icon className={`w-6 h-6 ${achievement.iconColor}`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-bold text-neutral-900">{achievement.title}</h4>
                              <span className={`text-xs px-2 py-1 rounded-full border ${getRarityColor(achievement.rarity)}`}>
                                {achievement.rarity}
                              </span>
                            </div>
                            <p className="text-sm text-neutral-700 mb-3">{achievement.description}</p>
                            <span className="text-xs text-green-600 font-medium">Earned {achievement.earnedDate}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'certificates' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-neutral-900">Certificates & Credentials</h3>
                  <span className="text-sm text-neutral-600">{certificates.length} certificates</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {certificates.map((certificate) => (
                    <div key={certificate.id} className="bg-white rounded-2xl border border-neutral-200 overflow-hidden hover:shadow-lg transition-shadow">
                      <img
                        src={certificate.image}
                        alt={certificate.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <h4 className="font-bold text-neutral-900 mb-1">{certificate.title}</h4>
                            <p className="text-sm text-neutral-600">Issued by {certificate.issuer}</p>
                          </div>
                          {certificate.verified && (
                            <div className="flex items-center text-green-600">
                              <CheckCircle className="w-4 h-4 mr-1" />
                              <span className="text-xs font-medium">Verified</span>
                            </div>
                          )}
                        </div>
                        <div className="text-sm text-neutral-600 mb-3">
                          <div>Issued: {certificate.issueDate}</div>
                          <div>Credential ID: {certificate.credentialId}</div>
                        </div>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {certificate.skills.map((skill, index) => (
                            <span key={index} className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                              {skill}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center space-x-2">
                          <button className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 text-sm font-medium">
                            <ExternalLink className="w-4 h-4" />
                            <span>View Certificate</span>
                          </button>
                          <button className="flex items-center space-x-1 text-neutral-600 hover:text-neutral-700 text-sm">
                            <Share2 className="w-4 h-4" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'activity' && (
              <div>
                <h3 className="text-lg font-bold text-neutral-900 mb-6">Learning Activity</h3>
                <div className="space-y-4">
                  {userData.recentActivity.map((activity) => {
                    const Icon = activity.icon;
                    return (
                      <div key={activity.id} className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                        <div className="flex items-start space-x-4">
                          <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-white shadow-sm`}>
                            <Icon className={`w-5 h-5 ${activity.color}`} />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-neutral-900 mb-1">{activity.title}</p>
                            <div className="flex items-center space-x-3 text-sm text-neutral-600">
                              <span>{activity.time}</span>
                              <span className="font-medium text-primary-600">+{activity.xp} XP</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;