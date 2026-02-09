import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Plus,
  Edit,
  Trash2,
  Video,
  FileText,
  Code,
  CheckSquare,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../contexts/AuthContext";

interface Lesson {
  id: string;
  title: string;
  description: string;
  content: string;
  video_url: string;
  duration_minutes: number;
  order_index: number;
  lesson_type: string;
  is_free: boolean;
  is_published: boolean;
}

const CourseLessons: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { courseId, moduleId } = useParams();
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [moduleName, setModuleName] = useState("");
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingLesson, setEditingLesson] = useState<Lesson | null>(null);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    content: "",
    video_url: "",
    duration_minutes: 0,
    lesson_type: "video",
    is_free: false,
    is_published: false,
  });

  useEffect(() => {
    checkAdminAndFetch();
  }, [moduleId]);

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

    fetchModule();
    fetchLessons();
  };

  const fetchModule = async () => {
    const { data } = await supabase
      .from("course_modules")
      .select("title")
      .eq("id", moduleId)
      .single();

    if (data) setModuleName(data.title);
  };

  const fetchLessons = async () => {
    try {
      const { data, error } = await supabase
        .from("course_lessons")
        .select("*")
        .eq("module_id", moduleId)
        .order("order_index", { ascending: true });

      if (error) throw error;
      setLessons(data || []);
    } catch (error) {
      console.error("Error fetching lessons:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (editingLesson) {
        const { error } = await supabase
          .from("course_lessons")
          .update({
            ...formData,
            updated_at: new Date().toISOString(),
          })
          .eq("id", editingLesson.id);

        if (error) throw error;
        alert("Lesson updated successfully!");
      } else {
        const maxOrder =
          lessons.length > 0
            ? Math.max(...lessons.map((l) => l.order_index))
            : 0;

        const { error } = await supabase.from("course_lessons").insert([
          {
            module_id: moduleId,
            ...formData,
            order_index: maxOrder + 1,
          },
        ]);

        if (error) throw error;
        alert("Lesson created successfully!");
      }

      setShowForm(false);
      setEditingLesson(null);
      setFormData({
        title: "",
        description: "",
        content: "",
        video_url: "",
        duration_minutes: 0,
        lesson_type: "video",
        is_free: false,
        is_published: false,
      });
      fetchLessons();
    } catch (error: any) {
      console.error("Error saving lesson:", error);
      alert(error.message || "Failed to save lesson");
    } finally {
      setLoading(false);
    }
  };

  const deleteLesson = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lesson?")) return;

    try {
      const { error } = await supabase
        .from("course_lessons")
        .delete()
        .eq("id", id);
      if (error) throw error;
      fetchLessons();
    } catch (error) {
      console.error("Error deleting lesson:", error);
      alert("Failed to delete lesson");
    }
  };

  const startEdit = (lesson: Lesson) => {
    setEditingLesson(lesson);
    setFormData({
      title: lesson.title,
      description: lesson.description || "",
      content: lesson.content || "",
      video_url: lesson.video_url || "",
      duration_minutes: lesson.duration_minutes,
      lesson_type: lesson.lesson_type,
      is_free: lesson.is_free,
      is_published: lesson.is_published,
    });
    setShowForm(true);
  };

  const getLessonIcon = (type: string) => {
    switch (type) {
      case "video":
        return Video;
      case "text":
        return FileText;
      case "code":
        return Code;
      case "quiz":
        return CheckSquare;
      default:
        return FileText;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-cream-50">
      <header className="bg-white border-b border-neutral-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            to={`/admin/courses/${courseId}/modules`}
            className="text-sm text-primary-600 hover:text-primary-700 mb-2 inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Modules
          </Link>
          <h1 className="text-2xl font-bold text-neutral-900">
            {moduleName} - Lessons
          </h1>
          <p className="text-sm text-neutral-600">
            Manage lessons in this module
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-neutral-900">Lessons</h2>
          <button
            onClick={() => {
              setShowForm(true);
              setEditingLesson(null);
              setFormData({
                title: "",
                description: "",
                content: "",
                video_url: "",
                duration_minutes: 0,
                lesson_type: "video",
                is_free: false,
                is_published: false,
              });
            }}
            className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span>Add Lesson</span>
          </button>
        </div>

        {showForm && (
          <div className="bg-white rounded-xl p-6 border border-neutral-200 mb-6">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">
              {editingLesson ? "Edit Lesson" : "New Lesson"}
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
                  placeholder="Introduction to Components"
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
                  rows={2}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Brief description of the lesson..."
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Lesson Type *
                  </label>
                  <select
                    value={formData.lesson_type}
                    onChange={(e) =>
                      setFormData({ ...formData, lesson_type: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="video">Video</option>
                    <option value="text">Text/Article</option>
                    <option value="code">Code Exercise</option>
                    <option value="quiz">Quiz</option>
                  </select>
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
              </div>

              {formData.lesson_type === "video" && (
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                    Video URL
                  </label>
                  <input
                    type="url"
                    value={formData.video_url}
                    onChange={(e) =>
                      setFormData({ ...formData, video_url: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="https://youtube.com/watch?v=..."
                  />
                  <p className="text-xs text-neutral-500 mt-1">
                    YouTube, Vimeo, or direct video URL
                  </p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">
                  Content
                </label>
                <textarea
                  value={formData.content}
                  onChange={(e) =>
                    setFormData({ ...formData, content: e.target.value })
                  }
                  rows={8}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent font-mono text-sm"
                  placeholder="Lesson content (supports Markdown)..."
                />
                <p className="text-xs text-neutral-500 mt-1">
                  You can use Markdown formatting
                </p>
              </div>

              <div className="space-y-3">
                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.is_free}
                    onChange={(e) =>
                      setFormData({ ...formData, is_free: e.target.checked })
                    }
                    className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-sm text-neutral-700">
                    Free preview lesson
                  </span>
                </label>

                <label className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    checked={formData.is_published}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        is_published: e.target.checked,
                      })
                    }
                    className="w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
                  />
                  <span className="text-sm text-neutral-700">
                    Publish this lesson
                  </span>
                </label>
              </div>

              <div className="flex items-center justify-end space-x-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setEditingLesson(null);
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
                    : editingLesson
                      ? "Update Lesson"
                      : "Create Lesson"}
                </button>
              </div>
            </form>
          </div>
        )}

        {loading && !showForm ? (
          <div className="text-center py-12">
            <p className="text-neutral-600">Loading lessons...</p>
          </div>
        ) : lessons.length === 0 ? (
          <div className="bg-white rounded-xl p-12 text-center border border-neutral-200">
            <Video className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 mb-2">
              No lessons yet
            </h3>
            <p className="text-neutral-600 mb-6">
              Start by creating your first lesson
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {lessons.map((lesson) => {
              const Icon = getLessonIcon(lesson.lesson_type);
              return (
                <div
                  key={lesson.id}
                  className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center">
                        <Icon className="w-5 h-5 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-neutral-900">
                            {lesson.title}
                          </h3>
                          {lesson.is_published ? (
                            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                              Published
                            </span>
                          ) : (
                            <span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs rounded-full">
                              Draft
                            </span>
                          )}
                          {lesson.is_free && (
                            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                              Free
                            </span>
                          )}
                        </div>
                        {lesson.description && (
                          <p className="text-sm text-neutral-600 mb-3">
                            {lesson.description}
                          </p>
                        )}
                        <div className="flex items-center space-x-4 text-sm text-neutral-600">
                          <span className="capitalize">
                            {lesson.lesson_type}
                          </span>
                          <span>{lesson.duration_minutes} minutes</span>
                          <span>Lesson {lesson.order_index}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 ml-4">
                      <button
                        onClick={() => startEdit(lesson)}
                        className="p-2 text-neutral-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => deleteLesson(lesson.id)}
                        className="p-2 text-neutral-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </main>
    </div>
  );
};

export default CourseLessons;
