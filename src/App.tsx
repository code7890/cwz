import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import RoadmapsPage from './pages/RoadmapsPage';
import CoursesPage from './pages/CoursesPage';
import ChallengesPage from './pages/ChallengesPage';
import CommunityPage from './pages/CommunityPage';
import PricingPage from './pages/PricingPage';
import DocsPage from './pages/DocsPage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import DashboardPage from './pages/dashboard/DashboardPage';
import ProgressPage from './pages/dashboard/ProgressPage';
import CourseDetailPage from './pages/courses/CourseDetailPage';
import UserProfilePage from './pages/profile/UserProfilePage';
import MentorshipPage from './pages/mentorship/MentorshipPage';
import InstructorDashboardPage from './pages/instructor/InstructorDashboardPage';
import CourseCreationPage from './pages/instructor/CourseCreationPage';
import LessonEditorPage from './pages/instructor/LessonEditorPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with layout */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/roadmaps" element={<Layout><RoadmapsPage /></Layout>} />
        <Route path="/courses" element={<Layout><CoursesPage /></Layout>} />
        <Route path="/challenges" element={<Layout><ChallengesPage /></Layout>} />
        <Route path="/community" element={<Layout><CommunityPage /></Layout>} />
        <Route path="/mentorship" element={<Layout><MentorshipPage /></Layout>} />
        <Route path="/pricing" element={<Layout><PricingPage /></Layout>} />
        <Route path="/docs" element={<Layout><DocsPage /></Layout>} />
        <Route path="/blog" element={<Layout><BlogPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />
        
        {/* Auth routes without layout */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        
        {/* Dashboard and learning routes without main layout */}
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/progress" element={<ProgressPage />} />
        <Route path="/course/:courseId" element={<CourseDetailPage />} />
        <Route path="/profile/:userId" element={<UserProfilePage />} />
        
        {/* Instructor routes without main layout */}
        <Route path="/instructor/dashboard" element={<InstructorDashboardPage />} />
        <Route path="/instructor/course-creation" element={<CourseCreationPage />} />
        <Route path="/instructor/course-edit/:courseId" element={<CourseCreationPage />} />
        <Route path="/instructor/lesson-editor/:lessonId" element={<LessonEditorPage />} />
      </Routes>
    </Router>
  );
}

export default App;