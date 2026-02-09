import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  BookOpen,
  FileText,
  Map,
  Sparkles,
  Users,
  TrendingUp,
  Award,
  BarChart3,
  Plus,
  Settings,
  LogOut,
} from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { supabase } from "../../lib/supabase";

const AdminDashboard: React.FC = () => {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalCourses: 0,
    totalBlogs: 0,
    totalRoadmaps: 0,
    totalAITools: 0,
    totalStudents: 0,
    totalEnrollments: 0,
  });
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (user) {
      checkAdminAccess();
      fetchStats();
    }
  }, [user]);

  const checkAdminAccess = async () => {
    console.log("🔍 Checking admin access...");
    console.log("User:", user);

    if (!user) {
      console.log("❌ No user, redirecting to login");
      navigate("/login");
      return;
    }

    console.log("✓ User exists, checking profile...");

    const { data: profile, error } = await supabase
      .from("profiles")
      .select("is_admin")
      .eq("id", user.id)
      .single();

    console.log("Profile query result:", { profile, error });

    if (error) {
      console.error("❌ Error fetching profile:", error);
      navigate("/dashboard");
      return;
    }

    if (!profile?.is_admin) {
      console.log("❌ Not admin, redirecting to dashboard");
      navigate("/dashboard");
      return;
    }

    console.log("✅ Admin access granted!");
    setIsAdmin(true);
  };

  const fetchStats = async () => {
    try {
      const [courses, blogs, roadmaps, aiTools, profiles, enrollments] =
        await Promise.all([
          supabase.from("courses").select("id", { count: "exact", head: true }),
          supabase
            .from("blog_posts")
            .select("id", { count: "exact", head: true }),
          supabase
            .from("roadmaps")
            .select("id", { count: "exact", head: true }),
          supabase
            .from("ai_tools")
            .select("id", { count: "exact", head: true }),
          supabase
            .from("profiles")
            .select("id", { count: "exact", head: true }),
          supabase
            .from("user_enrollments")
            .select("id", { count: "exact", head: true }),
        ]);

      setStats({
        totalCourses: courses.count || 0,
        totalBlogs: blogs.count || 0,
        totalRoadmaps: roadmaps.count || 0,
        totalAITools: aiTools.count || 0,
        totalStudents: profiles.count || 0,
        totalEnrollments: enrollments.count || 0,
      });
    } catch (error) {
      console.error("Error fetching stats:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-xl text-neutral-600">Checking access...</p>
        </div>
      </div>
    );
  }

  const contentCards = [
    {
      title: "Courses",
      count: stats.totalCourses,
      icon: BookOpen,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
      link: "/admin/courses",
    },
    {
      title: "Blog Posts",
      count: stats.totalBlogs,
      icon: FileText,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
      link: "/admin/blogs",
    },
    {
      title: "Roadmaps",
      count: stats.totalRoadmaps,
      icon: Map,
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
      link: "/admin/roadmaps",
    },
    {
      title: "AI Tools",
      count: stats.totalAITools,
      icon: Sparkles,
      color: "bg-yellow-500",
      lightColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      link: "/admin/ai-tools",
    },
  ];

  const statsCards = [
    {
      title: "Total Students",
      value: stats.totalStudents,
      icon: Users,
      color: "text-primary-600",
    },
    {
      title: "Total Enrollments",
      value: stats.totalEnrollments,
      icon: TrendingUp,
      color: "text-sage-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-cream-50">
      {/* Header */}
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-neutral-900">
                Admin Dashboard
              </h1>
              <p className="text-sm text-neutral-600">
                Manage your content and platform
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                View Site
              </Link>
              <button
                onClick={handleSignOut}
                className="flex items-center space-x-2 px-4 py-2 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors"
              >
                <LogOut className="w-4 h-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="text-center py-12">
            <p className="text-neutral-600">Loading dashboard...</p>
          </div>
        ) : (
          <>
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {statsCards.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-neutral-600 mb-1">
                          {stat.title}
                        </p>
                        <p className="text-3xl font-bold text-neutral-900">
                          {stat.value}
                        </p>
                      </div>
                      <div
                        className={`w-12 h-12 ${stat.color} bg-opacity-10 rounded-lg flex items-center justify-center`}
                      >
                        <Icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Content Management Cards */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">
                Content Management
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contentCards.map((card, index) => {
                  const Icon = card.icon;
                  return (
                    <Link
                      key={index}
                      to={card.link}
                      className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1"
                    >
                      <div
                        className={`w-12 h-12 ${card.lightColor} rounded-lg flex items-center justify-center mb-4`}
                      >
                        <Icon className={`w-6 h-6 ${card.textColor}`} />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-1">
                        {card.title}
                      </h3>
                      <p className="text-2xl font-bold text-neutral-900 mb-3">
                        {card.count}
                      </p>
                      <div className="flex items-center text-sm text-primary-600 font-medium">
                        <span>Manage</span>
                        <Plus className="w-4 h-4 ml-1" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm">
              <h2 className="text-xl font-bold text-neutral-900 mb-4">
                Quick Actions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Link
                  to="/admin/courses/new"
                  className="flex items-center space-x-3 p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                >
                  <BookOpen className="w-5 h-5 text-blue-600" />
                  <span className="font-medium text-blue-900">New Course</span>
                </Link>
                <Link
                  to="/admin/blogs/new"
                  className="flex items-center space-x-3 p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                >
                  <FileText className="w-5 h-5 text-green-600" />
                  <span className="font-medium text-green-900">
                    New Blog Post
                  </span>
                </Link>
                <Link
                  to="/admin/roadmaps/new"
                  className="flex items-center space-x-3 p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                >
                  <Map className="w-5 h-5 text-purple-600" />
                  <span className="font-medium text-purple-900">
                    New Roadmap
                  </span>
                </Link>
                <Link
                  to="/admin/ai-tools/new"
                  className="flex items-center space-x-3 p-4 bg-yellow-50 hover:bg-yellow-100 rounded-lg transition-colors"
                >
                  <Sparkles className="w-5 h-5 text-yellow-600" />
                  <span className="font-medium text-yellow-900">
                    New AI Tool
                  </span>
                </Link>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;
