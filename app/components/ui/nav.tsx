'use client';

import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Home,
  Briefcase,
  Wrench,
  Laptop,
  Globe,
  PenTool,
  Info,
  Menu,
  X,
  ChevronsLeftRightEllipsisIcon,
  Phone,
  MessageSquareDot,
  PrinterCheck,
} from 'lucide-react';
import Link from 'next/link';

type Service = {
  label: string;
  icon: React.ComponentType<{ className?: string; size?: string | number }>;
  path: string;
};

export function Navbar() {

  const services: Service[] = [
    { label: 'Poslovne usluge', icon: Briefcase, path: '/usluge/poslovne' },
    { label: 'IT Podrška', icon: PenTool, path: '/usluge/it-podrska' },
    { label: 'Popravci', icon: Wrench, path: '/usluge/popravci' },
    { label: 'Postavljanje', icon: Laptop, path: '/usluge/sastavljanje-racunala' },
    { label: '3D Printanje', icon: PrinterCheck, path: '/usluge/3dprintanje' },
    { label: 'Web Razvoj', icon: Globe, path: '/usluge/izrada-web-stranica' },
  ];

  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const router = useRouter();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menus on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-700 text-white sticky top-0 z-50 shadow-lg rounded-b-2xl transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image 
            src="/images/logo.svg" 
            alt="TryCaze Logo" 
            width={80} 
            height={80} 
            className="rounded-full"
          />
          <span className="ml-3 text-xl font-bold hidden sm:block">TryCaze</span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-2 items-center">
          <Link
            href='/'
            className="flex items-center hover:bg-gray-700 px-4 py-2 rounded-full transition-colors"
          >
            <Home className="mr-2" size={18} /> Početna
          </Link>
          <Link 
            href={`/o-nama`} 
            className="flex items-center hover:bg-gray-700 px-4 py-2 rounded-full transition-colors"
          >
            <Info className="mr-2" size={18} /> O nama
          </Link>

          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center hover:bg-gray-700 px-4 py-2 rounded-full transition-colors"
            >
              <ChevronsLeftRightEllipsisIcon className="mr-2" size={18} />
              Usluge <span className="ml-1">▼</span>
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  className="absolute z-50 mt-2 w-64 bg-gray-900 rounded-2xl shadow-lg overflow-hidden"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.15 }}
                >
                  {services.map(({ label, icon: Icon, path }) => (
                    <Link href={path} onClick={() => setMenuOpen(false)}>
                    <li
                      key={label}
                      className="flex items-center px-4 py-3 hover:bg-gray-700 cursor-pointer transition-colors"
                    >
                      <Icon className="mr-3" size={18} />
                      {label}
                    </li>
                    </Link>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <a
            href="/blog"
            className="flex items-center hover:bg-gray-700 px-4 py-2 rounded-full transition-colors"
          >
            <MessageSquareDot className='mr-2' size={18} />  Blogovi
          </a>
          <a
            href="mailto:trycaze@proton.me"
            className="flex items-center hover:bg-gray-700 px-4 py-2 rounded-full transition-colors"
          >
            <Phone className="mr-2" size={18} /> Kontakt
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 hover:bg-gray-700 rounded-full transition-colors"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            className="md:hidden bg-gray-800/90 backdrop-blur-md text-white px-5 pb-5 space-y-2 rounded-b-2xl shadow-xl"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              href={`/`}
              className="flex py-3 px-4 items-center hover:bg-gray-700 rounded-full transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <Home className="mr-3" size={18} /> Početna
            </Link>
            
            <Link 
              href={`/about`} 
              className="flex py-3 px-4 items-center hover:bg-gray-700 rounded-full transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <Info className="mr-3" size={18} /> O nama
            </Link>

            <div className="space-y-2">
              <button
                onClick={() => setDropdownOpen((prev) => !prev)}
                className="flex items-center w-full py-3 px-4 hover:bg-gray-700 rounded-full transition-colors"
              >
                <ChevronsLeftRightEllipsisIcon className="mr-3" size={18} />
                Usluge <span className="ml-1">▼</span>
              </button>
              
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.ul
                    className="ml-6 bg-gray-700 rounded-xl overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    {services.map(({ label, icon: Icon, path }) => (
                      <Link href={path} onClick={() => setMenuOpen(false)}>
                      <li
                        key={label}
                        className="flex items-center px-4 py-3 hover:bg-gray-600 cursor-pointer transition-colors"
                      >
                        <Icon className="mr-3" size={18} />
                        {label}
                      </li>
                      </Link>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <a
            href="/blog"
            className="flex py-3 px-4 items-center hover:bg-gray-700 rounded-full transition-colors"
            onClick={() => setMenuOpen(false)}
            >
              <MessageSquareDot className="mr-3" size={18}/> Blog
            </a>

            <a
              href="mailto:trycaze@proton.me" 
              className="flex py-3 px-4 items-center hover:bg-gray-700 rounded-full transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              <Phone className="mr-3" size={18} /> Kontakt
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}