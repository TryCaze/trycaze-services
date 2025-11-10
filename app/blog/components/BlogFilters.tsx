'use client';
import { useRouter } from 'next/navigation';
import { categories } from '@/data';

interface BlogFiltersProps {
  categories: string[];
  tags: string[];
  currentCategory?: string;
  currentTag?: string;
}

export default function BlogFilters({ 
  categories: categoryList, 
  tags, 
  currentCategory, 
  currentTag 
}: BlogFiltersProps) {
  const router = useRouter();

  const updateFilters = (updates: { category?: string; tag?: string }) => {
    const params = new URLSearchParams();
    
    if (updates.category) params.set('category', updates.category);
    if (updates.tag) params.set('tag', updates.tag);
    
    router.push(`/blog?${params.toString()}`);
  };

  const clearFilters = () => {
    router.push('/blog');
  };

  return (
    <div className="mb-8 p-6 bg-gray-50 rounded-lg">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-2">
          <select
            value={currentCategory || ''}
            onChange={(e) => updateFilters({ category: e.target.value })}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {categoryList.map(category => (
              <option key={category} value={category}>
                {categories[category as keyof typeof categories] || category}
              </option>
            ))}
          </select>

          <select
            value={currentTag || ''}
            onChange={(e) => updateFilters({ tag: e.target.value })}
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Tags</option>
            {tags.map(tag => (
              <option key={tag} value={tag}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {(currentCategory || currentTag) && (
          <button
            onClick={clearFilters}
            className="px-4 py-2 text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear Filters
          </button>
        )}
      </div>

      {(currentCategory || currentTag) && (
        <div className="mt-4 flex flex-wrap gap-2">
          {currentCategory && (
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              Category: {categories[currentCategory as keyof typeof categories] || currentCategory}
            </span>
          )}
          {currentTag && (
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              Tag: {currentTag}
            </span>
          )}
        </div>
      )}
    </div>
  );
}