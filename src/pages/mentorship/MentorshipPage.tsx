import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Star, 
  Clock, 
  Calendar, 
  MessageCircle, 
  Video, 
  Award, 
  Target, 
  BookOpen, 
  Code, 
  Brain, 
  Heart, 
  Search, 
  Filter, 
  ChevronRight, 
  MapPin, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Zap, 
  Trophy, 
  Lightbulb, 
  Rocket, 
  Shield, 
  Crown, 
  Medal, 
  Flame, 
  Eye, 
  ThumbsUp, 
  Send, 
  Plus,
  UserPlus,
  Calendar as CalendarIcon,
  DollarSign,
  Languages,
  Briefcase,
  GraduationCap
} from 'lucide-react';

const MentorshipPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('find-mentors');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedExperience, setSelectedExperience] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Categories', icon: Globe },
    { id: 'web-development', name: 'Web Development', icon: Code },
    { id: 'data-science', name: 'Data Science', icon: Brain },
    { id: 'mobile-development', name: 'Mobile Development', icon: Target },
    { id: 'career-guidance', name: 'Career Guidance', icon: Briefcase },
    { id: 'freelancing', name: 'Freelancing', icon: DollarSign },
  ];

  const experienceLevels = [
    { id: 'all', name: 'All Experience' },
    { id: 'junior', name: '1-3 years' },
    { id: 'mid', name: '3-7 years' },
    { id: 'senior', name: '7+ years' },
  ];

  const mentors = [
    {
      id: 1,
      name: 'Hassan Sheikh',
      title: 'Senior Full Stack Developer',
      company: 'TechCorp',
      avatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.9,
      totalReviews: 127,
      experience: '8 years',
      location: 'Karachi, Pakistan',
      languages: ['English', 'Urdu', 'Hindi'],
      specialties: ['React', 'Node.js', 'System Design', 'Career Growth'],
      bio: 'Passionate developer with 8+ years of experience. Helped 200+ students land their first tech jobs. Specializing in full-stack development and career guidance.',
      hourlyRate: '$25',
      responseTime: '< 2 hours',
      totalMentees: 89,
      successStories: 45,
      availability: 'Available',
      category: 'web-development',
      experienceLevel: 'senior',
      badges: ['Top Mentor', 'Career Expert'],
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      id: 2,
      name: 'Fatima Ali',
      title: 'Data Science Lead',
      company: 'AI Innovations',
      avatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.8,
      totalReviews: 94,
      experience: '6 years',
      location: 'Lahore, Pakistan',
      languages: ['English', 'Urdu'],
      specialties: ['Python', 'Machine Learning', 'Data Analysis', 'Research'],
      bio: 'Data Science expert with PhD in Computer Science. Mentored 150+ students in ML and AI. Published researcher with 20+ papers.',
      hourlyRate: '$30',
      responseTime: '< 4 hours',
      totalMentees: 67,
      successStories: 38,
      availability: 'Available',
      category: 'data-science',
      experienceLevel: 'senior',
      badges: ['ML Expert', 'Research Mentor'],
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      id: 3,
      name: 'Ahmed Khan',
      title: 'Mobile App Developer',
      company: 'Freelancer',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.7,
      totalReviews: 76,
      experience: '5 years',
      location: 'Islamabad, Pakistan',
      languages: ['English', 'Urdu'],
      specialties: ['React Native', 'Flutter', 'iOS', 'Android'],
      bio: 'Mobile development specialist earning $3000+/month through freelancing. Expert in cross-platform development and app monetization.',
      hourlyRate: '$20',
      responseTime: '< 6 hours',
      totalMentees: 52,
      successStories: 28,
      availability: 'Busy',
      category: 'mobile-development',
      experienceLevel: 'mid',
      badges: ['Mobile Expert', 'Freelance Success'],
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
    {
      id: 4,
      name: 'Sara Khan',
      title: 'Product Manager',
      company: 'StartupHub',
      avatar: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 4.9,
      totalReviews: 112,
      experience: '7 years',
      location: 'Karachi, Pakistan',
      languages: ['English', 'Urdu'],
      specialties: ['Product Strategy', 'Career Transition', 'Leadership', 'Startups'],
      bio: 'Former developer turned Product Manager. Helps tech professionals transition to product roles. Built 5+ successful products.',
      hourlyRate: '$35',
      responseTime: '< 3 hours',
      totalMentees: 78,
      successStories: 42,
      availability: 'Available',
      category: 'career-guidance',
      experienceLevel: 'senior',
      badges: ['Career Transition', 'Product Expert'],
      bgColor: 'bg-pink-50',
      borderColor: 'border-pink-200',
    },
  ];

  const mentorshipPrograms = [
    {
      id: 1,
      title: '1-on-1 Career Mentorship',
      description: 'Personalized guidance for your tech career journey',
      duration: '3 months',
      sessions: '12 sessions',
      price: '$299',
      features: [
        'Weekly 1-hour video calls',
        'Career roadmap planning',
        'Resume and portfolio review',
        'Interview preparation',
        'Industry insights',
        '24/7 chat support'
      ],
      popular: true,
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      id: 2,
      title: 'Technical Skills Bootcamp',
      description: 'Intensive technical mentorship with hands-on projects',
      duration: '6 months',
      sessions: '24 sessions',
      price: '$599',
      features: [
        'Bi-weekly technical sessions',
        'Code review and feedback',
        'Real project collaboration',
        'Technical interview prep',
        'Industry best practices',
        'Certification guidance'
      ],
      popular: false,
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      id: 3,
      title: 'Freelancing Success Program',
      description: 'Learn to build a successful freelancing business',
      duration: '4 months',
      sessions: '16 sessions',
      price: '$399',
      features: [
        'Client acquisition strategies',
        'Pricing and negotiation',
        'Portfolio optimization',
        'Business development',
        'Financial planning',
        'Ongoing support'
      ],
      popular: false,
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
  ];

  const successStories = [
    {
      id: 1,
      mentee: 'Ali Hassan',
      mentor: 'Hassan Sheikh',
      menteeAvatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      story: 'Went from complete beginner to landing a $800/month job as React developer in just 6 months with Hassan\'s guidance.',
      outcome: 'Got hired at TechStart',
      timeframe: '6 months',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
    },
    {
      id: 2,
      mentee: 'Zainab Ahmed',
      mentor: 'Fatima Ali',
      menteeAvatar: 'https://images.pexels.com/photos/3763189/pexels-photo-3763189.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      story: 'Transitioned from teaching to data science. Now working as ML engineer at a multinational company.',
      outcome: 'Career switch success',
      timeframe: '8 months',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
    },
    {
      id: 3,
      mentee: 'Omar Khan',
      mentor: 'Ahmed Khan',
      menteeAvatar: 'https://images.pexels.com/photos/2379006/pexels-photo-2379006.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      story: 'Built and launched 3 mobile apps, now earning $1500/month through freelancing with Ahmed\'s mentorship.',
      outcome: 'Freelancing success',
      timeframe: '4 months',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
    },
  ];

  const filteredMentors = mentors.filter(mentor => {
    const matchesCategory = selectedCategory === 'all' || mentor.category === selectedCategory;
    const matchesExperience = selectedExperience === 'all' || mentor.experienceLevel === selectedExperience;
    const matchesSearch = mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         mentor.specialties.some(specialty => specialty.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesExperience && matchesSearch;
  });

  const MentorCard = ({ mentor }: { mentor: any }) => (
    <div className={`${mentor.bgColor} ${mentor.borderColor} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}>
      {/* Header */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="relative">
          <img
            src={mentor.avatar}
            alt={mentor.name}
            className="w-16 h-16 rounded-xl border-2 border-white shadow-sm"
          />
          <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
            mentor.availability === 'Available' ? 'bg-green-500' : 'bg-yellow-500'
          }`}></div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <h3 className="font-bold text-neutral-900">{mentor.name}</h3>
            {mentor.badges.map((badge, index) => (
              <span key={index} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full border border-primary-200">
                {badge}
              </span>
            ))}
          </div>
          <p className="text-sm font-medium text-neutral-700 mb-1">{mentor.title}</p>
          <p className="text-sm text-neutral-600">{mentor.company}</p>
        </div>
        <div className="text-right">
          <div className="flex items-center text-yellow-500 mb-1">
            <Star className="w-4 h-4 fill-current mr-1" />
            <span className="font-semibold">{mentor.rating}</span>
            <span className="text-neutral-500 text-sm ml-1">({mentor.totalReviews})</span>
          </div>
          <div className="text-lg font-bold text-neutral-900">{mentor.hourlyRate}/hr</div>
        </div>
      </div>

      {/* Bio */}
      <p className="text-neutral-700 text-sm mb-4 leading-relaxed line-clamp-2">{mentor.bio}</p>

      {/* Specialties */}
      <div className="flex flex-wrap gap-1 mb-4">
        {mentor.specialties.slice(0, 4).map((specialty, index) => (
          <span key={index} className="text-xs bg-white text-neutral-600 px-2 py-1 rounded-full border border-neutral-200">
            {specialty}
          </span>
        ))}
        {mentor.specialties.length > 4 && (
          <span className="text-xs text-neutral-500 px-2 py-1">
            +{mentor.specialties.length - 4}
          </span>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-4 text-center">
        <div>
          <div className="text-lg font-bold text-neutral-900">{mentor.totalMentees}</div>
          <div className="text-xs text-neutral-600">Mentees</div>
        </div>
        <div>
          <div className="text-lg font-bold text-neutral-900">{mentor.successStories}</div>
          <div className="text-xs text-neutral-600">Success Stories</div>
        </div>
        <div>
          <div className="text-lg font-bold text-neutral-900">{mentor.experience}</div>
          <div className="text-xs text-neutral-600">Experience</div>
        </div>
      </div>

      {/* Quick Info */}
      <div className="flex items-center justify-between text-sm text-neutral-600 mb-4">
        <div className="flex items-center">
          <MapPin className="w-4 h-4 mr-1" />
          {mentor.location}
        </div>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1" />
          {mentor.responseTime}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2">
        <Link
          to={`/mentorship/mentor/${mentor.id}`}
          className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors font-medium text-center"
        >
          View Profile
        </Link>
        <button className="px-4 py-2 border border-neutral-200 text-neutral-700 rounded-lg hover:bg-white transition-colors">
          <MessageCircle className="w-4 h-4" />
        </button>
        <button className="px-4 py-2 border border-neutral-200 text-neutral-700 rounded-lg hover:bg-white transition-colors">
          <Heart className="w-4 h-4" />
        </button>
      </div>
    </div>
  );

  const ProgramCard = ({ program }: { program: any }) => (
    <div className={`${program.bgColor} ${program.borderColor} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 relative`}>
      {program.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-bold">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-neutral-900 mb-2">{program.title}</h3>
        <p className="text-neutral-700 mb-4">{program.description}</p>
        <div className="text-3xl font-bold text-neutral-900 mb-2">{program.price}</div>
        <div className="text-sm text-neutral-600">{program.duration} • {program.sessions}</div>
      </div>

      <div className="space-y-3 mb-6">
        {program.features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-2">
            <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
            <span className="text-sm text-neutral-700">{feature}</span>
          </div>
        ))}
      </div>

      <button className="w-full bg-primary-600 text-white py-3 px-4 rounded-xl font-semibold hover:bg-primary-700 transition-colors">
        Get Started
      </button>
    </div>
  );

  const SuccessStoryCard = ({ story }: { story: any }) => (
    <div className={`${story.bgColor} ${story.borderColor} border-2 rounded-2xl p-6 hover:shadow-lg transition-all duration-300`}>
      <div className="flex items-start space-x-4 mb-4">
        <img
          src={story.menteeAvatar}
          alt={story.mentee}
          className="w-12 h-12 rounded-full border-2 border-white shadow-sm"
        />
        <div className="flex-1">
          <h4 className="font-bold text-neutral-900 mb-1">{story.mentee}</h4>
          <p className="text-sm text-neutral-600">Mentored by {story.mentor}</p>
        </div>
        <div className="text-right">
          <div className="text-sm font-medium text-green-600">{story.outcome}</div>
          <div className="text-xs text-neutral-500">{story.timeframe}</div>
        </div>
      </div>
      
      <p className="text-neutral-700 text-sm leading-relaxed italic">"{story.story}"</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 border border-primary-200">
            <Users className="w-4 h-4 mr-2" />
            Mentorship Program
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Learn from <span className="text-primary-600">Industry Experts</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Get personalized guidance from experienced developers and accelerate your tech career with 1-on-1 mentorship.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-1">150+</div>
            <div className="text-sm text-neutral-600">Expert Mentors</div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 text-center">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-1">2,500+</div>
            <div className="text-sm text-neutral-600">Success Stories</div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 text-center">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Star className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-1">4.8</div>
            <div className="text-sm text-neutral-600">Average Rating</div>
          </div>
          
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 text-center">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Clock className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-1">{'< 24h'}</div>
            <div className="text-sm text-neutral-600">Response Time</div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 mb-8">
          <div className="flex space-x-1 bg-neutral-100 rounded-lg p-1 mb-6">
            {[
              { id: 'find-mentors', name: 'Find Mentors', icon: Search },
              { id: 'programs', name: 'Programs', icon: BookOpen },
              { id: 'success-stories', name: 'Success Stories', icon: Trophy },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md font-medium text-sm transition-colors flex-1 justify-center ${
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

          {/* Search and Filters for Find Mentors */}
          {activeTab === 'find-mentors' && (
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search mentors by name, skills, or expertise..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

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
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  {experienceLevels.map(level => (
                    <option key={level.id} value={level.id}>{level.name}</option>
                  ))}
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        {activeTab === 'find-mentors' && (
          <div>
            {/* Categories */}
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
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Mentors Grid */}
            {filteredMentors.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredMentors.map((mentor) => (
                  <MentorCard key={mentor.id} mentor={mentor} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-12 h-12 text-neutral-400" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">No mentors found</h3>
                <p className="text-neutral-600 mb-6">
                  Try adjusting your search criteria or browse our available categories
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                    setSelectedExperience('all');
                  }}
                  className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'programs' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Mentorship Programs</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Choose from our structured mentorship programs designed to accelerate your learning and career growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mentorshipPrograms.map((program) => (
                <ProgramCard key={program.id} program={program} />
              ))}
            </div>

            {/* How it Works */}
            <div className="mt-16 bg-white rounded-2xl shadow-sm border border-neutral-200 p-8">
              <h3 className="text-2xl font-bold text-neutral-900 text-center mb-8">How It Works</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-primary-600" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-2">1. Find Your Mentor</h4>
                  <p className="text-neutral-600 text-sm">Browse and select from our expert mentors based on your goals</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <CalendarIcon className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-2">2. Schedule Sessions</h4>
                  <p className="text-neutral-600 text-sm">Book convenient time slots that work for both you and your mentor</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Video className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-2">3. Learn & Grow</h4>
                  <p className="text-neutral-600 text-sm">Attend regular sessions and get personalized guidance</p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Trophy className="w-8 h-8 text-purple-600" />
                  </div>
                  <h4 className="font-semibold text-neutral-900 mb-2">4. Achieve Goals</h4>
                  <p className="text-neutral-600 text-sm">Land your dream job or achieve your career objectives</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'success-stories' && (
          <div>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">Success Stories</h2>
              <p className="text-neutral-600 max-w-2xl mx-auto">
                Real stories from students who transformed their careers with our mentorship program.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {successStories.map((story) => (
                <SuccessStoryCard key={story.id} story={story} />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Success Story?</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                Join thousands of students who have transformed their careers with expert mentorship.
              </p>
              <button
                onClick={() => setActiveTab('find-mentors')}
                className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition-colors"
              >
                Find Your Mentor
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MentorshipPage;