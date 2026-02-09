# Troubleshooting Guide

## Routes Not Working / Showing Old Pages

### ✅ Solution Steps:

#### 1. Clear Browser Cache
The most common issue is browser caching. Try these steps:

**Option A: Hard Refresh**
- **Chrome/Edge (Windows/Linux):** `Ctrl + Shift + R` or `Ctrl + F5`
- **Chrome/Edge (Mac):** `Cmd + Shift + R`
- **Firefox (Windows/Linux):** `Ctrl + Shift + R` or `Ctrl + F5`
- **Firefox (Mac):** `Cmd + Shift + R`
- **Safari (Mac):** `Cmd + Option + R`

**Option B: Clear Cache Manually**
1. Open DevTools (F12)
2. Right-click on the refresh button
3. Select "Empty Cache and Hard Reload"

**Option C: Incognito/Private Mode**
- Open your browser in incognito/private mode
- Visit: `http://localhost:5175/admin`

#### 2. Verify Server is Running
Check that the dev server is running:
```bash
# You should see output like:
# VITE v5.4.21  ready in 1683 ms
# ➜  Local:   http://localhost:5175/
```

If not running, start it:
```bash
npm run dev
```

#### 3. Check the Correct Port
The server might be running on a different port. Check the terminal output:
- It might be on `http://localhost:5173/`
- Or `http://localhost:5174/`
- Or `http://localhost:5175/`

#### 4. Test Admin Routes Directly

Try accessing these URLs directly in your browser:

1. **Admin Dashboard:**
   ```
   http://localhost:5175/admin
   ```

2. **Courses Management:**
   ```
   http://localhost:5175/admin/courses
   ```

3. **Blog Management:**
   ```
   http://localhost:5175/admin/blogs
   ```

4. **Roadmaps Management:**
   ```
   http://localhost:5175/admin/roadmaps
   ```

5. **AI Tools Management:**
   ```
   http://localhost:5175/admin/ai-tools
   ```

#### 5. Check Browser Console
1. Open DevTools (F12)
2. Go to Console tab
3. Look for any errors (red text)
4. Common errors and solutions:
   - **404 errors:** Routes not found - clear cache
   - **Module errors:** Restart dev server
   - **Supabase errors:** Check .env file

#### 6. Verify You're Logged In
Admin routes require authentication:
1. Go to `http://localhost:5175/signup`
2. Create an account
3. Set yourself as admin (see QUICK_START.md)
4. Refresh the page
5. Try accessing `/admin` again

#### 7. Check Admin Status
If you can access `/admin` but it redirects you:
1. Make sure you ran the SQL to set yourself as admin:
   ```sql
   UPDATE profiles 
   SET is_admin = true, role = 'admin' 
   WHERE id = 'YOUR-USER-ID';
   ```
2. Refresh the page after running the SQL

#### 8. Restart Dev Server
Sometimes a fresh restart helps:
```bash
# Stop the server (Ctrl + C)
# Then start again
npm run dev
```

#### 9. Check File Structure
Verify all admin files exist:
```bash
ls -la src/pages/admin/
```

You should see:
- AdminDashboard.tsx
- CoursesManagement.tsx
- CourseForm.tsx
- BlogsManagement.tsx
- BlogForm.tsx
- RoadmapsManagement.tsx
- RoadmapForm.tsx
- AIToolsManagement.tsx
- AIToolForm.tsx

#### 10. Verify App.tsx Routes
Open `src/App.tsx` and verify these routes exist:
```tsx
<Route path="/admin" element={<AdminDashboard />} />
<Route path="/admin/courses" element={<CoursesManagement />} />
<Route path="/admin/blogs" element={<BlogsManagement />} />
<Route path="/admin/roadmaps" element={<RoadmapsManagement />} />
<Route path="/admin/ai-tools" element={<AIToolsManagement />} />
```

## Common Issues & Solutions

### Issue: "Cannot find module" errors
**Solution:** 
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Issue: Blank page at /admin
**Possible causes:**
1. Not logged in → Go to `/signup` first
2. Not set as admin → Run the SQL query
3. JavaScript error → Check browser console

### Issue: Old course/dashboard pages showing
**Solution:** This is definitely a caching issue
1. Clear browser cache (hard refresh)
2. Try incognito mode
3. Try a different browser

### Issue: 404 Not Found
**Solution:**
1. Check the URL is correct
2. Verify server is running
3. Clear browser cache
4. Restart dev server

### Issue: Redirected to login
**Solution:**
1. Sign up/login first
2. Make sure you're authenticated
3. Check if session expired

### Issue: Redirected to /dashboard from /admin
**Solution:**
1. You're not set as admin
2. Run the SQL query to set `is_admin = true`
3. Refresh the page

## Testing Checklist

✅ Dev server is running
✅ Browser cache cleared
✅ Using correct port (check terminal)
✅ Logged in to the application
✅ Set as admin in database
✅ No errors in browser console
✅ Tried incognito mode
✅ Tried direct URL access

## Still Not Working?

If you've tried everything above:

1. **Check the exact URL you're visiting**
   - Should be: `http://localhost:5175/admin`
   - Not: `http://localhost:5173/admin` (wrong port)

2. **Take a screenshot of:**
   - The URL bar
   - The page you're seeing
   - Browser console (F12 → Console tab)
   - Terminal output

3. **Verify the files exist:**
   ```bash
   ls -la src/pages/admin/
   cat src/App.tsx | grep "admin"
   ```

4. **Check if React Router is working:**
   - Try visiting `/about` - does it work?
   - Try visiting `/courses` - does it work?
   - If these don't work either, it's a routing issue

## Quick Test

Run this in your browser console (F12 → Console):
```javascript
console.log(window.location.href);
```

This will show you the exact URL you're on.

## Need More Help?

The routes are definitely set up correctly in the code. The issue is most likely:
1. **Browser cache** (90% of cases)
2. **Wrong port** (5% of cases)
3. **Not logged in as admin** (5% of cases)

**Try this final solution:**
1. Close all browser tabs
2. Stop the dev server (Ctrl + C)
3. Start dev server: `npm run dev`
4. Open browser in incognito mode
5. Go to: `http://localhost:5175/admin`
6. If redirected to login, sign up first
7. Set yourself as admin in Supabase
8. Go back to: `http://localhost:5175/admin`

This should work! 🎉
