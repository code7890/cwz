-- ============================================
-- ADMIN VERIFICATION SCRIPT
-- Run these queries one by one in Supabase SQL Editor
-- ============================================

-- STEP 1: Check if profiles table exists
-- Expected: Should return 'profiles'
SELECT table_name 
FROM information_schema.tables 
WHERE table_schema = 'public' 
AND table_name = 'profiles';

-- ============================================

-- STEP 2: Get your user information
-- Copy your user ID from the results
SELECT 
  id as user_id,
  email,
  created_at,
  email_confirmed_at
FROM auth.users 
ORDER BY created_at DESC 
LIMIT 5;

-- ============================================

-- STEP 3: Check if your profile exists
-- Replace 'YOUR-USER-ID' with your actual user ID from Step 2
SELECT 
  id,
  full_name,
  role,
  is_admin,
  created_at,
  updated_at
FROM profiles 
WHERE id = 'YOUR-USER-ID';

-- If this returns NO ROWS, your profile doesn't exist!
-- Jump to STEP 6 to create it

-- ============================================

-- STEP 4: Check is_admin value
-- Replace 'YOUR-USER-ID' with your actual user ID
SELECT 
  u.email,
  p.role,
  p.is_admin,
  CASE 
    WHEN p.is_admin = true THEN '✓ YOU ARE ADMIN'
    ELSE '✗ NOT ADMIN YET'
  END as status
FROM profiles p
JOIN auth.users u ON u.id = p.id
WHERE p.id = 'YOUR-USER-ID';

-- Expected: status should show '✓ YOU ARE ADMIN'

-- ============================================

-- STEP 5: If is_admin is false, update it
-- Replace 'YOUR-USER-ID' with your actual user ID
UPDATE profiles 
SET 
  is_admin = true, 
  role = 'admin',
  updated_at = now()
WHERE id = 'YOUR-USER-ID';

-- Expected: "UPDATE 1" (1 row affected)

-- ============================================

-- STEP 6: If profile doesn't exist, create it
-- Replace 'YOUR-USER-ID' with your actual user ID
-- Replace 'Your Name' with your actual name
INSERT INTO profiles (id, full_name, role, is_admin, created_at, updated_at)
VALUES (
  'YOUR-USER-ID',
  'Your Name',
  'admin',
  true,
  now(),
  now()
)
ON CONFLICT (id) DO UPDATE
SET 
  is_admin = true,
  role = 'admin',
  updated_at = now();

-- This will either create or update your profile

-- ============================================

-- STEP 7: Final verification - List all admins
-- You should see your email in the results
SELECT 
  u.email,
  p.role,
  p.is_admin,
  p.created_at as profile_created,
  p.updated_at as profile_updated
FROM profiles p
JOIN auth.users u ON u.id = p.id
WHERE p.is_admin = true
ORDER BY p.created_at DESC;

-- Expected: Your email should appear with is_admin = true

-- ============================================

-- STEP 8: Check RLS policies (optional)
-- This shows if Row Level Security might be blocking access
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual
FROM pg_policies 
WHERE tablename = 'profiles';

-- ============================================

-- STEP 9: Test profile access with your user ID
-- Replace 'YOUR-USER-ID' with your actual user ID
-- This simulates what the app does
SELECT 
  id,
  role,
  is_admin,
  CASE 
    WHEN is_admin = true THEN 'ACCESS GRANTED ✓'
    ELSE 'ACCESS DENIED ✗'
  END as admin_access
FROM profiles 
WHERE id = 'YOUR-USER-ID';

-- Expected: admin_access should show 'ACCESS GRANTED ✓'

-- ============================================
-- TROUBLESHOOTING QUERIES
-- ============================================

-- If nothing works, check these:

-- A. Check if trigger exists (creates profile on signup)
SELECT 
  trigger_name,
  event_manipulation,
  event_object_table,
  action_statement
FROM information_schema.triggers
WHERE trigger_name = 'on_auth_user_created';

-- B. Check if function exists
SELECT 
  routine_name,
  routine_type
FROM information_schema.routines
WHERE routine_name = 'handle_new_user'
AND routine_schema = 'public';

-- C. Count total profiles
SELECT COUNT(*) as total_profiles FROM profiles;

-- D. Count total users
SELECT COUNT(*) as total_users FROM auth.users;

-- E. Find profiles without users (orphaned)
SELECT p.id, p.role, p.is_admin
FROM profiles p
LEFT JOIN auth.users u ON u.id = p.id
WHERE u.id IS NULL;

-- F. Find users without profiles (missing)
SELECT u.id, u.email
FROM auth.users u
LEFT JOIN profiles p ON p.id = u.id
WHERE p.id IS NULL;

-- ============================================
-- NUCLEAR OPTION - Complete Reset
-- ============================================
-- Only use this if everything else fails!
-- This will delete and recreate your profile

-- 1. Get your user ID first
SELECT id, email FROM auth.users ORDER BY created_at DESC LIMIT 1;

-- 2. Delete your profile (if exists)
-- DELETE FROM profiles WHERE id = 'YOUR-USER-ID';

-- 3. Create fresh admin profile
-- INSERT INTO profiles (id, full_name, role, is_admin, created_at, updated_at)
-- VALUES (
--   'YOUR-USER-ID',
--   'Admin User',
--   'admin',
--   true,
--   now(),
--   now()
-- );

-- 4. Verify
-- SELECT * FROM profiles WHERE id = 'YOUR-USER-ID';

-- ============================================
-- EXPECTED RESULTS SUMMARY
-- ============================================

/*
After running all steps, you should have:

1. profiles table exists ✓
2. Your user exists in auth.users ✓
3. Your profile exists in profiles ✓
4. is_admin = true ✓
5. role = 'admin' ✓
6. You appear in the "all admins" list ✓
7. Test query shows "ACCESS GRANTED ✓" ✓

If all checks pass but /admin still doesn't work:
- Clear browser cache
- Logout and login again
- Visit /admin/debug to see app-side debug info
- Check browser console for JavaScript errors
*/
