import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Star, 
  Clock, 
  Users, 
  BookOpen, 
  Award, 
  Play, 
  ChevronDown, 
  Grid3X3, 
  List, 
  TrendingUp, 
  Zap, 
  Target, 
  Code, 
  Palette, 
  Database, 
  Smartphone, 
  Globe, 
  Brain,
  CheckCircle,
  ArrowRight,
  SlidersHorizontal,
  X
} from 'lucide-react';

const CoursesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen, count: 47 },
    { id: 'web-development', name: 'Web Development', icon: Code, count: 15 },
    { id: 'mobile-development', name: 'Mobile Development', icon: Smartphone, count: 8 },
    { id: 'data-science', name: 'Data Science', icon: Database, count: 12 },
    { id: 'design', name: 'UI/UX Design', icon: Palette, count: 7 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 5 },
  ];

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
  ];

  const durations = [
    { id: 'all', name: 'Any Duration' },
    { id: 'short', name: 'Under 10 hours' },
    { id: 'medium', name: '10-30 hours' },
    { id: 'long', name: '30+ hours' },
  ];

  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'newest', name: 'Newest First' },
    { id: 'rating', name: 'Highest Rated' },
    { id: 'price-low', name: 'Price: Low to High' },
    { id: 'price-high', name: 'Price: High to Low' },
  ];

  // Mock courses data
  const allCourses = [
    {
      id: 1,
      title: 'Complete React Development Bootcamp',
      instructor: 'Zee Ahmad',
      instructorAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'Master React from basics to advanced concepts. Build real-world projects and become job-ready.',
      thumbnail: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'web-development',
      level: 'intermediate',
      duration: '40 hours',
      durationHours: 40,
      students: 2847,
      rating: 4.8,
      totalReviews: 892,
      price: 4999,
      originalPrice: 9999,
      isPopular: true,
      isBestseller: true,
      lastUpdated: '2 weeks ago',
      language: 'Hindi/Urdu',
      certificate: true,
      bgColor: 'bg-gradient-to-br from-blue-50 to-blue-100',
      accentColor: 'text-blue-600',
      borderColor: 'border-blue-200',
    },
    {
      id: 2,
      title: 'Python for Data Science & AI',
      instructor: 'Sarah Khan',
      instructorAvatar: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'Learn Python programming and dive into data science, machine learning, and AI applications.',
      thumbnail: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'data-science',
      level: 'beginner',
      duration: '35 hours',
      durationHours: 35,
      students: 1923,
      rating: 4.9,
      totalReviews: 567,
      price: 3999,
      originalPrice: 7999,
      isPopular: true,
      isBestseller: false,
      lastUpdated: '1 week ago',
      language: 'Hindi/English',
      certificate: true,
      bgColor: 'bg-gradient-to-br from-green-50 to-green-100',
      accentColor: 'text-green-600',
      borderColor: 'border-green-200',
    },
    {
      id: 3,
      title: 'Freelancing Mastery Course',
      instructor: 'Ali Hassan',
      instructorAvatar: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'Complete guide to freelancing success. From finding clients to scaling your business.',
      thumbnail: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'web-development',
      level: 'intermediate',
      duration: '25 hours',
      durationHours: 25,
      students: 3456,
      rating: 4.7,
      totalReviews: 1234,
      price: 2999,
      originalPrice: 5999,
      isPopular: false,
      isBestseller: true,
      lastUpdated: '3 days ago',
      language: 'Urdu/Hindi',
      certificate: true,
      bgColor: 'bg-gradient-to-br from-purple-50 to-purple-100',
      accentColor: 'text-purple-600',
      borderColor: 'border-purple-200',
    },
    {
      id: 4,
      title: 'Mobile App Development with React Native',
      instructor: 'Ahmed Ali',
      instructorAvatar: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'Build cross-platform mobile apps using React Native. Deploy to both iOS and Android.',
      thumbnail: 'https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'mobile-development',
      level: 'advanced',
      duration: '45 hours',
      durationHours: 45,
      students: 1567,
      rating: 4.6,
      totalReviews: 423,
      price: 5999,
      originalPrice: 11999,
      isPopular: false,
      isBestseller: false,
      lastUpdated: '1 month ago',
      language: 'English/Hindi',
      certificate: true,
      bgColor: 'bg-gradient-to-br from-orange-50 to-orange-100',
      accentColor: 'text-orange-600',
      borderColor: 'border-orange-200',
    },
    {
      id: 5,
      title: 'UI/UX Design Fundamentals',
      instructor: 'Fatima Sheikh',
      instructorAvatar: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'Learn design principles, user research, prototyping, and create stunning user interfaces.',
      thumbnail: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'design',
      level: 'beginner',
      duration: '30 hours',
      durationHours: 30,
      students: 2134,
      rating: 4.8,
      totalReviews: 678,
      price: 3499,
      originalPrice: 6999,
      isPopular: true,
      isBestseller: false,
      lastUpdated: '5 days ago',
      language: 'Hindi/Urdu',
      certificate: true,
      bgColor: 'bg-gradient-to-br from-pink-50 to-pink-100',
      accentColor: 'text-pink-600',
      borderColor: 'border-pink-200',
    },
    {
      id: 6,
      title: 'Machine Learning with Python',
      instructor: 'Dr. Hassan Khan',
      instructorAvatar: 'https://images.pexels.com/photos/2182969/pexels-photo-2182969.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      description: 'Comprehensive ML course covering algorithms, neural networks, and real-world applications.',
      thumbnail: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
      category: 'ai-ml',
      level: 'advanced',
      duration: '50 hours',
      durationHours: 50,
      students: 987,
      rating: 4.9,
      totalReviews: 234,
      price: 7999,
      originalPrice: 15999,
      isPopular: false,
      isBestseller: false,
      lastUpdated: '2 weeks ago',
      language: 'English',
      certificate: true,
      bgColor: 'bg-gradient-to-br from-indigo-50 to-indigo-100',
      accentColor: 'text-indigo-600',
      borderColor: 'border-indigo-200',
    },
  ];

  // Filter and search logic
  const filteredCourses = useMemo(() => {
    let filtered = allCourses;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course => course.category === selectedCategory);
    }

    // Level filter
    if (selectedLevel !== 'all') {
      filtered = filtered.filter(course => course.level === selectedLevel);
    }

    // Duration filter
    if (selectedDuration !== 'all') {
      filtered = filtered.filter(course => {
        switch (selectedDuration) {
          case 'short': return course.durationHours < 10;
          case 'medium': return course.durationHours >= 10 && course.durationHours <= 30;
          case 'long': return course.durationHours > 30;
          default: return true;
        }
      });
    }

    // Sort
    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.students - a.students);
        break;
      case 'newest':
        // Mock newest sort - in real app would use actual dates
        filtered.sort((a, b) => a.id - b.id);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return filtered;
  }, [searchQuery, selectedCategory, selectedLevel, selectedDuration, sortBy]);

  const CourseCard = ({ course, isListView = false }: { course: any, isListView?: boolean }) => {
    if (isListView) {
      return (
        <div className="bg-white border border-neutral-200 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group">
          <div className="flex items-start space-x-6">
            <div className="relative flex-shrink-0">
              <img
                src={course.thumbnail}
                alt={course.title}
                className="w-48 h-32 object-cover rounded-xl"
              />
              <div className="absolute inset-0 bg-black/20 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                  <Play className="w-6 h-6 text-neutral-900 ml-0.5" />
                </div>
              </div>
              {course.isBestseller && (
                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  Bestseller
                </div>
              )}
            </div>
            
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-neutral-600 mb-3 line-clamp-2">{course.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-neutral-900">₹{course.price.toLocaleString()}</div>
                  <div className="text-sm text-neutral-500 line-through">₹{course.originalPrice.toLocaleString()}</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <img
                    src={course.instructorAvatar}
                    alt={course.instructor}
                    className="w-6 h-6 rounded-full mr-2"
                  />
                  <span className="text-sm text-neutral-600">{course.instructor}</span>
                </div>
                <div className="flex items-center text-sm text-neutral-600">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  {course.rating} ({course.totalReviews.toLocaleString()})
                </div>
                <div className="flex items-center text-sm text-neutral-600">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration}
                </div>
                <div className="flex items-center text-sm text-neutral-600">
                  <Users className="w-4 h-4 mr-1" />
                  {course.students.toLocaleString()} students
                </div>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className={`text-xs font-medium ${course.accentColor} bg-white px-2 py-1 rounded-full border ${course.borderColor}`}>
                    {course.level}
                  </span>
                  <span className="text-xs text-neutral-500">{course.language}</span>
                  {course.certificate && (
                    <div className="flex items-center text-xs text-green-600">
                      <Award className="w-3 h-3 mr-1" />
                      Certificate
                    </div>
                  )}
                </div>
                <Link
                  to={`/course/${course.id}`}
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  Enroll Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className={`${course.bgColor} ${course.borderColor} border-2 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}>
        <div className="relative">
          <img
            src={course.thumbnail}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-neutral-900 ml-1" />
            </div>
          </div>
          {course.isBestseller && (
            <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Bestseller
            </div>
          )}
          {course.isPopular && (
            <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              Popular
            </div>
          )}
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-medium ${course.accentColor} bg-white px-2 py-1 rounded-full border ${course.borderColor}`}>
              {course.level}
            </span>
            <div className="flex items-center text-sm text-neutral-600">
              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
              {course.rating}
            </div>
          </div>
          
          <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
            {course.title}
          </h3>
          
          <p className="text-neutral-600 text-sm mb-4 line-clamp-2">{course.description}</p>
          
          <div className="flex items-center mb-4">
            <img
              src={course.instructorAvatar}
              alt={course.instructor}
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="text-sm text-neutral-600">{course.instructor}</span>
          </div>
          
          <div className="flex items-center justify-between text-sm text-neutral-600 mb-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {course.duration}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {course.students.toLocaleString()}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-bold text-neutral-900">₹{course.price.toLocaleString()}</div>
              <div className="text-sm text-neutral-500 line-through">₹{course.originalPrice.toLocaleString()}</div>
            </div>
            <Link
              to={`/course/${course.id}`}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium flex items-center"
            >
              Enroll
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Explore Our <span className="text-primary-600">Courses</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover courses designed for desi learners. Practical skills, real guidance, career-focused content.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search courses, instructors, topics..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {/* Quick Filters */}
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
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {levels.map(level => (
                  <option key={level.id} value={level.id}>{level.name}</option>
                ))}
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-3 border border-neutral-200 rounded-xl hover:bg-neutral-50 transition-colors flex items-center"
              >
                <SlidersHorizontal className="w-5 h-5 mr-2" />
                More Filters
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Duration</label>
                  <select
                    value={selectedDuration}
                    onChange={(e) => setSelectedDuration(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    {durations.map(duration => (
                      <option key={duration.id} value={duration.id}>{duration.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">Sort By</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    {sortOptions.map(option => (
                      <option key={option.id} value={option.id}>{option.name}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-end">
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedLevel('all');
                      setSelectedDuration('all');
                      setSortBy('popular');
                    }}
                    className="px-4 py-2 text-primary-600 hover:text-primary-700 font-medium"
                  >
                    Clear All Filters
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Found
            </h2>
            {searchQuery && (
              <p className="text-neutral-600 mt-1">
                Results for "<span className="font-medium">{searchQuery}</span>"
              </p>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-neutral-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'grid' 
                    ? 'bg-white text-primary-600 shadow-sm' 
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${
                  viewMode === 'list' 
                    ? 'bg-white text-primary-600 shadow-sm' 
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

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

        {/* Course Grid/List */}
        {filteredCourses.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
              : 'space-y-6'
          }>
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} isListView={viewMode === 'list'} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-neutral-400" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">No courses found</h3>
            <p className="text-neutral-600 mb-6">
              Try adjusting your search criteria or browse our popular categories
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLevel('all');
                setSelectedDuration('all');
              }}
              className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Load More */}
        {filteredCourses.length > 0 && (
          <div className="text-center mt-12">
            <button className="px-8 py-4 bg-white border-2 border-neutral-200 text-neutral-700 rounded-xl hover:bg-neutral-50 hover:border-neutral-300 transition-all duration-200 font-medium">
              Load More Courses
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;