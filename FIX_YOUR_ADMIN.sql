-- Fix your admin profile
-- Your user ID: b2eb73e6-d87b-4dcb-8f51-0b6f5504c34a

UPDATE profiles 
SET 
  role = 'admin',
  is_admin = true,
  updated_at = now()
WHERE id = 'b2eb73e6-d87b-4dcb-8f51-0b6f5504c34a';

-- Verify it worked
SELECT 
  id,
  full_name,
  email,
  role,
  is_admin
FROM profiles p
JOIN auth.users u ON u.id = p.id
WHERE p.id = 'b2eb73e6-d87b-4dcb-8f51-0b6f5504c34a';
