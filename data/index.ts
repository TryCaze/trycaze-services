import { BlogPost } from '@/types/blog';
import { categories } from './categories';
import { uporabaStarihRacunala } from './uporabaStarihRacunala';
import { izborOperativnogSustava } from './blogs/izborOperativnogSustava';
import { zapocetisa3DPrintanjem } from './blogs/zapocetisa3DPrintanjem';

export const allBlogPosts: BlogPost[] = [
  uporabaStarihRacunala,
  izborOperativnogSustava,
  zapocetisa3DPrintanjem,
].filter(post => post.published);

export function getBlogPost(slug: string): BlogPost | undefined {
  return allBlogPosts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return allBlogPosts.filter(post => 
    post.categories.includes(category)
  );
}

export function getPostsByTag(tag: string): BlogPost[] {
  return allBlogPosts.filter(post => 
    post.tags.includes(tag.toLowerCase())
  );
}

export function getFeaturedPosts(): BlogPost[] {
  return allBlogPosts.filter(post => post.featured);
}

export function getAllCategories(): string[] {
  const allCategories = allBlogPosts.flatMap(post => post.categories);
  return Array.from(new Set(allCategories));
}

export function getAllTags(): string[] {
  const allTags = allBlogPosts.flatMap(post => post.tags);
  return Array.from(new Set(allTags));
}

export function getRelatedPosts(currentPost: BlogPost, limit: number = 3): BlogPost[] {
  return allBlogPosts
    .filter(post => 
      post.slug !== currentPost.slug &&
      (post.categories.some(cat => currentPost.categories.includes(cat)) ||
       post.tags.some(tag => currentPost.tags.includes(tag)))
    )
    .slice(0, limit);
}

export { categories };