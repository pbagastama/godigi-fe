import Image from 'next/image';

const SponsorSection = () => {
  return (
    <section className='relative py-10 md:py-16 bg-white'>
      <div className='px-4'>
        <div className='container mx-auto px-6'>
          <h2 className='text-xl md:text-3xl lg:text-5xl font-bold text-[#333] mb-6 md:mb-12 text-center md:text-left'>
            SPONSOR DAN PARTNER
          </h2>
        </div>

        <div className='flex flex-wrap justify-center items-center gap-2 lg:gap-0'>
          <Image
            src='/assets/home/section-8-brooks-logo.png'
            alt='BROOKS'
            width={120}
            height={60}
            className='h-auto w-24 sm:w-32 lg:w-64'
          />
          <Image
            src='/assets/home/section-8-bri-logo.png'
            alt='BRIlife'
            width={120}
            height={60}
            className='h-auto w-24 sm:w-32 lg:w-64'
          />
          <Image
            src='/assets/home/section-8-crystalin-logo.png'
            alt='CRYSTALIN'
            width={120}
            height={60}
            className='h-auto w-24 sm:w-32 lg:w-64'
          />
          <Image
            src='/assets/home/section-8-sunpride-logo.png'
            alt='Sipride'
            width={120}
            height={60}
            className='h-auto w-24 sm:w-32 lg:w-64'
          />
          <Image
            src='/assets/home/section-8-isoplus-logo.png'
            alt='ISOPLUS'
            width={120}
            height={60}
            className='h-auto w-24 sm:w-32 lg:w-64'
          />
          <Image
            src='/assets/home/section-8-ot-logo.png'
            alt='OT'
            width={120}
            height={60}
            className='h-auto w-24 sm:w-32 lg:w-64'
          />
        </div>
      </div>
    </section>
  );
};

export default SponsorSection;
