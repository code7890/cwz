import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle,
  Circle,
  Lock,
  Clock,
  Users,
  Star,
  Trophy,
  Target,
  Code,
  Database,
  Smartphone,
  Palette,
  Brain,
  Globe,
  Zap,
  BookOpen,
  Play,
  Award,
  TrendingUp,
  Filter,
  Search,
  ChevronRight,
  Lightbulb,
  Rocket,
  Heart,
  Shield,
  Briefcase,
} from "lucide-react";
import { supabase } from "../lib/supabase";

const RoadmapsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [roadmaps, setRoadmaps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRoadmaps();
  }, []);

  const fetchRoadmaps = async () => {
    try {
      const { data, error } = await supabase
        .from("roadmaps")
        .select("*")
        .eq("is_published", true)
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRoadmaps(data || []);
    } catch (error) {
      console.error("Error fetching roadmaps:", error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    { id: "all", name: "All Roadmaps", icon: Globe },
    { id: "development", name: "Development", icon: Code },
    { id: "design", name: "Design", icon: Palette },
    { id: "data", name: "Data Science", icon: Database },
    { id: "mobile", name: "Mobile", icon: Smartphone },
    { id: "ai", name: "AI/ML", icon: Brain },
    { id: "business", name: "Business", icon: Briefcase },
  ];

  const levels = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" },
  ];

  const getIconForCategory = (category: string) => {
    const iconMap: any = {
      development: Code,
      design: Palette,
      data: Database,
      mobile: Smartphone,
      ai: Brain,
      business: Briefcase,
    };
    return iconMap[category] || Globe;
  };

  const getColorForCategory = (category: string) => {
    const colorMap: any = {
      development: {
        bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
        accentColor: "text-blue-600",
        borderColor: "border-blue-200",
      },
      design: {
        bgColor: "bg-gradient-to-br from-pink-50 to-pink-100",
        accentColor: "text-pink-600",
        borderColor: "border-pink-200",
      },
      data: {
        bgColor: "bg-gradient-to-br from-green-50 to-green-100",
        accentColor: "text-green-600",
        borderColor: "border-green-200",
      },
      mobile: {
        bgColor: "bg-gradient-to-br from-purple-50 to-purple-100",
        accentColor: "text-purple-600",
        borderColor: "border-purple-200",
      },
      ai: {
        bgColor: "bg-gradient-to-br from-indigo-50 to-indigo-100",
        accentColor: "text-indigo-600",
        borderColor: "border-indigo-200",
      },
      business: {
        bgColor: "bg-gradient-to-br from-orange-50 to-orange-100",
        accentColor: "text-orange-600",
        borderColor: "border-orange-200",
      },
    };
    return (
      colorMap[category] || {
        bgColor: "bg-gradient-to-br from-neutral-50 to-neutral-100",
        accentColor: "text-neutral-600",
        borderColor: "border-neutral-200",
      }
    );
  };

  const filteredRoadmaps = roadmaps.filter((roadmap) => {
    const matchesCategory =
      selectedCategory === "all" || roadmap.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "all" || roadmap.level === selectedLevel;
    const matchesSearch =
      roadmap.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      roadmap.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  const RoadmapCard = ({ roadmap }: { roadmap: any }) => {
    const colors = getColorForCategory(roadmap.category || "development");
    const Icon = getIconForCategory(roadmap.category || "development");
    const progressPercentage = 0; // Will be calculated from user progress later
    (roadmap.completedSteps / roadmap.totalSteps) * 100;

    return (
      <div
        className={`${roadmap.bgColor} ${roadmap.borderColor} border-2 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group hover:-translate-y-1`}
      >
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div
            className={`w-12 h-12 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm`}
          >
            <Icon className={`w-6 h-6 ${roadmap.accentColor}`} />
          </div>
          <div className="flex items-center space-x-2">
            <span
              className={`text-xs font-medium ${roadmap.accentColor} bg-white px-2 py-1 rounded-full border ${roadmap.borderColor}`}
            >
              {roadmap.level}
            </span>
            {roadmap.completedSteps > 0 && (
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded-full border border-green-200">
                In Progress
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
          {roadmap.title}
        </h3>

        <p className="text-neutral-700 text-sm mb-4 leading-relaxed line-clamp-2">
          {roadmap.description}
        </p>

        {/* Progress */}
        {roadmap.completedSteps > 0 && (
          <div className="mb-4">
            <div className="flex items-center justify-between text-sm text-neutral-600 mb-2">
              <span>Progress</span>
              <span>
                {roadmap.completedSteps}/{roadmap.totalSteps} steps
              </span>
            </div>
            <div className="w-full bg-white rounded-full h-2">
              <div
                className={`bg-gradient-to-r ${roadmap.accentColor.replace("text-", "from-").replace("-600", "-400")} ${roadmap.accentColor.replace("text-", "to-").replace("-600", "-600")} h-2 rounded-full transition-all duration-300`}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Stats */}
        <div className="flex items-center justify-between text-sm text-neutral-600 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {roadmap.duration}
          </div>
          <div className="flex items-center">
            <Users className="w-4 h-4 mr-1" />
            {roadmap.students.toLocaleString()}
          </div>
          <div className="flex items-center">
            <Star className="w-4 h-4 mr-1 text-yellow-400 fill-current" />
            {roadmap.rating}
          </div>
        </div>

        {/* Skills Preview */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {roadmap.skills.slice(0, 3).map((skill, index) => (
              <span
                key={index}
                className="text-xs bg-white text-neutral-600 px-2 py-1 rounded-full border border-neutral-200"
              >
                {skill}
              </span>
            ))}
            {roadmap.skills.length > 3 && (
              <span className="text-xs text-neutral-500 px-2 py-1">
                +{roadmap.skills.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <Link
          to={`/roadmap/${roadmap.id}`}
          className={`w-full ${roadmap.accentColor} bg-white border-2 ${roadmap.borderColor} px-4 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition-all duration-300 flex items-center justify-center group-hover:shadow-md`}
        >
          {roadmap.completedSteps > 0 ? "Continue Learning" : "Start Roadmap"}
          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50 pt-8 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-medium mb-6 border border-primary-200">
            <Target className="w-4 h-4 mr-2" />
            Learning Roadmaps
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">
            Your Path to <span className="text-primary-600">Success</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Step-by-step learning paths designed for desi learners. Clear
            direction, practical skills, real outcomes.
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
                placeholder="Search roadmaps..."
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
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>

              <select
                value={selectedLevel}
                onChange={(e) => setSelectedLevel(e.target.value)}
                className="px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                {levels.map((level) => (
                  <option key={level.id} value={level.id}>
                    {level.name}
                  </option>
                ))}
              </select>
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
                      ? "bg-primary-600 text-white shadow-lg"
                      : "bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-200"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 text-center">
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <BookOpen className="w-6 h-6 text-primary-600" />
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-1">6</div>
            <div className="text-sm text-neutral-600">Learning Paths</div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 text-center">
            <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-1">12K+</div>
            <div className="text-sm text-neutral-600">Students Learning</div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 text-center">
            <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-6 h-6 text-orange-600" />
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-1">89%</div>
            <div className="text-sm text-neutral-600">Completion Rate</div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-neutral-200 text-center">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Rocket className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-2xl font-bold text-neutral-900 mb-1">95%</div>
            <div className="text-sm text-neutral-600">Job Success Rate</div>
          </div>
        </div>

        {/* Roadmaps Grid */}
        {filteredRoadmaps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRoadmaps.map((roadmap) => (
              <RoadmapCard key={roadmap.id} roadmap={roadmap} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-neutral-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="w-12 h-12 text-neutral-400" />
            </div>
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No roadmaps found
            </h3>
            <p className="text-neutral-600 mb-6">
              Try adjusting your search criteria or browse our available
              categories
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedLevel("all");
              }}
              className="px-6 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-8 text-center text-white">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Can't Find Your Path?
            </h2>
            <p className="text-primary-100 mb-6">
              Tell us what you want to learn and we'll create a personalized
              roadmap just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-primary-600 px-6 py-3 rounded-xl font-semibold hover:bg-neutral-50 transition-colors"
              >
                Request Custom Roadmap
              </Link>
              <Link
                to="/community"
                className="border-2 border-primary-400 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoadmapsPage;
