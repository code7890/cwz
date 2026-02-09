# Code Editor Demo - How to See It

The code editor **IS** implemented in the course learning page! Here's how to see it:

## Why You Might Not See It

The code editor only appears when:
1. ✅ You're on a lesson page (`/learn/:courseId`)
2. ✅ The lesson has content
3. ✅ The content includes code blocks wrapped in triple backticks

## How to Test the Code Editor

### Option 1: Add Sample Content via Admin Panel

1. Go to **Admin Dashboard** (`/admin`)
2. Click **Courses Management**
3. Click **Manage Modules** on a course
4. Click **Manage Lessons** on a module
5. Edit or create a lesson
6. Add content like this:

```
# Python Variables

Variables store data in Python.

```python
name = "Alice"
age = 25
print(f"{name} is {age} years old")
```

Try modifying the code above!
```

7. Save the lesson
8. Go to the course and click "Start Learning"
9. Navigate to that lesson
10. **You'll see the code editor!**

### Option 2: Add Content via SQL

1. Open Supabase SQL Editor
2. Find a lesson ID:
   ```sql
   SELECT id, title FROM course_lessons LIMIT 5;
   ```
3. Update the lesson with sample content:
   ```sql
   UPDATE course_lessons
   SET content = '# Python Basics

Here is some Python code:

```python
# Hello World
print("Hello, World!")

# Variables
x = 10
y = 20
print(x + y)
```

Try running this code!'
   WHERE id = 'YOUR_LESSON_ID_HERE';
   ```
4. Go to the learning page for that lesson

## What the Code Editor Looks Like

When you have a code block in your lesson content, you'll see:

```
┌─────────────────────────────────────────────────┐
│ Code Editor    [python]    [Copy][Reset][Output]│
├─────────────────────────────────────────────────┤
│                                                 │
│  # Your code here                               │
│  print("Hello, World!")                         │
│                                                 │
│  (Dark theme, editable textarea)                │
│                                                 │
└─────────────────────────────────────────────────┘
              [Run Code]

┌─────────────────────────────────────────────────┐
│ Output                                          │
├─────────────────────────────────────────────────┤
│ Code execution successful!                      │
│                                                 │
│ Output:                                         │
│ Hello, World!                                   │
└─────────────────────────────────────────────────┘
```

## Features Available

✅ **Dark theme editor** - Black background with white text
✅ **Editable code** - Type and modify code
✅ **Run Code button** - Green button to execute
✅ **Copy button** - Copy code to clipboard
✅ **Reset button** - Restore original code
✅ **Output toggle** - Show/hide output panel
✅ **Language badge** - Shows programming language
✅ **Output panel** - Displays execution results

## Content Format Requirements

Your lesson content must use this format:

```markdown
# Lesson Title

Some text content here.

```python
# Code goes here
print("This will show in the editor")
```

More text content.

```javascript
// Another code block
console.log("This is JavaScript");
```
```

## Supported Languages

The code editor detects the language from the code block:
- ` ```python ` → Python
- ` ```javascript ` → JavaScript
- ` ```html ` → HTML
- ` ```css ` → CSS
- ` ```java ` → Java
- ` ```cpp ` → C++
- Any language you specify!

## Quick Test

Want to test immediately? Here's the fastest way:

1. Go to Admin → Courses → Manage Modules → Manage Lessons
2. Create a new lesson with this content:

```
# Test Lesson

```python
print("Hello from the code editor!")
x = 5 + 3
print(f"5 + 3 = {x}")
```
```

3. Save and go to the learning page
4. You'll see the code editor with Run Code button!

## Troubleshooting

**Q: I don't see the code editor**
- Check if your lesson has content
- Make sure content includes ` ```language ` code blocks
- Verify the lesson is published
- Check browser console for errors

**Q: Code editor shows but looks wrong**
- Clear browser cache
- Check if Tailwind CSS is loaded
- Verify the dev server is running

**Q: Run Code button doesn't work**
- This is expected - it's a mock execution
- In production, integrate with a code execution API
- Currently shows simulated output

## Next Steps

To make the code editor fully functional:
1. Integrate with code execution API (e.g., Judge0, Piston)
2. Add syntax highlighting (Monaco Editor or CodeMirror)
3. Add multiple test cases
4. Add code validation
5. Add auto-save functionality

The UI is ready - just needs backend integration!
