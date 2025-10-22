import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  MessageCircle, 
  Heart, 
  Share2, 
  Trophy, 
  Star, 
  Clock, 
  Eye, 
  ThumbsUp, 
  MessageSquare, 
  Bookmark, 
  Flag, 
  Search, 
  Filter, 
  Plus, 
  TrendingUp, 
  Award, 
  Code, 
  Lightbulb, 
  HelpCircle, 
  Rocket, 
  Target, 
  Zap, 
  Crown, 
  Medal, 
  Flame, 
  ChevronRight, 
  Send, 
  Image, 
  Paperclip, 
  Smile,
  MoreHorizontal,
  Pin,
  CheckCircle,
  Calendar,
  MapPin,
  Globe,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';

const CommunityPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('discussions');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [newPostContent, setNewPostContent] = useState('');
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  const categories = [
    { id: 'all', name: 'All Discussions', icon: MessageCircle, count: 1247 },
    { id: 'help', name: 'Help & Support', icon: HelpCircle, count: 324 },
    { id: 'showcase', name: 'Project Showcase', icon: Rocket, count: 189 },
    { id: 'career', name: 'Career Advice', icon: Target, count: 156 },
    { id: 'resources', name: 'Learning Resources', icon: Lightbulb, count: 98 },
    { id: 'general', name: 'General Chat', icon: MessageSquare, count: 480 },
  ];

  const sortOptions = [
    { id: 'latest', name: 'Latest' },
    { id: 'popular', name: 'Most Popular' },
    { id: 'trending', name: 'Trending' },
    { id: 'unanswered', name: 'Unanswered' },
  ];

  const discussions = [
    {
      id: 1,
      title: 'How to handle async/await in React useEffect?',
      content: 'I\'m struggling with using async/await inside useEffect. Getting some weird behavior with my API calls. Can someone help?',
      author: {
        name: 'Ahmed Khan',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        level: 15,
        badge: 'React Expert',
        reputation: 1250,
      },
      category: 'help',
      tags: ['React', 'JavaScript', 'Async/Await'],
      likes: 23,
      replies: 8,
      views: 156,
      timeAgo: '2 hours ago',
      isPinned: false,
      isSolved: false,
      hasCodeSnippet: true,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      id: 2,
      title: 'Built my first full-stack e-commerce app! 🎉',
      content: 'After 3 months of learning, I finally completed my first major project. Used React, Node.js, and MongoDB. Would love feedback!',
      author: {
        name: 'Fatima Ali',
        avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        level: 12,
        badge: 'Full Stack',
        reputation: 890,
      },
      category: 'showcase',
      tags: ['React', 'Node.js', 'MongoDB', 'Project'],
      likes: 67,
      replies: 15,
      views: 342,
      timeAgo: '4 hours ago',
      isPinned: true,
      isSolved: false,
      hasCodeSnippet: false,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      id: 3,
      title: 'Freelancing tips for beginners in Pakistan',
      content: 'Started freelancing 6 months ago and now earning $1000+/month. Here are some tips that helped me get started...',
      author: {
        name: 'Hassan Sheikh',
        avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        level: 18,
        badge: 'Freelancer',
        reputation: 1680,
      },
      category: 'career',
      tags: ['Freelancing', 'Career', 'Tips'],
      likes: 89,
      replies: 24,
      views: 567,
      timeAgo: '1 day ago',
      isPinned: false,
      isSolved: false,
      hasCodeSnippet: false,
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      id: 4,
      title: 'Best VS Code extensions for web development?',
      content: 'Looking for recommendations on VS Code extensions that can boost productivity for web development. What are your favorites?',
      author: {
        name: 'Sara Khan',
        avatar: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        level: 10,
        badge: 'Developer',
        reputation: 650,
      },
      category: 'resources',
      tags: ['VS Code', 'Tools', 'Productivity'],
      likes: 34,
      replies: 12,
      views: 234,
      timeAgo: '6 hours ago',
      isPinned: false,
      isSolved: true,
      hasCodeSnippet: false,
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
    },
    {
      id: 5,
      title: 'Weekly coding challenge discussion',
      content: 'Let\'s discuss this week\'s coding challenge! Share your approaches and solutions here.',
      author: {
        name: 'CodeWithZee Team',
        avatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
        level: 25,
        badge: 'Moderator',
        reputation: 5000,
      },
      category: 'general',
      tags: ['Challenge', 'Discussion', 'Weekly'],
      likes: 45,
      replies: 18,
      views: 289,
      timeAgo: '3 days ago',
      isPinned: true,
      isSolved: false,
      hasCodeSnippet: true,
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
    },
  ];

  const successStories = [
    {
      id: 1,
      name: 'Ali Hassan',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      title: 'From Zero to Full Stack Developer',
      story: 'Started with no coding experience. After 8 months of consistent learning on CodeWithZee, landed my first job as a Full Stack Developer at a tech startup.',
      achievement: 'Got hired at TechCorp',
      timeframe: '8 months',
      salary: '$800/month',
      skills: ['React', 'Node.js', 'MongoDB'],
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      id: 2,
      name: 'Fatima Sheikh',
      avatar: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      title: 'Freelancing Success Story',
      story: 'Learned web development while managing household. Now earning more than my husband through freelancing projects.',
      achievement: 'Earning $1200+/month',
      timeframe: '6 months',
      salary: '$1200/month',
      skills: ['WordPress', 'PHP', 'JavaScript'],
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      id: 3,
      name: 'Ahmed Khan',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      title: 'Career Switch Success',
      story: 'Was working in a textile factory. Learned Python and Data Science. Now working as a Data Analyst at a multinational company.',
      achievement: 'Career switch to Data Science',
      timeframe: '10 months',
      salary: '$1000/month',
      skills: ['Python', 'Data Analysis', 'Machine Learning'],
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
  ];

  const topContributors = [
    {
      id: 1,
      name: 'Hassan Sheikh',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      reputation: 1680,
      helpfulAnswers: 89,
      badge: 'Community Hero',
      level: 18,
    },
    {
      id: 2,
      name: 'Fatima Ali',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      reputation: 1450,
      helpfulAnswers: 76,
      badge: 'Helper',
      level: 16,
    },
    {
      id: 3,
      name: 'Ahmed Khan',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      reputation: 1250,
      helpfulAnswers: 65,
      badge: 'Mentor',
      level: 15,
    },
  ];

  const communityStats = [
    { label: 'Active Members', value: '12,450', icon: Users, color: 'text-blue-600' },
    { label: 'Discussions', value: '1,247', icon: MessageCircle, color: 'text-green-600' },
    { label: 'Success Stories', value: '89', icon: Trophy, color: 'text-yellow-600' },
    { label: 'Mentors Available', value: '156', icon: Award, color: 'text-purple-600' },
  ];

  const filteredDiscussions = discussions.filter(discussion => {
    const matchesCategory = selectedCategory === 'all' || discussion.category === selectedCategory;
    return matchesCategory;
  });

  const DiscussionCard = ({ discussion }: { discussion: any }) => (
    <div className={`${discussion.bgColor} ${discussion.borderColor} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group`}>
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <img
            src={discussion.author.avatar}
            alt={discussion.author.name}
            className="w-10 h-10 rounded-full border-2 border-white shadow-sm"
          />
          <div>
            <div className="flex items-center space-x-2">
              <h4 className="font-semibold text-neutral-900">{discussion.author.name}</h4>
              <span className="text-xs bg-white text-neutral-600 px-2 py-1 rounded-full border border-neutral-200">
                Level {discussion.author.level}
              </span>
              <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full border border-primary-200">
                {discussion.author.badge}
              </span>
            </div>
            <p className="text-sm text-neutral-600">{discussion.timeAgo}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {discussion.isPinned && (
            <Pin className="w-4 h-4 text-orange-600" />
          )}
          {discussion.isSolved && (
            <CheckCircle className="w-4 h-4 text-green-600" />
          )}
          <button className="p-1 text-neutral-400 hover:text-neutral-600 transition-colors">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content */}
      <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
        {discussion.title}
      </h3>
      
      <p className="text-neutral-700 mb-4 line-clamp-2">{discussion.content}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {discussion.tags.map((tag, index) => (
          <span key={index} className="text-xs bg-white text-neutral-600 px-2 py-1 rounded-full border border-neutral-200">
            {tag}
          </span>
        ))}
        {discussion.hasCodeSnippet && (
          <span className="text-xs bg-neutral-900 text-white px-2 py-1 rounded-full flex items-center">
            <Code className="w-3 h-3 mr-1" />
            Code
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-neutral-600">
          <div className="flex items-center">
            <ThumbsUp className="w-4 h-4 mr-1" />
            {discussion.likes}
          </div>
          <div className="flex items-center">
            <MessageSquare className="w-4 h-4 mr-1" />
            {discussion.replies}
          </div>
          <div className="flex items-center">
            <Eye className="w-4 h-4 mr-1" />
            {discussion.views}
          </div>
        </div>
        <Link
          to={`/community/discussion/${discussion.id}`}
          className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center"
        >
          Join Discussion
          <ChevronRight className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );

  const SuccessStoryCard = ({ story }: { story: any }) => (
    <div className={`${story.bgColor} ${story.borderColor} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}>
      <div className="flex items-start space-x-4 mb-4">
        <img
          src={story.avatar}
          alt={story.name}
          className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
        />
        <div className="flex-1">
          <h3 className="font-bold text-neutral-900 mb-1">{story.name}</h3>
          <h4 className="text-primary-600 font-semibold mb-2">{story.title}</h4>
          <p className="text-neutral-700 text-sm leading-relaxed mb-4">{story.story}</p>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-white p-3 rounded-lg border border-neutral-200">
          <div className="text-sm text-neutral-600">Achievement</div>
          <div className="font-semibold text-neutral-900 text-sm">{story.achievement}</div>
        </div>
        <div className="bg-white p-3 rounded-lg border border-neutral-200">
          <div className="text-sm text-neutral-600">Timeframe</div>
          <div className="font-semibold text-neutral-900 text-sm">{story.timeframe}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mb-4">
        {story.skills.map((skill, index) => (
          <span key={index} className="text-xs bg-white text-neutral-600 px-2 py-1 rounded-full border border-neutral-200">
            {skill}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between">
        <div className="text-lg font-bold text-green-600">{story.salary}</div>
        <button className="text-primary-600 hover:text-primary-700 font-medium text-sm">
          Read Full Story
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 border border-primary-200">
            <Users className="w-4 h-4 mr-2" />
            Community Hub
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Learn Together, <span className="text-primary-600">Grow Together</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Join thousands of learners sharing knowledge, solving problems, and celebrating success stories.
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {communityStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 text-center">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 bg-neutral-50`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                <div className="text-sm text-neutral-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Tabs */}
            <div className="flex space-x-1 bg-neutral-100 rounded-lg p-1">
              {[
                { id: 'discussions', name: 'Discussions', icon: MessageCircle },
                { id: 'stories', name: 'Success Stories', icon: Trophy },
                { id: 'contributors', name: 'Top Contributors', icon: Award },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'bg-white text-primary-600 shadow-sm'
                        : 'text-neutral-600 hover:text-neutral-900'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-3 lg:ml-auto">
              <div className="relative flex-1 lg:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search community..."
                  className="w-full pl-10 pr-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>
              <button
                onClick={() => setShowNewPostModal(true)}
                className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center"
              >
                <Plus className="w-4 h-4 mr-2" />
                New Post
              </button>
            </div>
          </div>

          {/* Filters for Discussions */}
          {activeTab === 'discussions' && (
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {sortOptions.map(option => (
                  <option key={option.id} value={option.id}>{option.name}</option>
                ))}
              </select>
            </div>
          )}
        </div>

        {/* Categories for Discussions */}
        {activeTab === 'discussions' && (
          <div className="mb-8">
            <div className="flex items-center space-x-4 overflow-x-auto pb-2">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all duration-200 ${
                      selectedCategory === category.id
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      selectedCategory === category.id
                        ? 'bg-primary-500 text-white'
                        : 'bg-neutral-100 text-neutral-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'discussions' && (
              <div className="space-y-6">
                {filteredDiscussions.map((discussion) => (
                  <DiscussionCard key={discussion.id} discussion={discussion} />
                ))}
              </div>
            )}

            {activeTab === 'stories' && (
              <div className="space-y-6">
                {successStories.map((story) => (
                  <SuccessStoryCard key={story.id} story={story} />
                ))}
              </div>
            )}

            {activeTab === 'contributors' && (
              <div className="space-y-4">
                {topContributors.map((contributor, index) => (
                  <div key={contributor.id} className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="relative">
                        <img
                          src={contributor.avatar}
                          alt={contributor.name}
                          className="w-16 h-16 rounded-full border-2 border-white shadow-sm"
                        />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                          #{index + 1}
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-bold text-neutral-900">{contributor.name}</h3>
                          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full border border-primary-200">
                            {contributor.badge}
                          </span>
                          <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full">
                            Level {contributor.level}
                          </span>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-neutral-600">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 mr-1 text-yellow-500" />
                            {contributor.reputation} reputation
                          </div>
                          <div className="flex items-center">
                            <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                            {contributor.helpfulAnswers} helpful answers
                          </div>
                        </div>
                      </div>
                      <Link
                        to={`/profile/${contributor.id}`}
                        className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                      >
                        View Profile
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Community Guidelines */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Community Guidelines</h3>
              <div className="space-y-3 text-sm text-neutral-700">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Be respectful and helpful to fellow learners</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Share knowledge and resources freely</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Use clear titles and descriptions</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Search before posting duplicate questions</span>
                </div>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Trending Topics</h3>
              <div className="space-y-3">
                {[
                  { tag: 'React Hooks', count: 45 },
                  { tag: 'Freelancing Tips', count: 32 },
                  { tag: 'JavaScript ES6', count: 28 },
                  { tag: 'Career Advice', count: 24 },
                  { tag: 'Python Basics', count: 19 },
                ].map((topic, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-neutral-700">#{topic.tag}</span>
                    <span className="text-xs text-neutral-500">{topic.count} posts</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-primary-50 text-primary-700 p-3 rounded-lg hover:bg-primary-100 transition-colors font-medium text-sm flex items-center">
                  <HelpCircle className="w-4 h-4 mr-2" />
                  Ask a Question
                </button>
                <button className="w-full bg-green-50 text-green-700 p-3 rounded-lg hover:bg-green-100 transition-colors font-medium text-sm flex items-center">
                  <Rocket className="w-4 h-4 mr-2" />
                  Share Your Project
                </button>
                <button className="w-full bg-purple-50 text-purple-700 p-3 rounded-lg hover:bg-purple-100 transition-colors font-medium text-sm flex items-center">
                  <Trophy className="w-4 h-4 mr-2" />
                  Share Success Story
                </button>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
              <h3 className="text-lg font-bold text-neutral-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                {[
                  { user: 'Ahmed K.', action: 'answered a question', time: '5 min ago' },
                  { user: 'Fatima A.', action: 'shared a project', time: '12 min ago' },
                  { user: 'Hassan S.', action: 'earned a badge', time: '1 hour ago' },
                  { user: 'Sara K.', action: 'joined the community', time: '2 hours ago' },
                ].map((activity, index) => (
                  <div key={index} className="text-sm">
                    <span className="font-medium text-neutral-900">{activity.user}</span>
                    <span className="text-neutral-600"> {activity.action}</span>
                    <div className="text-neutral-500 text-xs">{activity.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityPage;