-- Sample Lesson Content with Code Blocks
-- Run this in your Supabase SQL Editor to add sample content

-- First, let's check if you have any courses
-- SELECT * FROM courses LIMIT 1;

-- Update a lesson with sample content (replace the lesson_id with your actual lesson ID)
-- You can find lesson IDs by running: SELECT id, title FROM course_lessons LIMIT 5;

-- Example 1: Python Introduction Lesson
UPDATE course_lessons
SET content = '# Introduction to Python Variables

Variables are containers for storing data values. In Python, you don''t need to declare the type of a variable.

## Creating Variables

Python has no command for declaring a variable. A variable is created the moment you first assign a value to it.

```python
# Creating variables
name = "Alice"
age = 25
height = 5.6
is_student = True

print(name)
print(age)
```

Try running the code above! You can modify the values and see the results.

## Variable Names

A variable can have a short name (like x and y) or a more descriptive name (age, carname, total_volume).

Rules for Python variables:
- Must start with a letter or underscore
- Cannot start with a number
- Can only contain alpha-numeric characters and underscores
- Case-sensitive (age, Age and AGE are different)

```python
# Valid variable names
my_var = "Hello"
_my_var = "World"
myVar = "Python"
MY_VAR = "Programming"
myvar2 = "2024"

print(my_var, _my_var, myVar)
```

## Multiple Assignment

You can assign values to multiple variables in one line:

```python
x, y, z = "Orange", "Banana", "Cherry"
print(x)
print(y)
print(z)
```

This makes your code more concise and readable!'
WHERE id = 'YOUR_LESSON_ID_HERE';

-- Example 2: JavaScript Functions Lesson
UPDATE course_lessons
SET content = '# JavaScript Functions

Functions are reusable blocks of code that perform specific tasks.

## Function Declaration

Here''s how to create a basic function:

```javascript
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice"));
console.log(greet("Bob"));
```

## Arrow Functions

ES6 introduced arrow functions, a shorter syntax:

```javascript
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 3));
console.log(add(10, 20));
```

## Function Parameters

Functions can accept multiple parameters:

```javascript
function calculateArea(width, height) {
  const area = width * height;
  return area;
}

console.log(calculateArea(5, 10));
console.log(calculateArea(7, 3));
```

Try modifying the parameters and see how the output changes!'
WHERE id = 'YOUR_LESSON_ID_HERE';

-- Example 3: HTML Basics Lesson
UPDATE course_lessons
SET content = '# HTML Basics

HTML (HyperText Markup Language) is the standard markup language for creating web pages.

## Basic HTML Structure

Every HTML document has a basic structure:

```html
<!DOCTYPE html>
<html>
<head>
    <title>My First Page</title>
</head>
<body>
    <h1>Welcome to HTML</h1>
    <p>This is a paragraph.</p>
</body>
</html>
```

## HTML Headings

HTML has six levels of headings:

```html
<h1>Heading 1 - Largest</h1>
<h2>Heading 2</h2>
<h3>Heading 3</h3>
<h4>Heading 4</h4>
<h5>Heading 5</h5>
<h6>Heading 6 - Smallest</h6>
```

## HTML Paragraphs and Links

```html
<p>This is a paragraph with <strong>bold text</strong> and <em>italic text</em>.</p>

<a href="https://example.com">Click here to visit Example.com</a>

<p>You can also create lists:</p>
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>
```

HTML is the foundation of web development!'
WHERE id = 'YOUR_LESSON_ID_HERE';

-- To use these examples:
-- 1. Go to your Supabase dashboard
-- 2. Open SQL Editor
-- 3. Find a lesson ID: SELECT id, title FROM course_lessons LIMIT 5;
-- 4. Replace 'YOUR_LESSON_ID_HERE' with an actual lesson ID
-- 5. Run the UPDATE query

-- You can also insert new lessons with content:
/*
INSERT INTO course_lessons (
  module_id,
  title,
  lesson_type,
  content,
  duration_minutes,
  order_index,
  is_published
) VALUES (
  'YOUR_MODULE_ID_HERE',
  'Python Variables Tutorial',
  'text',
  '# Introduction to Python Variables

Variables are containers for storing data values.

```python
name = "Alice"
age = 25
print(name, age)
```

Try the code above!',
  15,
  1,
  true
);
*/
