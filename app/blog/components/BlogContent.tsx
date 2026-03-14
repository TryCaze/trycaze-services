import { BlogSection } from '@/types/blog';
import Image from 'next/image';

interface BlogContentProps {
  content: BlogSection[];
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

export default function BlogContent({ content }: BlogContentProps) {
  return (
    <div className="prose prose-lg max-w-none">
      {content.map((section, index) => {
        switch (section.type) {
          case 'subtitle':
            return (
              <h2 key={index} className="text-2xl font-semibold mt-12 mb-6 first:mt-0 text-white">
                {section.content}
              </h2>
            );

          case 'H1':
            const h1Id = slugify(section.content)
            return (
              <h1 id={h1Id} key={index} className='mt-12 mb-6 first:mt-0 text-4xl font-bold text-white scroll-mt-24'>
                {section.content}
              </h1>
            )

          case 'H2':
            const h2Id = slugify(section.content)
            return (
              <h2 id={h2Id} key={index} className="mt-12 mb-4 first:mt-0 text-3xl font-bold text-white scroll-mt-24">
                {section.content}
              </h2>
            )

          case 'H3':
            const h3Id = slugify(section.content)
            return (
              <h3 id={h3Id} key={index} className="mt-2 mb-2 first:mt-0 text-xl font-bold text-white scroll-mt-24">
                {section.content}
              </h3>
            )

          case 'list':
            return(
              <div key={index}>
                <p className="mb-6 leading-relaxed text-white">{section.content}</p>
                <ul className="list-disc list-inside mb-6 text-white">
                  {section.items?.map((item, itemIndex) => (
                    <li key={itemIndex} className="mb-2">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          
          case 'paragraph':
            return (
              <p key={index} className="mb-6 leading-relaxed text-white">
                {section.content}
              </p>
            );
          
          case 'image':
            return (
              <div key={index} className="my-8">
                <div className="relative w-full h-64 md:h-96 bg-light-blue rounded-lg overflow-hidden">
                  <Image
                    src={section.content}
                    alt={section.imageAlt || 'Blog image'}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  />
                </div>
                {section.imageAlt && (
                  <p className="text-white text-sm mt-3">
                    {section.imageAlt}
                  </p>
                )}
              </div>
            );
          
          case 'code':
            return (
              <div key={index} className="my-6">
                <div className="bg-light-blue text-white px-4 py-2 text-sm rounded-t-lg border-b border-secondary font-mono">
                  {section.language || 'code'}
                </div>
                <pre className="bg-primary text-white p-4 rounded-b-lg overflow-x-auto text-sm font-mono border border-secondary">
                  <code>{section.content}</code>
                </pre>
              </div>
            );
          
          case 'quote':
            return (
              <blockquote key={index} className="border-l-4 border-secondary pl-6 py-2 my-6 italic text-white bg-secondary/10 rounded-r-lg">
                "{section.content}"
              </blockquote>
            );

          case 'link':
            return (
              <a key={index} href={section.content} className="text-secondary underline hover:text-secondary-dark">
                {section.text}
              </a>
            );
          
          default:
            return null;
        }
      })}
    </div>
  );
}