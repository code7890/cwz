# 🔍 Debug Admin Access Issue

## Step 1: Visit Debug Page

Go to this URL to see detailed debug information:

```
http://localhost:5174/admin/debug
```

This page will show you:
- ✓ If you're logged in
- ✓ Your user ID
- ✓ If profiles table exists
- ✓ Your profile data
- ✓ Your is_admin status
- ✓ All database tables status

## Step 2: Check What the Debug Page Shows

### Scenario A: Profile Query Shows "is_admin: true"

**If the debug page shows `is_admin: true` but you still can't access /admin:**

1. **Clear browser cache completely:**
   - Chrome: Settings → Privacy → Clear browsing data → Cached images and files
   - Or use Incognito mode

2. **Logout and login again:**
   - Click profile icon → Sign Out
   - Login again
   - Try /admin again

3. **Check browser console:**
   - Press F12
   - Go to Console tab
   - Look for any errors
   - Share the errors if you see any

### Scenario B: Profile Query Shows "is_admin: false"

**The UPDATE query didn't work. Try this:**

1. In Supabase SQL Editor:
```sql
-- First, check if your profile exists
SELECT * FROM profiles WHERE id = 'YOUR-USER-ID';

-- If it exists, update it
UPDATE profiles 
SET is_admin = true, role = 'admin' 
WHERE id = 'YOUR-USER-ID';

-- Verify it worked
SELECT id, role, is_admin FROM profiles WHERE id = 'YOUR-USER-ID';
```

### Scenario C: Profile Query Shows Error

**Possible errors and solutions:**

#### Error: "relation profiles does not exist"
**Solution:** Migration didn't run
```sql
-- Run the entire migration file:
-- Copy ALL content from: supabase/migrations/20260126000001_add_cms_tables.sql
-- Paste and run in Supabase SQL Editor
```

#### Error: "No rows returned"
**Solution:** Profile doesn't exist, create it manually
```sql
INSERT INTO profiles (id, full_name, role, is_admin)
VALUES (
  'YOUR-USER-ID',
  'Your Name',
  'admin',
  true
);
```

## Step 3: Manual SQL Checks

Run these queries in Supabase SQL Editor:

### Check 1: Does profiles table exist?
```sql
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name = 'profiles';
```
**Expected:** Should return 1 row with 'profiles'

### Check 2: Does your profile exist?
```sql
SELECT * FROM profiles WHERE id = (
  SELECT id FROM auth.users ORDER BY created_at DESC LIMIT 1
);
```
**Expected:** Should return your profile data

### Check 3: Are you admin?
```sql
SELECT 
  u.email,
  p.role,
  p.is_admin,
  p.created_at
FROM profiles p
JOIN auth.users u ON u.id = p.id
WHERE u.email = 'YOUR-EMAIL@example.com';
```
**Expected:** Should show `is_admin: true`

### Check 4: List all admins
```sql
SELECT 
  u.email,
  p.role,
  p.is_admin
FROM profiles p
JOIN auth.users u ON u.id = p.id
WHERE p.is_admin = true;
```
**Expected:** Should show your email

## Step 4: Force Update (Nuclear Option)

If nothing works, try this:

```sql
-- Get your user ID
SELECT id, email FROM auth.users ORDER BY created_at DESC LIMIT 5;

-- Delete existing profile (if any)
DELETE FROM profiles WHERE id = 'YOUR-USER-ID';

-- Create new profile as admin
INSERT INTO profiles (id, full_name, role, is_admin, created_at, updated_at)
VALUES (
  'YOUR-USER-ID',
  'Admin User',
  'admin',
  true,
  now(),
  now()
);

-- Verify
SELECT * FROM profiles WHERE id = 'YOUR-USER-ID';
```

## Step 5: Check Environment Variables

Make sure your `.env` file has correct Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

**Verify in browser console:**
```javascript
// Open browser console (F12) and run:
console.log(import.meta.env.VITE_SUPABASE_URL);
console.log(import.meta.env.VITE_SUPABASE_ANON_KEY);
```

Both should show values (not undefined).

## Step 6: Check RLS Policies

Make sure Row Level Security policies allow you to read your profile:

```sql
-- Check if RLS is enabled
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE schemaname = 'public' 
AND tablename = 'profiles';

-- Check policies
SELECT * FROM pg_policies WHERE tablename = 'profiles';
```

If RLS is blocking you, temporarily disable it for testing:

```sql
ALTER TABLE profiles DISABLE ROW LEVEL SECURITY;
```

Then try accessing /admin again.

## Step 7: Check Browser Storage

1. Open DevTools (F12)
2. Go to Application tab (Chrome) or Storage tab (Firefox)
3. Check Local Storage and Session Storage
4. Look for Supabase auth tokens
5. Clear all storage and login again

## Step 8: Test with Different Browser

Try accessing in:
- Incognito/Private mode
- Different browser (Chrome, Firefox, Safari)
- Different device

## Common Issues & Solutions

### Issue: "Admin Panel" not showing in header
**Cause:** Header component not detecting admin status
**Solution:**
1. Check browser console for errors
2. Clear cache and hard refresh
3. Logout and login again

### Issue: Redirected to /dashboard immediately
**Cause:** Admin check failing in AdminDashboard component
**Solution:**
1. Visit /admin/debug to see exact error
2. Check if profile query is working
3. Verify is_admin is actually true in database

### Issue: Can see "Admin Panel" but /admin redirects
**Cause:** Mismatch between Header check and Dashboard check
**Solution:**
1. Both use same query, so this shouldn't happen
2. Clear all browser cache
3. Restart dev server

## Step 9: Restart Everything

Sometimes a fresh start helps:

```bash
# Stop dev server (Ctrl+C)
# Clear node modules cache
rm -rf node_modules/.vite

# Restart
npm run dev
```

Then:
1. Clear browser cache
2. Logout
3. Login
4. Try /admin

## Step 10: Share Debug Info

If still not working, visit `/admin/debug` and share:
1. Screenshot of the debug page
2. Your user ID (from debug page)
3. The "Profile Query Result" section
4. Any errors from browser console

## Quick Checklist

- [ ] Migration applied (profiles table exists)
- [ ] User account created and logged in
- [ ] Profile exists in profiles table
- [ ] is_admin = true in database (verified with SELECT)
- [ ] UPDATE query returned "1 rows affected"
- [ ] Logged out and logged back in
- [ ] Browser cache cleared
- [ ] Tried incognito mode
- [ ] Visited /admin/debug page
- [ ] No errors in browser console
- [ ] Environment variables are set
- [ ] Dev server is running

## Expected Behavior

**When everything is working:**
1. Visit /admin/debug → Shows "Is Admin: ✓ TRUE"
2. Profile menu → Shows "Admin Panel" option
3. Visit /admin → Shows Admin Dashboard
4. No redirects to /dashboard

**Current behavior (not working):**
- Describe what happens when you visit /admin
- Share what /admin/debug shows
- Share any error messages

---

## 🚀 Next Steps

1. **Visit:** http://localhost:5174/admin/debug
2. **Take screenshot** of what you see
3. **Share the results** so we can identify the exact issue

The debug page will tell us exactly what's wrong! 🔍
