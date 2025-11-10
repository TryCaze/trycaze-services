import { BlogPost } from '@/types/blog';

export const completeGuideNextjs: BlogPost = {
  slug: 'complete-guide-nextjs-14-app-router',
  title: 'The Complete Guide to Next.js 14: Mastering the App Router and New Features',
  description: 'A comprehensive deep dive into Next.js 14, covering the App Router, Server Components, streaming, and performance optimizations for enterprise applications.',
  excerpt: 'Learn how to build lightning-fast, SEO-optimized applications with Next.js 14. This guide covers everything from basic setup to advanced patterns used in production.',
  date: '2024-01-20',
  updatedAt: '2024-01-25',
  author: 'Sarah Chen',
  categories: ['web-razvoj', 'tutorial'],
  tags: ['nextjs', 'react', 'javascript', 'typescript', 'performance', 'seo', 'app-router', 'server-components', 'vercel'],
  published: true,
  featured: true,
  readingTime: '12 min read',
  coverImage: '/images/blog/nextjs-14-complete-guide.jpg',
  metadata: {
    title: 'Next.js 14 Complete Guide: App Router, Performance & Best Practices',
    description: 'Master Next.js 14 with this comprehensive guide covering App Router, React Server Components, streaming, SEO optimization, and production-ready patterns.',
    keywords: ['nextjs 14', 'app router', 'react server components', 'performance', 'seo', 'javascript framework', 'web development'],
    ogImage: '/images/blog/nextjs-14-og.jpg',
    canonicalUrl: 'https://yourcompany.com/blog/complete-guide-nextjs-14-app-router'
  },
  content: [
    {
      type: 'subtitle',
      content: 'Introduction'
    },
    {
      type: 'paragraph',
      content: 'Next.js 14 represents a significant leap forward in the React ecosystem, introducing powerful new features that redefine how we build modern web applications. With the stable App Router, React Server Components, and enhanced performance optimizations, Next.js continues to push the boundaries of what\'s possible in web development.'
    },
    {
      type: 'image',
      content: '/images/blog/nextjs-evolution-timeline.png',
      imageAlt: 'Next.js version evolution timeline showing key features from version 12 to 14'
    },
    {
      type: 'subtitle',
      content: 'What\'s New in Next.js 14'
    },
    {
      type: 'paragraph',
      content: 'The latest release brings several groundbreaking features that improve both developer experience and application performance.'
    },
    {
      type: 'subtitle',
      content: 'Stable App Router'
    },
    {
      type: 'paragraph',
      content: 'The App Router is now stable and recommended for all new projects. It provides a more intuitive file-based routing system with improved performance characteristics.'
    },
    {
      type: 'code',
      content: `// app/blog/[slug]/page.tsx
import { getBlogPost } from '@/data/blog';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <div>{post.content}</div>
    </article>
  );
}

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}`,
      language: 'typescript'
    },
    {
      type: 'subtitle',
      content: 'React Server Components (RSCs)'
    },
    {
      type: 'paragraph',
      content: 'Server Components allow you to run React components on the server, reducing bundle size and improving initial page load performance. They fetch data and render on the server, sending minimal JavaScript to the client.'
    },
    {
      type: 'code',
      content: `// Server Component - runs on server
import { getProductData } from '@/lib/api';

export default async function ProductPage({ productId }) {
  // This runs on the server, no client-side JavaScript
  const product = await getProductData(productId);
  
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      {/* Client Component for interactivity */}
      <AddToCartButton product={product} />
    </div>
  );
}`,
      language: 'typescript'
    },
    {
      type: 'subtitle',
      content: 'Enhanced Performance with Turbopack'
    },
    {
      type: 'paragraph',
      content: 'Next.js 14 includes significant improvements to Turbopack, the Rust-based bundler that promises up to 700x faster updates than Webpack in large applications.'
    },
    {
      type: 'image',
      content: '/images/blog/turbopack-benchmark.jpg',
      imageAlt: 'Benchmark comparison showing Turbopack vs Webpack performance metrics'
    },
    {
      type: 'subtitle',
      content: 'Server Actions'
    },
    {
      type: 'paragraph',
      content: 'Server Actions allow you to write server-side functions that can be called directly from your React components, eliminating the need for API routes for simple data mutations.'
    },
    {
      type: 'code',
      content: `// Server Action definition
'use server';

import { revalidatePath } from 'next/cache';
import { createPost } from '@/lib/posts';

export async function createBlogPost(formData: FormData) {
  const title = formData.get('title');
  const content = formData.get('content');
  
  await createPost({ title, content });
  
  // Revalidate the blog page to show new post
  revalidatePath('/blog');
  
  return { success: true };
}

// Using the Server Action in a form
export function CreatePostForm() {
  return (
    <form action={createBlogPost}>
      <input name="title" placeholder="Post title" />
      <textarea name="content" placeholder="Post content" />
      <button type="submit">Create Post</button>
    </form>
  );
}`,
      language: 'typescript'
    },
    {
      type: 'subtitle',
      content: 'Advanced Data Fetching Patterns'
    },
    {
      type: 'paragraph',
      content: 'Next.js 14 introduces several powerful data fetching patterns that make building complex applications easier and more performant.'
    },
    {
      type: 'subtitle',
      content: 'Parallel Data Fetching'
    },
    {
      type: 'paragraph',
      content: 'Fetch multiple data sources simultaneously to reduce loading times and improve user experience.'
    },
    {
      type: 'code',
      content: `export default async function DashboardPage() {
  // Fetch data in parallel
  const [userData, analytics, notifications] = await Promise.all([
    fetchUserData(),
    fetchAnalytics(),
    fetchNotifications()
  ]);
  
  return (
    <div>
      <UserProfile data={userData} />
      <AnalyticsDashboard data={analytics} />
      <NotificationsList items={notifications} />
    </div>
  );
}`,
      language: 'typescript'
    },
    {
      type: 'subtitle',
      content: 'Sequential Data Fetching with Loading States'
    },
    {
      type: 'paragraph',
      content: 'For dependent data fetching, you can use sequential requests with built-in loading states.'
    },
    {
      type: 'code',
      content: `import { Suspense } from 'react';

async function UserPosts({ userId }) {
  // Wait for user data first
  const user = await fetchUser(userId);
  // Then fetch user's posts
  const posts = await fetchUserPosts(user.id);
  
  return <PostsList posts={posts} />;
}

export default function UserPage({ params }) {
  return (
    <div>
      <Suspense fallback={<div>Loading user posts...</div>}>
        <UserPosts userId={params.userId} />
      </Suspense>
    </div>
  );
}`,
      language: 'typescript'
    },
    {
      type: 'subtitle',
      content: 'Streaming and Progressive Rendering'
    },
    {
      type: 'paragraph',
      content: 'Next.js 14 enhances streaming capabilities, allowing you to send parts of the page to the client as they become ready.'
    },
    {
      type: 'code',
      content: `import { Suspense } from 'react';

async function SlowComponent() {
  await new Promise(resolve => setTimeout(resolve, 2000));
  return <div>Slow loading content</div>;
}

export default function StreamingPage() {
  return (
    <div>
      <div>Immediate content</div>
      <Suspense fallback={<div>Loading slow content...</div>}>
        <SlowComponent />
      </Suspense>
      <div>More immediate content</div>
    </div>
  );
}`,
      language: 'typescript'
    },
    {
      type: 'subtitle',
      content: 'SEO and Metadata Improvements'
    },
    {
      type: 'paragraph',
      content: 'Next.js 14 introduces a new metadata API that makes SEO optimization simpler and more type-safe.'
    },
    {
      type: 'code',
      content: `import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My Page Title',
  description: 'My page description',
  keywords: ['nextjs', 'react', 'javascript'],
  openGraph: {
    title: 'My Page Title',
    description: 'My page description',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'My Page Title',
    description: 'My page description',
    images: ['/twitter-image.jpg'],
  },
};

// Dynamic metadata
export async function generateMetadata({ params }): Promise<Metadata> {
  const product = await getProduct(params.id);
  
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [product.image],
    },
  };
}`,
      language: 'typescript'
    },
    {
      type: 'subtitle',
      content: 'Performance Optimization Techniques'
    },
    {
      type: 'paragraph',
      content: 'Learn the most effective performance optimization strategies for Next.js applications.'
    },
    {
      type: 'subtitle',
      content: 'Image Optimization'
    },
    {
      type: 'paragraph',
      content: 'Next.js provides automatic image optimization with the next/image component.'
    },
    {
      type: 'code',
      content: `import Image from 'next/image';

export default function OptimizedImageGallery() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {images.map((image) => (
        <Image
          key={image.id}
          src={image.url}
          alt={image.alt}
          width={400}
          height={300}
          placeholder="blur"
          blurDataURL={image.blurDataURL}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="rounded-lg object-cover"
        />
      ))}
    </div>
  );
}`,
      language: 'typescript'
    },
    {
      type: 'subtitle',
      content: 'Font Optimization'
    },
    {
      type: 'paragraph',
      content: 'Next.js 14 introduces next/font for automatic font optimization and self-hosting.'
    },
    {
      type: 'code',
      content: `import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export default function RootLayout({ children }) {
  return (
    <html className={\`\${inter.variable} \${robotoMono.variable}\`}>
      <body>{children}</body>
    </html>
  );
}`,
      language: 'typescript'
    },
    {
      type: 'subtitle',
      content: 'Caching Strategies'
    },
    {
      type: 'paragraph',
      content: 'Implement effective caching strategies to improve performance and reduce server load.'
    },
    {
      type: 'code',
      content: `import { unstable_cache } from 'next/cache';

const getCachedData = unstable_cache(
  async () => {
    const data = await fetch('https://api.example.com/data', {
      next: { revalidate: 3600 } // Revalidate every hour
    });
    return data.json();
  },
  ['unique-cache-key'],
  {
    revalidate: 3600, // 1 hour
    tags: ['data'], // For on-demand revalidation
  }
);

export async function DataComponent() {
  const data = await getCachedData();
  
  return <div>{/* Render data */}</div>;
}`,
      language: 'typescript'
    },
    {
      type: 'subtitle',
      content: 'Real-World Implementation: E-commerce Blog'
    },
    {
      type: 'paragraph',
      content: 'Let\'s look at a complete example of how these features come together in a real e-commerce blog application.'
    },
    {
      type: 'code',
      content: `// app/blog/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { getBlogPost, getRelatedPosts } from '@/data/blog';
import BlogContent from '@/components/BlogContent';
import RelatedPosts from '@/components/RelatedPosts';
import TableOfContents from '@/components/TableOfContents';
import AuthorBio from '@/components/AuthorBio';
import ShareButtons from '@/components/ShareButtons';
import ReadingProgress from '@/components/ReadingProgress';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    notFound();
  }

  const relatedPosts = await getRelatedPosts(post);

  return (
    <>
      <ReadingProgress />
      <article className="max-w-4xl mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <div className="flex flex-wrap gap-2 justify-center mb-4">
            {post.categories.map(category => (
              <span key={category} className="category-badge">
                {category}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
          <p className="text-xl text-gray-600 mb-6">{post.description}</p>
          <AuthorBio post={post} />
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <BlogContent content={post.content} />
            <ShareButtons post={post} />
          </div>
          <div className="lg:col-span-1">
            <TableOfContents content={post.content} />
          </div>
        </div>
      </article>

      <RelatedPosts posts={relatedPosts} />
    </>
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = await getBlogPost(params.slug);
  
  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
    openGraph: {
      title: post.metadata.title,
      description: post.metadata.description,
      images: [post.coverImage],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    },
  };
}`,
      language: 'typescript'
    },
    {
      type: 'subtitle',
      content: 'Testing and Quality Assurance'
    },
    {
      type: 'paragraph',
      content: 'Ensure your Next.js application is robust and reliable with comprehensive testing strategies.'
    },
    {
      type: 'code',
      content: `// __tests__/blog-page.test.tsx
import { render, screen } from '@testing-library/react';
import BlogPage from '@/app/blog/page';
import { allBlogPosts } from '@/data/blog';

// Mock the data layer
jest.mock('@/data/blog', () => ({
  allBlogPosts: [
    {
      slug: 'test-post',
      title: 'Test Blog Post',
      description: 'This is a test blog post',
      excerpt: 'Test excerpt',
      date: '2024-01-20',
      author: 'Test Author',
      categories: ['testing'],
      tags: ['jest', 'testing'],
      published: true,
      content: [],
    },
  ],
}));

describe('Blog Page', () => {
  it('renders blog posts', async () => {
    render(await BlogPage());
    
    expect(screen.getByText('Test Blog Post')).toBeInTheDocument();
    expect(screen.getByText('This is a test blog post')).toBeInTheDocument();
  });

  it('displays categories and tags', async () => {
    render(await BlogPage());
    
    expect(screen.getByText('testing')).toBeInTheDocument();
    expect(screen.getByText('#jest')).toBeInTheDocument();
  });
});`,
      language: 'typescript'
    },
    {
      type: 'subtitle',
      content: 'Deployment and Production Ready'
    },
    {
      type: 'paragraph',
      content: 'Learn how to deploy your Next.js application with confidence using best practices for production environments.'
    },
    {
      type: 'code',
      content: `// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  images: {
    domains: ['images.unsplash.com', 'your-cdn.domain.com'],
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/old-blog/:slug',
        destination: '/blog/:slug',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;`,
      language: 'javascript'
    },
    {
      type: 'quote',
      content: 'Next.js 14 represents the future of React development, combining the best of server-side rendering with the rich interactivity of client-side applications. The App Router and Server Components fundamentally change how we think about building web applications.'
    },
    {
      type: 'subtitle',
      content: 'Conclusion'
    },
    {
      type: 'paragraph',
      content: 'Next.js 14 provides a comprehensive framework for building modern, performant web applications. By leveraging the App Router, Server Components, and the new performance optimizations, developers can create applications that are faster, more SEO-friendly, and provide better user experiences.'
    },
    {
      type: 'paragraph',
      content: 'The framework continues to evolve rapidly, with a strong focus on developer experience and production readiness. Whether you\'re building a small personal blog or a large-scale enterprise application, Next.js 14 provides the tools and patterns you need to succeed.'
    }
  ]
};