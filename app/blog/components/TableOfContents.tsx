'use client'

import { useEffect, useState } from 'react'
import { BlogSection } from '@/types/blog'
import { motion, AnimatePresence } from 'framer-motion'

function slugify(text: string) {
  return text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
}

interface Props { content: BlogSection[] }

export default function TableOfContents({ content }: Props) {
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  const headings = content.filter(s => s.type === 'H1' || s.type === 'H2' || s.type === 'H3')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '0% 0% -80% 0%' }
    )
    headings.forEach((h) => {
      const el = document.getElementById(slugify(h.content))
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [headings])

  if (!headings.length) return null

  const scrollToHeading = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav className="sticky top-24 hidden lg:block max-w-[280px]">
        <div className="flex items-center gap-2 mb-6 group">
          <div className="h-[1px] w-8 bg-secondary/50 group-hover:w-12 transition-all" />
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary/80">
            U ovom blogu...
          </p>
        </div>
        <div className="relative border-l border-white/10 ml-1">
          <ul className="space-y-0">
            {headings.map((heading, index) => {
              const id = slugify(heading.content)
              const isActive = activeId === id
              const isSubItem = heading.type === 'H3'
              return (
                <li key={index} className="relative">
                  {isActive && (
                    <motion.div 
                      layoutId="activePill"
                      className="absolute left-[-1.5px] top-0 h-full w-[2px] bg-secondary shadow-[0_0_8px_rgba(var(--secondary-rgb),0.6)]" 
                    />
                  )}
                  <a
                    href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); scrollToHeading(id); }}
                    className={`block py-2 transition-all duration-300 ${isSubItem ? 'pl-8' : 'pl-5'} ${isActive ? 'text-white font-medium translate-x-1' : 'text-white/40 hover:text-white/80 hover:translate-x-1'}`}
                  >
                    <span className={`text-xs ${isActive ? 'opacity-100' : 'opacity-70'}`}>{heading.content}</span>
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </nav>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            layoutId="toc-container"
            onClick={() => setIsOpen(true)}
            className="lg:hidden fixed bottom-8 left-6 z-40
            w-14 h-14 rounded-2xl bg-secondary text-white
            flex items-center justify-center shadow-xl border border-white/10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.1 } }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div layoutId="toc-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex flex-col justify-end">
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            <motion.div
              layoutId="toc-container"
              drag="y"
              dragConstraints={{ top: 0 }}
              dragElastic={0.1}
              onDragEnd={(e, { offset, velocity }) => {
                if (offset.y > 100 || velocity.y > 500) setIsOpen(false)
              }}
              className="
                relative bg-[#0f0f0f] border-t border-white/10
                rounded-t-[2.5rem] px-6 pt-4 pb-12
                max-h-[85vh] shadow-2xl touch-none
              "
            >
              <div className="w-12 h-1.5 bg-white/20 rounded-full mx-auto mb-6" />

              <div className="flex justify-between items-center mb-6 px-2">
                <h3 className="text-lg font-semibold text-white tracking-tight">Sadržaj</h3>
                <button onClick={() => setIsOpen(false)} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/40">✕</button>
              </div>

              <nav className="overflow-y-auto max-h-[60vh] px-2 pointer-events-auto">
                <ul className="space-y-1">
                  {headings.map((heading, index) => {
                    const id = slugify(heading.content)
                    const isActive = activeId === id
                    return (
                      <motion.li 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.03 }}
                      >
                        <a
                          href={`#${id}`}
                          onClick={(e) => { e.preventDefault(); scrollToHeading(id); setIsOpen(false); }}
                          className={`group flex items-center py-3 rounded-xl transition-all ${heading.type === 'H3' ? 'ml-6 text-sm' : 'text-base font-medium'} ${isActive ? 'text-secondary bg-secondary/10 px-4' : 'text-white/60 hover:bg-white/5 px-4'}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full mr-3 flex-shrink-0 ${isActive ? 'bg-secondary' : 'bg-white/10'}`} />
                          <span className="break-words">{heading.content}</span>
                        </a>
                      </motion.li>
                    )
                  })}
                </ul>
              </nav>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}