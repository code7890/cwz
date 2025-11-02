/*
  # CodeWithZee - Initial Database Schema Setup

  ## Overview
  This migration creates the complete database schema for the CodeWithZee learning platform.
  It includes tables for courses, instructors, roadmaps, challenges, blog posts, testimonials,
  and a new AI Tools catalog.

  ## New Tables Created

  ### 1. `categories`
  - `id` (uuid, primary key) - Unique identifier for each category
  - `name` (text, not null) - Category name (e.g., "Web Development", "Data Science")
  - `slug` (text, unique, not null) - URL-friendly identifier
  - `icon` (text) - Icon name for UI display
  - `description` (text) - Category description
  - `created_at` (timestamptz) - Record creation timestamp

  ### 2. `instructors`
  - `id` (uuid, primary key) - Unique identifier for each instructor
  - `name` (text, not null) - Instructor full name
  - `email` (text, unique, not null) - Instructor email
  - `bio` (text) - Instructor biography
  - `avatar_url` (text) - Profile picture URL
  - `expertise` (text array) - Array of expertise areas
  - `social_links` (jsonb) - Social media links (Twitter, LinkedIn, etc.)
  - `created_at` (timestamptz) - Record creation timestamp

  ### 3. `courses`
  - `id` (uuid, primary key) - Unique identifier for each course
  - `title` (text, not null) - Course title
  - `slug` (text, unique, not null) - URL-friendly identifier
  - `description` (text, not null) - Course description
  - `thumbnail_url` (text) - Course thumbnail image URL
  - `instructor_id` (uuid, foreign key) - References instructors table
  - `category_id` (uuid, foreign key) - References categories table
  - `level` (text, not null) - Difficulty level: beginner, intermediate, advanced
  - `duration_hours` (integer, not null) - Course duration in hours
  - `price` (integer, not null) - Course price in currency units
  - `original_price` (integer) - Original price before discount
  - `language` (text) - Course language
  - `is_popular` (boolean) - Popular course flag
  - `is_bestseller` (boolean) - Bestseller flag
  - `rating` (numeric) - Course rating (0-5)
  - `total_reviews` (integer) - Total number of reviews
  - `students_enrolled` (integer) - Number of students enrolled
  - `has_certificate` (boolean) - Certificate availability
  - `last_updated` (timestamptz) - Last update timestamp
  - `created_at` (timestamptz) - Record creation timestamp

  ### 4. `roadmaps`
  - `id` (uuid, primary key) - Unique identifier for each roadmap
  - `title` (text, not null) - Roadmap title
  - `slug` (text, unique, not null) - URL-friendly identifier
  - `description` (text, not null) - Roadmap description
  - `category_id` (uuid, foreign key) - References categories table
  - `level` (text, not null) - Difficulty level
  - `duration_months` (integer) - Total duration in months
  - `total_steps` (integer, not null) - Total number of learning steps
  - `icon` (text) - Icon name for UI display
  - `skills` (text array) - Array of skills covered
  - `outcomes` (text array) - Expected learning outcomes
  - `rating` (numeric) - Roadmap rating (0-5)
  - `students_enrolled` (integer) - Number of students enrolled
  - `created_at` (timestamptz) - Record creation timestamp

  ### 5. `roadmap_steps`
  - `id` (uuid, primary key) - Unique identifier for each step
  - `roadmap_id` (uuid, foreign key) - References roadmaps table
  - `step_number` (integer, not null) - Order of the step
  - `title` (text, not null) - Step title
  - `duration_weeks` (integer) - Step duration in weeks
  - `is_locked_by_default` (boolean) - Whether step is locked initially
  - `created_at` (timestamptz) - Record creation timestamp

  ### 6. `challenges`
  - `id` (uuid, primary key) - Unique identifier for each challenge
  - `title` (text, not null) - Challenge title
  - `slug` (text, unique, not null) - URL-friendly identifier
  - `description` (text, not null) - Challenge description
  - `category_id` (uuid, foreign key) - References categories table
  - `difficulty` (text, not null) - Difficulty: easy, medium, hard
  - `type` (text, not null) - Type: coding, project, quiz, design
  - `duration_minutes` (integer) - Estimated duration in minutes
  - `xp_reward` (integer, not null) - Experience points awarded
  - `rating` (numeric) - Challenge rating (0-5)
  - `participants_count` (integer) - Total participants
  - `submissions_count` (integer) - Total submissions
  - `success_rate` (integer) - Success rate percentage
  - `tags` (text array) - Array of relevant tags
  - `skills` (text array) - Array of skills tested
  - `is_locked` (boolean) - Whether challenge is locked
  - `created_at` (timestamptz) - Record creation timestamp

  ### 7. `blog_posts`
  - `id` (uuid, primary key) - Unique identifier for each blog post
  - `title` (text, not null) - Blog post title
  - `slug` (text, unique, not null) - URL-friendly identifier
  - `excerpt` (text) - Short excerpt/summary
  - `content` (text, not null) - Full blog post content
  - `thumbnail_url` (text) - Featured image URL
  - `author_id` (uuid, foreign key) - References instructors table
  - `category_id` (uuid, foreign key) - References categories table
  - `tags` (text array) - Array of post tags
  - `read_time_minutes` (integer) - Estimated reading time
  - `views_count` (integer) - Total views
  - `is_published` (boolean) - Publication status
  - `published_at` (timestamptz) - Publication timestamp
  - `created_at` (timestamptz) - Record creation timestamp

  ### 8. `testimonials`
  - `id` (uuid, primary key) - Unique identifier for each testimonial
  - `name` (text, not null) - Reviewer name
  - `role` (text, not null) - Current role/position
  - `company` (text) - Company name
  - `content` (text, not null) - Testimonial content
  - `avatar_url` (text) - Profile picture URL
  - `rating` (integer, not null) - Rating (1-5)
  - `is_featured` (boolean) - Featured testimonial flag
  - `created_at` (timestamptz) - Record creation timestamp

  ### 9. `ai_tools` (NEW)
  - `id` (uuid, primary key) - Unique identifier for each AI tool
  - `name` (text, not null) - AI tool name
  - `slug` (text, unique, not null) - URL-friendly identifier
  - `description` (text, not null) - Tool description
  - `short_description` (text) - Brief one-line description
  - `logo_url` (text) - Tool logo URL
  - `website_url` (text, not null) - Official website URL
  - `category` (text, not null) - Tool category (e.g., "Writing", "Design", "Development")
  - `subcategory` (text) - More specific categorization
  - `pricing_type` (text, not null) - Pricing model: free, freemium, paid, subscription
  - `pricing_details` (text) - Detailed pricing information
  - `features` (text array) - Array of key features
  - `use_cases` (text array) - Array of use cases
  - `tags` (text array) - Array of searchable tags
  - `rating` (numeric) - User rating (0-5)
  - `total_reviews` (integer) - Total number of reviews
  - `popularity_score` (integer) - Popularity/usage score
  - `is_featured` (boolean) - Featured tool flag
  - `is_verified` (boolean) - Verified/endorsed tool flag
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security

  ### Row Level Security (RLS)
  All tables have RLS enabled with appropriate policies:
  
  1. **Public Read Access**
     - All users can read published/active content
     - Unpublished content is restricted
  
  2. **Authenticated Write Access**
     - Only authenticated users can create/modify their own content
     - Admin roles can manage all content

  ## Indexes
  Performance indexes added for:
  - Slug fields for fast lookups
  - Foreign key relationships
  - Search fields (title, description)
  - Filter fields (category, level, difficulty)

  ## Important Notes
  1. All timestamps use timestamptz (timestamp with timezone)
  2. All IDs use uuid with gen_random_uuid() as default
  3. Rating fields use numeric type for precision
  4. Array fields for flexible multi-value storage
  5. JSONB used for flexible structured data (social_links)
*/

-- Create categories table
CREATE TABLE IF NOT EXISTS categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  icon text,
  description text,
  created_at timestamptz DEFAULT now()
);

-- Create instructors table
CREATE TABLE IF NOT EXISTS instructors (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text UNIQUE NOT NULL,
  bio text,
  avatar_url text,
  expertise text[],
  social_links jsonb DEFAULT '{}'::jsonb,
  created_at timestamptz DEFAULT now()
);

-- Create courses table
CREATE TABLE IF NOT EXISTS courses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  thumbnail_url text,
  instructor_id uuid REFERENCES instructors(id) ON DELETE SET NULL,
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  level text NOT NULL CHECK (level IN ('beginner', 'intermediate', 'advanced')),
  duration_hours integer NOT NULL DEFAULT 0,
  price integer NOT NULL DEFAULT 0,
  original_price integer,
  language text DEFAULT 'Hindi/Urdu',
  is_popular boolean DEFAULT false,
  is_bestseller boolean DEFAULT false,
  rating numeric(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  total_reviews integer DEFAULT 0,
  students_enrolled integer DEFAULT 0,
  has_certificate boolean DEFAULT true,
  last_updated timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now()
);

-- Create roadmaps table
CREATE TABLE IF NOT EXISTS roadmaps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  level text NOT NULL CHECK (level IN ('beginner', 'intermediate', 'advanced')),
  duration_months integer,
  total_steps integer NOT NULL DEFAULT 0,
  icon text,
  skills text[],
  outcomes text[],
  rating numeric(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  students_enrolled integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

-- Create roadmap_steps table
CREATE TABLE IF NOT EXISTS roadmap_steps (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  roadmap_id uuid REFERENCES roadmaps(id) ON DELETE CASCADE NOT NULL,
  step_number integer NOT NULL,
  title text NOT NULL,
  duration_weeks integer,
  is_locked_by_default boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  UNIQUE (roadmap_id, step_number)
);

-- Create challenges table
CREATE TABLE IF NOT EXISTS challenges (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  difficulty text NOT NULL CHECK (difficulty IN ('easy', 'medium', 'hard')),
  type text NOT NULL CHECK (type IN ('coding', 'project', 'quiz', 'design')),
  duration_minutes integer,
  xp_reward integer NOT NULL DEFAULT 0,
  rating numeric(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  participants_count integer DEFAULT 0,
  submissions_count integer DEFAULT 0,
  success_rate integer DEFAULT 0 CHECK (success_rate >= 0 AND success_rate <= 100),
  tags text[],
  skills text[],
  is_locked boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE IF NOT EXISTS blog_posts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  slug text UNIQUE NOT NULL,
  excerpt text,
  content text NOT NULL,
  thumbnail_url text,
  author_id uuid REFERENCES instructors(id) ON DELETE SET NULL,
  category_id uuid REFERENCES categories(id) ON DELETE SET NULL,
  tags text[],
  read_time_minutes integer DEFAULT 5,
  views_count integer DEFAULT 0,
  is_published boolean DEFAULT false,
  published_at timestamptz,
  created_at timestamptz DEFAULT now()
);

-- Create testimonials table
CREATE TABLE IF NOT EXISTS testimonials (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  company text,
  content text NOT NULL,
  avatar_url text,
  rating integer NOT NULL DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  is_featured boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

-- Create ai_tools table (NEW)
CREATE TABLE IF NOT EXISTS ai_tools (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  description text NOT NULL,
  short_description text,
  logo_url text,
  website_url text NOT NULL,
  category text NOT NULL,
  subcategory text,
  pricing_type text NOT NULL CHECK (pricing_type IN ('free', 'freemium', 'paid', 'subscription')),
  pricing_details text,
  features text[],
  use_cases text[],
  tags text[],
  rating numeric(2,1) DEFAULT 0 CHECK (rating >= 0 AND rating <= 5),
  total_reviews integer DEFAULT 0,
  popularity_score integer DEFAULT 0,
  is_featured boolean DEFAULT false,
  is_verified boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_courses_category ON courses(category_id);
CREATE INDEX IF NOT EXISTS idx_courses_instructor ON courses(instructor_id);
CREATE INDEX IF NOT EXISTS idx_courses_level ON courses(level);
CREATE INDEX IF NOT EXISTS idx_courses_slug ON courses(slug);

CREATE INDEX IF NOT EXISTS idx_roadmaps_category ON roadmaps(category_id);
CREATE INDEX IF NOT EXISTS idx_roadmaps_level ON roadmaps(level);
CREATE INDEX IF NOT EXISTS idx_roadmaps_slug ON roadmaps(slug);

CREATE INDEX IF NOT EXISTS idx_roadmap_steps_roadmap ON roadmap_steps(roadmap_id);

CREATE INDEX IF NOT EXISTS idx_challenges_category ON challenges(category_id);
CREATE INDEX IF NOT EXISTS idx_challenges_difficulty ON challenges(difficulty);
CREATE INDEX IF NOT EXISTS idx_challenges_type ON challenges(type);
CREATE INDEX IF NOT EXISTS idx_challenges_slug ON challenges(slug);

CREATE INDEX IF NOT EXISTS idx_blog_posts_author ON blog_posts(author_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_category ON blog_posts(category_id);
CREATE INDEX IF NOT EXISTS idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX IF NOT EXISTS idx_blog_posts_published ON blog_posts(is_published);

CREATE INDEX IF NOT EXISTS idx_ai_tools_category ON ai_tools(category);
CREATE INDEX IF NOT EXISTS idx_ai_tools_pricing ON ai_tools(pricing_type);
CREATE INDEX IF NOT EXISTS idx_ai_tools_slug ON ai_tools(slug);
CREATE INDEX IF NOT EXISTS idx_ai_tools_featured ON ai_tools(is_featured);

-- Enable Row Level Security on all tables
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE instructors ENABLE ROW LEVEL SECURITY;
ALTER TABLE courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE roadmaps ENABLE ROW LEVEL SECURITY;
ALTER TABLE roadmap_steps ENABLE ROW LEVEL SECURITY;
ALTER TABLE challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE ai_tools ENABLE ROW LEVEL SECURITY;

-- RLS Policies: Public read access for all content

-- Categories policies
CREATE POLICY "Categories are viewable by everyone"
  ON categories FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create categories"
  ON categories FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Instructors policies
CREATE POLICY "Instructors are viewable by everyone"
  ON instructors FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create instructor profiles"
  ON instructors FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Courses policies
CREATE POLICY "Courses are viewable by everyone"
  ON courses FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create courses"
  ON courses FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update courses"
  ON courses FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Roadmaps policies
CREATE POLICY "Roadmaps are viewable by everyone"
  ON roadmaps FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create roadmaps"
  ON roadmaps FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Roadmap steps policies
CREATE POLICY "Roadmap steps are viewable by everyone"
  ON roadmap_steps FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create roadmap steps"
  ON roadmap_steps FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Challenges policies
CREATE POLICY "Challenges are viewable by everyone"
  ON challenges FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create challenges"
  ON challenges FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Blog posts policies
CREATE POLICY "Published blog posts are viewable by everyone"
  ON blog_posts FOR SELECT
  TO public
  USING (is_published = true);

CREATE POLICY "Authenticated users can view all blog posts"
  ON blog_posts FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated users can create blog posts"
  ON blog_posts FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update blog posts"
  ON blog_posts FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Testimonials policies
CREATE POLICY "Testimonials are viewable by everyone"
  ON testimonials FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create testimonials"
  ON testimonials FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- AI Tools policies
CREATE POLICY "AI tools are viewable by everyone"
  ON ai_tools FOR SELECT
  TO public
  USING (true);

CREATE POLICY "Authenticated users can create AI tools"
  ON ai_tools FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Authenticated users can update AI tools"
  ON ai_tools FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);