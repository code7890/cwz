import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Plus,
  Edit,
  Trash2,
  GripVertical,
  BookOpen,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../contexts/AuthContext";

interface Module {
  id: string;
  title: string;
  description: string;
  order_index: number;
  duration_minutes: number;
  is_published: boolean;
  lessons_count?: number;
}

const CourseModules: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [modules, setModules] = useState<Module[]>([]);
  const [courseName, setCourseName] = useState("");
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingModule, setEditingModule] = useState<Module | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    duration_minutes: 0,
    is_published: false,
  });

  useEffect(() => {
    checkAdminAndFetch();
  }, [courseId]);

  const checkAdminAndFetch = async () => {
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

    fetchCourse();
    fetchModules();
  };

  const fetchCourse = async () => {
    const { data } = await supabase
      .from("courses")
      .select("title")
      .eq("id", courseId)
      .single();

    if (data) setCourseName(data.title);
  };

  const fetchModules = async () => {
    try {
      const { data, error } = await supabase
        .from("course_modules")
        .select("*")
        .eq("course_id", courseId)
        .order("order_index", { ascending: true });

      if (error) throw error;
      setModules(data || []);
    } catch (error) {
      console.error("Error fetching modules:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingModule) {
        const { error } = await supabase
          .from("course_modules")
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
          })
          .eq("id", editingModule.id);

        if (error) throw error;
        alert("Module updated successfully!");
      } else {
        const maxOrder =
          modules.length > 0
            ? Math.max(...modules.map((m) => m.order_index))
            : 0;

        const { error } = await supabase.from("course_modules").insert([
          {
            course_id: courseId,
            ...formData,
            order_index: maxOrder + 1,
          },
        ]);

        if (error) throw error;
        alert("Module created successfully!");
      }

      setShowForm(false);
      setEditingModule(null);
      setFormData({
        title: "",
        description: "",
        duration_minutes: 0,
        is_published: false,
      });
      fetchModules();
    } catch (error: any) {
      console.error("Error saving module:", error);
      alert(error.message || "Failed to save module");
    } finally {
      setLoading(false);
    }
  };

  const deleteModule = async (id: string) => {
    if (
      !confirm(
        "Are you sure? This will also delete all lessons in this module.",
      )
    )
      return;

    try {
      const { error } = await supabase
        .from("course_modules")
        .delete()
        .eq("id", id);
      if (error) throw error;
      fetchModules();
    } catch (error) {
      console.error("Error deleting module:", error);
      alert("Failed to delete module");
    }
  };

  const startEdit = (module: Module) => {
    setEditingModule(module);
    setFormData({
      title: module.title,
      description: module.description || "",
      duration_minutes: module.duration_minutes,
      is_published: module.is_published,
    });
    setShowForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-cream-50">
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to="/admin/courses"
            className="text-sm text-primary-600 hover:text-primary-700 mb-2 inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Courses
          </Link>
          <h1 className="text-2xl font-bold text-neutral-900">
            {courseName} - Modules
          </h1>
          <p className="text-sm text-neutral-600">
            Manage course modules and lessons
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-neutral-900">
            Course Modules
          </h2>
          <button
            onClick={() => {
              setShowForm(true);
              setEditingModule(null);
              setFormData({
                title: "",
                description: "",
                duration_minutes: 0,
                is_published: false,
              });
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Module</span>
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-xl p-6 border border-neutral-200 mb-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              {editingModule ? "Edit Module" : "New Module"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Title *
                </label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) =>
                    setFormData({ ...formData, title: e.target.value })
                  }
                  required
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Introduction to React"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Description
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({ ...formData, description: e.target.value })
                  }
                  rows={3}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="What students will learn in this module..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Duration (minutes)
                </label>
                <input
                  type="number"
                  value={formData.duration_minutes}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      duration_minutes: Number(e.target.value),
                    })
                  }
                  min="0"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              <label className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.is_published}
                  onChange={(e) =>
                    setFormData({ ...formData, is_published: e.target.checked })
                  }
                  className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                />
                <span className="text-sm text-neutral-700">
                  Publish this module
                </span>
              </label>

              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingModule(null);
                  }}
                  className="px-6 py-2 border border-neutral-300 text-neutral-700 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={loading}
                  className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors disabled:opacity-50"
                >
                  {loading
                    ? "Saving..."
                    : editingModule
                      ? "Update Module"
                      : "Create Module"}
                </button>
              </div>
            </form>
          </div>
        )}

        {loading && !showForm ? (
          <div className="text-center py-12">
            <p className="text-neutral-600">Loading modules...</p>
          </div>
        ) : modules.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-neutral-200">
            <BookOpen className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No modules yet
            </h3>
            <p className="text-neutral-600 mb-6">
              Start by creating your first module
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {modules.map((module) => (
              <div
                key={module.id}
                className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <GripVertical className="w-5 h-5 text-neutral-400 mt-1" />
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-neutral-900">
                          {module.title}
                        </h3>
                        {module.is_published ? (
                          <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                            Published
                          </span>
                        ) : (
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                            Draft
                          </span>
                        )}
                      </div>
                      {module.description && (
                        <p className="text-sm text-neutral-600 mb-3">
                          {module.description}
                        </p>
                      )}
                      <div className="flex items-center space-x-4 text-sm text-neutral-600">
                        <span>Module {module.order_index}</span>
                        <span>{module.duration_minutes} minutes</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    <Link
                      to={`/admin/courses/${courseId}/modules/${module.id}/lessons`}
                      className="px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium"
                    >
                      Manage Lessons
                    </Link>
                    <button
                      onClick={() => startEdit(module)}
                      className="p-2 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                      <Edit className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => deleteModule(module.id)}
                      className="p-2 text-neutral-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default CourseModules;
