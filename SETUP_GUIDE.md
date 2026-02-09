# CodeWithZee CMS - Setup Guide

## 🎉 What's Been Built

Your fully functional CMS application is ready! Here's what you have:

### ✅ Admin Dashboard (`/admin`)
- Overview with statistics
- Quick access to all content management
- Protected by admin authentication

### ✅ Content Management Pages

1. **Courses Management** (`/admin/courses`)
   - List all courses
   - Create/Edit/Delete courses
   - Search and filter by level
   - Full CRUD operations

2. **Blog Management** (`/admin/blogs`)
   - List all blog posts
   - Create/Edit/Delete posts
   - Publish/Unpublish toggle
   - Draft management

3. **Roadmaps Management** (`/admin/roadmaps`)
   - List all roadmaps
   - Create/Edit/Delete roadmaps
   - Manage learning paths

4. **AI Tools Management** (`/admin/ai-tools`)
   - List all AI tools
   - Create/Edit/Delete tools
   - Featured/Verified flags
   - Category management

### ✅ Database Schema
- All tables created with proper relationships
- Row Level Security (RLS) enabled
- Admin role system
- User profiles and progress tracking

## 🚀 Setup Instructions

### Step 1: Apply Database Migrations

1. Go to your Supabase Dashboard
2. Navigate to **SQL Editor**
3. Copy and run the SQL from: `supabase/migrations/20260126000001_add_cms_tables.sql`
4. This will create all necessary tables

### Step 2: Set Yourself as Admin

Run this SQL in Supabase SQL Editor (replace with your user ID):

```sql
-- First, sign up on your website to create a user account
-- Then find your user ID from the auth.users table
-- Finally, run this:

UPDATE profiles 
SET is_admin = true, role = 'admin' 
WHERE id = 'YOUR-USER-ID-HERE';
```

To find your user ID:
```sql
SELECT id, email FROM auth.users;
```

### Step 3: Add Sample Categories (Optional)

```sql
INSERT INTO categories (name, slug, icon, description) VALUES
('Web Development', 'web-development', 'Code', 'Learn to build websites and web applications'),
('Data Science', 'data-science', 'Database', 'Master data analysis and machine learning'),
('Mobile Development', 'mobile-development', 'Smartphone', 'Create iOS and Android apps'),
('AI & Machine Learning', 'ai-ml', 'Brain', 'Explore artificial intelligence'),
('Design', 'design', 'Palette', 'UI/UX and graphic design');
```

### Step 4: Test Your Admin Access

1. Sign up on your website: `http://localhost:5175/signup`
2. Set yourself as admin (Step 2)
3. Visit: `http://localhost:5175/admin`
4. You should see the admin dashboard!

## 📝 How to Use the CMS

### Creating a Course

1. Go to `/admin/courses`
2. Click "New Course"
3. Fill in the form:
   - Title (required)
   - Slug (auto-generated from title)
   - Description
   - Thumbnail URL
   - Category
   - Level (beginner/intermediate/advanced)
   - Duration in hours
   - Price
   - Language
4. Click "Create Course"

### Creating a Blog Post

1. Go to `/admin/blogs`
2. Click "New Blog Post"
3. Fill in:
   - Title
   - Slug
   - Excerpt (short summary)
   - Content (supports Markdown)
   - Thumbnail URL
   - Category
   - Tags (comma-separated)
   - Read time
   - Publish checkbox
4. Click "Create Post"

### Creating a Roadmap

1. Go to `/admin/roadmaps`
2. Click "New Roadmap"
3. Fill in:
   - Title
   - Description
   - Level
   - Duration in months
   - Total steps
   - Skills (comma-separated)
   - Outcomes (comma-separated)
4. Click "Create Roadmap"

### Adding AI Tools

1. Go to `/admin/ai-tools`
2. Click "New AI Tool"
3. Fill in:
   - Tool name
   - Description
   - Website URL
   - Category
   - Pricing type
   - Features (comma-separated)
   - Use cases (comma-separated)
4. Click "Add Tool"

## 🎨 Features

### Admin Features
- ✅ Full CRUD operations for all content types
- ✅ Search and filter functionality
- ✅ Publish/unpublish toggle for blogs
- ✅ Featured/verified flags for AI tools
- ✅ Real-time statistics dashboard
- ✅ Protected routes (admin only)

### Student Features
- ✅ Browse courses, blogs, roadmaps, AI tools
- ✅ View course details
- ✅ User authentication
- ✅ Personal dashboard
- ✅ Progress tracking (database ready)

## 🔐 Security

- All admin routes check for `is_admin` flag
- Row Level Security (RLS) enabled on all tables
- Only admins can create/edit content
- Students can only view published content
- Users can only modify their own data

## 📂 File Structure

```
src/
├── pages/
│   ├── admin/
│   │   ├── AdminDashboard.tsx       # Main admin dashboard
│   │   ├── CoursesManagement.tsx    # List courses
│   │   ├── CourseForm.tsx           # Create/edit course
│   │   ├── BlogsManagement.tsx      # List blogs
│   │   ├── BlogForm.tsx             # Create/edit blog
│   │   ├── RoadmapsManagement.tsx   # List roadmaps
│   │   ├── RoadmapForm.tsx          # Create/edit roadmap
│   │   ├── AIToolsManagement.tsx    # List AI tools
│   │   └── AIToolForm.tsx           # Create/edit AI tool
│   ├── CoursesPage.tsx              # Public courses page
│   ├── BlogPage.tsx                 # Public blog page
│   ├── RoadmapsPage.tsx             # Public roadmaps page
│   └── AIToolsPage.tsx              # Public AI tools page
├── lib/
│   ├── supabase.ts                  # Supabase client
│   └── database.ts                  # Database helper functions
└── contexts/
    └── AuthContext.tsx              # Authentication context
```

## 🎯 Next Steps

### Immediate
1. Apply database migrations
2. Set yourself as admin
3. Add some sample categories
4. Create your first course!

### Future Enhancements
- [ ] File upload for images (use Supabase Storage)
- [ ] Rich text editor for blog posts (TipTap/Quill)
- [ ] Course modules and lessons management
- [ ] Video player integration
- [ ] Student progress tracking UI
- [ ] Certificate generation
- [ ] Analytics dashboard
- [ ] Email notifications

## 🐛 Troubleshooting

### "Access Denied" when visiting /admin
- Make sure you've set `is_admin = true` in the profiles table
- Check that you're logged in
- Verify your user ID matches the one in the database

### Courses not showing up
- Check if courses exist in the database
- Verify RLS policies are set correctly
- Check browser console for errors

### Can't create content
- Ensure you're logged in as admin
- Check Supabase logs for errors
- Verify all required fields are filled

## 📞 Support

If you encounter any issues:
1. Check browser console for errors
2. Check Supabase logs in dashboard
3. Verify database migrations ran successfully
4. Ensure environment variables are set correctly

## 🎊 You're All Set!

Your CMS is fully functional and ready to use. Start by:
1. Setting yourself as admin
2. Creating some categories
3. Adding your first course
4. Publishing your first blog post

Happy content creating! 🚀
