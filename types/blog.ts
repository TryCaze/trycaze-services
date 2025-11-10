export interface BlogPost {
    slug: string;
    title: string;
    description: string;
    excerpt?: string;
    date: string;
    updatedAt?: string;
    author: string;
    categories: string[];
    tags: string[];
    content: BlogSection[];
    published: boolean;
    featured?: boolean;
    readingTime?: string;
    coverImage?: string;
    metadata: {
        title?: string;
        description?: string;
        keywords?: string[];
        ogImage?: string;
        canonicalUrl?: string;
    };
}

export interface BlogSection {
    type: 'subtitle' | 'H1' | 'H2' | 'H3' | 'list' | 'paragraph' | 'image' | 'code' | 'quote';
    content: string;
    imageAlt?: string;
    language?: string; // for code blocks, not an actual language, idiot
}