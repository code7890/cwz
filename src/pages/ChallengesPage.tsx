import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Trophy, 
  Code, 
  Clock, 
  Users, 
  Star, 
  Play, 
  CheckCircle, 
  Circle, 
  Lock, 
  Zap, 
  Target, 
  Award, 
  TrendingUp, 
  Filter, 
  Search, 
  ArrowRight, 
  Flame, 
  Brain, 
  Database, 
  Smartphone, 
  Palette, 
  Globe,
  ChevronRight,
  BookOpen,
  Timer,
  Medal,
  Lightbulb,
  Rocket,
  Heart,
  Eye,
  ThumbsUp,
  MessageCircle,
  Share2,
  Flag
} from 'lucide-react';

const ChallengesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'web', name: 'Web Development', icon: Code },
    { id: 'algorithms', name: 'Algorithms', icon: Brain },
    { id: 'database', name: 'Database', icon: Database },
    { id: 'mobile', name: 'Mobile', icon: Smartphone },
    { id: 'design', name: 'Design', icon: Palette },
  ];

  const difficulties = [
    { id: 'all', name: 'All Levels', color: 'text-neutral-600' },
    { id: 'easy', name: 'Easy', color: 'text-green-600' },
    { id: 'medium', name: 'Medium', color: 'text-yellow-600' },
    { id: 'hard', name: 'Hard', color: 'text-red-600' },
  ];

  const challengeTypes = [
    { id: 'all', name: 'All Types' },
    { id: 'coding', name: 'Coding' },
    { id: 'project', name: 'Project' },
    { id: 'quiz', name: 'Quiz' },
    { id: 'design', name: 'Design' },
  ];

  const challenges = [
    {
      id: 1,
      title: 'Build a Todo App',
      description: 'Create a fully functional todo application with add, edit, delete, and filter functionality using React.',
      category: 'web',
      difficulty: 'medium',
      type: 'project',
      duration: '2-3 hours',
      participants: 1250,
      rating: 4.8,
      xp: 150,
      completed: false,
      locked: false,
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      accentColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      tags: ['React', 'JavaScript', 'CSS'],
      skills: ['Component Design', 'State Management', 'Event Handling'],
      estimatedTime: '3 hours',
      submissions: 892,
      successRate: 78,
    },
    {
      id: 2,
      title: 'Two Sum Problem',
      description: 'Given an array of integers and a target sum, find two numbers that add up to the target.',
      category: 'algorithms',
      difficulty: 'easy',
      type: 'coding',
      duration: '30 mins',
      participants: 3200,
      rating: 4.6,
      xp: 50,
      completed: true,
      locked: false,
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
      accentColor: 'text-green-600',
      borderColor: 'border-green-200',
      tags: ['Arrays', 'Hash Map', 'Python'],
      skills: ['Problem Solving', 'Data Structures', 'Optimization'],
      estimatedTime: '30 minutes',
      submissions: 2156,
      successRate: 85,
    },
    {
      id: 3,
      title: 'Database Design Challenge',
      description: 'Design a database schema for an e-commerce platform with proper relationships and constraints.',
      category: 'database',
      difficulty: 'hard',
      type: 'project',
      duration: '4-5 hours',
      participants: 680,
      rating: 4.9,
      xp: 300,
      completed: false,
      locked: false,
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      accentColor: 'text-purple-600',
      borderColor: 'border-purple-200',
      tags: ['SQL', 'Database Design', 'Normalization'],
      skills: ['Schema Design', 'Relationships', 'Performance'],
      estimatedTime: '4 hours',
      submissions: 234,
      successRate: 62,
    },
    {
      id: 4,
      title: 'Mobile UI Clone',
      description: 'Recreate the Instagram profile screen using React Native with pixel-perfect accuracy.',
      category: 'mobile',
      difficulty: 'medium',
      type: 'design',
      duration: '2-3 hours',
      participants: 890,
      rating: 4.7,
      xp: 200,
      completed: false,
      locked: true,
      bgColor: 'bg-gradient-to-br from-pink-50 to-pink-100',
      accentColor: 'text-pink-600',
      borderColor: 'border-pink-200',
      tags: ['React Native', 'UI Design', 'Mobile'],
      skills: ['Mobile UI', 'Component Layout', 'Responsive Design'],
      estimatedTime: '3 hours',
      submissions: 445,
      successRate: 71,
    },
    {
      id: 5,
      title: 'JavaScript Quiz Master',
      description: 'Test your JavaScript knowledge with 20 challenging questions covering ES6+, async/await, and more.',
      category: 'web',
      difficulty: 'medium',
      type: 'quiz',
      duration: '45 mins',
      participants: 2100,
      rating: 4.5,
      xp: 100,
      completed: false,
      locked: false,
      bgColor: 'bg-gradient-to-br from-yellow-50 to-yellow-100',
      accentColor: 'text-yellow-600',
      borderColor: 'border-yellow-200',
      tags: ['JavaScript', 'ES6+', 'Async/Await'],
      skills: ['JavaScript Concepts', 'Modern Syntax', 'Best Practices'],
      estimatedTime: '45 minutes',
      submissions: 1678,
      successRate: 68,
    },
    {
      id: 6,
      title: 'API Integration Challenge',
      description: 'Build a weather app that fetches data from multiple APIs and handles error states gracefully.',
      category: 'web',
      difficulty: 'hard',
      type: 'project',
      duration: '3-4 hours',
      participants: 750,
      rating: 4.8,
      xp: 250,
      completed: false,
      locked: false,
      bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
      accentColor: 'text-indigo-600',
      borderColor: 'border-indigo-200',
      tags: ['APIs', 'Error Handling', 'React'],
      skills: ['API Integration', 'Error Handling', 'State Management'],
      estimatedTime: '4 hours',
      submissions: 356,
      successRate: 59,
    },
  ];

  const weeklyChallenge = {
    id: 'weekly-1',
    title: 'Build a Chat Application',
    description: 'Create a real-time chat app with user authentication, message history, and emoji support.',
    difficulty: 'hard',
    xp: 500,
    timeLeft: '3 days',
    participants: 450,
    prize: '₹10,000 + Certificate',
    bgColor: 'bg-gradient-to-br from-orange-50 to-red-50',
    borderColor: 'border-orange-200',
  };

  const userStats = {
    totalSolved: 23,
    totalXP: 2450,
    rank: 156,
    streak: 7,
    badges: 12,
  };

  const filteredChallenges = challenges.filter(challenge => {
    const matchesCategory = selectedCategory === 'all' || challenge.category === selectedCategory;
    const matchesDifficulty = selectedDifficulty === 'all' || challenge.difficulty === selectedDifficulty;
    const matchesType = selectedType === 'all' || challenge.type === selectedType;
    const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         challenge.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeTab === 'completed') return matchesCategory && matchesDifficulty && matchesType && matchesSearch && challenge.completed;
    if (activeTab === 'available') return matchesCategory && matchesDifficulty && matchesType && matchesSearch && !challenge.locked && !challenge.completed;
    
    return matchesCategory && matchesDifficulty && matchesType && matchesSearch;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'text-green-600 bg-green-50 border-green-200';
      case 'medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'hard': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-neutral-600 bg-neutral-50 border-neutral-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'coding': return Code;
      case 'project': return Rocket;
      case 'quiz': return Brain;
      case 'design': return Palette;
      default: return Circle;
    }
  };

  const ChallengeCard = ({ challenge }: { challenge: any }) => {
    const TypeIcon = getTypeIcon(challenge.type);

    return (
      <div className={`${challenge.bgColor} ${challenge.borderColor} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1 ${challenge.locked ? 'opacity-60' : ''}`}>
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className={`w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}>
              <TypeIcon className={`w-5 h-5 ${challenge.accentColor}`} />
            </div>
            <div>
              <span className={`text-xs font-medium px-2 py-1 rounded-full border ${getDifficultyColor(challenge.difficulty)}`}>
                {challenge.difficulty}
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            {challenge.completed && (
              <CheckCircle className="w-5 h-5 text-green-600" />
            )}
            {challenge.locked && (
              <Lock className="w-5 h-5 text-neutral-400" />
            )}
            <div className={`text-sm font-semibold ${challenge.accentColor} bg-white px-2 py-1 rounded-full border ${challenge.borderColor}`}>
              {challenge.xp} XP
            </div>
          </div>
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
          {challenge.title}
        </h3>
        
        <p className="text-neutral-700 text-sm mb-4 leading-relaxed line-clamp-2">
          {challenge.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {challenge.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="text-xs bg-white text-neutral-600 px-2 py-1 rounded-full border border-neutral-200">
              {tag}
            </span>
          ))}
          {challenge.tags.length > 3 && (
            <span className="text-xs text-neutral-500 px-2 py-1">
              +{challenge.tags.length - 3}
            </span>
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-neutral-600 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {challenge.duration}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {challenge.participants.toLocaleString()}
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
            {challenge.rating}
          </div>
        </div>

        {/* Success Rate */}
        <div className="mb-4">
          <div className="flex items-center justify-between text-xs text-neutral-600 mb-1">
            <span>Success Rate</span>
            <span>{challenge.successRate}%</span>
          </div>
          <div className="w-full bg-white rounded-full h-1.5">
            <div 
              className={`bg-gradient-to-r ${challenge.accentColor.replace('text-', 'from-').replace('-600', '-400')} ${challenge.accentColor.replace('text-', 'to-').replace('-600', '-600')} h-1.5 rounded-full`}
              style={{ width: `${challenge.successRate}%` }}
            ></div>
          </div>
        </div>

        {/* CTA */}
        <button
          disabled={challenge.locked}
          className={`w-full px-4 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
            challenge.locked
              ? 'bg-neutral-200 text-neutral-500 cursor-not-allowed'
              : challenge.completed
              ? `${challenge.accentColor} bg-white border-2 ${challenge.borderColor} hover:bg-neutral-50`
              : `${challenge.accentColor} bg-white border-2 ${challenge.borderColor} hover:bg-neutral-50 group-hover:shadow-md`
          }`}
        >
          {challenge.locked ? (
            <>
              <Lock className="w-4 h-4 mr-2" />
              Locked
            </>
          ) : challenge.completed ? (
            <>
              <Eye className="w-4 h-4 mr-2" />
              View Solution
            </>
          ) : (
            <>
              <Play className="w-4 h-4 mr-2" />
              Start Challenge
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 border border-primary-200">
            <Trophy className="w-4 h-4 mr-2" />
            Coding Challenges
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Test Your <span className="text-primary-600">Skills</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Practice coding, solve problems, and compete with developers worldwide. Level up your skills with hands-on challenges.
          </p>
        </div>

        {/* User Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200 text-center">
            <div className="text-2xl font-bold text-neutral-900 mb-1">{userStats.totalSolved}</div>
            <div className="text-sm text-neutral-600">Solved</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200 text-center">
            <div className="text-2xl font-bold text-primary-600 mb-1">{userStats.totalXP.toLocaleString()}</div>
            <div className="text-sm text-neutral-600">Total XP</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200 text-center">
            <div className="text-2xl font-bold text-orange-600 mb-1">#{userStats.rank}</div>
            <div className="text-sm text-neutral-600">Rank</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200 text-center">
            <div className="text-2xl font-bold text-red-600 mb-1 flex items-center justify-center">
              <Flame className="w-6 h-6 mr-1" />
              {userStats.streak}
            </div>
            <div className="text-sm text-neutral-600">Day Streak</div>
          </div>
          <div className="bg-white p-4 rounded-xl shadow-sm border border-neutral-200 text-center">
            <div className="text-2xl font-bold text-purple-600 mb-1">{userStats.badges}</div>
            <div className="text-sm text-neutral-600">Badges</div>
          </div>
        </div>

        {/* Weekly Challenge */}
        <div className={`${weeklyChallenge.bgColor} ${weeklyChallenge.borderColor} border-2 rounded-2xl p-6 mb-8 relative overflow-hidden`}>
          <div className="absolute top-4 right-4">
            <div className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
              Weekly Challenge
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            <div>
              <h2 className="text-2xl font-bold text-neutral-900 mb-2">{weeklyChallenge.title}</h2>
              <p className="text-neutral-700 mb-4">{weeklyChallenge.description}</p>
              <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-4">
                <div className="flex items-center">
                  <Timer className="w-4 h-4 mr-1" />
                  {weeklyChallenge.timeLeft} left
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-1" />
                  {weeklyChallenge.participants} participants
                </div>
                <div className="flex items-center">
                  <Trophy className="w-4 h-4 mr-1 text-yellow-500" />
                  {weeklyChallenge.xp} XP
                </div>
              </div>
              <div className="bg-white p-3 rounded-lg border border-orange-200 mb-4">
                <div className="text-sm font-medium text-neutral-900 mb-1">Prize Pool</div>
                <div className="text-lg font-bold text-orange-600">{weeklyChallenge.prize}</div>
              </div>
            </div>
            <div className="text-center">
              <button className="bg-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Join Challenge
              </button>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search challenges..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.name}</option>
                ))}
              </select>

              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty.id} value={difficulty.id}>{difficulty.name}</option>
                ))}
              </select>

              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {challengeTypes.map(type => (
                  <option key={type.id} value={type.id}>{type.name}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 bg-neutral-100 rounded-lg p-1">
            {[
              { id: 'all', name: 'All Challenges' },
              { id: 'available', name: 'Available' },
              { id: 'completed', name: 'Completed' },
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
        </div>

        {/* Challenges Grid */}
        {filteredChallenges.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredChallenges.map((challenge) => (
              <ChallengeCard key={challenge.id} challenge={challenge} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-neutral-400" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">No challenges found</h3>
            <p className="text-neutral-600 mb-6">
              Try adjusting your search criteria or browse our available categories
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedDifficulty('all');
                setSelectedType('all');
                setActiveTab('all');
              }}
              className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More */}
        {filteredChallenges.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white border-2 border-neutral-200 text-neutral-700 rounded-xl hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 font-medium">
              Load More Challenges
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChallengesPage;