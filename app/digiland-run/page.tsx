'use client';

import Image from 'next/image';
import Layout from '@/components/Layout';
import Link from 'next/link';
import SponsorSection from '@/components/SponsorSection';
import TicketPurchaseSection from '@/components/TicketPurchaseSection';

export default function DigilandRunPage() {
  const marqueeText1 = '#DigilandRun • #DigilandMusic • #PasarRakyatDigiland';
  const marqueeText2 =
    '#ElevatingYourFuture • #ElevatingYourJoy • #Digiland2025';

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
            <h1 className='text-4xl sm:text-6xl lg:text-8xl font-bold mb-3 md:mb-6'>
              DIGILAND <span className='font-light'>2025</span>
            </h1>
            <p className='text-base md:text-lg lg:text-xl font-bold text-white/90'>
              MINGGU 18 MEI – ISTORA SENAYAN JAKARTA
            </p>
          </div>
          {/* <div className='relative mb-4 md:mb-0'>
            <Image
              src='/assets/logo-dgld-big.png'
              alt='LOGO DIGILAND'
              width={200}
              height={90}
              className='h-auto w-[80px] sm:w-28 lg:w-40'
            />
          </div> */}
        </div>
      </section>

      <section className='relative py-16 md:pb-24 lg:pb-32 bg-white'>
        <div className='relative hidden md:block'>
          <Image
            src='/assets/about/about-gradient-section-2.png'
            alt='gradient background'
            width={692}
            height={958}
            className='object-contain w-[692px] h-auto absolute top-[-600px] left-0 z-0'
          />
        </div>
        <div className='container mx-auto px-4 md:px-6 relative z-10'>
          <div className='flex flex-col xl:flex-row gap-8 md:gap-12 items-start'>
            <div className='flex items-center justify-center md:justify-start w-full xl:w-4/12'>
              <div className='text-left max-w-full xl:max-w-[420px]'>
                <div className='text-[#333] text-3xl md:text-5xl font-bold tracking-tighter mb-2 leading-tight'>
                  LARI UNTUK BAHAGIA
                </div>
                <p className='text-base md:text-lg leading-relaxed text-gray-700 mt-12'>
                  Ayo, lari dan bersenang-senang di #DigilandRun
                </p>
              </div>
            </div>
            <div className='w-full xl:w-8/12 space-y-3'>
              <p className='text-base md:text-lg leading-relaxed text-gray-700 mb-10'>
                Bersiaplah untuk Digiland Run, bagian spesial dari Digiland 2025
                yang mengajak runner enthusiast, komunitas lari, dan masyarakat
                untuk berlari dengan penuh semangat dalam pilihan kategori 5K,
                10K, dan Half Marathon.
              </p>
              <p className='text-base md:text-lg leading-relaxed text-gray-700 mb-10'>
                Digelar pada 18 Mei 2025 di Istora Senayan Jakarta, semakin seru
                dengan penampilan spektakuler dari puluhan musisi ternama, serta
                pasar rakyat UMKM.
              </p>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
            <Link href='#' target='_blank' className='w-full'>
              <Image
                src='/assets/run/run-prize-1.png'
                alt='Run Prize 1'
                width={350}
                height={320}
                className='w-full h-auto'
              />
            </Link>
            <Link href='#' target='_blank' className='w-full'>
              <Image
                src='/assets/run/run-prize-2.png'
                alt='Run Prize 2'
                width={350}
                height={320}
                className='w-full h-auto'
              />
            </Link>
            <Link href='#' target='_blank' className='w-full'>
              <Image
                src='/assets/run/run-prize-3.png'
                alt='Run Prize 3'
                width={350}
                height={320}
                className='w-full h-auto'
              />
            </Link>
          </div>
        </div>
        <div className='container mx-auto px-4 md:px-6 py-20 relative z-10'>
          <div className='absolute inset-0'>
            <Image
              src='/assets/run/run-bg-section-3.png'
              alt='Gallery Background'
              fill
              className='object-cover relative z-0'
            />
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
            <div className='w-full flex flex-col items-center justify-center mb-6 md:mb-0'>
              <Image
                src='/assets/run/run-item-gift-1.png'
                alt='Run Prize 1'
                width={350}
                height={320}
                className='w-48 h-auto -mb-2 md:mb-8'
              />
              <div className='text-center'>
                <p className='text-[#333] text-base md:text-lg leading-relaxed font-bold'>
                  Nomor BIB
                </p>
              </div>
            </div>
            <div className='w-full flex flex-col items-center justify-center mb-6 md:mb-0'>
              <Image
                src='/assets/run/run-item-gift-2.png'
                alt='Run Prize 2'
                width={350}
                height={320}
                className='w-48 h-auto -mb-2 md:mb-8'
              />
              <div className='text-center'>
                <p className='text-[#333] text-base md:text-lg leading-relaxed font-bold'>
                  Goodie Bag
                </p>
              </div>
            </div>
            <div className='w-full flex flex-col items-center justify-center mb-6 md:mb-0'>
              <Image
                src='/assets/run/run-item-gift-3.png'
                alt='Run Prize 3'
                width={350}
                height={320}
                className='w-48 h-auto justify-center mb-4 md:mb-8'
              />
              <div className='text-center'>
                <p className='text-[#333] text-base md:text-lg leading-relaxed font-bold'>
                  Jersey
                </p>
              </div>
            </div>
          </div>
          <div className='flex flex-col items-start md:items-end text-left md:text-right mt-20 mb-8 px-4 md:px-24 max-w-4xl ms-auto relative z-10'>
            Item-item yang dukung kenyamanan & kelancaran lari, serta medali
            sesuai kategori untuk kamu yang sampai garis finish.
            <Link
              href='/galeri/digiland-run-2025'
              className='flex cursor-pointer border-2 border-gray-800 text-gray-800 px-6 py-3 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 items-center gap-2 group w-fit mt-8'>
              <span>Pengambilan Racepack</span>
              <span className='group-hover:translate-x-1 transition-transform'>
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Ticket Purchase CTA Section */}
      <TicketPurchaseSection
        marqueeText1={marqueeText1}
        marqueeText2={marqueeText2}
        description='di MyTelkomsel, bersiap jadi bagian keseruan Digiland!'
      />

      {/* Sponsor dan Partner Section */}
      <SponsorSection />
    </Layout>
  );
}
