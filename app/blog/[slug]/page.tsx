import { getBlogPost, allBlogPosts, getRelatedPosts, categories } from '@/data';
import { notFound } from 'next/navigation';
import BlogContent from '../components/BlogContent';
import RelatedPosts from '../components/RelatedPosts';
import type { Metadata } from 'next';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  // Await the params first
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(post);

  return (
    <>
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Cover Image */}
        {post.coverImage && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>
        )}

        <header className="mb-8">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.categories.map(category => (
              <span
                key={category}
                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
              >
                {categories[category as keyof typeof categories] || category}
              </span>
            ))}
            {post.featured && (
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                Featured
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-lg text-white mb-6">{post.description}</p>

          {/* Author and Meta Info */}
          <div className="flex items-center justify-between border-t border-b py-4">
            <div className="flex items-center gap-3">
              <div>
                <p className="font-semibold">{post.author}</p>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('hr', {
                      year: 'numeric',
                      day: 'numeric',
                      month: 'numeric',
                    })}
                  </time>
                  {post.updatedAt && (
                    <>
                      <span>•</span>
                      <span>
                        Updated {new Date(post.updatedAt).toLocaleDateString()}
                      </span>
                    </>
                  )}
                  {post.readingTime && (
                    <>
                      <span>•</span>
                      <span>{post.readingTime}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </header>

        <BlogContent content={post.content} />

        {/* Tags */}
        <div className="mt-8 pt-6 border-t">
          <div className="flex flex-wrap gap-2">
            {post.tags.map(tag => (
              <span
                key={tag}
                className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>

      {relatedPosts.length > 0 && <RelatedPosts posts={relatedPosts} />}
    </>
  );
}

// SEO metadata - also update this to await params
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.metadata?.title || post.title,
    description: post.metadata?.description || post.description,
    keywords: post.metadata?.keywords || post.tags,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.metadata?.title || post.title,
      description: post.metadata?.description || post.description,
      type: 'article',
      publishedTime: post.date,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url:
            post.metadata?.ogImage ||
            post.coverImage ||
            '/images/og-default.jpg',
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.metadata?.title || post.title,
      description: post.metadata?.description || post.description,
      images: [
        post.metadata?.ogImage ||
          post.coverImage ||
          '/images/og-default.jpg',
      ],
    },
    alternates: {
      canonical:
        post.metadata?.canonicalUrl ||
        `https://trycaze-services.vercel.app/blog/${post.slug}`,
    },
  };
}

// Static generation of paths
export async function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    slug: post.slug,
  }));
}