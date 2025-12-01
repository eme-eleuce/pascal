'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { RiCloseLine } from 'react-icons/ri';
import { HiMenu } from 'react-icons/hi';

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
    { name: 'Dienstleistungen', href: '/services' },
    { name: 'Projekte', href: '/projekte' },
    { name: 'Team', href: '/team' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isHomePage 
          ? (scrolled ? 'bg-[#1B365D] shadow-md' : 'bg-transparent')
          : 'bg-[#1B365D] shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/photos/logo.png"
              alt="Sub Sole Films"
              width={300}
              height={80}
              className="h-16 md:h-24 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.name} className="text-white text-xl lg:text-3xl font-bold">
                <NavLink href={link.href}>{link.name}</NavLink>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden z-50">
            <button
              onClick={toggleMenu}
              className="focus:outline-none relative z-50 w-8 h-8"
            >
              <div className="relative w-full h-full">
                <RiCloseLine 
                  className={`absolute inset-0 h-12 w-12 transition-all duration-300 ease-in-out transform ${
                    isOpen ? 'opacity-100 rotate-0' : 'opacity-0 rotate-90'
                  } text-white`}
                />
                <HiMenu
                  className={`absolute inset-0 h-10 w-10 transition-all duration-300 ease-in-out transform ${
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
          </div>
          <div className="text-center text-sm text-gray-400 pb-8">
            <p>&copy; {new Date().getFullYear()} Sub Sole Films. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
