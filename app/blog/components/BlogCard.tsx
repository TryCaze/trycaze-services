// components/blog/BlogCard.tsx
import Link from 'next/link';
import { BlogPost } from '@/types/blog';
import { categories } from '@/data';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-primary/50 border-secondary">
      {post.coverImage && (
        <div className="h-48 relative">
          <img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {post.categories.slice(0, 2).map(category => (
            <Link
              href={`/blog/category/${encodeURIComponent(category.toLowerCase())}`}
              key={category}
              className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded"
            >
              {categories[category as keyof typeof categories] || category}
            </Link>
          ))}
          {post.featured && (
            <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded">
              Istaknuto
            </span>
          )}
        </div>

        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-semibold mb-2 text-white hover:text-secondary transition-colors">
            {post.title}
          </h2>
        </Link>

        <p className="text-white mb-4 line-clamp-2">
          {post.excerpt || post.description}
        </p>

        <div className="flex flex-wrap gap-1 mb-4">
          {post.tags.slice(0, 3).map(tag => (
            <span
              key={tag}
              className="px-2 py-1 bg-secondary/10 text-white text-xs rounded"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between text-sm text-white">
          <div className="flex items-center gap-2">
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-2">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString()}
            </time>
            {post.readingTime && <span>•</span>}
            {post.readingTime && <span>{post.readingTime}</span>}
          </div>
        </div>
      </div>
    </article>
  );
}