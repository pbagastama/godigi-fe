'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { galleryImages } from './_mock/galeri';

export default function GaleriDetailPage() {
  const [displayCount, setDisplayCount] = useState(4);
  const [breakpoint, setBreakpoint] = useState<'mobile' | 'tablet' | 'desktop'>(
    'mobile'
  );
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setBreakpoint('desktop');
        setDisplayCount((prev) => (prev < 8 ? 8 : prev));
      } else if (width >= 768) {
        setBreakpoint('tablet');
        setDisplayCount((prev) => (prev < 6 ? 6 : prev));
      } else {
        setBreakpoint('mobile');
        setDisplayCount((prev) => (prev < 4 ? 4 : prev));
      }
    };

    const width = window.innerWidth;
    if (width >= 1024) {
      setBreakpoint('desktop');
      setDisplayCount(8);
    } else if (width >= 768) {
      setBreakpoint('tablet');
      setDisplayCount(6);
    } else {
      setBreakpoint('mobile');
      setDisplayCount(6);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLoadMore = async () => {
    setIsLoading(true);
    let increment = 2;
    if (breakpoint === 'tablet') {
      increment = 3;
    } else if (breakpoint === 'desktop') {
      increment = 4;
    }
    await new Promise((resolve) => setTimeout(resolve, 500));
    setDisplayCount((prev) => Math.min(prev + increment, galleryImages.length));
    setIsLoading(false);
  };

  const displayedImages = galleryImages.slice(0, displayCount);
  const hasMore = displayCount < galleryImages.length;
  return (
    <Layout>
      {/* Hero Section */}
      <section
        id='tentang'
        className='relative min-h-[54vh] md:min-h-[70vh] flex flex-col items-center justify-end text-white pt-32 pb-6 md:pb-16'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/assets/bg-section-header.png'
            alt='Galeri Hero Background'
            fill
            className='object-cover'
          />
        </div>
        <div className='flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-4 w-full container mx-auto px-4 md:px-6'>
          <div className='relative z-10 text-left'>
            <h1 className='text-3xl sm:text-5xl lg:text-7xl font-semibold mb-2 md:mb-4'>
              GALERI APRIL - MEI
            </h1>
            <h2 className='text-4xl sm:text-6xl lg:text-8xl font-bold mb-3 md:mb-6'>
              DIGILAND <span className='font-light'>2025</span>
            </h2>
            <p className='text-base md:text-lg lg:text-xl font-bold text-white/90'>
              MINGGU 18 MEI – ISTORA SENAYAN JAKARTA
            </p>
          </div>
          <div className='relative mb-4 md:mb-0'>
            <Image
              src='/assets/logo-dgld-big.png'
              alt='LOGO DIGILAND'
              width={200}
              height={90}
              className='h-auto w-[80px] sm:w-28 lg:w-40'
            />
          </div>
        </div>
      </section>

      {/* Gallery Detail Section */}
      <section className='relative py-20 overflow-hidden h-auto'>
        <div className='relative'>
          <Image
            src='/assets/about/about-gradient-section-2.png'
            alt='gradient background'
            width={692}
            height={958}
            className='object-contain w-[692px] h-auto absolute top-[-400px] md:top-[-500px] left-0 z-0'
          />
        </div>
        <div className='container mx-auto px-6 sm:px-12 xl:px-6 relative z-10'>
          <div className='w-full mt-0 md:mt-10'>
            <div className='text-left'>
              <div className='font-light text-base md:text-lg lg:text-xl'>
                Ditemukan <span className='font-bold'>12 Foto</span> Sesuai
                nomor BIB <span className='font-bold'>6020</span> dalam kategori{' '}
                <span className='font-bold'>Half Marathon</span>
              </div>
              <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 md:gap-2 mt-6'>
                {displayedImages.map((image) => (
                  <Image
                    key={image.id}
                    src={image.src}
                    alt={image.alt}
                    width={360}
                    height={360}
                    className='w-full h-auto'
                  />
                ))}
              </div>
              {hasMore && (
                <div className='flex justify-center mt-8'>
                  <button
                    onClick={handleLoadMore}
                    disabled={isLoading}
                    className='px-8 py-3 bg-[#aa216a] hover:bg-[#aa216a] disabled:bg-[#aa216a]/70 cursor-pointer text-white font-semibold transition-colors duration-200 flex items-center gap-2'>
                    {isLoading ? (
                      <>
                        <svg
                          className='animate-spin h-5 w-5 text-white'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'>
                          <circle
                            className='opacity-25'
                            cx='12'
                            cy='12'
                            r='10'
                            stroke='currentColor'
                            strokeWidth='4'></circle>
                          <path
                            className='opacity-75'
                            fill='currentColor'
                            d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
                        </svg>
                        <span>Loading...</span>
                      </>
                    ) : (
                      'Muat Lebih Banyak'
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
