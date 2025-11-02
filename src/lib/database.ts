import { supabase } from './supabase';

export async function getCourses() {
  const { data, error } = await supabase
    .from('courses')
    .select(`
      *,
      instructor:instructors(id, name, avatar_url),
      category:categories(id, name, slug)
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching courses:', error);
    return [];
  }

  return data || [];
}

export async function getRoadmaps() {
  const { data, error } = await supabase
    .from('roadmaps')
    .select(`
      *,
      category:categories(id, name, slug)
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching roadmaps:', error);
    return [];
  }

  return data || [];
}

export async function getRoadmapSteps(roadmapId: string) {
  const { data, error } = await supabase
    .from('roadmap_steps')
    .select('*')
    .eq('roadmap_id', roadmapId)
    .order('step_number', { ascending: true });

  if (error) {
    console.error('Error fetching roadmap steps:', error);
    return [];
  }

  return data || [];
}

export async function getChallenges() {
  const { data, error } = await supabase
    .from('challenges')
    .select(`
      *,
      category:categories(id, name, slug)
    `)
    .order('created_at', { ascending: false });

  if (error) {
    console.error('Error fetching challenges:', error);
    return [];
  }

  return data || [];
}

export async function getAITools() {
  const { data, error } = await supabase
    .from('ai_tools')
    .select('*')
    .order('popularity_score', { ascending: false });

  if (error) {
    console.error('Error fetching AI tools:', error);
    return [];
  }

  return data || [];
}

export async function getCategories() {
  const { data, error } = await supabase
    .from('categories')
    .select('*')
    .order('name', { ascending: true });

  if (error) {
    console.error('Error fetching categories:', error);
    return [];
  }

  return data || [];
}
