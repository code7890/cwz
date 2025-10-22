import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft,
  Save,
  Eye,
  Upload,
  Plus,
  X,
  Image,
  Video,
  FileText,
  Settings,
  Users,
  Clock,
  Target,
  Award,
  DollarSign,
  Globe,
  Lock,
  ChevronDown,
  ChevronUp,
  Move,
  Edit,
  Trash2,
  Copy,
  Play,
  Pause,
  RotateCcw,
  Check,
  AlertCircle,
  Info
} from 'lucide-react';

const CourseCreationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('basic');
  const [courseData, setCourseData] = useState({
    title: '',
    subtitle: '',
    description: '',
    category: '',
    level: 'beginner',
    language: 'english',
    price: '',
    thumbnail: null,
    trailer: null,
    tags: [],
    learningObjectives: [''],
    requirements: [''],
    targetAudience: '',
    estimatedDuration: '',
    certificateEnabled: true,
    published: false
  });

  const [lessons, setLessons] = useState([
    {
      id: 1,
      title: 'Introduction',
      type: 'video',
      duration: '5:30',
      content: '',
      videoUrl: '',
      resources: [],
      quiz: null,
      order: 1
    }
  ]);

  const [currentTag, setCurrentTag] = useState('');
  const [expandedSections, setExpandedSections] = useState([1]);

  const categories = [
    'Web Development',
    'Mobile Development',
    'Data Science',
    'AI & Machine Learning',
    'UI/UX Design',
    'DevOps',
    'Cybersecurity',
    'Game Development'
  ];

  const levels = [
    { id: 'beginner', name: 'Beginner' },
    { id: 'intermediate', name: 'Intermediate' },
    { id: 'advanced', name: 'Advanced' },
    { id: 'all-levels', name: 'All Levels' }
  ];

  const languages = [
    { id: 'english', name: 'English' },
    { id: 'hindi', name: 'Hindi' },
    { id: 'urdu', name: 'Urdu' },
    { id: 'hinglish', name: 'Hinglish' }
  ];

  const addTag = () => {
    if (currentTag.trim() && !courseData.tags.includes(currentTag.trim())) {
      setCourseData(prev => ({
        ...prev,
        tags: [...prev.tags, currentTag.trim()]
      }));
      setCurrentTag('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setCourseData(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const addLearningObjective = () => {
    setCourseData(prev => ({
      ...prev,
      learningObjectives: [...prev.learningObjectives, '']
    }));
  };

  const updateLearningObjective = (index: number, value: string) => {
    setCourseData(prev => ({
      ...prev,
      learningObjectives: prev.learningObjectives.map((obj, i) => 
        i === index ? value : obj
      )
    }));
  };

  const removeLearningObjective = (index: number) => {
    setCourseData(prev => ({
      ...prev,
      learningObjectives: prev.learningObjectives.filter((_, i) => i !== index)
    }));
  };

  const addRequirement = () => {
    setCourseData(prev => ({
      ...prev,
      requirements: [...prev.requirements, '']
    }));
  };

  const updateRequirement = (index: number, value: string) => {
    setCourseData(prev => ({
      ...prev,
      requirements: prev.requirements.map((req, i) => 
        i === index ? value : req
      )
    }));
  };

  const removeRequirement = (index: number) => {
    setCourseData(prev => ({
      ...prev,
      requirements: prev.requirements.filter((_, i) => i !== index)
    }));
  };

  const addLesson = () => {
    const newLesson = {
      id: Date.now(),
      title: `Lesson ${lessons.length + 1}`,
      type: 'video',
      duration: '',
      content: '',
      videoUrl: '',
      resources: [],
      quiz: null,
      order: lessons.length + 1
    };
    setLessons([...lessons, newLesson]);
  };

  const updateLesson = (id: number, field: string, value: any) => {
    setLessons(lessons.map(lesson => 
      lesson.id === id ? { ...lesson, [field]: value } : lesson
    ));
  };

  const removeLesson = (id: number) => {
    setLessons(lessons.filter(lesson => lesson.id !== id));
  };

  const toggleSection = (sectionId: number) => {
    setExpandedSections(prev => 
      prev.includes(sectionId) 
        ? prev.filter(id => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  const saveDraft = () => {
    // Save course as draft
    console.log('Saving draft...', { courseData, lessons });
  };

  const publishCourse = () => {
    // Publish course
    console.log('Publishing course...', { courseData, lessons });
  };

  const previewCourse = () => {
    // Open course preview
    console.log('Opening preview...');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link 
                to="/instructor/dashboard"
                className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span className="text-sm">Back to Dashboard</span>
              </Link>
              <div className="h-6 w-px bg-neutral-200"></div>
              <h1 className="text-lg font-semibold text-neutral-900">Create New Course</h1>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={saveDraft}
                className="flex items-center space-x-2 px-4 py-2 text-neutral-700 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save Draft</span>
              </button>
              
              <button
                onClick={previewCourse}
                className="flex items-center space-x-2 px-4 py-2 text-primary-600 border border-primary-200 rounded-lg hover:bg-primary-50 transition-colors"
              >
                <Eye className="w-4 h-4" />
                <span>Preview</span>
              </button>
              
              <button
                onClick={publishCourse}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span>Publish Course</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 sticky top-8">
              <h3 className="font-semibold text-neutral-900 mb-4">Course Setup</h3>
              <nav className="space-y-2">
                {[
                  { id: 'basic', name: 'Basic Information', icon: FileText },
                  { id: 'curriculum', name: 'Curriculum', icon: Video },
                  { id: 'pricing', name: 'Pricing & Settings', icon: DollarSign },
                  { id: 'publish', name: 'Publish', icon: Globe },
                ].map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary-50 text-primary-700 border border-primary-200'
                          : 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{tab.name}</span>
                    </button>
                  );
                })}
              </nav>

              {/* Progress Indicator */}
              <div className="mt-6 pt-6 border-t border-neutral-200">
                <div className="flex items-center justify-between text-sm text-neutral-600 mb-2">
                  <span>Completion</span>
                  <span>45%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{ width: '45%' }}></div>
                </div>
                <p className="text-xs text-neutral-500 mt-2">
                  Complete all sections to publish your course
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'basic' && (
              <div className="space-y-8">
                {/* Course Title & Subtitle */}
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Course Information</h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Course Title *
                      </label>
                      <input
                        type="text"
                        value={courseData.title}
                        onChange={(e) => setCourseData(prev => ({ ...prev, title: e.target.value }))}
                        placeholder="e.g., Complete React Development Bootcamp"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                      <p className="text-xs text-neutral-500 mt-1">
                        Your title should be attention-grabbing and descriptive
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Course Subtitle
                      </label>
                      <input
                        type="text"
                        value={courseData.subtitle}
                        onChange={(e) => setCourseData(prev => ({ ...prev, subtitle: e.target.value }))}
                        placeholder="e.g., Master React from basics to advanced concepts with real projects"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Course Description *
                      </label>
                      <textarea
                        value={courseData.description}
                        onChange={(e) => setCourseData(prev => ({ ...prev, description: e.target.value }))}
                        placeholder="Describe what students will learn in this course..."
                        rows={6}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Category *
                        </label>
                        <select
                          value={courseData.category}
                          onChange={(e) => setCourseData(prev => ({ ...prev, category: e.target.value }))}
                          className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        >
                          <option value="">Select Category</option>
                          {categories.map(category => (
                            <option key={category} value={category}>{category}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Level *
                        </label>
                        <select
                          value={courseData.level}
                          onChange={(e) => setCourseData(prev => ({ ...prev, level: e.target.value }))}
                          className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        >
                          {levels.map(level => (
                            <option key={level.id} value={level.id}>{level.name}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Language *
                        </label>
                        <select
                          value={courseData.language}
                          onChange={(e) => setCourseData(prev => ({ ...prev, language: e.target.value }))}
                          className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        >
                          {languages.map(language => (
                            <option key={language.id} value={language.id}>{language.name}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Course Media */}
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Course Media</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Thumbnail Upload */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Course Thumbnail *
                      </label>
                      <div className="border-2 border-dashed border-neutral-300 rounded-xl p-6 text-center hover:border-primary-400 transition-colors cursor-pointer">
                        <Image className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                        <p className="text-sm text-neutral-600 mb-2">
                          Upload course thumbnail
                        </p>
                        <p className="text-xs text-neutral-500">
                          Recommended: 1280x720px, JPG or PNG
                        </p>
                        <button className="mt-3 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                          Choose File
                        </button>
                      </div>
                    </div>

                    {/* Trailer Upload */}
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Course Trailer (Optional)
                      </label>
                      <div className="border-2 border-dashed border-neutral-300 rounded-xl p-6 text-center hover:border-primary-400 transition-colors cursor-pointer">
                        <Video className="w-12 h-12 text-neutral-400 mx-auto mb-4" />
                        <p className="text-sm text-neutral-600 mb-2">
                          Upload course trailer
                        </p>
                        <p className="text-xs text-neutral-500">
                          Max 2 minutes, MP4 format
                        </p>
                        <button className="mt-3 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors">
                          Choose File
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Tags</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <input
                        type="text"
                        value={currentTag}
                        onChange={(e) => setCurrentTag(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && addTag()}
                        placeholder="Add a tag..."
                        className="flex-1 px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                      <button
                        onClick={addTag}
                        className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                      >
                        Add
                      </button>
                    </div>
                    
                    {courseData.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {courseData.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm border border-primary-200"
                          >
                            {tag}
                            <button
                              onClick={() => removeTag(tag)}
                              className="ml-2 text-primary-500 hover:text-primary-700"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Learning Objectives */}
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">What Students Will Learn</h2>
                  
                  <div className="space-y-3">
                    {courseData.learningObjectives.map((objective, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={objective}
                          onChange={(e) => updateLearningObjective(index, e.target.value)}
                          placeholder="e.g., Build responsive websites with HTML, CSS, and JavaScript"
                          className="flex-1 px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                        {courseData.learningObjectives.length > 1 && (
                          <button
                            onClick={() => removeLearningObjective(index)}
                            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    
                    <button
                      onClick={addLearningObjective}
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Learning Objective</span>
                    </button>
                  </div>
                </div>

                {/* Requirements */}
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Requirements</h2>
                  
                  <div className="space-y-3">
                    {courseData.requirements.map((requirement, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <input
                          type="text"
                          value={requirement}
                          onChange={(e) => updateRequirement(index, e.target.value)}
                          placeholder="e.g., Basic computer skills and internet access"
                          className="flex-1 px-4 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        />
                        {courseData.requirements.length > 1 && (
                          <button
                            onClick={() => removeRequirement(index)}
                            className="p-2 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-lg transition-colors"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    
                    <button
                      onClick={addRequirement}
                      className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Requirement</span>
                    </button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="space-y-6">
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-neutral-900">Course Curriculum</h2>
                    <button
                      onClick={addLesson}
                      className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                      <span>Add Lesson</span>
                    </button>
                  </div>

                  <div className="space-y-4">
                    {lessons.map((lesson, index) => (
                      <div key={lesson.id} className="border border-neutral-200 rounded-xl">
                        <div className="flex items-center justify-between p-4 bg-neutral-50 rounded-t-xl">
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => toggleSection(lesson.id)}
                              className="text-neutral-600 hover:text-neutral-900"
                            >
                              {expandedSections.includes(lesson.id) ? (
                                <ChevronUp className="w-4 h-4" />
                              ) : (
                                <ChevronDown className="w-4 h-4" />
                              )}
                            </button>
                            <span className="text-sm font-medium text-neutral-700">
                              Lesson {index + 1}
                            </span>
                            <input
                              type="text"
                              value={lesson.title}
                              onChange={(e) => updateLesson(lesson.id, 'title', e.target.value)}
                              className="font-medium text-neutral-900 bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-primary-500 rounded px-2 py-1"
                            />
                          </div>
                          
                          <div className="flex items-center space-x-2">
                            <select
                              value={lesson.type}
                              onChange={(e) => updateLesson(lesson.id, 'type', e.target.value)}
                              className="text-sm border border-neutral-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-primary-500"
                            >
                              <option value="video">Video</option>
                              <option value="text">Text</option>
                              <option value="quiz">Quiz</option>
                              <option value="assignment">Assignment</option>
                            </select>
                            
                            <button
                              onClick={() => removeLesson(lesson.id)}
                              className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded transition-colors"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {expandedSections.includes(lesson.id) && (
                          <div className="p-4 space-y-4">
                            {lesson.type === 'video' && (
                              <div className="space-y-4">
                                <div>
                                  <label className="block text-sm font-medium text-neutral-700 mb-2">
                                    Video URL or Upload
                                  </label>
                                  <div className="flex items-center space-x-2">
                                    <input
                                      type="text"
                                      value={lesson.videoUrl}
                                      onChange={(e) => updateLesson(lesson.id, 'videoUrl', e.target.value)}
                                      placeholder="Enter video URL or upload file"
                                      className="flex-1 px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                    <button className="px-4 py-2 bg-neutral-100 text-neutral-700 rounded-lg hover:bg-neutral-200 transition-colors">
                                      <Upload className="w-4 h-4" />
                                    </button>
                                  </div>
                                </div>
                                
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <label className="block text-sm font-medium text-neutral-700 mb-2">
                                      Duration
                                    </label>
                                    <input
                                      type="text"
                                      value={lesson.duration}
                                      onChange={(e) => updateLesson(lesson.id, 'duration', e.target.value)}
                                      placeholder="e.g., 10:30"
                                      className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                  </div>
                                </div>
                              </div>
                            )}

                            {lesson.type === 'text' && (
                              <div>
                                <label className="block text-sm font-medium text-neutral-700 mb-2">
                                  Lesson Content
                                </label>
                                <Link
                                  to={`/instructor/lesson-editor/${lesson.id}`}
                                  className="flex items-center justify-center space-x-2 w-full px-4 py-8 border-2 border-dashed border-neutral-300 rounded-xl hover:border-primary-400 transition-colors text-neutral-600 hover:text-primary-600"
                                >
                                  <Edit className="w-5 h-5" />
                                  <span>Open Rich Text Editor</span>
                                </Link>
                              </div>
                            )}

                            <div>
                              <label className="block text-sm font-medium text-neutral-700 mb-2">
                                Lesson Description
                              </label>
                              <textarea
                                value={lesson.content}
                                onChange={(e) => updateLesson(lesson.id, 'content', e.target.value)}
                                placeholder="Brief description of what this lesson covers..."
                                rows={3}
                                className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pricing' && (
              <div className="space-y-8">
                {/* Pricing */}
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Pricing</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Course Price (₹)
                      </label>
                      <input
                        type="number"
                        value={courseData.price}
                        onChange={(e) => setCourseData(prev => ({ ...prev, price: e.target.value }))}
                        placeholder="e.g., 2999"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Estimated Duration
                      </label>
                      <input
                        type="text"
                        value={courseData.estimatedDuration}
                        onChange={(e) => setCourseData(prev => ({ ...prev, estimatedDuration: e.target.value }))}
                        placeholder="e.g., 6 weeks"
                        className="w-full px-4 py-3 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                  </div>
                </div>

                {/* Course Settings */}
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Course Settings</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium text-neutral-900">Certificate of Completion</h3>
                        <p className="text-sm text-neutral-600">Students will receive a certificate upon course completion</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={courseData.certificateEnabled}
                          onChange={(e) => setCourseData(prev => ({ ...prev, certificateEnabled: e.target.checked }))}
                          className="sr-only peer"
                        />
                        <div className="w-11 h-6 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'publish' && (
              <div className="space-y-8">
                <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6">
                  <h2 className="text-xl font-bold text-neutral-900 mb-6">Publish Course</h2>
                  
                  <div className="space-y-6">
                    {/* Course Review */}
                    <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                      <div className="flex items-start space-x-3">
                        <Info className="w-5 h-5 text-blue-600 mt-0.5" />
                        <div>
                          <h3 className="font-medium text-blue-900">Course Review Process</h3>
                          <p className="text-sm text-blue-700 mt-1">
                            Your course will be reviewed by our team before going live. This usually takes 1-2 business days.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Checklist */}
                    <div>
                      <h3 className="font-medium text-neutral-900 mb-4">Pre-publish Checklist</h3>
                      <div className="space-y-3">
                        {[
                          { item: 'Course title and description', completed: true },
                          { item: 'Course thumbnail uploaded', completed: false },
                          { item: 'At least 5 lessons created', completed: false },
                          { item: 'Course pricing set', completed: true },
                          { item: 'Learning objectives defined', completed: true },
                        ].map((check, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            {check.completed ? (
                              <Check className="w-5 h-5 text-green-600" />
                            ) : (
                              <AlertCircle className="w-5 h-5 text-orange-500" />
                            )}
                            <span className={`text-sm ${check.completed ? 'text-neutral-900' : 'text-neutral-600'}`}>
                              {check.item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Publish Button */}
                    <div className="pt-6 border-t border-neutral-200">
                      <button
                        onClick={publishCourse}
                        className="w-full bg-primary-600 text-white py-4 px-6 rounded-xl font-semibold hover:bg-primary-700 transition-colors flex items-center justify-center space-x-2"
                      >
                        <Globe className="w-5 h-5" />
                        <span>Submit for Review</span>
                      </button>
                      <p className="text-xs text-neutral-500 text-center mt-2">
                        By publishing, you agree to our instructor terms and conditions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCreationPage;