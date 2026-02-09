import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Map, Plus, Edit, Trash2, Search } from "lucide-react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../contexts/AuthContext";

interface Roadmap {
  id: string;
  title: string;
  slug: string;
  description: string;
  level: string;
  duration_months: number;
  total_steps: number;
  students_enrolled: number;
  rating: number;
}

const RoadmapsManagement: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [roadmaps, setRoadmaps] = useState<Roadmap[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    checkAdminAndFetchRoadmaps();
  }, []);

  const checkAdminAndFetchRoadmaps = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("is_admin")
      .eq("id", user.id)
      .single();

    if (!profile?.is_admin) {
      navigate("/dashboard");
      return;
    }

    fetchRoadmaps();
  };

  const fetchRoadmaps = async () => {
    try {
      const { data, error } = await supabase
        .from("roadmaps")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) throw error;
      setRoadmaps(data || []);
    } catch (error) {
      console.error("Error fetching roadmaps:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteRoadmap = async (id: string) => {
    if (!confirm("Are you sure you want to delete this roadmap?")) return;

    try {
      const { error } = await supabase.from("roadmaps").delete().eq("id", id);
      if (error) throw error;
      setRoadmaps(roadmaps.filter((r) => r.id !== id));
    } catch (error) {
      console.error("Error deleting roadmap:", error);
      alert("Failed to delete roadmap");
    }
  };

  const filteredRoadmaps = roadmaps.filter((roadmap) =>
    roadmap.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-cream-50">
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <Link
                to="/admin"
                className="text-sm text-primary-600 hover:text-primary-700 mb-2 inline-block"
              >
                ← Back to Dashboard
              </Link>
              <h1 className="text-2xl font-bold text-neutral-900">
                Roadmaps Management
              </h1>
              <p className="text-sm text-neutral-600">
                Manage learning roadmaps
              </p>
            </div>
            <Link
              to="/admin/roadmaps/new"
              className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span>New Roadmap</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl p-4 mb-6 border border-neutral-200">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-neutral-400" />
            <input
              type="text"
              placeholder="Search roadmaps..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            />
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-neutral-600">Loading roadmaps...</p>
          </div>
        ) : filteredRoadmaps.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-neutral-200">
            <Map className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No roadmaps found
            </h3>
            <p className="text-neutral-600 mb-6">
              Create your first learning roadmap
            </p>
            <Link
              to="/admin/roadmaps/new"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              <Plus className="w-5 h-5" />
              <span>Create Roadmap</span>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredRoadmaps.map((roadmap) => (
              <div
                key={roadmap.id}
                className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {roadmap.title}
                    </h3>
                    <p className="text-sm text-neutral-600 line-clamp-2">
                      {roadmap.description}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Link
                      to={`/admin/roadmaps/${roadmap.id}/edit`}
                      className="p-2 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-5 h-5" />
                    </Link>
                    <button
                      onClick={() => deleteRoadmap(roadmap.id)}
                      className="p-2 text-neutral-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="flex items-center space-x-4 text-sm text-neutral-600">
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full font-medium capitalize">
                    {roadmap.level}
                  </span>
                  <span>{roadmap.duration_months} months</span>
                  <span>{roadmap.total_steps} steps</span>
                  <span>{roadmap.students_enrolled} enrolled</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default RoadmapsManagement;
