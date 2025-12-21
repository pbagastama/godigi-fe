'use client';

import Image from 'next/image';
import Layout from '@/components/Layout';
import Link from 'next/link';

export default function GaleriPage() {
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
              GALERI
            </h1>
            <h2 className='text-4xl sm:text-6xl lg:text-8xl font-bold mb-3 md:mb-6'>
              DIGILAND <span className='font-light'>2025</span>
            </h2>
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

      {/* Gallery Section */}
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
        <div className='absolute inset-0 hidden md:block'>
          <Image
            src='/assets/gallery/gallery-bg-section-2.png'
            alt='Gallery Background'
            fill
            className='object-cover relative z-0'
          />
        </div>
        <div className='container-fluid lg:container mx-auto px-6 sm:px-12 xl:px-6 relative z-10'>
          <div className='flex flex-col xl:flex-row gap-8 w-full mb-12 md:mb-20'>
            <div className='w-full xl:w-3/12'>
              <div className='text-left max-w-full xl:max-w-[300px]'>
                <div className='text-[#333] text-3xl md:text-5xl font-medium tracking-tighter mb-2 leading-tight'>
                  ROAD TO <span className='font-bold'>DIGILAND RUN</span> 2025
                </div>
                <div className='text-base sm:text-lg font-semibold'>
                  APRIL - MEI
                </div>
              </div>
            </div>
            <div className='w-full xl:w-8/12'>
              <div className='w-full h-auto mb-8'>
                <Image
                  src='/assets/gallery/gallery-article-1.png'
                  alt='gallery'
                  width={500}
                  height={500}
                  className='w-full h-auto'
                />
              </div>
              <Link
                href='/galeri/digiland-run-2025'
                className='flex cursor-pointer border-2 border-gray-800 text-gray-800 px-6 py-3 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 items-center gap-2 group w-fit'>
                <span>Selengkapnya</span>
                <span className='group-hover:translate-x-1 transition-transform'>
                  →
                </span>
              </Link>
            </div>
          </div>
          <div className='flex flex-col xl:flex-row gap-8 w-full mb-12 md:mb-20'>
            <div className='w-full xl:w-3/12'>
              <div className='text-left max-w-full xl:max-w-[280px]'>
                <div className='text-[#333] text-3xl md:text-5xl font-medium tracking-tight mb-2 leading-tight'>
                  <span className='font-bold'>DIGILAND RUN</span> 2025
                </div>
                <div className='text-base sm:text-lg font-semibold leading-tight'>
                  MINGGU 18 MEI 2025
                </div>
              </div>
            </div>
            <div className='w-full xl:w-8/12'>
              <div className='w-full h-auto mb-8'>
                <Image
                  src='/assets/gallery/gallery-article-2.png'
                  alt='gallery'
                  width={500}
                  height={500}
                  className='w-full h-auto'
                />
              </div>
              <Link
                href='/galeri/digiland-run-2025'
                className='flex cursor-pointer border-2 border-gray-800 text-gray-800 px-6 py-3 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 items-center gap-2 group w-fit'>
                <span>Selengkapnya</span>
                <span className='group-hover:translate-x-1 transition-transform'>
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
