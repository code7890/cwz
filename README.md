# CodeWithZee - Learning Platform with Full CMS

A modern, desi-first tech learning platform with a complete Content Management System.

## 🎉 What's Included

### ✅ Complete CMS System
- **Admin Dashboard** - Manage all your content from one place
- **Course Management** - Create and manage courses
- **Blog System** - Write and publish blog posts
- **Roadmaps** - Create learning paths
- **AI Tools Catalog** - Curate AI tools for students

### ✅ Student Features
- User authentication and profiles
- Browse courses, blogs, roadmaps, AI tools
- Personal dashboard
- Progress tracking (database ready)
- Course enrollment system

### ✅ Modern Tech Stack
- React + TypeScript
- Tailwind CSS
- Supabase (PostgreSQL + Auth)
- React Router v6
- Lucide Icons

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Setup Environment Variables
Create a `.env` file:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Apply Database Migrations
- Go to Supabase Dashboard → SQL Editor
- Run the SQL from: `supabase/migrations/20260126000001_add_cms_tables.sql`

### 4. Start Development Server
```bash
npm run dev
```

### 5. Create Admin Account
1. Sign up on the website
2. Run this SQL in Supabase (replace YOUR-USER-ID):
```sql
UPDATE profiles 
SET is_admin = true, role = 'admin' 
WHERE id = 'YOUR-USER-ID';
```

### 6. Access Admin Panel
- Visit: `http://localhost:5175/admin`
- Start creating content!

## 📚 Documentation

- **[QUICK_START.md](QUICK_START.md)** - Get started in 5 minutes
- **[SETUP_GUIDE.md](SETUP_GUIDE.md)** - Detailed setup instructions
- **[IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)** - Technical details

## 🎯 Key Features

### Admin CMS
- ✅ Full CRUD operations for all content
- ✅ Search and filter functionality
- ✅ Publish/unpublish workflow
- ✅ Real-time statistics
- ✅ Image upload support
- ✅ Category management
- ✅ Tag/skill management

### Security
- ✅ Row Level Security (RLS)
- ✅ Admin role-based access
- ✅ Protected routes
- ✅ Secure authentication

### UI/UX
- ✅ Clean, modern design
- ✅ Responsive for all devices
- ✅ Smooth animations
- ✅ Loading states
- ✅ Error handling

## 📁 Project Structure

```
src/
├── pages/
│   ├── admin/              # Admin CMS pages
│   │   ├── AdminDashboard.tsx
│   │   ├── CoursesManagement.tsx
│   │   ├── CourseForm.tsx
│   │   ├── BlogsManagement.tsx
│   │   ├── BlogForm.tsx
│   │   ├── RoadmapsManagement.tsx
│   │   ├── RoadmapForm.tsx
│   │   ├── AIToolsManagement.tsx
│   │   └── AIToolForm.tsx
│   ├── CoursesPage.tsx     # Public pages
│   ├── BlogPage.tsx
│   ├── RoadmapsPage.tsx
│   └── AIToolsPage.tsx
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── Layout.tsx
├── contexts/
│   └── AuthContext.tsx
└── lib/
    ├── supabase.ts
    └── database.ts
```

## 🔐 Admin Routes

- `/admin` - Dashboard
- `/admin/courses` - Manage courses
- `/admin/blogs` - Manage blog posts
- `/admin/roadmaps` - Manage roadmaps
- `/admin/ai-tools` - Manage AI tools

## 🎨 Public Routes

- `/` - Homepage
- `/courses` - Browse courses
- `/blog` - Read blog posts
- `/roadmaps` - View learning paths
- `/ai-tools` - Explore AI tools
- `/dashboard` - Student dashboard

## 🛠️ Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📊 Database Schema

- **profiles** - User profiles with admin roles
- **courses** - Course content
- **course_modules** - Course sections
- **course_lessons** - Individual lessons
- **blog_posts** - Blog articles
- **roadmaps** - Learning paths
- **roadmap_steps** - Roadmap steps
- **ai_tools** - AI tools catalog
- **categories** - Content categories
- **user_enrollments** - Course enrollments
- **user_progress** - Learning progress

## 🎊 Ready to Use

The application is fully functional and production-ready!

1. Apply database migrations
2. Set yourself as admin
3. Start creating content
4. Deploy to production

## 📝 Future Enhancements

- [ ] GitHub and Google authentication
- [ ] File upload for images (Supabase Storage)
- [ ] Rich text editor for blog posts
- [ ] Video player integration
- [ ] Certificate generation
- [ ] Email notifications

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

---

Built with ❤️ for desi learners
