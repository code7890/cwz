# 🚀 Admin Setup - Step by Step Guide

## Current Situation
✅ You can sign in successfully
✅ You're redirected to `/dashboard` (student dashboard)
❌ You can't access `/admin` because you're not set as admin yet

## Solution: Make Yourself Admin (5 minutes)

---

## 📋 Step 1: Apply Database Migration

### 1.1 Open Supabase Dashboard
1. Go to: https://supabase.com/dashboard
2. Select your project: **CodeWithZee**
3. Click on **SQL Editor** in the left sidebar

### 1.2 Run the Migration
1. Click **"New Query"** button
2. Open this file in your code editor: `supabase/migrations/20260126000001_add_cms_tables.sql`
3. **Copy ALL the content** (it's about 200+ lines)
4. **Paste** it into the Supabase SQL Editor
5. Click **"Run"** button (or press Ctrl/Cmd + Enter)
6. Wait for "Success. No rows returned" message

✅ **Result:** This creates the `profiles` table with admin support

---

## 📋 Step 2: Find Your User ID

### 2.1 Get Your User ID
1. In Supabase SQL Editor, create a **new query**
2. Copy and paste this:
   ```sql
   SELECT id, email, created_at 
   FROM auth.users 
   ORDER BY created_at DESC 
   LIMIT 5;
   ```
3. Click **"Run"**
4. You'll see a table with your user information
5. **Copy your `id`** (it looks like: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`)

---

## 📋 Step 3: Make Yourself Admin

### 3.1 Run the Admin Update Query
1. In Supabase SQL Editor, create a **new query**
2. Copy this query:
   ```sql
   UPDATE profiles 
   SET is_admin = true, role = 'admin' 
   WHERE id = 'YOUR-USER-ID-HERE';
   ```
3. **Replace** `'YOUR-USER-ID-HERE'` with your actual user ID from Step 2
4. Example:
   ```sql
   UPDATE profiles 
   SET is_admin = true, role = 'admin' 
   WHERE id = 'a1b2c3d4-e5f6-7890-abcd-ef1234567890';
   ```
5. Click **"Run"**
6. You should see: "Success. 1 rows affected"

✅ **Result:** You are now an admin!

---

## 📋 Step 4: Verify Admin Access

### 4.1 Check Admin Status
1. In Supabase SQL Editor, run this query:
   ```sql
   SELECT 
     p.id,
     u.email,
     p.role,
     p.is_admin,
     p.created_at
   FROM profiles p
   JOIN auth.users u ON u.id = p.id
   WHERE p.is_admin = true;
   ```
2. You should see your email with `is_admin: true`

### 4.2 Test Admin Access
1. Go back to your website: `http://localhost:5175`
2. **Refresh the page** (or logout and login again)
3. Click on your **profile icon** (top right)
4. You should now see **"Admin Panel"** option
5. Click **"Admin Panel"**
6. You should be redirected to `/admin` dashboard! 🎉

---

## 🎯 Quick Copy-Paste Commands

### Command 1: Find Your User ID
```sql
SELECT id, email FROM auth.users ORDER BY created_at DESC LIMIT 5;
```

### Command 2: Make Yourself Admin (replace the ID!)
```sql
UPDATE profiles 
SET is_admin = true, role = 'admin' 
WHERE id = 'PASTE-YOUR-USER-ID-HERE';
```

### Command 3: Verify Admin Status
```sql
SELECT u.email, p.is_admin, p.role 
FROM profiles p 
JOIN auth.users u ON u.id = p.id 
WHERE p.is_admin = true;
```

---

## 🐛 Troubleshooting

### Issue: "relation profiles does not exist"
**Solution:** You didn't run the migration (Step 1)
- Go back to Step 1.2
- Copy ALL content from `supabase/migrations/20260126000001_add_cms_tables.sql`
- Run it in Supabase SQL Editor

### Issue: "Success. 0 rows affected"
**Solution:** Wrong user ID or profile doesn't exist
1. Make sure you copied the correct user ID
2. Check if profile exists:
   ```sql
   SELECT * FROM profiles WHERE id = 'YOUR-USER-ID';
   ```
3. If no results, the profile wasn't created. Try logging out and back in.

### Issue: Still can't access /admin
**Solution:** Clear browser cache and refresh
1. Hard refresh: `Cmd + Shift + R` (Mac) or `Ctrl + Shift + R` (Windows)
2. Or logout and login again
3. Or try incognito mode

### Issue: Profile doesn't exist after signup
**Solution:** The trigger might not have fired. Create profile manually:
```sql
INSERT INTO profiles (id, full_name, role, is_admin)
VALUES (
  'YOUR-USER-ID',
  'Your Name',
  'admin',
  true
);
```

---

## ✅ Success Checklist

After completing all steps, you should have:

- [x] Migration applied (profiles table exists)
- [x] User account created (can login)
- [x] Profile created in profiles table
- [x] is_admin set to true
- [x] Can see "Admin Panel" in header menu
- [x] Can access `/admin` dashboard
- [x] Can access `/admin/courses`, `/admin/blogs`, etc.

---

## 🎊 You're Done!

Once you see the Admin Dashboard, you can:
- Create courses at `/admin/courses`
- Write blog posts at `/admin/blogs`
- Add roadmaps at `/admin/roadmaps`
- Add AI tools at `/admin/ai-tools`

**Need help?** Check `TROUBLESHOOTING.md` for more solutions.

---

## 📸 What You Should See

### Before (Not Admin):
- Profile menu shows: "Dashboard" and "Sign Out"
- Visiting `/admin` redirects to `/dashboard`

### After (Admin):
- Profile menu shows: **"Admin Panel"**, "Dashboard", and "Sign Out"
- Visiting `/admin` shows the Admin Dashboard
- You can access all admin routes

---

## 🔑 Important Notes

1. **Only run the migration once** - Running it multiple times is safe (IF NOT EXISTS), but unnecessary
2. **Keep your user ID safe** - You'll need it if you ever need to reset admin access
3. **You can make multiple admins** - Just run the UPDATE query with different user IDs
4. **Students can't access admin routes** - They'll be redirected to `/dashboard`

---

## 🚀 Next Steps

After becoming admin:
1. Add some categories (optional but recommended)
2. Create your first course
3. Write your first blog post
4. Add learning roadmaps
5. Curate AI tools

Check `QUICK_START.md` for creating your first content!
