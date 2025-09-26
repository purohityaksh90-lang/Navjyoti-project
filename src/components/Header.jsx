import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Leaf, Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { cn } from '@/lib/utils';
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About & Products' },
    { href: '/contact', label: 'Contact' },
  ];
  const activeLinkStyle = {
    color: 'rgb(47, 79, 79)',
    fontWeight: '600',
  };
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled || isOpen ? 'bg-[#F5F5DC]/80 backdrop-blur-sm shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-display font-bold text-[#2F4F4F] hover:opacity-80 transition-opacity">
            <Leaf className="w-7 h-7 text-[#D2B48C]" />
            <span>Navjyoti Herbals</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.href}
                to={link.href}
                className="text-lg text-[#2F4F4F]/80 hover:text-[#2F4F4F] transition-colors relative group"
              >
                {({ isActive }) => (
                  <>
                    <span style={isActive ? activeLinkStyle : undefined}>{link.label}</span>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#D2B48C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                    {isActive && <motion.div className="absolute bottom-[-2px] left-0 right-0 h-0.5 bg-[#D2B48C]" layoutId="underline" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-[#2F4F4F]">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#F5F5DC]/95 backdrop-blur-sm"
          >
            <nav className="flex flex-col items-center space-y-6 py-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-[#2F4F4F]/80 hover:text-[#2F4F4F] transition-colors"
                  style={({ isActive }) => (isActive ? { color: 'rgb(47, 79, 79)', fontWeight: '600' } : undefined)}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}