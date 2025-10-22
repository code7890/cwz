import React, { useState, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { 
  ArrowLeft,
  Save,
  Eye,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  Quote,
  Code,
  Link as LinkIcon,
  Image,
  Video,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Undo,
  Redo,
  Type,
  Palette,
  Upload,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Settings,
  FileText,
  Monitor,
  Smartphone,
  Tablet,
  Download,
  Share2,
  Copy,
  Check,
  X,
  Plus,
  Trash2,
  Move,
  Edit3,
  Hash,
  Minus
} from 'lucide-react';

const LessonEditorPage: React.FC = () => {
  const { lessonId } = useParams();
  const [content, setContent] = useState('');
  const [selectedText, setSelectedText] = useState('');
  const [showLinkDialog, setShowLinkDialog] = useState(false);
  const [showImageDialog, setShowImageDialog] = useState(false);
  const [showVideoDialog, setShowVideoDialog] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [linkText, setLinkText] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [previewMode, setPreviewMode] = useState(false);
  const [devicePreview, setDevicePreview] = useState('desktop');
  const [autoSave, setAutoSave] = useState(true);
  const [lastSaved, setLastSaved] = useState(new Date());
  
  const editorRef = useRef<HTMLDivElement>(null);

  // Mock lesson data
  const lessonData = {
    id: lessonId,
    title: 'Introduction to React Components',
    courseTitle: 'Complete React Development',
    content: `<h1>Introduction to React Components</h1>
<p>React components are the building blocks of any React application. In this lesson, we'll explore what components are and how to create them.</p>

<h2>What are Components?</h2>
<p>Components are independent, reusable pieces of code that return JSX elements to be rendered to the screen. Think of them as custom HTML elements that you can create and use throughout your application.</p>

<h3>Types of Components</h3>
<p>There are two main types of components in React:</p>
<ul>
<li><strong>Functional Components</strong> - Simple functions that return JSX</li>
<li><strong>Class Components</strong> - ES6 classes that extend React.Component</li>
</ul>

<h2>Creating Your First Component</h2>
<p>Let's create a simple functional component:</p>

<pre><code>function Welcome(props) {
  return &lt;h1&gt;Hello, {props.name}!&lt;/h1&gt;;
}

// Usage
&lt;Welcome name="Ahmed" /&gt;</code></pre>

<p>This component takes a <code>name</code> prop and displays a greeting message.</p>`
  };

  const formatText = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
  };

  const insertElement = (element: string) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const newElement = document.createElement('div');
      newElement.innerHTML = element;
      range.insertNode(newElement.firstChild || newElement);
      if (editorRef.current) {
        setContent(editorRef.current.innerHTML);
      }
    }
  };

  const insertLink = () => {
    if (linkUrl && linkText) {
      const linkElement = `<a href="${linkUrl}" target="_blank" rel="noopener noreferrer">${linkText}</a>`;
      insertElement(linkElement);
      setShowLinkDialog(false);
      setLinkUrl('');
      setLinkText('');
    }
  };

  const insertImage = () => {
    if (imageUrl) {
      const imgElement = `<img src="${imageUrl}" alt="${imageAlt}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0;" />`;
      insertElement(imgElement);
      setShowImageDialog(false);
      setImageUrl('');
      setImageAlt('');
    }
  };

  const insertVideo = () => {
    if (videoUrl) {
      const videoElement = `<div style="position: relative; padding-bottom: 56.25%; height: 0; margin: 16px 0;">
        <iframe src="${videoUrl}" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; border-radius: 8px;" allowfullscreen></iframe>
      </div>`;
      insertElement(videoElement);
      setShowVideoDialog(false);
      setVideoUrl('');
    }
  };

  const insertCodeBlock = () => {
    const codeElement = `<pre style="background: #f8f9fa; border: 1px solid #e9ecef; border-radius: 8px; padding: 16px; margin: 16px 0; overflow-x: auto;"><code>// Your code here</code></pre>`;
    insertElement(codeElement);
  };

  const saveContent = () => {
    // Save content to backend
    console.log('Saving content...', content);
    setLastSaved(new Date());
  };

  const getDevicePreviewClass = () => {
    switch (devicePreview) {
      case 'mobile': return 'max-w-sm mx-auto';
      case 'tablet': return 'max-w-2xl mx-auto';
      default: return 'max-w-4xl mx-auto';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-cream-50 to-sage-50">
      {/* Header */}
      <div className="bg-white border-b border-neutral-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link 
                to="/instructor/course-creation"
                className="flex items-center text-neutral-600 hover:text-neutral-900 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                <span className="text-sm">Back to Course</span>
              </Link>
              <div className="h-6 w-px bg-neutral-200"></div>
              <div>
                <h1 className="text-lg font-semibold text-neutral-900">{lessonData.title}</h1>
                <p className="text-sm text-neutral-600">{lessonData.courseTitle}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              {/* Auto-save indicator */}
              <div className="flex items-center space-x-2 text-sm text-neutral-600">
                <div className={`w-2 h-2 rounded-full ${autoSave ? 'bg-green-500' : 'bg-neutral-400'}`}></div>
                <span>Last saved: {lastSaved.toLocaleTimeString()}</span>
              </div>
              
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  previewMode 
                    ? 'bg-primary-600 text-white' 
                    : 'text-primary-600 border border-primary-200 hover:bg-primary-50'
                }`}
              >
                <Eye className="w-4 h-4" />
                <span>{previewMode ? 'Edit' : 'Preview'}</span>
              </button>
              
              <button
                onClick={saveContent}
                className="flex items-center space-x-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Save</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {!previewMode ? (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Toolbar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-6 sticky top-8">
                <h3 className="font-semibold text-neutral-900 mb-4">Formatting Tools</h3>
                
                {/* Text Formatting */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-neutral-700 mb-2">Text Style</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => formatText('bold')}
                        className="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                        title="Bold"
                      >
                        <Bold className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => formatText('italic')}
                        className="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                        title="Italic"
                      >
                        <Italic className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => formatText('underline')}
                        className="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                        title="Underline"
                      >
                        <Underline className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Headings */}
                  <div>
                    <h4 className="text-sm font-medium text-neutral-700 mb-2">Headings</h4>
                    <div className="space-y-1">
                      {[1, 2, 3, 4].map(level => (
                        <button
                          key={level}
                          onClick={() => formatText('formatBlock', `h${level}`)}
                          className="w-full text-left px-3 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors text-sm"
                        >
                          H{level}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Lists */}
                  <div>
                    <h4 className="text-sm font-medium text-neutral-700 mb-2">Lists</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => formatText('insertUnorderedList')}
                        className="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                        title="Bullet List"
                      >
                        <List className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => formatText('insertOrderedList')}
                        className="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                        title="Numbered List"
                      >
                        <ListOrdered className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Alignment */}
                  <div>
                    <h4 className="text-sm font-medium text-neutral-700 mb-2">Alignment</h4>
                    <div className="grid grid-cols-3 gap-2">
                      <button
                        onClick={() => formatText('justifyLeft')}
                        className="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                        title="Align Left"
                      >
                        <AlignLeft className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => formatText('justifyCenter')}
                        className="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                        title="Align Center"
                      >
                        <AlignCenter className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => formatText('justifyRight')}
                        className="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                        title="Align Right"
                      >
                        <AlignRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Insert Elements */}
                  <div>
                    <h4 className="text-sm font-medium text-neutral-700 mb-2">Insert</h4>
                    <div className="space-y-2">
                      <button
                        onClick={() => setShowLinkDialog(true)}
                        className="w-full flex items-center space-x-2 px-3 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors text-sm"
                      >
                        <LinkIcon className="w-4 h-4" />
                        <span>Link</span>
                      </button>
                      <button
                        onClick={() => setShowImageDialog(true)}
                        className="w-full flex items-center space-x-2 px-3 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors text-sm"
                      >
                        <Image className="w-4 h-4" />
                        <span>Image</span>
                      </button>
                      <button
                        onClick={() => setShowVideoDialog(true)}
                        className="w-full flex items-center space-x-2 px-3 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors text-sm"
                      >
                        <Video className="w-4 h-4" />
                        <span>Video</span>
                      </button>
                      <button
                        onClick={insertCodeBlock}
                        className="w-full flex items-center space-x-2 px-3 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors text-sm"
                      >
                        <Code className="w-4 h-4" />
                        <span>Code Block</span>
                      </button>
                      <button
                        onClick={() => formatText('formatBlock', 'blockquote')}
                        className="w-full flex items-center space-x-2 px-3 py-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors text-sm"
                      >
                        <Quote className="w-4 h-4" />
                        <span>Quote</span>
                      </button>
                    </div>
                  </div>

                  {/* Undo/Redo */}
                  <div>
                    <h4 className="text-sm font-medium text-neutral-700 mb-2">Actions</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        onClick={() => formatText('undo')}
                        className="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                        title="Undo"
                      >
                        <Undo className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => formatText('redo')}
                        className="p-2 border border-neutral-200 rounded-lg hover:bg-neutral-50 transition-colors"
                        title="Redo"
                      >
                        <Redo className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Editor */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 overflow-hidden">
                {/* Editor Header */}
                <div className="border-b border-neutral-200 p-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-neutral-900">Lesson Content</h3>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm text-neutral-600">Auto-save</span>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={autoSave}
                          onChange={(e) => setAutoSave(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-neutral-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-neutral-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Editor Content */}
                <div className="p-6">
                  <div
                    ref={editorRef}
                    contentEditable
                    className="min-h-96 p-4 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 prose prose-neutral max-w-none"
                    dangerouslySetInnerHTML={{ __html: lessonData.content }}
                    onInput={(e) => setContent(e.currentTarget.innerHTML)}
                    style={{
                      lineHeight: '1.6',
                      fontSize: '16px'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* Preview Mode */
        <div className="py-8">
          {/* Preview Controls */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
            <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-neutral-900">Preview Mode</h3>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-neutral-600">Device:</span>
                    <div className="flex items-center space-x-1 bg-neutral-100 rounded-lg p-1">
                      <button
                        onClick={() => setDevicePreview('desktop')}
                        className={`p-2 rounded-md transition-colors ${
                          devicePreview === 'desktop' ? 'bg-white shadow-sm' : 'hover:bg-neutral-200'
                        }`}
                      >
                        <Monitor className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setDevicePreview('tablet')}
                        className={`p-2 rounded-md transition-colors ${
                          devicePreview === 'tablet' ? 'bg-white shadow-sm' : 'hover:bg-neutral-200'
                        }`}
                      >
                        <Tablet className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => setDevicePreview('mobile')}
                        className={`p-2 rounded-md transition-colors ${
                          devicePreview === 'mobile' ? 'bg-white shadow-sm' : 'hover:bg-neutral-200'
                        }`}
                      >
                        <Smartphone className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Preview Content */}
          <div className="px-4 sm:px-6 lg:px-8">
            <div className={getDevicePreviewClass()}>
              <div className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-8">
                <div
                  className="prose prose-neutral max-w-none"
                  dangerouslySetInnerHTML={{ __html: content || lessonData.content }}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Link Dialog */}
      {showLinkDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Insert Link</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Link Text</label>
                <input
                  type="text"
                  value={linkText}
                  onChange={(e) => setLinkText(e.target.value)}
                  placeholder="Enter link text"
                  className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">URL</label>
                <input
                  type="url"
                  value={linkUrl}
                  onChange={(e) => setLinkUrl(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={insertLink}
                  className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Insert Link
                </button>
                <button
                  onClick={() => setShowLinkDialog(false)}
                  className="flex-1 border border-neutral-200 text-neutral-700 py-2 px-4 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Image Dialog */}
      {showImageDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Insert Image</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Image URL</label>
                <input
                  type="url"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Alt Text</label>
                <input
                  type="text"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="Describe the image"
                  className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <div className="text-center">
                <button className="w-full border-2 border-dashed border-neutral-300 rounded-lg p-4 hover:border-primary-400 transition-colors">
                  <Upload className="w-6 h-6 text-neutral-400 mx-auto mb-2" />
                  <span className="text-sm text-neutral-600">Or upload from computer</span>
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={insertImage}
                  className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Insert Image
                </button>
                <button
                  onClick={() => setShowImageDialog(false)}
                  className="flex-1 border border-neutral-200 text-neutral-700 py-2 px-4 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Video Dialog */}
      {showVideoDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md mx-4">
            <h3 className="text-lg font-semibold text-neutral-900 mb-4">Insert Video</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-2">Video URL</label>
                <input
                  type="url"
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                  placeholder="YouTube, Vimeo, or direct video URL"
                  className="w-full px-3 py-2 border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
                <p className="text-xs text-neutral-500 mt-1">
                  Supports YouTube, Vimeo, and direct video links
                </p>
              </div>
              <div className="text-center">
                <button className="w-full border-2 border-dashed border-neutral-300 rounded-lg p-4 hover:border-primary-400 transition-colors">
                  <Upload className="w-6 h-6 text-neutral-400 mx-auto mb-2" />
                  <span className="text-sm text-neutral-600">Or upload video file</span>
                </button>
              </div>
              <div className="flex items-center space-x-3">
                <button
                  onClick={insertVideo}
                  className="flex-1 bg-primary-600 text-white py-2 px-4 rounded-lg hover:bg-primary-700 transition-colors"
                >
                  Insert Video
                </button>
                <button
                  onClick={() => setShowVideoDialog(false)}
                  className="flex-1 border border-neutral-200 text-neutral-700 py-2 px-4 rounded-lg hover:bg-neutral-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default LessonEditorPage;