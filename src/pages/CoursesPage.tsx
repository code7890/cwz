import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  Star,
  Clock,
  Users,
  BookOpen,
  Code,
  CheckCircle,
  ArrowRight,
  SlidersHorizontal,
  Grid3X3,
  List,
  Play,
  FileText,
  Video,
  Download,
  Layers,
  Sparkles,
} from "lucide-react";
import { getCourses, getCategories } from "../lib/database";

const CoursesPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [sortBy, setSortBy] = useState("popular");
  const [courses, setCourses] = useState<any[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      const [coursesData, categoriesData] = await Promise.all([
        getCourses(),
        getCategories(),
      ]);

      // If database returns empty or mock needed, ensure fallback courses with YouTube & Notes flags exist
      const fallbackCourses = [
        {
          id: "c-1",
          title: "Full-Stack SaaS Development with React & Supabase",
          description:
            "Build complete production-ready SaaS applications. Includes YouTube video masterclass, interactive notes, and full source code.",
          level: "intermediate",
          rating: 4.9,
          duration_hours: 12,
          students_enrolled: 4200,
          thumbnail_url:
            "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
          is_popular: true,
          price: 0,
          category: { name: "Web Development", slug: "web-dev" },
          instructor: { name: "Zaheer (CodeWithZee)", avatar_url: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
          has_notes: true,
          has_youtube: true,
          has_roadmap: true,
        },
        {
          id: "c-2",
          title: "Stripe & PayPal Global Payment Gateways for Founders",
          description:
            "Comprehensive breakdown for non-US/UK founders on legal formation, Stripe setup, and business banking without gateway locks.",
          level: "beginner",
          rating: 5.0,
          duration_hours: 6,
          students_enrolled: 3100,
          thumbnail_url:
            "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
          is_popular: true,
          price: 0,
          category: { name: "Business Infra", slug: "business-infra" },
          instructor: { name: "Zaheer (CodeWithZee)", avatar_url: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
          has_notes: true,
          has_youtube: true,
          has_roadmap: true,
        },
        {
          id: "c-3",
          title: "Custom AI Agents & Workflow Automation with Python",
          description:
            "Build automated lead responders, customer support AI bots, and Make/Zapier pipelines.",
          level: "intermediate",
          rating: 4.8,
          duration_hours: 8,
          students_enrolled: 2800,
          thumbnail_url:
            "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
          is_popular: false,
          price: 0,
          category: { name: "AI & Automation", slug: "ai-automation" },
          instructor: { name: "Zaheer (CodeWithZee)", avatar_url: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
          has_notes: true,
          has_youtube: true,
          has_roadmap: true,
        },
      ];

      const mergedCourses = coursesData.length > 0 ? coursesData : fallbackCourses;

      setCourses(mergedCourses);
      setCategories([
        { id: "all", name: "All Categories", slug: "all" },
        { id: "web-dev", name: "Web Development", slug: "web-dev" },
        { id: "business-infra", name: "Business Infra", slug: "business-infra" },
        { id: "ai-automation", name: "AI & Automation", slug: "ai-automation" },
      ]);
      setLoading(false);
    };
    loadData();
  }, []);

  const filteredCourses = useMemo(() => {
    let filtered = [...courses];

    if (searchQuery) {
      filtered = filtered.filter(
        (course) =>
          course.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
          course.description?.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    if (selectedCategory !== "all") {
      filtered = filtered.filter(
        (course) =>
          course.category?.slug === selectedCategory ||
          course.category_id === selectedCategory,
      );
    }

    if (selectedLevel !== "all") {
      filtered = filtered.filter((course) => course.level === selectedLevel);
    }

    return filtered;
  }, [courses, searchQuery, selectedCategory, selectedLevel]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-primary-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-neutral-600 font-medium">Loading YouTube Courses & Notes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 pt-20 pb-24 text-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Banner */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-red-50 border border-red-200 text-red-600 rounded-full text-xs font-bold mb-4">
            <Video className="w-4 h-4" />
            <span>YOUTUBE EMBEDS + INTERACTIVE NOTES & CODE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-neutral-900 mb-4 tracking-tight">
            YouTube Courses & <span className="text-primary-600">Learning Resources</span>
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">
            Free high-quality video masterclasses straight from the **Code With Zee** YouTube channel, enhanced with downloadable cheat sheets, interactive notes, code runners, and roadmaps.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="bg-white rounded-2xl border border-neutral-200 p-4 sm:p-6 mb-10 shadow-sm">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search YouTube courses, notes, or tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 border border-neutral-200 rounded-xl text-sm focus:outline-none focus:border-primary-500"
              />
            </div>

            <div className="flex gap-3">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:border-primary-500 bg-white"
              >
                {categories.map((c) => (
                  <option key={c.id} value={c.slug}>
                    {c.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 border border-neutral-200 rounded-xl text-sm font-medium focus:outline-none focus:border-primary-500 bg-white"
              >
                <option value="all">All Levels</option>
                <option value="beginner">Beginner</option>
                <option value="intermediate">Intermediate</option>
                <option value="advanced">Advanced</option>
              </select>
            </div>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-video bg-neutral-900 overflow-hidden">
                  <img
                    src={course.thumbnail_url}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity">
                    <div className="w-14 h-14 bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-3 left-3 bg-red-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center space-x-1">
                    <Video className="w-3 h-3" />
                    <span>Free on YouTube</span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider text-primary-700 bg-primary-50 px-2.5 py-1 rounded-md border border-primary-200">
                      {course.level || "Beginner"}
                    </span>
                    <div className="flex items-center text-xs font-semibold text-neutral-600">
                      <Star className="w-3.5 h-3.5 text-yellow-400 fill-current mr-1" />
                      <span>{course.rating || 4.9}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {course.title}
                  </h3>

                  <p className="text-neutral-600 text-xs mb-4 line-clamp-2 leading-relaxed">
                    {course.description}
                  </p>

                  {/* Features Badges */}
                  <div className="space-y-1.5 mb-6 pt-3 border-t border-neutral-100">
                    <div className="flex items-center space-x-2 text-xs text-neutral-700 font-semibold">
                      <FileText className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span>Interactive Notes & Key Takeaways</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-neutral-700 font-semibold">
                      <Code className="w-4 h-4 text-sage-600 flex-shrink-0" />
                      <span>Downloadable Source Code & Repos</span>
                    </div>
                    <div className="flex items-center space-x-2 text-xs text-neutral-700 font-semibold">
                      <Layers className="w-4 h-4 text-cream-700 flex-shrink-0" />
                      <span>Step-by-Step Learning Roadmap</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <Link
                  to={`/learn/${course.id}`}
                  className="w-full py-3 bg-neutral-900 hover:bg-neutral-800 text-white rounded-xl font-bold text-xs flex items-center justify-center space-x-2 transition-colors shadow-sm"
                >
                  <span>Open Video Player & Notes</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;
