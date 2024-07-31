'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();
  const [activeMenu, setActiveMenu] = useState(pathname); 
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setActiveMenu(pathname);
  }, [pathname]);

  const handleMenuClick = (path) => {
    setActiveMenu(path);
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="sticky top-0 bg-black p-4 z-50 overflow-hidden">
      <div className=" absolute bottom-0 left-0"></div>
      <div className="container mx-auto flex justify-between items-center relative">
        <Link href="/" className="flex items-center">
          <Image src="/navbar-img.png" width={50} height={50} alt="Navbar Image" />
          <h1 className="uppercase text-white lg:text-2xl md:text-xl font-semibold ml-6 italic">Dinesh Sunar</h1>
        </Link>
        <div className="hidden lg:flex space-x-4 text-white">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/services', label: 'Services' },
            { href: '/events', label: 'Events' },
            { href: '/awards', label: 'Awards' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/blogs', label: 'Blogs' },
            { href: '/resources', label: 'Resources' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleMenuClick(link.href)}
              className={`p-2 transition duration-300 ease-in-out transform ${
                activeMenu === link.href ? 'active-link scale-110' : 'hover:scale-105'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none transition transform duration-300 ease-in-out hover:rotate-90">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden flex flex-col space-y-2 text-white mt-4 transition transform duration-300 ease-in-out">
          {[
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About' },
            { href: '/services', label: 'Services' },
            { href: '/events', label: 'Events' },
            { href: '/awards', label: 'Awards' },
            { href: '/gallery', label: 'Gallery' },
            { href: '/blogs', label: 'Blogs' },
            { href: '/resources', label: 'Resources' },
            { href: '/contact', label: 'Contact' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => handleMenuClick(link.href)}
              className={`p-2 transition duration-300 ease-in-out transform ${
                activeMenu === link.href ? 'active-link scale-110' : 'hover:scale-105'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
      <style jsx>{`
        .line-animation {
          background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.4), transparent);
          height: 8px;
          width: 200%;
          position: absolute;
          animation: move 3s linear infinite;
        }

        @keyframes move {
          0% {
            left: -100%;
          }
          100% {
            left: 100%;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
