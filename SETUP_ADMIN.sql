-- ============================================
-- STEP 1: Check if you have signed up
-- ============================================
-- Run this first to see your user ID and email
SELECT id, email, created_at FROM auth.users ORDER BY created_at DESC LIMIT 5;

-- ============================================
-- STEP 2: Set yourself as admin
-- ============================================
-- Copy your user ID from the result above
-- Replace 'YOUR-USER-ID-HERE' with your actual user ID
-- Then run this query:

UPDATE profiles 
SET is_admin = true, role = 'admin' 
WHERE id = 'YOUR-USER-ID-HERE';

-- ============================================
-- STEP 3: Verify admin status
-- ============================================
-- Run this to confirm you're now an admin
SELECT 
  p.id,
  u.email,
  p.role,
  p.is_admin,
  p.created_at
FROM profiles p
JOIN auth.users u ON u.id = p.id
WHERE p.is_admin = true;

-- ============================================
-- If you see an error about profiles table not existing,
-- you need to run the migration first!
-- Go to: supabase/migrations/20260126000001_add_cms_tables.sql
-- Copy ALL the content and run it in Supabase SQL Editor
-- ============================================
