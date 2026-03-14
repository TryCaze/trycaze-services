"use client";

import { useState, useMemo, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  FileText, 
  BookOpen, 
  ChevronLeft, 
  ChevronRight,
  Calendar,
  X,
  Mic,
  FlaskConical,
  FolderOpen
} from "lucide-react";
import { works, Work } from "@/data/works/work";

const ITEMS_PER_PAGE = 9;

// Helper function to format date
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('hr-HR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Get icon based on work type
const getTypeIcon = (type: Work['type']) => {
  switch(type) {
    case 'book':
      return <BookOpen className="w-4 h-4" />;
    case 'essay':
      return <FileText className="w-4 h-4" />;
    case 'poetry':
      return <Mic className="w-4 h-4" />;
    case 'research':
      return <FlaskConical className="w-4 h-4" />;
    case 'project':
      return <FolderOpen className="w-4 h-4" />;
    default:
      return <FileText className="w-4 h-4" />;
  }
};

// Get color based on work type - with secondary/golden color
const getTypeColor = (type: Work['type']) => {
  switch(type) {
    case 'book':
      return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
    case 'essay':
      return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
    case 'article':
      return 'bg-green-500/20 text-green-300 border-green-500/30';
    case 'project':
      return 'bg-orange-500/20 text-orange-300 border-orange-500/30';
    case 'poetry':
      return 'bg-pink-500/20 text-pink-300 border-pink-500/30';
    case 'research':
      return 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30';
    case 'presentation':
      return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
    default:
      return 'bg-gray-500/20 text-gray-300 border-gray-500/30';
  }
};

// Croatian translations for types
const typeTranslations: Record<string, string> = {
  'all': 'Svi radovi',
  'book': 'Knjiga',
  'essay': 'Esej',
  'article': 'Članak',
  'project': 'Projekt',
  'poetry': 'Poezija',
  'research': 'Istraživanje',
  'presentation': 'Prezentacija',
};

export default function WorksPage() {
  // Search state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchQuery);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Get unique types for filter
  const types = useMemo(() => {
    const typeSet = new Set(works.map(work => work.type));
    return ['all', ...Array.from(typeSet).sort()];
  }, []);

  // Filter works based on search and type
  const filteredWorks = useMemo(() => {
    return works.filter(work => {
      const matchesSearch = debouncedSearch === "" || 
        work.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        work.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        work.tags.some(tag => tag.toLowerCase().includes(debouncedSearch.toLowerCase()));
      
      const matchesType = selectedType === "all" || work.type === selectedType;
      
      return matchesSearch && matchesType;
    });
  }, [debouncedSearch, selectedType]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch, selectedType]);

  // Pagination logic
  const totalPages = Math.max(1, Math.ceil(filteredWorks.length / ITEMS_PER_PAGE));
  const paginatedWorks = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredWorks.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredWorks, currentPage]);

  // Ensure current page is valid
  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(Math.max(1, totalPages));
    }
  }, [currentPage, totalPages]);

  const handleFilterChange = (type: string) => {
    setSelectedType(type);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setDebouncedSearch("");
    setSelectedType("all");
  };

  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
  } as const;

  return (
    <main className="text-white min-h-screen">
      {/* Hero Section - Title on left */}
      <section className="pt-24 pb-16 px-6">
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Radovi
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Zbirka eseja, knjiga, i istraživanja.
          </p>
        </motion.div>
      </section>

      {/* Search and Filter Section */}
      <section className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="bg-primary/50 backdrop-blur-sm border border-secondary/30 rounded-xl p-6">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary w-5 h-5" />
              <input
                type="text"
                placeholder="Pretraži radove, tagove, opise..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-primary/30 border border-secondary/30 rounded-lg py-3 pl-12 pr-24 text-white placeholder-white/50 focus:outline-none focus:border-secondary transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/50 hover:text-secondary transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Filter Chips - Secondary color for active */}
            <div className="flex flex-wrap gap-2 items-center">
              {types.map((type) => (
                <button
                  key={type}
                  onClick={() => handleFilterChange(type)}
                  className={`px-4 py-2 rounded-full border transition-colors text-sm ${
                    selectedType === type
                      ? 'bg-secondary text-white border-secondary'
                      : 'bg-transparent text-white/70 border-secondary/30 hover:border-secondary hover:text-white'
                  }`}
                >
                  {typeTranslations[type] || type}
                </button>
              ))}
            </div>

            {/* Results and Clear Filters */}
            <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-4">
              <div className="text-white/60 text-sm">
                <span className="text-white">{filteredWorks.length}</span> pronađenih radova
                {selectedType !== 'all' && ` · ${typeTranslations[selectedType]}`}
                {debouncedSearch && ` · pretraga: "${debouncedSearch}"`}
              </div>
              
              {(debouncedSearch || selectedType !== 'all') && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-white/60 hover:text-secondary transition-colors flex items-center gap-1"
                >
                  <X className="w-4 h-4" />
                  Očisti filtere
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Works Grid */}
      <section className="px-6 pb-16">
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            {paginatedWorks.length > 0 ? (
              <motion.div
                key={`${selectedType}-${currentPage}-${debouncedSearch}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {paginatedWorks.map((work) => (
                  <motion.a
                    key={work.id}
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="group bg-primary/50 backdrop-blur-sm border border-secondary/30 rounded-xl p-6 hover:border-secondary transition-colors flex flex-col h-full"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs border ${getTypeColor(work.type)}`}>
                        {getTypeIcon(work.type)}
                        {typeTranslations[work.type] || work.type}
                      </span>
                      <span className="text-white/30 group-hover:text-secondary/70 transition-colors text-xs">
                        #{work.id.split('-')[1]}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-secondary transition-colors line-clamp-2">
                      {work.title}
                    </h3>
                    
                    <p className="text-white/70 mb-4 text-sm line-clamp-3 flex-grow">
                      {work.description}
                    </p>
                    
                    <div className="flex items-center gap-3 text-xs text-white/50 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDate(work.date)}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {work.tags.slice(0, 3).map((tag) => (
                        <span
                          key={`${work.id}-${tag}`}
                          className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/60"
                        >
                          #{tag}
                        </span>
                      ))}
                      {work.tags.length > 3 && (
                        <span className="px-2 py-1 bg-white/5 rounded-full text-xs text-white/60">
                          +{work.tags.length - 3}
                        </span>
                      )}
                    </div>
                  </motion.a>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-20"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-white/5 flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white/30" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Nema pronađenih radova</h3>
                <p className="text-white/60 max-w-md mx-auto">
                  {debouncedSearch || selectedType !== 'all'
                    ? "Pokušajte s drugim pojmovima za pretraživanje ili uklonite filtere."
                    : "Trenutno nema radova u ovoj kategoriji."}
                </p>
                {(debouncedSearch || selectedType !== 'all') && (
                  <button
                    onClick={clearFilters}
                    className="mt-6 px-6 py-2 bg-secondary/20 hover:bg-secondary/30 text-white rounded-lg transition-colors text-sm"
                  >
                    Poništi filtere
                  </button>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Pagination - Secondary color for active */}
      {totalPages > 1 && paginatedWorks.length > 0 && (
        <section className="px-6 pb-24">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2 rounded-lg border border-secondary/30 hover:border-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-white" />
                </button>
                
                <div className="flex items-center gap-2">
                  {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                    let pageNum;
                    if (totalPages <= 5) {
                      pageNum = i + 1;
                    } else if (currentPage <= 3) {
                      pageNum = i + 1;
                    } else if (currentPage >= totalPages - 2) {
                      pageNum = totalPages - 4 + i;
                    } else {
                      pageNum = currentPage - 2 + i;
                    }
                    
                    return (
                      <button
                        key={pageNum}
                        onClick={() => setCurrentPage(pageNum)}
                        className={`min-w-[40px] h-10 rounded-lg border transition-colors ${
                          currentPage === pageNum
                            ? 'bg-secondary text-white border-secondary'
                            : 'border-secondary/30 text-white/70 hover:border-secondary hover:text-white'
                        }`}
                      >
                        {pageNum}
                      </button>
                    );
                  })}
                </div>
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2 rounded-lg border border-secondary/30 hover:border-secondary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-white" />
                </button>
              </div>
              
              <div className="text-white/50 text-sm">
                Stranica {currentPage} od {totalPages}
              </div>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}