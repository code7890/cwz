import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Play,
  CheckCircle,
  Lock,
  Clock,
  Award,
  BookOpen,
  Download,
  MessageCircle
} from 'lucide-react';
import DashboardNav from '../../components/DashboardNav';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../contexts/AuthContext';

const CourseLearningPage: React.FC = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [course, setCourse] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentLesson, setCurrentLesson] = useState(0);

  useEffect(() => {
    if (!user) {
      navigate('/login');
      return;
    }

    const loadCourse = async () => {
      const { data, error } = await supabase
        .from('courses')
        .select(`
          *,
          instructor:instructors(id, name, avatar_url),
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
  }, [courseId, user, navigate]);

  const mockLessons = [
    { id: 1, title: 'Introduction to the Course', duration: '5:30', completed: true, locked: false },
    { id: 2, title: 'Getting Started', duration: '12:45', completed: true, locked: false },
    { id: 3, title: 'Core Concepts', duration: '18:20', completed: false, locked: false },
    { id: 4, title: 'Practical Examples', duration: '25:10', completed: false, locked: false },
    { id: 5, title: 'Advanced Techniques', duration: '30:15', completed: false, locked: true },
    { id: 6, title: 'Real-World Projects', duration: '45:00', completed: false, locked: true },
    { id: 7, title: 'Best Practices', duration: '20:30', completed: false, locked: true },
    { id: 8, title: 'Final Project', duration: '60:00', completed: false, locked: true },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-400">Loading course...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-neutral-900 flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Course Not Found</h2>
          <button
            onClick={() => navigate('/dashboard')}
            className="text-primary-500 hover:text-primary-400"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      <DashboardNav />

      <div className="flex h-[calc(100vh-4rem)]">
        {/* Sidebar - Course Content */}
        <div
          className={`${
            isSidebarOpen ? 'w-80' : 'w-0'
          } bg-neutral-800 border-r border-neutral-700 overflow-y-auto transition-all duration-300`}
        >
          {isSidebarOpen && (
            <div className="p-4">
              <div className="mb-6">
                <h2 className="text-lg font-bold text-white mb-2">{course.title}</h2>
                <div className="flex items-center text-sm text-neutral-400">
                  <Clock className="w-4 h-4 mr-1" />
                  {course.duration_hours} hours
                </div>
                <div className="mt-3 bg-neutral-700 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: '25%' }}></div>
                </div>
                <p className="text-xs text-neutral-400 mt-1">25% Complete</p>
              </div>

              <div className="space-y-1">
                {mockLessons.map((lesson, index) => (
                  <button
                    key={lesson.id}
                    onClick={() => !lesson.locked && setCurrentLesson(index)}
                    disabled={lesson.locked}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      currentLesson === index
                        ? 'bg-primary-600 text-white'
                        : lesson.locked
                        ? 'bg-neutral-800 text-neutral-500 cursor-not-allowed'
                        : 'bg-neutral-700 text-neutral-200 hover:bg-neutral-600'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {lesson.completed ? (
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        ) : lesson.locked ? (
                          <Lock className="w-5 h-5 flex-shrink-0" />
                        ) : (
                          <Play className="w-5 h-5 flex-shrink-0" />
                        )}
                        <div>
                          <p className="text-sm font-medium">{lesson.title}</p>
                          <p className="text-xs opacity-70">{lesson.duration}</p>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Main Content - Video Player Area */}
        <div className="flex-1 flex flex-col">
          {/* Video Player */}
          <div className="bg-black aspect-video flex items-center justify-center relative">
            <button
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="absolute top-4 left-4 bg-neutral-800/80 backdrop-blur-sm text-white p-2 rounded-lg hover:bg-neutral-700 transition-colors z-10"
            >
              {isSidebarOpen ? <ChevronLeft className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-primary-700 transition-colors">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
              <p className="text-white text-lg font-semibold">
                {mockLessons[currentLesson]?.title}
              </p>
              <p className="text-neutral-400 text-sm mt-2">
                Click play to start the lesson
              </p>
            </div>
          </div>

          {/* Lesson Info & Controls */}
          <div className="bg-neutral-800 border-t border-neutral-700 p-6">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    Lesson {currentLesson + 1}: {mockLessons[currentLesson]?.title}
                  </h3>
                  <p className="text-neutral-400 text-sm">
                    Duration: {mockLessons[currentLesson]?.duration}
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setCurrentLesson(Math.max(0, currentLesson - 1))}
                    disabled={currentLesson === 0}
                    className="px-4 py-2 bg-neutral-700 text-white rounded-lg hover:bg-neutral-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" />
                    Previous
                  </button>
                  <button
                    onClick={() => setCurrentLesson(Math.min(mockLessons.length - 1, currentLesson + 1))}
                    disabled={currentLesson === mockLessons.length - 1 || mockLessons[currentLesson + 1]?.locked}
                    className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>

              {/* Tabs */}
              <div className="border-t border-neutral-700 pt-4">
                <div className="flex space-x-4 mb-4">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-lg font-medium">
                    Overview
                  </button>
                  <button className="px-4 py-2 text-neutral-400 hover:text-white transition-colors">
                    Resources
                  </button>
                  <button className="px-4 py-2 text-neutral-400 hover:text-white transition-colors">
                    Discussion
                  </button>
                </div>

                <div className="bg-neutral-700 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">About this lesson</h4>
                  <p className="text-neutral-300 text-sm leading-relaxed">
                    In this lesson, you'll learn the fundamental concepts and practical applications.
                    Follow along with the examples and complete the exercises to master the material.
                  </p>

                  <div className="mt-4 flex items-center space-x-4 text-sm">
                    <button className="flex items-center text-neutral-300 hover:text-white transition-colors">
                      <Download className="w-4 h-4 mr-1" />
                      Download Resources
                    </button>
                    <button className="flex items-center text-neutral-300 hover:text-white transition-colors">
                      <MessageCircle className="w-4 h-4 mr-1" />
                      Ask a Question
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLearningPage;
