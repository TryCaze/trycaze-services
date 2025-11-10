import { getPostsByCategory, categories } from '@/data';
import BlogCard from '../../components/BlogCard';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  // Await the params first
  const { category } = await params;
  const posts = getPostsByCategory(category);
  
  if (posts.length === 0) {
    notFound();
  }

  const categoryName = categories[category as keyof typeof categories] || category;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Category: {categoryName}</h1>
        <p className="text-gray-600">
          {posts.length} post{posts.length !== 1 ? 's' : ''} in this category
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}

// Generate static paths for categories
export async function generateStaticParams() {
  return Object.keys(categories).map((category) => ({
    category: category,
  }));
}

// Generate metadata
export async function generateMetadata({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryName = categories[category as keyof typeof categories] || category;
  
  return {
    title: `${categoryName} | Blog`,
    description: `Blog posts in the ${categoryName} category`,
  };
}