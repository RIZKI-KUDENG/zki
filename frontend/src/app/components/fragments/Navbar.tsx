"use client"; // Wajib ditambahkan karena kita menggunakan useState untuk menu mobile

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    // 'absolute w-full top-0 z-50 bg-transparent' membuat navbar melayang di atas Hero section
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent py-6 px-6 md:px-8 text-white font-sans">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* KIRI: Menu Desktop (Hidden di Mobile) */}
        {/* flex-1 tetap digunakan agar menyeimbangkan logo di tengah */}
        <div className="flex-1 flex justify-start lg:justify-end lg:pr-12">
          <div className="hidden lg:flex gap-x-10 text-sm font-semibold tracking-widest uppercase">
            <Link href="/about" className="hover:text-gray-300 transition-colors">About</Link>
            <Link href="/services" className="hover:text-gray-300 transition-colors">Services</Link>
            <Link href="/portfolio" className="hover:text-gray-300 transition-colors">Portfolio</Link>
          </div>
        </div>

        {/* TENGAH: Logo (Selalu terlihat) */}
        <div className="shrink-0">
          <Link href="/" className="text-3xl md:text-5xl font-extrabold tracking-widest">
            ZKI
          </Link>
        </div>

        {/* KANAN: Menu Desktop & Hamburger Mobile */}
        <div className="flex-1 flex justify-end lg:justify-start lg:pl-12">
          {/* Menu Desktop (Hidden di Mobile) */}
          <div className="hidden lg:flex gap-x-10 text-sm font-semibold tracking-widest uppercase">
            <Link href="/klien" className="hover:text-gray-300 transition-colors">Klien</Link>
            <Link href="/artikel" className="hover:text-gray-300 transition-colors">Artikel</Link>
            <Link href="/kontak" className="hover:text-gray-300 transition-colors">Kontak</Link>
          </div>

          {/* Tombol Hamburger (Hanya terlihat di Mobile) */}
          <button 
            className="lg:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMobileMenuOpen ? (
                // Icon X (Close)
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                // Icon Hamburger
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

      </div>

      {/* MOBILE MENU DROPDOWN (Muncul saat tombol hamburger diklik) */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/90 backdrop-blur-md lg:hidden">
          <div className="flex flex-col items-center py-8 gap-y-6 text-sm font-semibold tracking-widest uppercase">
            <Link href="/about" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">About</Link>
            <Link href="/services" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">Services</Link>
            <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">Portfolio</Link>
            <Link href="/klien" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">Klien</Link>
            <Link href="/artikel" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">Artikel</Link>
            <Link href="/kontak" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-gray-300">Kontak</Link>
          </div>
        </div>
      )}
    </nav>
  );
}