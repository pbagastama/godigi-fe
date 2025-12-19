'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className='fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm'>
      <nav className='container mx-auto px-6 py-6 flex items-center justify-between'>
        <Link href='#beranda' onClick={closeMenu}>
          <Image
            src='/assets/logo.png'
            alt='OGLO DIGILAND'
            width={120}
            height={40}
            className='h-auto w-20'
          />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center gap-8 md:gap-12 text-white font-semibold'>
          <Link
            href='#beranda'
            className='hover:text-pink-400 transition-colors'>
            BERANDA
          </Link>
          <Link
            href='#tentang'
            className='hover:text-pink-400 transition-colors'>
            TENTANG
          </Link>
          <Link
            href='#digiland-run'
            className='hover:text-pink-400 transition-colors'>
            DIGILAND RUN
          </Link>
          <Link
            href='#pasar-rakyat'
            className='hover:text-pink-400 transition-colors'>
            PASAR RAKYAT
          </Link>
          <Link
            href='#galeri'
            className='hover:text-pink-400 transition-colors'>
            GALERI
          </Link>
        </div>

        <div className='flex flex-row items-center gap-4'>
          <button className='block bg-[#AA216A] hover:bg-pink-600 text-white px-6 py-2 font-semibold transition-colors'>
            Beli Tiket
          </button>
          {/* Hamburger Menu Button (Mobile) */}
          <button
            onClick={toggleMenu}
            className='lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center'
            aria-label='Toggle menu'>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}></span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className='container mx-auto px-6 py-6 flex flex-col gap-4'>
          <Link
            href='#beranda'
            onClick={closeMenu}
            className='text-white font-semibold hover:text-pink-400 transition-colors py-2'>
            BERANDA
          </Link>
          <Link
            href='#tentang'
            onClick={closeMenu}
            className='text-white font-semibold hover:text-pink-400 transition-colors py-2'>
            TENTANG
          </Link>
          <Link
            href='#digiland-run'
            onClick={closeMenu}
            className='text-white font-semibold hover:text-pink-400 transition-colors py-2'>
            DIGILAND RUN
          </Link>
          <Link
            href='#pasar-rakyat'
            onClick={closeMenu}
            className='text-white font-semibold hover:text-pink-400 transition-colors py-2'>
            PASAR RAKYAT
          </Link>
          <Link
            href='#galeri'
            onClick={closeMenu}
            className='text-white font-semibold hover:text-pink-400 transition-colors py-2'>
            GALERI
          </Link>
        </div>
      </div>
    </header>
  );
}
