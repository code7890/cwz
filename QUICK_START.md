# 🚀 Quick Start Guide - CodeWithZee CMS

## ⚡ Get Started in 5 Minutes

### Step 1: Apply Database Migration (2 minutes)

1. Open your Supabase Dashboard
2. Go to **SQL Editor**
3. Copy the entire content from: `supabase/migrations/20260126000001_add_cms_tables.sql`
4. Paste and click **Run**
5. Wait for "Success" message

### Step 2: Create Your Admin Account (1 minute)

1. Go to your app: `http://localhost:5175`
2. Click **"Get Started"** or **"Sign Up"**
3. Create your account with email and password
4. You'll be automatically logged in

### Step 3: Make Yourself Admin (1 minute)

1. Go back to Supabase Dashboard
2. Open **SQL Editor**
3. Run this query to find your user ID:
   ```sql
   SELECT id, email FROM auth.users;
   ```
4. Copy your user ID
5. Run this query (replace YOUR-USER-ID):
   ```sql
   UPDATE profiles 
   SET is_admin = true, role = 'admin' 
   WHERE id = 'YOUR-USER-ID';
   ```

### Step 4: Access Admin Panel (30 seconds)

1. Refresh your website
2. Click on your profile icon (top right)
3. Click **"Admin Panel"**
4. You're in! 🎉

### Step 5: Add Sample Categories (Optional - 30 seconds)

Run this in Supabase SQL Editor:

```sql
INSERT INTO categories (name, slug, icon, description) VALUES
('Web Development', 'web-development', 'Code', 'Learn to build websites and web applications'),
('Data Science', 'data-science', 'Database', 'Master data analysis and machine learning'),
('Mobile Development', 'mobile-development', 'Smartphone', 'Create iOS and Android apps'),
('AI & Machine Learning', 'ai-ml', 'Brain', 'Explore artificial intelligence'),
('Design', 'design', 'Palette', 'UI/UX and graphic design');
```

## 🎯 What You Can Do Now

### Create Your First Course
1. Go to `/admin/courses`
2. Click **"New Course"**
3. Fill in the details
4. Click **"Create Course"**
5. View it on `/courses`

### Write Your First Blog Post
1. Go to `/admin/blogs`
2. Click **"New Blog Post"**
3. Write your content
4. Check **"Publish immediately"**
5. Click **"Create Post"**
6. View it on `/blog`

### Add a Learning Roadmap
1. Go to `/admin/roadmaps`
2. Click **"New Roadmap"**
3. Define the learning path
4. Click **"Create Roadmap"**
5. View it on `/roadmaps`

### Add AI Tools
1. Go to `/admin/ai-tools`
2. Click **"New AI Tool"**
3. Add tool details
4. Click **"Add Tool"**
5. View it on `/ai-tools`

## 📍 Important URLs

- **Homepage:** `http://localhost:5175/`
- **Admin Dashboard:** `http://localhost:5175/admin`
- **Courses Management:** `http://localhost:5175/admin/courses`
- **Blog Management:** `http://localhost:5175/admin/blogs`
- **Roadmaps Management:** `http://localhost:5175/admin/roadmaps`
- **AI Tools Management:** `http://localhost:5175/admin/ai-tools`

## 🎨 Features at Your Fingertips

✅ **Full Content Management**
- Create, edit, delete courses, blogs, roadmaps, AI tools
- Search and filter all content
- Publish/unpublish workflow

✅ **Admin Dashboard**
- Real-time statistics
- Quick access to all content
- One-click content creation

✅ **User Management**
- Student authentication
- Progress tracking (ready to use)
- Role-based access control

✅ **Professional UI**
- Clean, modern design
- Responsive for all devices
- Smooth animations

## 🐛 Troubleshooting

**Can't see Admin Panel link?**
- Make sure you set `is_admin = true` in Step 3
- Refresh the page after updating
- Check you're logged in

**Database errors?**
- Verify migration ran successfully
- Check Supabase logs
- Ensure environment variables are set in `.env`

**Content not showing?**
- Create some content first
- Check if it's published (for blogs)
- Verify database connection

## 💡 Pro Tips

1. **Use meaningful slugs** - They become your URLs
2. **Add thumbnails** - Makes content more attractive
3. **Write good descriptions** - Helps with SEO
4. **Use categories** - Organizes your content
5. **Publish gradually** - Test before making live

## 🎊 You're Ready!

Your CMS is fully functional. Start creating amazing content for your students!

**Need help?** Check:
- `SETUP_GUIDE.md` - Detailed setup instructions
- `IMPLEMENTATION_SUMMARY.md` - Technical details
- Browser console - For error messages
- Supabase logs - For database issues

Happy content creating! 🚀
