'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Inicio', href: '#' },
    { name: 'Quiénes somos', href: '#quienes-somos' },
    { name: 'Ministerios', href: '#ministerios' },
    { name: 'Contacto', href: '#footer' },
  ];

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md fixed w-full z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="text-lg sm:text-xl md:text-2xl font-bold whitespace-nowrap">
          IEAD 248 POSADAS CH.32-33
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(link => (
            <li key={link.name} className="hover:text-yellow-400 transition">
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center text-white focus:outline-none"
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" /> // X icon
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" /> // Hamburger icon
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden mt-4 flex flex-col gap-4 px-2">
          {navLinks.map(link => (
            <li key={link.name} className="hover:text-yellow-400 transition">
              <a href={link.href} onClick={() => setIsOpen(false)}>{link.name}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
