'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiCloseLine } from 'react-icons/ri';
import { HiMenu } from 'react-icons/hi';
import { useLanguage } from '../../contexts/LanguageContext';

const NavLink = ({ href, isMobile = false, children, onClick }) => {
  return (
    <Link 
      href={href}
      className="relative transition-colors duration-300 group"
      onClick={onClick}
    >
      {children}
      <span className={`absolute left-0 -bottom-1 w-full h-[3px] transition-all duration-300 transform translate-y-1 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 bg-orange-500`}></span>
    </Link>
  )
}

export default function Navbar() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { language, switchLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: t('navbar.services'), href: '/services' },
    { name: t('navbar.projects'), href: '/projekte' },
    { name: t('navbar.team'), href: '/team' },
  ];

  return (
    <nav
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage 
          ? (scrolled ? 'bg-[#1B365D] shadow-md' : 'bg-transparent')
          : 'bg-[#1B365D] shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8" suppressHydrationWarning>
        <div className="flex items-center justify-between h-16 sm:h-20" suppressHydrationWarning>
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/photos/logo.png"
              alt="Sub Sole Films"
              width={300}
              height={80}
              className="h-12 sm:h-16 md:h-20 lg:h-24 w-auto"
              priority
              suppressHydrationWarning
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8" suppressHydrationWarning>
            {navLinks.map((link) => (
              <div key={link.name} className="text-white text-lg lg:text-xl xl:text-3xl font-bold" suppressHydrationWarning>
                <NavLink href={link.href}>{link.name}</NavLink>
              </div>
            ))}
          </div>

          {/* Language Switcher - Desktop */}
          {mounted && (
            <div className="hidden md:flex items-center gap-1 px-2 py-1 border-2 border-white rounded-md">
              <button
                onClick={() => switchLanguage('de')}
                className={`text-base lg:text-lg font-bold transition-all duration-300 px-1 ${
                  language === 'de' 
                    ? 'text-orange-500 scale-110' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                DE
              </button>
              <span className="text-white text-base lg:text-lg font-bold">/</span>
              <button
                onClick={() => switchLanguage('en')}
                className={`text-base lg:text-lg font-bold transition-all duration-300 px-1 ${
                  language === 'en' 
                    ? 'text-orange-500 scale-110' 
                    : 'text-white hover:text-gray-300'
                }`}
              >
                EN
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50 flex-shrink-0">
            <button
              onClick={toggleMenu}
              className="focus:outline-none relative z-50 w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-8 h-8">
                <RiCloseLine 
                  className={`absolute inset-0 h-8 w-8 transition-all duration-300 ease-in-out transform ${
                    isOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                  } text-white`}
                />
                <HiMenu
                  className={`absolute inset-0 h-8 w-8 transition-all duration-300 ease-in-out transform ${
                    isOpen ? 'opacity-0 -rotate-90' : 'opacity-100 rotate-0'
                  } text-white`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-[#1B365D] backdrop-blur-sm transition-transform duration-300 ease-in-out transform md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-between h-full py-20">
          <div className="flex flex-col items-center justify-center flex-1 space-y-12 text-4xl text-white font-bold">
            {navLinks.map((link) => (
              <NavLink key={link.name} href={link.href} isMobile onClick={closeMenu}>
                {link.name}
              </NavLink>
            ))}
            
            {/* Mobile Language Switcher */}
            {mounted && (
              <div className="flex items-center gap-1 px-2 py-1 border-2 border-white rounded-md">
                <button
                  onClick={() => switchLanguage('de')}
                  className={`text-base lg:text-lg font-bold transition-all duration-300 px-1 ${
                    language === 'de' 
                      ? 'text-orange-500 scale-110' 
                      : 'text-white hover:text-gray-300'
                  }`}
                >
                  DE
                </button>
                <span className="text-white text-base lg:text-lg font-bold">/</span>
                <button
                  onClick={() => switchLanguage('en')}
                  className={`text-base lg:text-lg font-bold transition-all duration-300 px-1 ${
                    language === 'en' 
                      ? 'text-orange-500 scale-110' 
                      : 'text-white hover:text-gray-300'
                  }`}
                >
                  EN
                </button>
              </div>
            )}
          </div>
          <div className="text-center text-sm text-gray-400 pb-8">
            <p>&copy; {new Date().getFullYear()} Sub Sole Films. {t('navbar.copyright')}.</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
