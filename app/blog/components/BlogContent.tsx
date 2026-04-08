'use client';

import { BlogSection } from '@/types/blog';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogContentProps {
  content: BlogSection[];
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-');
}

function ImageGrid({ images, imageAlt }: { images: string[], imageAlt?: string }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const nextImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev + 1) % images.length : 0));
  };

  const prevImage = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev !== null ? (prev - 1 + images.length) % images.length : images.length - 1));
  };

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((imgSrc, imgIndex) => (
          <motion.div
            key={imgIndex}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group border border-white/10 shadow-md transition-all duration-300"
            onClick={() => setSelectedIndex(imgIndex)}
          >
            <Image
              src={imgSrc}
              alt={`${imageAlt || 'Slika'} ${imgIndex + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Maximize2 className="text-white w-8 h-8 transform scale-75 group-hover:scale-100 transition-transform duration-300" />
            </div>
          </motion.div>
        ))}
      </div>

      {imageAlt && (
        <p className="text-white/60 text-sm mt-4 italic text-center border-t border-white/10 pt-2">
          {imageAlt}
        </p>
      )}

      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/40 flex items-center justify-center p-4 md:p-10 backdrop-blur-sm"
            onClick={() => setSelectedIndex(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2 hover:bg-white/10 rounded-full z-[110] transition-all"
              onClick={() => setSelectedIndex(null)}
            >
              <X className="w-8 h-8" />
            </button>

            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full z-[110] transition-all"
              onClick={prevImage}
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.div 
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.9, x: 50 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.9, x: -50 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative w-full h-full max-w-5xl max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedIndex]}
                alt="Fullscreen view"
                fill
                className="object-contain"
                priority
              />
            </motion.div>

            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 hover:bg-white/10 rounded-full z-[110] transition-all"
              onClick={nextImage}
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="absolute bottom-8 text-white/50 font-mono tracking-widest">
              {selectedIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
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
              <div key={index} className="my-8 w-full">
                <div className="relative w-full h-64 md:h-96 bg-light-blue rounded-lg overflow-hidden">
                  <Image
                    src={section.content}
                    alt={section.imageAlt || 'Blog image'}
                    fill
                    className="object-contain" // Changed from object-cover to object-contain
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

          case 'groupImages':
            return (
              <div key={index}>
              <h3 className="mt-2 mb-2 first:mt-0 text-3xl font-bold text-white scroll-mt-24">
                {section.content}
              </h3>
                <ImageGrid  
                  images={section.items || []} 
                  imageAlt={section.imageAlt} 
                />
              </div>
            );
          
          default:
            return null;
        }
      })}
    </div>
  );
}