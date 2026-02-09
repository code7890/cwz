import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Play,
  CheckCircle,
  ChevronDown,
  ChevronUp,
  Home,
  User,
  Copy,
  RotateCcw,
  Settings,
  Maximize2,
} from "lucide-react";
import { supabase } from "../../lib/supabase";
import { useAuth } from "../../contexts/AuthContext";

interface Lesson {
  id: string;
  title: string;
  lesson_type: string;
  duration_minutes: number;
  content: string;
  video_url?: string;
  order_index: number;
  is_completed?: boolean;
}

interface Module {
  id: string;
  title: string;
  description: string;
  order_index: number;
  duration_minutes: number;
  lessons: Lesson[];
}

const CourseLearningPage: React.FC = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [course, setCourse] = useState<any>(null);
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [currentLessonId, setCurrentLessonId] = useState<string | null>(null);
  const [expandedModules, setExpandedModules] = useState<Set<string>>(
    new Set(),
  );
  const [editorCode, setEditorCode] = useState(`# Write your Python code here
print("Hello, World!")
`);
  const [codeOutput, setCodeOutput] = useState("");
  const [isRunningCode, setIsRunningCode] = useState(false);
  const [activeOutputTab, setActiveOutputTab] = useState<
    "output" | "explanation"
  >("output");
  const [selectedLanguage, setSelectedLanguage] = useState<{
    name: string;
    version: string;
    extension: string;
  }>({
    name: "python",
    version: "3.10.0",
    extension: "py",
  });

  // Language configurations
  const languages = {
    python: { name: "python", version: "3.10.0", extension: "py" },
    javascript: { name: "javascript", version: "18.15.0", extension: "js" },
    java: { name: "java", version: "15.0.2", extension: "java" },
    cpp: { name: "cpp", version: "10.2.0", extension: "cpp" },
    c: { name: "c", version: "10.2.0", extension: "c" },
    csharp: { name: "csharp", version: "6.12.0", extension: "cs" },
    go: { name: "go", version: "1.16.2", extension: "go" },
    rust: { name: "rust", version: "1.68.2", extension: "rs" },
    php: { name: "php", version: "8.2.3", extension: "php" },
    ruby: { name: "ruby", version: "3.0.1", extension: "rb" },
    typescript: { name: "typescript", version: "5.0.3", extension: "ts" },
  };

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }
    fetchCourseData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [courseId, user]);

  useEffect(() => {
    // Make the function available globally for HTML buttons
    (window as any).runCodeFromLesson = (
      encodedCode: string,
      language: string,
    ) => {
      try {
        const code = decodeURIComponent(escape(atob(encodedCode)));
        handleRunCodeFromLesson(code, language);
      } catch (error) {
        console.error("Error decoding code:", error);
      }
    };

    return () => {
      delete (window as any).runCodeFromLesson;
    };
  }, []);

  const fetchCourseData = async () => {
    try {
      const { data: courseData, error: courseError } = await supabase
        .from("courses")
        .select("*")
        .eq("id", courseId)
        .single();

      if (courseError) throw courseError;
      setCourse(courseData);

      const { data: modulesData, error: modulesError } = await supabase
        .from("course_modules")
        .select(`*, lessons:course_lessons(*)`)
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

      if (
        formattedModules.length > 0 &&
        formattedModules[0].lessons.length > 0
      ) {
        setCurrentLessonId(formattedModules[0].lessons[0].id);
        setExpandedModules(new Set([formattedModules[0].id]));
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

  const getCurrentLesson = (): Lesson | null => {
    for (const module of modules) {
      const lesson = module.lessons.find((l) => l.id === currentLessonId);
      if (lesson) return lesson;
    }
    return null;
  };

  const handleRunCode = async () => {
    setIsRunningCode(true);
    setActiveOutputTab("output");
    setCodeOutput("Running code...");

    try {
      // Using Piston API for real code execution
      const response = await fetch("https://emkc.org/api/v2/piston/execute", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          language: selectedLanguage.name,
          version: selectedLanguage.version,
          files: [
            {
              name: `main.${selectedLanguage.extension}`,
              content: editorCode,
            },
          ],
        }),
      });

      const data = await response.json();

      if (data.run) {
        const output = data.run.output || "";
        const stderr = data.run.stderr || "";

        if (stderr) {
          setCodeOutput(`Error:\n${stderr}`);
        } else if (output) {
          setCodeOutput(output);
        } else {
          setCodeOutput("Code executed successfully with no output.");
        }
      } else {
        setCodeOutput("Error: Unable to execute code. Please try again.");
      }
    } catch (error) {
      console.error("Code execution error:", error);
      setCodeOutput(
        `Error: ${error instanceof Error ? error.message : "Failed to execute code"}\n\nPlease check your internet connection and try again.`,
      );
    } finally {
      setIsRunningCode(false);
    }
  };

  const handleResetCode = () => {
    setEditorCode(`# Write your Python code here
print("Hello, World!")
`);
    setCodeOutput("");
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(editorCode);
  };

  const handleRunCodeFromLesson = (
    code: string,
    language: string = "python",
  ) => {
    // Detect language from code or use provided language
    const langKey = language.toLowerCase() as keyof typeof languages;
    const langConfig = languages[langKey] || languages.python;

    setSelectedLanguage(langConfig);
    setEditorCode(code);

    // Auto-run the code after a short delay
    setTimeout(() => {
      handleRunCode();
    }, 300);
  };

  const handleNextLesson = () => {
    let found = false;
    for (const module of modules) {
      for (let i = 0; i < module.lessons.length; i++) {
        if (found) {
          setCurrentLessonId(module.lessons[i].id);
          setExpandedModules(new Set([module.id]));
          return;
        }
        if (module.lessons[i].id === currentLessonId) {
          found = true;
        }
      }
    }
  };

  const handlePreviousLesson = () => {
    let prevLesson: Lesson | null = null;
    let prevModuleId: string | null = null;
    for (const module of modules) {
      for (const lesson of module.lessons) {
        if (lesson.id === currentLessonId && prevLesson) {
          setCurrentLessonId(prevLesson.id);
          if (prevModuleId) setExpandedModules(new Set([prevModuleId]));
          return;
        }
        prevLesson = lesson;
        prevModuleId = module.id;
      }
    }
  };

  const calculateProgress = () => {
    const totalLessons = modules.reduce(
      (acc, module) => acc + module.lessons.length,
      0,
    );
    const completedLessons = modules.reduce(
      (acc, module) =>
        acc + module.lessons.filter((l) => l.is_completed).length,
      0,
    );
    return totalLessons > 0
      ? Math.round((completedLessons / totalLessons) * 100)
      : 0;
  };

  const currentLesson = getCurrentLesson();
  const progress = calculateProgress();

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-neutral-600">Loading course...</p>
        </div>
      </div>
    );
  }

  if (!course || modules.length === 0) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            No lessons available
          </h2>
          <button
            onClick={() => navigate(`/course/${courseId}`)}
            className="text-primary-600 hover:text-primary-700"
          >
            Back to Course
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-white overflow-hidden">
      {/* Top Navigation Bar */}
      <nav className="bg-white border-b border-neutral-200 px-4 h-14 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center space-x-3">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <Menu className="w-5 h-5 text-neutral-700" />
          </button>
          <button
            onClick={() => navigate("/")}
            className="flex items-center space-x-2 text-primary-600 hover:text-primary-700"
          >
            <Home className="w-5 h-5" />
          </button>
          <div className="hidden md:block text-sm text-neutral-700 font-medium">
            {course.title}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="hidden sm:flex items-center space-x-3">
            <span className="text-xs text-neutral-600">
              {progress}% Complete
            </span>
            <div className="w-32 h-1.5 bg-neutral-200 rounded-full">
              <div
                className="h-full bg-primary-600 rounded-full transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
          <button
            onClick={() => navigate("/dashboard")}
            className="p-2 hover:bg-neutral-100 rounded-lg transition-colors"
          >
            <User className="w-5 h-5 text-neutral-700" />
          </button>
        </div>
      </nav>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar - Course Outline */}
        <aside
          className={`${
            isSidebarOpen ? "w-72" : "w-0"
          } bg-white border-r border-neutral-200 flex-shrink-0 overflow-hidden transition-all duration-300`}
        >
          <div
            className={`${isSidebarOpen ? "opacity-100" : "opacity-0"} h-full overflow-y-auto`}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-bold text-neutral-900">
                  Course Outline
                </h2>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="lg:hidden"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="space-y-1">
                {modules.map((module, moduleIndex) => (
                  <div
                    key={module.id}
                    className="border border-neutral-200 rounded-lg"
                  >
                    <button
                      onClick={() => toggleModule(module.id)}
                      className="w-full flex items-center justify-between p-2.5 hover:bg-neutral-50"
                    >
                      <div className="flex items-center space-x-2 flex-1 text-left">
                        <span className="text-xs font-bold text-primary-600">
                          Ch {moduleIndex + 1}:
                        </span>
                        <span className="text-sm font-semibold text-neutral-900 truncate">
                          {module.title}
                        </span>
                      </div>
                      {expandedModules.has(module.id) ? (
                        <ChevronUp className="w-4 h-4 text-neutral-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-neutral-400" />
                      )}
                    </button>

                    {expandedModules.has(module.id) && (
                      <div className="bg-neutral-50">
                        {module.lessons.map((lesson) => (
                          <button
                            key={lesson.id}
                            onClick={() => setCurrentLessonId(lesson.id)}
                            className={`w-full flex items-center space-x-2 p-2.5 hover:bg-white transition-colors border-b border-neutral-100 last:border-b-0 ${
                              currentLessonId === lesson.id
                                ? "bg-primary-50 border-l-3 border-l-primary-600"
                                : ""
                            }`}
                          >
                            <div
                              className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${
                                lesson.is_completed
                                  ? "bg-green-500"
                                  : currentLessonId === lesson.id
                                    ? "bg-primary-500"
                                    : "bg-neutral-300"
                              }`}
                            >
                              {lesson.is_completed ? (
                                <CheckCircle className="w-3 h-3 text-white" />
                              ) : (
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                              )}
                            </div>
                            <p
                              className={`text-sm font-medium truncate ${
                                currentLessonId === lesson.id
                                  ? "text-primary-900"
                                  : "text-neutral-700"
                              }`}
                            >
                              {lesson.title}
                            </p>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </aside>

        {/* Main Content - Split View */}
        <div className="flex-1 flex overflow-hidden">
          {/* Left Side - Lesson Content */}
          <div className="flex-1 flex flex-col overflow-hidden bg-white">
            {/* Lesson Tab */}
            <div className="border-b border-neutral-200 px-6 py-3 flex-shrink-0">
              <button className="px-4 py-2 text-sm font-medium text-primary-600 border-b-2 border-primary-600">
                Lesson
              </button>
            </div>

            {/* Lesson Content Area */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              {currentLesson && (
                <div className="max-w-3xl">
                  <h1 className="text-2xl font-bold text-neutral-900 mb-4">
                    {currentLesson.title}
                  </h1>

                  {/* Lesson Content */}
                  <div className="prose prose-neutral max-w-none">
                    {currentLesson.content ? (
                      <div
                        className="text-neutral-800 leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: currentLesson.content
                            .replace(
                              /^#+\s*(.+)$/gm,
                              '<h2 class="text-xl font-bold mb-3 mt-6 text-neutral-900">$1</h2>',
                            )
                            .replace(
                              /\*\*(.+?)\*\*/g,
                              '<strong class="font-semibold text-neutral-900">$1</strong>',
                            )
                            .replace(
                              /`(.+?)`/g,
                              '<code class="px-1.5 py-0.5 bg-neutral-100 text-primary-600 rounded text-sm font-mono">$1</code>',
                            )
                            .replace(
                              /```(\w+)?\n([\s\S]*?)```/g,
                              (match, lang, code) => {
                                const language = lang || "python";
                                const trimmedCode = code.trim();
                                const encodedCode = btoa(
                                  unescape(encodeURIComponent(trimmedCode)),
                                );
                                return `
                                <div class="my-4 border border-neutral-300 rounded-lg overflow-hidden">
                                  <pre class="bg-neutral-900 text-neutral-100 p-4 overflow-x-auto"><code>${trimmedCode}</code></pre>
                                  <div class="bg-neutral-50 px-4 py-3 border-t border-neutral-300">
                                    <button 
                                      onclick="window.runCodeFromLesson('${encodedCode}', '${language}')"
                                      class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors text-sm font-medium inline-flex items-center space-x-2"
                                    >
                                      <span>Run Code &gt;&gt;</span>
                                    </button>
                                  </div>
                                </div>
                              `;
                              },
                            )
                            .replace(/\n\n/g, "</p><p class='mb-4'>")
                            .replace(/^(.+)$/gm, (match) => {
                              if (match.startsWith("<")) return match;
                              return `<p class="mb-4">${match}</p>`;
                            }),
                        }}
                      />
                    ) : (
                      <p className="text-neutral-600">
                        No content available for this lesson.
                      </p>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Navigation */}
            <div className="border-t border-neutral-200 px-6 py-4 flex items-center justify-between flex-shrink-0">
              <button
                onClick={handlePreviousLesson}
                className="flex items-center space-x-2 px-4 py-2 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="text-sm font-medium">Previous Lesson</span>
              </button>

              <button
                onClick={handleNextLesson}
                className="flex items-center space-x-2 px-6 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <span className="text-sm font-semibold">Next Lesson</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Side - Code Editor */}
          <div className="w-[600px] flex flex-col border-l border-neutral-200 bg-neutral-900 flex-shrink-0">
            {/* Editor Header */}
            <div className="bg-neutral-800 px-4 py-2 flex items-center justify-between border-b border-neutral-700 flex-shrink-0">
              <div className="flex items-center space-x-2">
                <div className="text-neutral-400 text-sm font-mono">
                  main.{selectedLanguage.extension}
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={handleCopyCode}
                  className="p-1.5 hover:bg-neutral-700 rounded transition-colors"
                  title="Copy code"
                >
                  <Copy className="w-4 h-4 text-neutral-400" />
                </button>
                <button
                  onClick={handleResetCode}
                  className="p-1.5 hover:bg-neutral-700 rounded transition-colors"
                  title="Reset code"
                >
                  <RotateCcw className="w-4 h-4 text-neutral-400" />
                </button>
                <button className="p-1.5 hover:bg-neutral-700 rounded transition-colors">
                  <Settings className="w-4 h-4 text-neutral-400" />
                </button>
                <button className="p-1.5 hover:bg-neutral-700 rounded transition-colors">
                  <Maximize2 className="w-4 h-4 text-neutral-400" />
                </button>
              </div>
            </div>

            {/* Code Editor */}
            <div className="flex-1 overflow-hidden flex flex-col">
              <div className="flex-1 relative">
                {/* Line Numbers */}
                <div className="absolute left-0 top-0 bottom-0 w-12 bg-neutral-800 border-r border-neutral-700 py-4 text-right pr-3 text-neutral-500 text-sm font-mono select-none overflow-hidden">
                  {editorCode.split("\n").map((_, i) => (
                    <div key={i} className="leading-6">
                      {i + 1}
                    </div>
                  ))}
                </div>

                {/* Code Textarea */}
                <textarea
                  value={editorCode}
                  onChange={(e) => setEditorCode(e.target.value)}
                  className="absolute left-12 top-0 right-0 bottom-0 w-[calc(100%-3rem)] h-full p-4 bg-neutral-900 text-neutral-100 font-mono text-sm resize-none focus:outline-none leading-6"
                  spellCheck={false}
                  style={{ tabSize: 4 }}
                />
              </div>

              {/* Run Button */}
              <div className="bg-neutral-800 px-4 py-3 border-t border-neutral-700 flex items-center justify-between flex-shrink-0">
                <button
                  onClick={handleRunCode}
                  disabled={isRunningCode}
                  className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Play className="w-4 h-4" />
                  <span className="text-sm font-medium">
                    {isRunningCode ? "Running..." : "Run"}
                  </span>
                </button>
                <button className="p-2 hover:bg-neutral-700 rounded transition-colors">
                  <Settings className="w-4 h-4 text-neutral-400" />
                </button>
              </div>
            </div>

            {/* Output Panel */}
            <div className="h-64 border-t border-neutral-700 flex flex-col flex-shrink-0">
              {/* Output Tabs */}
              <div className="bg-neutral-800 flex border-b border-neutral-700">
                <button
                  onClick={() => setActiveOutputTab("output")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeOutputTab === "output"
                      ? "text-white bg-neutral-900 border-b-2 border-green-500"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  Output
                </button>
                <button
                  onClick={() => setActiveOutputTab("explanation")}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${
                    activeOutputTab === "explanation"
                      ? "text-white bg-neutral-900 border-b-2 border-green-500"
                      : "text-neutral-400 hover:text-neutral-200"
                  }`}
                >
                  Code Explanation
                </button>
              </div>

              {/* Output Content */}
              <div className="flex-1 overflow-y-auto p-4 bg-neutral-900">
                {activeOutputTab === "output" ? (
                  <pre className="text-neutral-100 font-mono text-sm whitespace-pre-wrap">
                    {codeOutput || "Click 'Run' to see output..."}
                  </pre>
                ) : (
                  <div className="text-neutral-300 text-sm">
                    <p className="mb-2">
                      Code explanation will appear here after running the code.
                    </p>
                    <p className="text-neutral-500">
                      This feature helps you understand what your code does.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseLearningPage;
