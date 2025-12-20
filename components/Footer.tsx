import Image from 'next/image';

export default function Footer() {
  return (
    <footer className='relative h-[75vh] md:h-[90vh] pt-10 md:pt-16 pb-8 overflow-hidden'>
      <div className='absolute inset-0'>
        <Image
          src='/assets/footer-bg.png'
          alt='Footer Background'
          fill
          className='object-cover'
        />
      </div>
      <div className='relative h-[55vh] md:h-[60vh] z-10 container mx-auto px-6'>
        <div className='flex flex-col-reverse md:flex-row items-center justify-between mb-16 md:mb-24'>
          <div className='flex items-center gap-4 mb-6 md:mb-0'>
            <Image
              src='/assets/footer-logo-telkomsel.png'
              alt='Telkomsel'
              width={180}
              height={30}
              className='h-10 w-auto'
            />
          </div>
          <div className='flex items-center mb-6 md:mb-0 gap-4'>
            <Image
              src='/assets/footer-logo-telkom.png'
              alt='Telkom Indonesia'
              width={200}
              height={88}
              className='w-40 h-auto'
            />
          </div>
        </div>
        <div className='flex items-center justify-center gap-4'>
          <div className='mb-6 md:mb-10'>
            <Image
              src='/assets/logo-dgld-big.png'
              alt='DGLD DIGILAND 2025'
              width={300}
              height={200}
              className='w-52 sm:w-64 lg:w-80 h-auto'
            />
          </div>
        </div>
      </div>
      {/* Marquee Text */}
      <div className='overflow-hidden py-4 mb-4'>
        <div className='flex animate-marquee whitespace-nowrap'>
          <span className='text-white text-4xl md:text-6xl font-bold mx-8'>
            PASAR RAKYAT — DIGILAND RUN - FESTIVAL MUSIK -
          </span>
          <span className='text-white text-4xl md:text-6xl font-bold mx-8'>
            PASAR RAKYAT — DIGILAND RUN - FESTIVAL MUSIK -
          </span>
          <span className='text-white text-4xl md:text-6xl font-bold mx-8'>
            PASAR RAKYAT — DIGILAND RUN - FESTIVAL MUSIK -
          </span>
        </div>
      </div>
      <div className='absolute bottom-6 left-0 right-0 text-center z-10 text-white/80'>
        <p className='text-sm'>
          Copyright © 2025 Digiland. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
