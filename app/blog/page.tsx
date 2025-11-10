import { allBlogPosts } from "@/data";
import BlogCard from "./components/BlogCard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog, IT savjeti, vodiči i novosti",
  description:
    "Čitajte najnovije IT članke, korisne vodiče i savjete o računalima, mrežama, sigurnosti i web razvoju. TryCaze blog donosi znanje za svakog korisnika.",
  keywords: [
    "IT blog",
    "računala",
    "savjeti",
    "vodiči",
    "sigurnost",
    "web razvoj",
    "tehnologija",
    "TryCaze blog",
    "novosti iz IT svijeta"
  ],
  openGraph: {
    title: "TryCaze Blog, IT savjeti, vodiči i novosti",
    description:
      "Saznajte sve o računalima, mrežama, sigurnosti i web razvoju uz TryCaze blog. Znanje dostupno svima.",
    url: "https://trycaze-services.vercel.app/blog",
    siteName: "TryCaze Services",
    type: "website",
    locale: "hr_HR",
  },
  twitter: {
    card: "summary_large_image",
    title: "TryCaze Blog, IT savjeti i novosti",
    description:
      "Korisni IT vodiči i savjeti o računalima, webu i sigurnosti. Najbolji izvor IT znanja na hrvatskom jeziku.",
    images: ["https://trycaze-services.vercel.app/images/blog-cover.jpg"],
  },
  alternates: {
    canonical: "https://trycaze-services.vercel.app/blog",
  },
};

export default function BlogPage() {
    return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blogovi</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allBlogPosts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
    );
}