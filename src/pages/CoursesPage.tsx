import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Search,
  Star,
  Clock,
  Users,
  BookOpen,
  Award,
  Code,
  Palette,
  Database,
  Smartphone,
  Brain,
  CheckCircle,
  ArrowRight,
  SlidersHorizontal,
  Grid3X3,
  List,
  Play
} from 'lucide-react';
import { getCourses, getCategories } from '../lib/database';

const CoursesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');
  const [sortBy, setSortBy] = useState('popular');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [courses, setCourses] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [coursesData, categoriesData] = await Promise.all([
        getCourses(),
        getCategories()
      ]);
      setCourses(coursesData);
      setCategories([{ id: 'all', name: 'All Courses', slug: 'all', icon: 'BookOpen' }, ...categoriesData]);
      setLoading(false);
    };
    loadData();
  }, []);

  const categoryIcons: Record<string, any> = {
    'BookOpen': BookOpen,
    'Code': Code,
    'Smartphone': Smartphone,
    'Database': Database,
    'Palette': Palette,
    'Brain': Brain,
  };

  const levels = [
    { id: 'all', name: 'All Levels' },
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
  ];

  const sortOptions = [
    { id: 'popular', name: 'Most Popular' },
    { id: 'newest', name: 'Newest First' },
    { id: 'rating', name: 'Highest Rated' },
  ];

  const filteredCourses = useMemo(() => {
    let filtered = courses;

    if (searchQuery) {
      filtered = filtered.filter(course =>
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(course => course.category?.slug === selectedCategory);
    }

    if (selectedLevel !== 'all') {
      filtered = filtered.filter(course => course.level === selectedLevel);
    }

    switch (sortBy) {
      case 'popular':
        filtered.sort((a, b) => b.students_enrolled - a.students_enrolled);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime());
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return filtered;
  }, [courses, searchQuery, selectedCategory, selectedLevel, sortBy]);

  const CourseCard = ({ course }: { course: any }) => {
    const bgColors = ['bg-gradient-to-br from-blue-50 to-blue-100', 'bg-gradient-to-br from-green-50 to-green-100', 'bg-gradient-to-br from-purple-50 to-purple-100'];
    const borderColors = ['border-blue-200', 'border-green-200', 'border-purple-200'];
    const accentColors = ['text-blue-600', 'text-green-600', 'text-purple-600'];

    const index = parseInt(course.id.substring(0, 8), 16) % 3;
    const bgColor = bgColors[index];
    const borderColor = borderColors[index];
    const accentColor = accentColors[index];

    return (
      <div className={`${bgColor} ${borderColor} border-2 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}>
        <div className="relative">
          <img
            src={course.thumbnail_url}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
              <Play className="w-8 h-8 text-neutral-900 ml-1" />
            </div>
          </div>
          {course.is_bestseller && (
            <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full">
              Bestseller
            </div>
          )}
          {course.is_popular && (
            <div className="absolute top-3 right-3 bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-full">
              Popular
            </div>
          )}
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`text-xs font-medium ${accentColor} bg-white px-2 py-1 rounded-full border ${borderColor}`}>
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
              src={course.instructor?.avatar_url}
              alt={course.instructor?.name}
              className="w-6 h-6 rounded-full mr-2"
            />
            <span className="text-sm text-neutral-600">{course.instructor?.name}</span>
          </div>

          <div className="flex items-center justify-between text-sm text-neutral-600 mb-4">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {course.duration_hours}h
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {course.students_enrolled?.toLocaleString()}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <div className="text-xl font-bold text-neutral-900">₹{course.price?.toLocaleString()}</div>
              {course.original_price && (
                <div className="text-sm text-neutral-500 line-through">₹{course.original_price?.toLocaleString()}</div>
              )}
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

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading courses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Explore Our <span className="text-primary-600">Courses</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover courses designed for desi learners. Practical skills, real guidance, career-focused content.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
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

            <div className="flex items-center space-x-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.slug}>{category.name}</option>
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

          {showFilters && (
            <div className="mt-6 pt-6 border-t border-neutral-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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

                <div className="flex items-end col-span-2">
                  <button
                    onClick={() => {
                      setSearchQuery('');
                      setSelectedCategory('all');
                      setSelectedLevel('all');
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

        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-neutral-900">
              {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''} Found
            </h2>
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

        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-neutral-400" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">No courses found</h3>
            <p className="text-neutral-600 mb-6">
              Try adjusting your search criteria or browse our available categories
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
                setSelectedLevel('all');
              }}
              className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoursesPage;
