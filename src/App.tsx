import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import RoadmapsPage from "./pages/RoadmapsPage";
import CoursesPage from "./pages/CoursesPage";
import ChallengesPage from "./pages/ChallengesPage";
import CommunityPage from "./pages/CommunityPage";
import PricingPage from "./pages/PricingPage";
import DocsPage from "./pages/DocsPage";
import BlogPage from "./pages/BlogPage";
import ContactPage from "./pages/ContactPage";
import ServicesPage from "./pages/ServicesPage";
import HirePage from "./pages/HirePage";
import LoginPage from "./pages/auth/LoginPage";
import SignupPage from "./pages/auth/SignupPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import ProgressPage from "./pages/dashboard/ProgressPage";
import CourseDetailPage from "./pages/courses/CourseDetailPage";
import CourseLearningPage from "./pages/courses/CourseLearningPage";
import UserProfilePage from "./pages/profile/UserProfilePage";
import MentorshipPage from "./pages/mentorship/MentorshipPage";
import InstructorDashboardPage from "./pages/instructor/InstructorDashboardPage";
import CourseCreationPage from "./pages/instructor/CourseCreationPage";
import LessonEditorPage from "./pages/instructor/LessonEditorPage";
import AIToolsPage from "./pages/AIToolsPage";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CoursesManagement from "./pages/admin/CoursesManagement";
import CourseForm from "./pages/admin/CourseForm";
import BlogsManagement from "./pages/admin/BlogsManagement";
import BlogForm from "./pages/admin/BlogForm";
import RoadmapsManagement from "./pages/admin/RoadmapsManagement";
import RoadmapForm from "./pages/admin/RoadmapForm";
import AIToolsManagement from "./pages/admin/AIToolsManagement";
import AIToolForm from "./pages/admin/AIToolForm";
import AdminDebug from "./pages/admin/AdminDebug";
import CourseModules from "./pages/admin/CourseModules";
import CourseLessons from "./pages/admin/CourseLessons";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public routes with layout */}
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <AboutPage />
              </Layout>
            }
          />
          <Route
            path="/roadmaps"
            element={
              <Layout>
                <RoadmapsPage />
              </Layout>
            }
          />
          <Route
            path="/courses"
            element={
              <Layout>
                <CoursesPage />
              </Layout>
            }
          />
          <Route
            path="/challenges"
            element={
              <Layout>
                <ChallengesPage />
              </Layout>
            }
          />
          <Route
            path="/community"
            element={
              <Layout>
                <CommunityPage />
              </Layout>
            }
          />
          <Route
            path="/mentorship"
            element={
              <Layout>
                <MentorshipPage />
              </Layout>
            }
          />
          <Route
            path="/pricing"
            element={
              <Layout>
                <PricingPage />
              </Layout>
            }
          />
          <Route
            path="/docs"
            element={
              <Layout>
                <DocsPage />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <BlogPage />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <ContactPage />
              </Layout>
            }
          />
          <Route
            path="/ai-tools"
            element={
              <Layout>
                <AIToolsPage />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <ServicesPage />
              </Layout>
            }
          />
          <Route
            path="/hire"
            element={
              <Layout>
                <HirePage />
              </Layout>
            }
          />

          {/* Auth routes without layout */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />

          {/* Dashboard and learning routes without main layout */}
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/course/:courseId" element={<CourseDetailPage />} />
          <Route path="/learn/:courseId" element={<CourseLearningPage />} />
          <Route path="/profile/:userId" element={<UserProfilePage />} />

          {/* Instructor routes without main layout */}
          <Route
            path="/instructor/dashboard"
            element={<InstructorDashboardPage />}
          />
          <Route
            path="/instructor/course-creation"
            element={<CourseCreationPage />}
          />
          <Route
            path="/instructor/course-edit/:courseId"
            element={<CourseCreationPage />}
          />
          <Route
            path="/instructor/lesson-editor/:lessonId"
            element={<LessonEditorPage />}
          />

          {/* Admin routes */}
          <Route path="/admin/debug" element={<AdminDebug />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/courses" element={<CoursesManagement />} />
          <Route path="/admin/courses/new" element={<CourseForm />} />
          <Route path="/admin/courses/:id/edit" element={<CourseForm />} />
          <Route
            path="/admin/courses/:courseId/modules"
            element={<CourseModules />}
          />
          <Route
            path="/admin/courses/:courseId/modules/:moduleId/lessons"
            element={<CourseLessons />}
          />
          <Route path="/admin/blogs" element={<BlogsManagement />} />
          <Route path="/admin/blogs/new" element={<BlogForm />} />
          <Route path="/admin/blogs/:id/edit" element={<BlogForm />} />
          <Route path="/admin/roadmaps" element={<RoadmapsManagement />} />
          <Route path="/admin/roadmaps/new" element={<RoadmapForm />} />
          <Route path="/admin/roadmaps/:id/edit" element={<RoadmapForm />} />
          <Route path="/admin/ai-tools" element={<AIToolsManagement />} />
          <Route path="/admin/ai-tools/new" element={<AIToolForm />} />
          <Route path="/admin/ai-tools/:id/edit" element={<AIToolForm />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
