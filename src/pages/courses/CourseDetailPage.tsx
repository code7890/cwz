import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Clock,
  Users,
  Award,
  CheckCircle,
  Play,
  BookOpen,
  Star,
  Globe,
  Download,
  Share2,
  Heart,
  ChevronDown,
  ChevronUp,
  Lock,
  PlayCircle,
  Infinity as InfinityIcon,
  Zap,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../contexts/AuthContext";
import Layout from "../../components/Layout";

interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail_url: string;
  level: string;
  duration_hours: number;
  language: string;
  rating: number;
  total_reviews: number;
  students_enrolled: number;
  has_certificate: boolean;
}

interface Module {
  id: string;
  title: string;
  description: string;
  order_index: number;
  duration_minutes: number;
  lessons: Lesson[];
}

interface Lesson {
  id: string;
  title: string;
  duration_minutes: number;
  lesson_type: string;
  is_free: boolean;
  is_published: boolean;
}

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [course, setCourse] = useState<Course | null>(null);
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    new Set(),
  );
  const [hasSubscription, setHasSubscription] = useState(false);

  useEffect(() => {
    fetchCourseData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, user]);

  const fetchCourseData = async () => {
    try {
      // Fetch course details
      const { data: courseData, error: courseError } = await supabase
        .from("courses")
        .select("*")
        .eq("id", courseId)
        .single();

      if (courseError) throw courseError;
      setCourse(courseData);

      // Fetch modules with lessons
      const { data: modulesData, error: modulesError } = await supabase
        .from("course_modules")
        .select(
          `
          *,
          lessons:course_lessons(*)
        `,
        )
        .eq("course_id", courseId)
        .eq("is_published", true)
        .order("order_index", { ascending: true });

      if (modulesError) throw modulesError;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const formattedModules = modulesData.map((module: any) => ({
        ...module,
        lessons: module.lessons
          .filter((l: any) => l.is_published)
          .sort((a: any, b: any) => a.order_index - b.order_index),
      })) as Module[];

      setModules(formattedModules);

      // Check if user has active subscription
      if (user) {
        // For now, we'll check if user is logged in
        // Later you can add subscription table check
        console.log("Setting hasSubscription to true for user:", user.id);
        setHasSubscription(true); // Temporary - all logged in users have access
      } else {
        console.log("No user logged in, hasSubscription remains false");
      }
    } catch (error) {
      console.error("Error fetching course:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleModule = (moduleId: string) => {
    const newExpanded = new Set(expandedModules);
    if (newExpanded.has(moduleId)) {
      newExpanded.delete(moduleId);
    } else {
      newExpanded.add(moduleId);
    }
    setExpandedModules(newExpanded);
  };

  const handleGetAccess = () => {
    if (!user) {
      navigate("/login");
      return;
    }
    navigate("/pricing");
  };

  const handleStartLearning = () => {
    console.log("Start Learning clicked", { courseId, modules });
    // Navigate to learning page regardless of modules
    // The learning page will handle empty state
    navigate(`/learn/${courseId}`);
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-neutral-600">Loading course...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (!course) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              Course not found
            </h2>
            <Link
              to="/courses"
              className="text-primary-600 hover:text-primary-700"
            >
              Browse all courses
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const totalLessons = modules.reduce(
    (acc, module) => acc + module.lessons.length,
    0,
  );
  const totalDuration = modules.reduce(
    (acc, module) => acc + module.duration_minutes,
    0,
  );

  return (
    <Layout>
      <div className="min-h-screen bg-neutral-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary-600 to-primary-700 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-3xl">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium capitalize">
                  {course.level}
                </span>
                <span className="px-3 py-1 bg-white/20 rounded-full text-sm font-medium">
                  {course.language}
                </span>
              </div>
              <h1 className="text-4xl font-bold mb-4">{course.title}</h1>
              <p className="text-xl text-white/90 mb-6">{course.description}</p>

              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="font-semibold">
                    {course.rating.toFixed(1)}
                  </span>
                  <span className="text-white/80">
                    ({course.total_reviews} reviews)
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5" />
                  <span>
                    {course.students_enrolled.toLocaleString()} students
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Course Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* What You'll Learn */}
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  What you'll learn
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {[
                    "Master the fundamentals",
                    "Build real-world projects",
                    "Learn best practices",
                    "Get hands-on experience",
                    "Understand core concepts",
                    "Prepare for interviews",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Course Content */}
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-neutral-900">
                    Course Content
                  </h2>
                  <div className="text-sm text-neutral-600">
                    {modules.length} modules • {totalLessons} lessons •{" "}
                    {Math.floor(totalDuration / 60)}h {totalDuration % 60}m
                  </div>
                </div>

                <div className="space-y-3">
                  {modules.map((module) => (
                    <div
                      key={module.id}
                      className="border border-neutral-200 rounded-lg overflow-hidden"
                    >
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="w-full flex items-center justify-between p-4 hover:bg-neutral-50 transition-colors"
                      >
                        <div className="flex items-center space-x-3 flex-1 text-left">
                          <div className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <BookOpen className="w-4 h-4 text-primary-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-semibold text-neutral-900">
                              {module.title}
                            </h3>
                            <p className="text-sm text-neutral-600">
                              {module.lessons.length} lessons •{" "}
                              {module.duration_minutes} min
                            </p>
                          </div>
                        </div>
                        {expandedModules.has(module.id) ? (
                          <ChevronUp className="w-5 h-5 text-neutral-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-neutral-400" />
                        )}
                      </button>

                      {expandedModules.has(module.id) && (
                        <div className="border-t border-neutral-200 bg-neutral-50">
                          {module.lessons.map((lesson) => (
                            <div
                              key={lesson.id}
                              className="flex items-center justify-between p-4 hover:bg-white transition-colors border-b border-neutral-100 last:border-b-0"
                            >
                              <div className="flex items-center space-x-3 flex-1">
                                <PlayCircle className="w-5 h-5 text-neutral-400" />
                                <div className="flex-1">
                                  <p className="text-sm font-medium text-neutral-900">
                                    {lesson.title}
                                  </p>
                                  <div className="flex items-center space-x-3 text-xs text-neutral-600 mt-1">
                                    <span className="capitalize">
                                      {lesson.lesson_type}
                                    </span>
                                    <span>{lesson.duration_minutes} min</span>
                                    {lesson.is_free && (
                                      <span className="px-2 py-0.5 bg-green-100 text-green-700 rounded-full font-medium">
                                        Free Preview
                                      </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                              {!lesson.is_free && !hasSubscription && (
                                <Lock className="w-4 h-4 text-neutral-400" />
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Requirements */}
              <div className="bg-white rounded-xl p-6 border border-neutral-200">
                <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                  Requirements
                </h2>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-3">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span className="text-neutral-700">
                      Basic computer knowledge
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span className="text-neutral-700">
                      Willingness to learn
                    </span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-neutral-400 mt-1">•</span>
                    <span className="text-neutral-700">
                      No prior experience needed
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Column - Sticky Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-lg">
                  {/* Course Image */}
                  {course.thumbnail_url ? (
                    <img
                      src={course.thumbnail_url}
                      alt={course.title}
                      className="w-full h-48 object-cover"
                    />
                  ) : (
                    <div className="w-full h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-primary-600" />
                    </div>
                  )}

                  <div className="p-6">
                    {/* Subscription Model */}
                    <div className="mb-6">
                      <div className="flex items-center space-x-2 mb-3">
                        <InfinityIcon className="w-6 h-6 text-primary-600" />
                        <span className="text-lg font-bold text-neutral-900">
                          Unlimited Access
                        </span>
                      </div>
                      <p className="text-sm text-neutral-600 mb-4">
                        Get access to this course and{" "}
                        <span className="font-semibold text-neutral-900">
                          all courses
                        </span>{" "}
                        with a subscription
                      </p>
                      <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-4 mb-4">
                        <div className="flex items-baseline space-x-2 mb-1">
                          <span className="text-2xl font-bold text-primary-900">
                            ₹999
                          </span>
                          <span className="text-sm text-primary-700">
                            /month
                          </span>
                        </div>
                        <p className="text-xs text-primary-700">
                          or ₹9,999/year (save 17%)
                        </p>
                      </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="space-y-3 mb-6">
                      {hasSubscription ? (
                        <button
                          onClick={handleStartLearning}
                          className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                        >
                          <Play className="w-5 h-5" />
                          <span>Start Learning</span>
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={handleGetAccess}
                            className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-semibold"
                          >
                            <Zap className="w-5 h-5" />
                            <span>Get Unlimited Access</span>
                          </button>
                          <button
                            onClick={handleStartLearning}
                            className="w-full text-center px-6 py-3 border-2 border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors font-semibold"
                          >
                            Preview Free Lessons
                          </button>
                        </>
                      )}
                    </div>

                    {/* Subscription Includes */}
                    <div className="space-y-3 mb-6 pb-6 border-b border-neutral-200">
                      <h3 className="font-semibold text-neutral-900">
                        Subscription includes:
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center space-x-3">
                          <InfinityIcon className="w-4 h-4 text-neutral-600" />
                          <span className="text-neutral-700">
                            Access to all courses
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Clock className="w-4 h-4 text-neutral-600" />
                          <span className="text-neutral-700">
                            Unlimited learning time
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <BookOpen className="w-4 h-4 text-neutral-600" />
                          <span className="text-neutral-700">
                            New courses added monthly
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Download className="w-4 h-4 text-neutral-600" />
                          <span className="text-neutral-700">
                            Downloadable resources
                          </span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Globe className="w-4 h-4 text-neutral-600" />
                          <span className="text-neutral-700">
                            Mobile & desktop access
                          </span>
                        </div>
                        {course.has_certificate && (
                          <div className="flex items-center space-x-3">
                            <Award className="w-4 h-4 text-neutral-600" />
                            <span className="text-neutral-700">
                              Certificates of completion
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Share & Wishlist */}
                    <div className="flex items-center justify-between">
                      <button className="flex items-center space-x-2 text-neutral-600 hover:text-primary-600 transition-colors">
                        <Share2 className="w-5 h-5" />
                        <span className="text-sm font-medium">Share</span>
                      </button>
                      <button className="flex items-center space-x-2 text-neutral-600 hover:text-red-600 transition-colors">
                        <Heart className="w-5 h-5" />
                        <span className="text-sm font-medium">Wishlist</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Money-back guarantee */}
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <p className="text-sm text-green-800 text-center font-medium">
                    7-Day Money-Back Guarantee
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CourseDetailPage;
