# Test Admin Access - Complete Guide

## 🎯 Current Status

Your server is running on: **http://localhost:5174/**

## ⚠️ IMPORTANT: You MUST Complete These Steps First

The admin routes **ARE working**, but you need to:
1. Apply the database migration
2. Set yourself as admin in the database

Without these steps, you'll be redirected to `/dashboard` (this is correct behavior).

---

## 📋 Complete Setup Process

### Step 1: Apply Database Migration

**Go to Supabase Dashboard:**
1. Visit: https://supabase.com/dashboard
2. Select your project
3. Click **"SQL Editor"** (left sidebar)
4. Click **"New Query"**

**Run the Migration:**
1. Open file: `supabase/migrations/20260126000001_add_cms_tables.sql`
2. Copy **ALL content** (entire file)
3. Paste into Supabase SQL Editor
4. Click **"Run"**
5. Wait for "Success" message

---

### Step 2: Create Your Account (if not done)

1. Go to: **http://localhost:5174/signup**
2. Enter your email and password
3. Click "Sign Up"
4. You'll be logged in automatically

---

### Step 3: Get Your User ID

**In Supabase SQL Editor:**
```sql
SELECT id, email, created_at 
FROM auth.users 
ORDER BY created_at DESC 
LIMIT 5;
```

**Copy your user ID** (looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

---

### Step 4: Make Yourself Admin

**In Supabase SQL Editor, run this (replace YOUR-USER-ID):**
```sql
UPDATE profiles 
SET is_admin = true, role = 'admin' 
WHERE id = 'YOUR-USER-ID-HERE';
```

**Example:**
```sql
UPDATE profiles 
SET is_admin = true, role = 'admin' 
WHERE id = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';
```

You should see: **"Success. 1 rows affected"**

---

### Step 5: Verify Admin Status

**Run this query:**
```sql
SELECT 
  u.email,
  p.role,
  p.is_admin,
  p.created_at
FROM profiles p
JOIN auth.users u ON u.id = p.id
WHERE p.is_admin = true;
```

You should see your email with `is_admin: true`

---

### Step 6: Test Admin Access

1. **Go to:** http://localhost:5174/
2. **Logout** (click profile icon → Sign Out)
3. **Login again** with your credentials
4. **Click profile icon** (top right)
5. **You should see "Admin Panel"** option
6. **Click "Admin Panel"**
7. **You should see the Admin Dashboard!** 🎉

---

## 🧪 Test These URLs Directly

After completing setup, test these URLs:

1. **Admin Dashboard:**
   ```
   http://localhost:5174/admin
   ```

2. **Courses Management:**
   ```
   http://localhost:5174/admin/courses
   ```

3. **Create New Course:**
   ```
   http://localhost:5174/admin/courses/new
   ```

4. **Blog Management:**
   ```
   http://localhost:5174/admin/blogs
   ```

5. **Roadmaps Management:**
   ```
   http://localhost:5174/admin/roadmaps
   ```

6. **AI Tools Management:**
   ```
   http://localhost:5174/admin/ai-tools
   ```

---

## 🔍 What Should Happen

### Before Setting Admin:
- Visit `/admin` → Redirects to `/login` (if not logged in)
- Visit `/admin` → Redirects to `/dashboard` (if logged in but not admin)
- Profile menu shows: "Dashboard", "Sign Out"

### After Setting Admin:
- Visit `/admin` → Shows Admin Dashboard
- Profile menu shows: **"Admin Panel"**, "Dashboard", "Sign Out"
- Can access all `/admin/*` routes
- Can create courses, blogs, roadmaps, AI tools

---

## 🐛 Troubleshooting

### Issue: "relation profiles does not exist"
**Solution:** You didn't run the migration
- Go back to Step 1
- Copy the ENTIRE migration file
- Run it in Supabase

### Issue: "Success. 0 rows affected" when setting admin
**Solution:** Profile doesn't exist
1. Check if profile exists:
   ```sql
   SELECT * FROM profiles WHERE id = 'YOUR-USER-ID';
   ```
2. If empty, create it manually:
   ```sql
   INSERT INTO profiles (id, role, is_admin)
   VALUES ('YOUR-USER-ID', 'admin', true);
   ```

### Issue: Still redirected to /dashboard
**Solutions:**
1. **Clear browser cache** (Cmd+Shift+R or Ctrl+Shift+R)
2. **Logout and login again**
3. **Try incognito mode**
4. **Verify admin status** with the SQL query in Step 5

### Issue: "Admin Panel" not showing in menu
**Solutions:**
1. Make sure you're logged in
2. Verify you set `is_admin = true` correctly
3. Logout and login again
4. Clear browser cache

---

## ✅ Verification Checklist

Before testing admin access, verify:

- [ ] Migration applied successfully
- [ ] User account created (can login)
- [ ] User ID obtained from database
- [ ] `UPDATE profiles` query ran successfully (1 row affected)
- [ ] Admin status verified with SELECT query
- [ ] Logged out and logged back in
- [ ] Browser cache cleared

---

## 📸 What You Should See

### Admin Dashboard (`/admin`)
- Statistics cards (courses, blogs, roadmaps, AI tools)
- Content management cards
- Quick action buttons
- "Manage" links for each content type

### Courses Management (`/admin/courses`)
- List of all courses
- Search bar
- Filter by level
- "New Course" button
- Edit/Delete buttons for each course

### Course Form (`/admin/courses/new`)
- Title field
- Slug field (auto-generated)
- Description textarea
- Thumbnail URL
- Category dropdown
- Level dropdown
- Duration, Price fields
- Checkboxes (Popular, Bestseller, Certificate)
- Save/Cancel buttons

---

## 🎯 Quick Test Commands

**Copy-paste these in Supabase SQL Editor:**

```sql
-- 1. Find your user ID
SELECT id, email FROM auth.users ORDER BY created_at DESC LIMIT 5;

-- 2. Make yourself admin (REPLACE THE ID!)
UPDATE profiles 
SET is_admin = true, role = 'admin' 
WHERE id = 'YOUR-USER-ID-HERE';

-- 3. Verify it worked
SELECT u.email, p.is_admin, p.role 
FROM profiles p 
JOIN auth.users u ON u.id = p.id 
WHERE p.is_admin = true;
```

---

## 🚀 After Setup

Once you're admin, you can:

1. **Create Courses:**
   - Go to `/admin/courses`
   - Click "New Course"
   - Fill in the form
   - Click "Create Course"

2. **Write Blog Posts:**
   - Go to `/admin/blogs`
   - Click "New Blog Post"
   - Write your content
   - Click "Create Post"

3. **Add Roadmaps:**
   - Go to `/admin/roadmaps`
   - Click "New Roadmap"
   - Define learning path
   - Click "Create Roadmap"

4. **Add AI Tools:**
   - Go to `/admin/ai-tools`
   - Click "New AI Tool"
   - Add tool details
   - Click "Add Tool"

---

## 💡 Important Notes

1. **Port Number:** Your server is on **http://localhost:5174/** (not 5173 or 5175)
2. **One-time Setup:** You only need to set admin once
3. **Multiple Admins:** You can make multiple users admin by running the UPDATE query with different IDs
4. **Security:** Only admins can access `/admin` routes
5. **Students:** Regular users will always be redirected to `/dashboard`

---

## 🎊 Success!

When everything is working, you should:
- See "Admin Panel" in your profile menu
- Access `/admin` without redirect
- See the admin dashboard with statistics
- Be able to create courses, blogs, roadmaps, and AI tools

**The routes ARE working** - you just need to complete the database setup first! 🚀
