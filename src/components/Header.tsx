"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll durumunu izle
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md py-2 bg-white" : "py-4 bg-white"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <motion.div
            className="w-10 h-10 bg-[--primary] rounded-full flex items-center justify-center text-white font-bold"
            whileHover={{ rotate: 10 }}
          >
            K
          </motion.div>
          <span className="text-2xl font-bold">Kriptoloji</span>
        </Link>

        {/* Mobil menü butonu */}
        <button 
          className="md:hidden flex flex-col space-y-1.5"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menüyü Aç/Kapat"
        >
          <motion.span 
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <motion.span 
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <motion.span 
            className={`block w-6 h-0.5 bg-black transition-all duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>

        {/* Desktop Navigasyon */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8">
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link href="/" className="hover:text-[--primary] font-medium">
                Ana Sayfa
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link href="/caesar" className="hover:text-[--primary] font-medium">
                Sezar Şifreleme
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link href="/rsa" className="hover:text-[--primary] font-medium">
                RSA Şifreleme
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <Link href="/history" className="hover:text-[--primary] font-medium">
                Tarihçe
              </Link>
            </motion.li>
            <motion.li whileHover={{ scale: 1.05 }}>
              <a 
                href="https://tr.wikipedia.org/wiki/Kriptoloji"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[--primary] font-medium flex items-center"
              >
                Kriptoloji Hakkında
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.li>
          </ul>
        </nav>
      </div>

      {/* Mobil Menü */}
      <motion.div
        className={`md:hidden absolute w-full bg-white shadow-lg ${isMobileMenuOpen ? "block" : "hidden"}`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ 
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="container mx-auto py-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <Link 
                href="/" 
                className="block py-2 hover:text-[--primary] hover:pl-2 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link 
                href="/caesar" 
                className="block py-2 hover:text-[--primary] hover:pl-2 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sezar Şifreleme
              </Link>
            </li>
            <li>
              <Link 
                href="/rsa" 
                className="block py-2 hover:text-[--primary] hover:pl-2 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                RSA Şifreleme
              </Link>
            </li>
            <li>
              <Link 
                href="/history" 
                className="block py-2 hover:text-[--primary] hover:pl-2 transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tarihçe
              </Link>
            </li>
            <li>
              <a 
                href="https://tr.wikipedia.org/wiki/Kriptoloji"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 hover:text-[--primary] hover:pl-2 transition-all duration-200 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kriptoloji Hakkında
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
} 