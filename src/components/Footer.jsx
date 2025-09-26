import React from 'react';
import { Leaf, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className="bg-[#2F4F4F] text-[#F5F5DC]">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-display font-bold text-[#F5F5DC] hover:opacity-80 transition-opacity mb-4">
              <Leaf className="w-7 h-7 text-[#D2B48C]" />
              <span>Navjyoti Herbals</span>
            </Link>
            <p className="text-sm text-[#F5F5DC]/80">Purity from nature, for you.</p>
          </div>
          <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold text-[#D2B48C] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:underline text-[#F5F5DC]/80 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:underline text-[#F5F5DC]/80 hover:text-white transition-colors">About & Products</Link></li>
              <li><Link to="/contact" className="hover:underline text-[#F5F5DC]/80 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center md:items-end">
            <h3 className="text-lg font-semibold text-[#D2B48C] mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-[#F5F5DC]/80 hover:text-white transition-colors"><Facebook /></a>
              <a href="#" className="text-[#F5F5DC]/80 hover:text-white transition-colors"><Instagram /></a>
              <a href="#" className="text-[#F5F5DC]/80 hover:text-white transition-colors"><Twitter /></a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-[#F5F5DC]/20 pt-8 text-center text-sm text-[#F5F5DC]/60">
          <p>&copy; {new Date().getFullYear()} Navjyoti Herbals. All Rights Reserved.</p>
          <p className="mt-1">Built with ❤️ at Cloudflare</p>
        </div>
      </div>
    </footer>
  );
}