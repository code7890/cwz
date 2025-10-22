import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Play,
  CheckCircle,
  Circle,
  Lock,
  BookOpen,
  Video,
  MessageCircle,
  Code,
  Terminal,
  Copy,
  RotateCcw,
  Maximize2,
  Minimize2,
  Settings,
  HelpCircle,
  Lightbulb,
  Clock,
  Users,
  Award,
  ChevronDown,
  ChevronUp,
  Send,
  ThumbsUp,
  Reply,
  Eye,
  EyeOff
} from 'lucide-react';

const CourseDetailPage: React.FC = () => {
  const { courseId } = useParams();
  const [activeTab, setActiveTab] = useState('lesson');
  const [sidebarVisible, setSidebarVisible] = useState(false); // Default hidden
  const [currentLessonId, setCurrentLessonId] = useState(1);
  const [code, setCode] = useState('print("Hello, World!")');
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [expandedChapters, setExpandedChapters] = useState<number[]>([1]);
  const [question, setQuestion] = useState('');
  const [codeEditorExpanded, setCodeEditorExpanded] = useState(true); // Default expanded
  const [codeEditorFullscreen, setCodeEditorFullscreen] = useState(false);
  const [outputMinimized, setOutputMinimized] = useState(false);

  // Mock course data
  const courseData = {
    id: 1,
    title: 'Learn Python Basics',
    description: 'Master Python programming from scratch with hands-on examples and interactive exercises.',
    totalLessons: 45,
    completedLessons: 12,
    progressPercentage: 27,
    language: 'Python',
    difficulty: 'Beginner',
    estimatedTime: '6 weeks'
  };

  const courseOutline = [
    {
      id: 1,
      title: 'Ch 1: Introduction',
      lessons: [
        { id: 1, title: 'Get Started', completed: true, locked: false },
        { id: 2, title: 'Numbers and Strings', completed: true, locked: false },
        { id: 3, title: 'Comments', completed: false, locked: false },
        { id: 4, title: 'Variables', completed: false, locked: false },
        { id: 5, title: 'Output', completed: false, locked: false },
        { id: 6, title: 'Arithmetic Operators', completed: false, locked: false },
      ]
    },
    {
      id: 2,
      title: 'Ch 2: Decision Making & Loops',
      lessons: [
        { id: 7, title: 'Data Conversion', completed: false, locked: true },
        { id: 8, title: 'Get User Input', completed: false, locked: true },
        { id: 9, title: 'Introduction Examples', completed: false, locked: true },
        { id: 10, title: 'Recap', completed: false, locked: true },
      ]
    },
    {
      id: 3,
      title: 'Ch 3: Functions',
      lessons: [
        { id: 11, title: 'Introduction to Functions', completed: false, locked: true },
        { id: 12, title: 'Function Parameters', completed: false, locked: true },
        { id: 13, title: 'Return Statement', completed: false, locked: true },
      ]
    },
    {
      id: 4,
      title: 'Ch 4: Data Types',
      lessons: [
        { id: 14, title: 'Lists', completed: false, locked: true },
        { id: 15, title: 'Dictionaries', completed: false, locked: true },
        { id: 16, title: 'Tuples', completed: false, locked: true },
      ]
    },
    {
      id: 5,
      title: 'Ch 5: Completing Basics',
      lessons: [
        { id: 17, title: 'File Handling', completed: false, locked: true },
        { id: 18, title: 'Error Handling', completed: false, locked: true },
        { id: 19, title: 'Final Project', completed: false, locked: true },
      ]
    }
  ];

  const currentLesson = {
    id: 1,
    title: 'Run Your First Python Program',
    content: `You're about to run your very first Python program.

Here is a simple program that prints Hello, World!.

\`\`\`python
print("Hello, World!")
\`\`\`

All you have to do is click the **Run Code** button.

You'll see Hello, World! in the Output section.

Awesome—you've just run your very first Python program.

Don't worry if it doesn't make complete sense yet. We'll walk through how this code works step-by-step on the next page.

Go ahead and click **Next Lesson** to keep going.

---

### Key Points:
- The \`print()\` function displays text on the screen
- Text inside quotes is called a **string**
- Python executes code line by line from top to bottom

### Try It Yourself:
Try changing "Hello, World!" to your own message and run the code again!`,
    codeExample: 'print("Hello, World!")',
    expectedOutput: 'Hello, World!',
    hints: [
      'Make sure to include the quotes around your text',
      'The print() function is case-sensitive',
      'Don\'t forget the parentheses'
    ]
  };

  const toggleChapter = (chapterId: number) => {
    setExpandedChapters(prev => 
      prev.includes(chapterId) 
        ? prev.filter(id => id !== chapterId)
        : [...prev, chapterId]
    );
  };

  const runCode = async () => {
    setIsRunning(true);
    // Simulate code execution
    setTimeout(() => {
      // Simple Python print simulation
      if (code.includes('print(')) {
        const match = code.match(/print\(["'](.*)["']\)/);
        if (match) {
          setOutput(match[1]);
        } else {
          setOutput('Hello, World!');
        }
      } else {
        setOutput('# No output');
      }
      setIsRunning(false);
    }, 1000);
  };

  const resetCode = () => {
    setCode(currentLesson.codeExample);
    setOutput('');
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  const toggleCodeEditor = () => {
    setCodeEditorExpanded(!codeEditorExpanded);
  };

  const toggleFullscreen = () => {
    setCodeEditorFullscreen(!codeEditorFullscreen);
  };

  const toggleOutput = () => {
    setOutputMinimized(!outputMinimized);
  };

  const nextLesson = () => {
    // Find next available lesson
    const allLessons = courseOutline.flatMap(chapter => chapter.lessons);
    const currentIndex = allLessons.findIndex(lesson => lesson.id === currentLessonId);
    if (currentIndex < allLessons.length - 1) {
      const nextLesson = allLessons[currentIndex + 1];
      if (!nextLesson.locked) {
        setCurrentLessonId(nextLesson.id);
      }
    }
  };

  const previousLesson = () => {
    const allLessons = courseOutline.flatMap(chapter => chapter.lessons);
    const currentIndex = allLessons.findIndex(lesson => lesson.id === currentLessonId);
    if (currentIndex > 0) {
      setCurrentLessonId(allLessons[currentIndex - 1].id);
    }
  };

  const submitQuestion = async () => {
    if (question.trim()) {
      // Here we'll integrate OpenAI API
      console.log('Question submitted:', question);
      // TODO: Call OpenAI API to get AI response
      setQuestion('');
    }
  };

  // Fullscreen code editor overlay
  if (codeEditorFullscreen) {
    return (
      <div className="fixed inset-0 z-50 bg-neutral-900 text-white flex flex-col">
        {/* Fullscreen Header */}
        <div className="bg-neutral-800 px-4 py-3 border-b border-neutral-700 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Code className="w-4 h-4 text-neutral-400" />
              <span className="text-sm font-medium">main.py</span>
              <span className="text-xs text-neutral-500">- Fullscreen Mode</span>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={runCode}
                disabled={isRunning || !code.trim()}
                className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
              >
                {isRunning ? (
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                ) : (
                  <Play className="w-4 h-4 mr-2" />
                )}
                {isRunning ? 'Running...' : 'Run Code'}
              </button>
              <button
                onClick={resetCode}
                className="p-2 text-neutral-400 hover:text-white transition-colors"
                title="Reset Code"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={copyCode}
                className="p-2 text-neutral-400 hover:text-white transition-colors"
                title="Copy Code"
              >
                <Copy className="w-4 h-4" />
              </button>
              <button
                onClick={toggleFullscreen}
                className="p-2 text-neutral-400 hover:text-white transition-colors"
                title="Exit Fullscreen"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Fullscreen Code Editor */}
        <div className="flex-1 flex min-h-0">
          <div className="flex-1 p-6">
            <div className="h-full">
              <textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="w-full h-full bg-transparent text-white font-mono text-lg resize-none border-0 focus:outline-none"
                placeholder="Write your Python code here..."
                style={{ lineHeight: '1.6' }}
              />
            </div>
          </div>

          {/* Fullscreen Output */}
          <div className="w-96 border-l border-neutral-700 flex flex-col">
            <div className="bg-neutral-800 px-4 py-3 border-b border-neutral-700 flex-shrink-0">
              <h3 className="text-sm font-medium text-white">Output</h3>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              {output ? (
                <div className="text-green-400 font-mono text-sm whitespace-pre-wrap">{output}</div>
              ) : (
                <div className="text-neutral-500 text-sm">Click "Run Code" to see the output</div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen bg-white flex overflow-hidden">
      {/* Course Outline Sidebar */}
      {sidebarVisible && (
        <div className="w-80 bg-white border-r border-neutral-200 flex-shrink-0 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b border-neutral-200 flex-shrink-0">
            <div>
              <h2 className="font-semibold text-neutral-900">{courseData.title}</h2>
              <p className="text-sm text-neutral-600">{courseData.progressPercentage}% Completed</p>
            </div>
            <button
              onClick={() => setSidebarVisible(false)}
              className="p-1 rounded-lg hover:bg-neutral-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Progress Bar */}
          <div className="p-4 border-b border-neutral-200 flex-shrink-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-neutral-600">Progress</span>
              <span className="text-sm font-medium text-neutral-900">{courseData.completedLessons}/{courseData.totalLessons}</span>
            </div>
            <div className="w-full bg-neutral-200 rounded-full h-2">
              <div 
                className="bg-primary-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${courseData.progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Course Outline - Scrollable */}
          <div className="flex-1 overflow-y-auto">
            {courseOutline.map((chapter) => (
              <div key={chapter.id} className="border-b border-neutral-100">
                <button
                  onClick={() => toggleChapter(chapter.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-neutral-50 transition-colors"
                >
                  <span className="font-medium text-neutral-900">{chapter.title}</span>
                  {expandedChapters.includes(chapter.id) ? (
                    <ChevronUp className="w-4 h-4 text-neutral-600" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-neutral-600" />
                  )}
                </button>
                
                {expandedChapters.includes(chapter.id) && (
                  <div className="pb-2">
                    {chapter.lessons.map((lesson) => (
                      <button
                        key={lesson.id}
                        onClick={() => !lesson.locked && setCurrentLessonId(lesson.id)}
                        className={`w-full flex items-center space-x-3 px-6 py-2 text-left transition-colors ${
                          currentLessonId === lesson.id
                            ? 'bg-primary-50 border-r-2 border-primary-600'
                            : lesson.locked
                            ? 'text-neutral-400 cursor-not-allowed'
                            : 'hover:bg-neutral-50'
                        }`}
                      >
                        <div className="flex-shrink-0">
                          {lesson.locked ? (
                            <Lock className="w-4 h-4 text-neutral-400" />
                          ) : lesson.completed ? (
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          ) : currentLessonId === lesson.id ? (
                            <Circle className="w-4 h-4 text-primary-600 fill-current" />
                          ) : (
                            <Circle className="w-4 h-4 text-neutral-400" />
                          )}
                        </div>
                        <span className={`text-sm ${
                          currentLessonId === lesson.id 
                            ? 'text-primary-700 font-medium' 
                            : lesson.locked 
                            ? 'text-neutral-400' 
                            : 'text-neutral-700'
                        }`}>
                          {lesson.title}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <div className="bg-white border-b border-neutral-200 px-4 py-3 flex-shrink-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link 
                to="/dashboard"
                className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span className="text-sm">Back to Dashboard</span>
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={toggleSidebar}
                className="flex items-center space-x-2 bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium border border-primary-200 hover:bg-primary-100 transition-colors"
              >
                {sidebarVisible ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                <span>{sidebarVisible ? 'Hide' : 'Show'} Course Outline</span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex min-h-0">
          {/* Content Area */}
          <div className="flex-1 flex flex-col min-w-0">
            {/* Tab Navigation */}
            <div className="bg-white border-b border-neutral-200 px-6 flex-shrink-0">
              <div className="flex space-x-8">
                <button
                  onClick={() => setActiveTab('lesson')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'lesson'
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-neutral-500 hover:text-neutral-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Lesson</span>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveTab('video')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'video'
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-neutral-500 hover:text-neutral-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <Video className="w-4 h-4" />
                    <span>Video Tutorial</span>
                  </div>
                </button>
                
                <button
                  onClick={() => setActiveTab('ask')}
                  className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === 'ask'
                      ? 'border-primary-600 text-primary-600'
                      : 'border-transparent text-neutral-500 hover:text-neutral-700'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Ask Zee</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Tab Content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              {activeTab === 'lesson' && (
                <div className="p-6 max-w-4xl">
                  <h1 className="text-2xl font-bold text-neutral-900 mb-6">{currentLesson.title}</h1>
                  
                  <div className="prose prose-neutral max-w-none">
                    <div className="space-y-4 text-neutral-700 leading-relaxed">
                      <p>You're about to run your very first Python program.</p>
                      
                      <p>Here is a simple program that prints <code className="bg-neutral-100 px-1 py-0.5 rounded text-sm">Hello, World!</code>.</p>
                      
                      {/* Code Block with Run Button */}
                      <div className="bg-neutral-900 text-green-400 rounded-lg font-mono text-sm my-6 relative">
                        <div className="flex items-center justify-between p-4 border-b border-neutral-700">
                          <span className="text-neutral-400 text-xs">Python</span>
                          <div className="flex items-center space-x-2">
                            <button 
                              onClick={copyCode}
                              className="text-neutral-400 hover:text-white transition-colors p-1"
                              title="Copy Code"
                            >
                              <Copy className="w-4 h-4" />
                            </button>
                            <button
                              onClick={runCode}
                              disabled={isRunning}
                              className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                            >
                              {isRunning ? (
                                <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin mr-1"></div>
                              ) : (
                                <Play className="w-3 h-3 mr-1" />
                              )}
                              Run Code
                            </button>
                          </div>
                        </div>
                        <div className="p-4 text-white">
                          <span className="text-blue-400">print</span>
                          <span className="text-white">(</span>
                          <span className="text-yellow-400">"Hello, World!"</span>
                          <span className="text-white">)</span>
                        </div>
                      </div>
                      
                      <p>All you have to do is click the <strong>Run Code</strong> button.</p>
                      
                      <p>You'll see <code className="bg-neutral-100 px-1 py-0.5 rounded text-sm">Hello, World!</code> in the Output section.</p>
                      
                      <p>Awesome—you've just run your very first Python program.</p>
                      
                      <p>Don't worry if it doesn't make complete sense yet. We'll walk through how this code works step-by-step on the next page.</p>
                      
                      <p>Go ahead and click <strong>Next Lesson</strong> to keep going.</p>
                      
                      <hr className="my-8 border-neutral-200" />
                      
                      <h3 className="text-lg font-semibold text-neutral-900 mb-3">Key Points:</h3>
                      <ul className="space-y-2">
                        <li>The <code className="bg-neutral-100 px-1 py-0.5 rounded text-sm">print()</code> function displays text on the screen</li>
                        <li>Text inside quotes is called a <strong>string</strong></li>
                        <li>Python executes code line by line from top to bottom</li>
                      </ul>
                      
                      <h3 className="text-lg font-semibold text-neutral-900 mb-3 mt-6">Try It Yourself:</h3>
                      <p>Try changing "Hello, World!" to your own message and run the code again!</p>

                      {/* Additional content to test scrolling */}
                      <div className="mt-12 space-y-6">
                        <h3 className="text-lg font-semibold text-neutral-900">Understanding the Code</h3>
                        <p>Let's break down what happens when you run this simple Python program:</p>
                        
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <h4 className="font-medium text-blue-900 mb-2">Step 1: Function Call</h4>
                          <p className="text-blue-800 text-sm">Python sees the <code>print()</code> function and knows it needs to display something.</p>
                        </div>
                        
                        <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                          <h4 className="font-medium text-green-900 mb-2">Step 2: String Processing</h4>
                          <p className="text-green-800 text-sm">The text inside quotes is treated as a string literal.</p>
                        </div>
                        
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                          <h4 className="font-medium text-purple-900 mb-2">Step 3: Output Display</h4>
                          <p className="text-purple-800 text-sm">The string is sent to the output console where you can see it.</p>
                        </div>

                        <h3 className="text-lg font-semibold text-neutral-900 mt-8">Common Mistakes</h3>
                        <div className="space-y-3">
                          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <h4 className="font-medium text-red-900 mb-1">Forgetting Quotes</h4>
                            <p className="text-red-800 text-sm mb-2">If you write <code>print(Hello, World!)</code> without quotes, Python will look for variables named Hello and World.</p>
                            <div className="bg-red-100 p-2 rounded font-mono text-sm text-red-900">
                              NameError: name 'Hello' is not defined
                            </div>
                          </div>
                          
                          <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                            <h4 className="font-medium text-orange-900 mb-1">Missing Parentheses</h4>
                            <p className="text-orange-800 text-sm mb-2">Writing <code>print "Hello, World!"</code> works in Python 2 but not Python 3.</p>
                            <div className="bg-orange-100 p-2 rounded font-mono text-sm text-orange-900">
                              SyntaxError: Missing parentheses in call to 'print'
                            </div>
                          </div>
                        </div>

                        <h3 className="text-lg font-semibold text-neutral-900 mt-8">Practice Exercises</h3>
                        <div className="space-y-4">
                          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                            <h4 className="font-medium text-neutral-900 mb-2">Exercise 1</h4>
                            <p className="text-neutral-700 text-sm">Print your name instead of "Hello, World!"</p>
                          </div>
                          
                          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                            <h4 className="font-medium text-neutral-900 mb-2">Exercise 2</h4>
                            <p className="text-neutral-700 text-sm">Try printing multiple lines by using multiple print statements</p>
                          </div>
                          
                          <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                            <h4 className="font-medium text-neutral-900 mb-2">Exercise 3</h4>
                            <p className="text-neutral-700 text-sm">Print a message with both single and double quotes</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Confused about something?</strong> <button onClick={() => setActiveTab('ask')} className="text-blue-600 hover:text-blue-700 underline">Ask a question!</button>
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'video' && (
                <div className="p-6">
                  <div className="bg-neutral-100 rounded-lg p-12 text-center">
                    <Video className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">Video Tutorial Coming Soon</h3>
                    <p className="text-neutral-600">We're working on creating video content for this lesson. Check back soon!</p>
                  </div>
                </div>
              )}

              {activeTab === 'ask' && (
                <div className="p-6 max-w-4xl">
                  <h2 className="text-xl font-bold text-neutral-900 mb-4">How does it work?</h2>
                  <p className="text-neutral-600 mb-6">
                    Use this space for your doubts about this lesson. Ask us anything that's confusing and our AI-powered expert will provide explanations to help you understand.
                  </p>
                  
                  <div className="bg-white border border-neutral-200 rounded-lg p-4 mb-6">
                    <textarea
                      value={question}
                      onChange={(e) => setQuestion(e.target.value)}
                      placeholder="Write your question here"
                      className="w-full h-32 resize-none border-0 focus:outline-none text-neutral-700 placeholder-neutral-400"
                    />
                    <div className="flex justify-end mt-4">
                      <button
                        onClick={submitQuestion}
                        disabled={!question.trim()}
                        className="bg-pink-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-pink-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        Submit a question
                        <Send className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>

                  {/* Sample Questions */}
                  <div className="space-y-4">
                    <div className="bg-neutral-50 border border-neutral-200 rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-primary-600 font-medium text-sm">AK</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium text-neutral-900">Ahmed Khan</span>
                            <span className="text-neutral-500 text-sm">2 hours ago</span>
                          </div>
                          <p className="text-neutral-700 mb-3">
                            What happens if I forget to include the quotes around the text in the print function?
                          </p>
                          <div className="flex items-center space-x-4 text-sm">
                            <button className="flex items-center space-x-1 text-neutral-600 hover:text-primary-600 transition-colors">
                              <ThumbsUp className="w-4 h-4" />
                              <span>5</span>
                            </button>
                            <button className="flex items-center space-x-1 text-neutral-600 hover:text-primary-600 transition-colors">
                              <Reply className="w-4 h-4" />
                              <span>Reply</span>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 ml-8">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-green-600 font-medium text-sm">Z</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-2">
                            <span className="font-medium text-neutral-900">Zee - AI Expert</span>
                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">AI Powered</span>
                            <span className="text-neutral-500 text-sm">1 hour ago</span>
                          </div>
                          <p className="text-neutral-700">
                            Great question! If you forget the quotes, Python will treat the text as a variable name instead of a string. This will result in a <code className="bg-neutral-100 px-1 py-0.5 rounded text-sm">NameError</code> because Python doesn't know what that variable is. Always remember to wrap text in quotes when using the print() function!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Navigation Footer */}
            <div className="bg-white border-t border-neutral-200 px-6 py-4 flex-shrink-0">
              <div className="flex items-center justify-between">
                <button
                  onClick={previousLesson}
                  className="flex items-center space-x-2 px-4 py-2 text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-lg transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous Lesson</span>
                </button>

                {/* Progress Dots */}
                <div className="flex items-center space-x-2">
                  {[1, 2, 3, 4, 5, 6].map((step, index) => (
                    <div
                      key={step}
                      className={`w-3 h-3 rounded-full ${
                        index < 2 ? 'bg-primary-600' : index === 2 ? 'bg-primary-400' : 'bg-neutral-200'
                      }`}
                    ></div>
                  ))}
                </div>

                <button
                  onClick={nextLesson}
                  className="flex items-center space-x-2 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                >
                  <span>Next Lesson</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Code Editor Sidebar */}
          <div className={`${codeEditorExpanded ? 'w-1/2' : 'w-96'} bg-neutral-900 text-white flex flex-col transition-all duration-300 flex-shrink-0`}>
            {/* Editor Header */}
            <div className="bg-neutral-800 px-4 py-3 border-b border-neutral-700 flex-shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Code className="w-4 h-4 text-neutral-400" />
                  <span className="text-sm font-medium">main.py</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={runCode}
                    disabled={isRunning || !code.trim()}
                    className="bg-green-600 text-white px-3 py-1 rounded text-xs font-medium hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    {isRunning ? (
                      <div className="w-3 h-3 border border-white border-t-transparent rounded-full animate-spin mr-1"></div>
                    ) : (
                      <Play className="w-3 h-3 mr-1" />
                    )}
                    Run Code
                  </button>
                  <button
                    onClick={resetCode}
                    className="p-1 text-neutral-400 hover:text-white transition-colors"
                    title="Reset Code"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                  <button
                    onClick={copyCode}
                    className="p-1 text-neutral-400 hover:text-white transition-colors"
                    title="Copy Code"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                  <button
                    onClick={toggleCodeEditor}
                    className="p-1 text-neutral-400 hover:text-white transition-colors"
                    title={codeEditorExpanded ? "Collapse Editor" : "Expand Editor"}
                  >
                    {codeEditorExpanded ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
                  </button>
                  <button
                    onClick={toggleFullscreen}
                    className="p-1 text-neutral-400 hover:text-white transition-colors"
                    title="Fullscreen"
                  >
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Code Editor */}
            <div className="flex-1 flex flex-col min-h-0">
              <div className="flex-1 p-4 overflow-y-auto">
                <div className="flex items-start space-x-2">
                  <span className="text-neutral-400 text-sm select-none mt-1">1</span>
                  <div className="flex-1">
                    <textarea
                      value={code}
                      onChange={(e) => setCode(e.target.value)}
                      className="w-full bg-transparent text-white font-mono text-sm resize-none border-0 focus:outline-none min-h-[200px]"
                      placeholder="Write your Python code here..."
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Output Section - Minimizable */}
            <div className={`${outputMinimized ? 'h-12' : 'h-48'} border-t border-neutral-700 flex-shrink-0 transition-all duration-300`}>
              <div className="bg-neutral-800 px-4 py-2 border-b border-neutral-700 flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="text-sm font-medium text-white border-b-2 border-green-500 pb-1">
                    Output
                  </button>
                  <button className="text-sm text-neutral-400 hover:text-white transition-colors">
                    Code Explanation
                  </button>
                </div>
                <button
                  onClick={toggleOutput}
                  className="p-1 text-neutral-400 hover:text-white transition-colors"
                  title={outputMinimized ? "Expand Output" : "Minimize Output"}
                >
                  {outputMinimized ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
              </div>
              {!outputMinimized && (
                <div className="p-4 h-full overflow-y-auto">
                  {output ? (
                    <div className="text-green-400 font-mono text-sm whitespace-pre-wrap">{output}</div>
                  ) : (
                    <div className="text-neutral-500 text-sm">Click "Run Code" to see the output</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailPage;