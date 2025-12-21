'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';
import SponsorSection from '@/components/SponsorSection';
import TicketPurchaseSection from '@/components/TicketPurchaseSection';

export default function Home() {
  const [countdown, setCountdown] = useState({
    days: 78,
    hours: 16,
    minutes: 58,
    seconds: 41,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 23;
              days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const marqueeText1 = '#DigilandRun • #DigilandMusic • #PasarRakyatDigiland';
  const marqueeText2 =
    '#ElevatingYourFuture • #ElevatingYourJoy • #Digiland2025';

  return (
    <Layout>
      {/* Hero Section */}
      <section
        id='beranda'
        className='relative min-h-screen flex flex-col items-center justify-center text-white pt-20'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/assets/home/home-hero-bg.png'
            alt='Hero Background'
            fill
            className='object-cover'
            priority
          />
          <div className='absolute inset-0 bg-black/40'></div>
        </div>
        <div className='flex relative z-10 overflow-hidden py-4 mb-4 w-full'>
          <div className='flex animate-marquee-hero whitespace-nowrap'>
            <h1 className='text-5xl md:text-8xl mb-6 font-light tracking-tight text-white'>
              <span className='font-bold mx-8'> DIGILAND</span> 2025
            </h1>
            <div className='text-5xl md:text-8xl mb-6 font-light tracking-tight text-white'>
              <span className='font-bold mx-8'> DIGILAND</span> 2025
            </div>
            <div className='text-5xl md:text-8xl mb-6 font-light tracking-tight text-white'>
              <span className='font-bold mx-8'> DIGILAND</span> 2025
            </div>
          </div>
        </div>
        <div className='container relative z-10 text-left px-6 w-full'>
          <p className='text-base md:text-lg leading-relaxed max-w-2xl'>
            Digiland 2025 hadir sebagai signature annual event Telkom Indonesia,
            menyajikan kegiatan yang inspiratif, inovatif dan menghibur
            masyarakat.
            <br />
            <br />
            Semangat #ElevatingYourFuture kembali melalui acara Digiland Run,
            Digiland Music, dan Pasar Rakyat UMKM.
          </p>
        </div>
      </section>

      {/* Countdown Section */}
      <section className='relative pt-16 md:pt-24 pb-0 overflow-hidden'>
        <div className='hidden md:block relative'>
          <Image
            src='/assets/home/icon-bg-elevate.png'
            alt='gradient background'
            width={340}
            height={140}
            className='object-contain w-[340px] h-[140px] absolute top-0 left-[150px]'
          />
        </div>
        <div className='container relative z-10 text-left px-6 w-full'>
          <div className='max-w-4xl ms-auto'>
            <Image
              src='/assets/ElevatingYourJoy.png'
              alt='elevate'
              width={160}
              height={160}
              className='w-72 h-auto mb-6'
            />
            <p className='text-base md:text-lg relative z-10'>
              Menghadirkan Digiland sebagai pengalaman yang imersif, interaktif,
              dengan didorong oleh inovasi, yang menyajikan kebahagiaan,
              mempererat hubungan, serta menyebarkan energi positif yang
              berkelanjutan melalui teknologi, hiburan, pemberdayaan, dan
              komunitas, untuk menciptakan keterlibatan yang lebih mendalam
              dengan masyarakat serta memberi dampak jangka panjang.
            </p>
          </div>
        </div>
      </section>
      <section className='relative py-16 overflow-hidden h-auto md:h-[90vh] mt-0 mb-10 md:mb-0'>
        <div className='hidden md:block relative'>
          <Image
            src='/assets/run/section-2-gradient.png'
            alt='gradient background'
            width={420}
            height={800}
            className='object-contain w-[420px] h-[820px] absolute top-[-160px] right-[-100px]'
          />
        </div>
        <div className='absolute inset-0'>
          <Image
            src='/assets/home/bg-count-elevate.png'
            alt='Countdown Background'
            fill
            className='object-cover md:object-contain'
          />
        </div>
        <div className='relative z-10 container mx-auto px-6'>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-24 h-auto md:h-[75vh]'>
            <div className='text-center'>
              <div className='text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-2'>
                {countdown.days}
              </div>
              <div className='text-base md:text-lg lg:text-xl text-white/90'>
                HARI
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-2'>
                {countdown.hours}
              </div>
              <div className='text-base md:text-lg lg:text-xl text-white/90'>
                JAM
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-2'>
                {countdown.minutes}
              </div>
              <div className='text-base md:text-lg lg:text-xl text-white/90'>
                MENIT
              </div>
            </div>
            <div className='text-center'>
              <div className='text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-2'>
                {countdown.seconds}
              </div>
              <div className='text-base md:text-lg lg:text-xl text-white/90'>
                DETIK
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digiland Run Section */}
      <section
        id='digiland-run'
        className='relative py-20 overflow-hidden h-[50vh] md:h-screen'>
        <div className='absolute inset-0'>
          <Image
            src='/assets/home/home-bg-section-3.png'
            alt='Run Background'
            fill
            className='object-cover'
          />
        </div>
        <Image
          src='/assets/logo-dgld-big.png'
          alt='DGLD DIGILAND 2025'
          width={300}
          height={200}
          className='w-52 md:w-64 lg:w-80 h-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
        />
      </section>

      {/* Digiland Run Content Section */}
      <section className='relative py-20 overflow-hidden'>
        <div className='relative'>
          <Image
            src='/assets/home/bg-gradient-1.png'
            alt='gradient background'
            width={495}
            height={879}
            className='object-contain w-[495px] h-auto absolute top-[-200px] left-0'
          />
        </div>
        <div className='relative'>
          <Image
            src='/assets/home/marathon-section-4.png'
            alt='marathon'
            width={432}
            height={648}
            className='object-contain w-[432px] h-auto absolute top-[-200px] right-0 md:right-[80px] z-10'
          />
        </div>
        <div className='relative'>
          <Image
            src='/assets/home/bg-gradient-2.png'
            alt='gradient background'
            width={959}
            height={879}
            className='object-contain w-[959px] h-auto absolute top-[-200px] right-[320px] z-0'
          />
        </div>
        <div className='container mx-auto px-6 relative z-20'>
          <div className='mx-auto'>
            <div className='mb-12'>
              <h2 className='text-3xl md:text-5xl lg:text-7xl font-bold text-center md:text-left text-gray-800 mb-4'>
                LARI UNTUK
                <br />
                KEBAHAGIAANMU
              </h2>
            </div>
            <div className='flex flex-wrap justify-center gap-6 md:gap-8 mb-12'>
              <button className='relative group transition-all duration-300 transform hover:scale-105'>
                <Image
                  src='/assets/home/cloud-1-section-4.png'
                  alt='Cloud 1'
                  width={324}
                  height={200}
                  className='relative w-[240px] h-auto md:w-[300px]'
                />
              </button>
              <button className='relative group transition-all duration-300 transform hover:scale-105'>
                <Image
                  src='/assets/home/cloud-2-section-4.png'
                  alt='Cloud 1'
                  width={200}
                  height={150}
                  className='relative w-[240px] h-auto md:w-[300px]'
                />
              </button>
              <button className='relative group transition-all duration-300 transform hover:scale-105'>
                <Image
                  src='/assets/home/cloud-3-section-4.png'
                  alt='Cloud 1'
                  width={200}
                  height={150}
                  className='relative w-[240px] h-auto md:w-[300px]'
                />
              </button>
            </div>

            {/* Promotional Text */}
            <div className='flex flex-col md:flex-row justify-between gap-4 md:mb-8 space-y-4'>
              <div className='w-full md:w-1/2 max-w-lg'>
                <p className='text-gray-700 text-sm md:text-base leading-relaxed mb-6'>
                  Daftar Digiland dan dapatkan{' '}
                  <span className='font-bold'>Free Kuota 15Gb</span> khusus
                  pelanggan Telkomsel
                </p>
                <p className='text-gray-700 text-sm md:text-base leading-relaxed'>
                  Bersiaplah untuk Digiland Run, bagian spesial dari Digiland
                  2025 yang mengajak runner enthusiast, komunitas lari, dan
                  masyarakat untuk berlari dengan penuh semangat dalam pilihan
                  kategori 5K, 10K, dan Half Marathon.
                </p>
              </div>

              <div className='w-full md:w-1/2 flex justify-start md:justify-end items-start md:items-end'>
                <button className='cursor-pointer border-2 border-gray-800 text-gray-800 px-6 py-3 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center gap-2 group'>
                  <span>Selengkapnya</span>
                  <span className='group-hover:translate-x-1 transition-transform'>
                    →
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Festival Musik Section */}
      <section className='relative py-16 md:py-20 overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/assets/home/home-bg-section-5.png'
            alt='Festival Musik Background'
            fill
            className='object-cover'
          />
        </div>
        <div className='relative z-10 mx-auto'>
          <div className='container mx-auto px-6 flex justify-center md:justify-between items-center mb-6 md:mb-12 w-full'>
            <h2 className='text-3xl md:text-4xl lg:text-6xl font-bold text-white text-center md:text-left'>
              FESTIVAL MUSIK
            </h2>
            <button className='hidden md:flex cursor-pointer border-2 border-gray-800 text-gray-800 px-6 py-3 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 items-center gap-2 group'>
              <span>Beli Tiketnya</span>
              <span className='group-hover:translate-x-1 transition-transform'>
                →
              </span>
            </button>
          </div>
          <div className='flex gap-8 overflow-x-auto pt-4 pb-12 scrollbar-hide'>
            <div className='shrink-0 text-center'>
              <div className='w-40 md:w-60 lg:w-80 h-auto mb-4 mx-auto'>
                <Image
                  src='/assets/home/art-bernadya-section-5.png'
                  alt='BERNADYA'
                  width={260}
                  height={350}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            <div className='shrink-0 text-center'>
              <div className='w-40 md:w-60 lg:w-80 h-auto mb-4 mx-auto'>
                <Image
                  src='/assets/home/art-tiara-section-5.png'
                  alt='TIARA ANDINI'
                  width={260}
                  height={350}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            <div className='shrink-0 text-center'>
              <div className='w-40 md:w-60 lg:w-80 h-auto mb-4 mx-auto'>
                <Image
                  src='/assets/home/art-jkt48-section-5.png'
                  alt='JKT48'
                  width={260}
                  height={350}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            <div className='shrink-0 text-center'>
              <div className='w-40 md:w-60 lg:w-80 h-auto mb-4 mx-auto'>
                <Image
                  src='/assets/home/art-projectpop-section-5.png'
                  alt='PROJECT POP'
                  width={260}
                  height={350}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            <div className='shrink-0 text-center'>
              <div className='w-40 md:w-60 lg:w-80 h-auto mb-4 mx-auto'>
                <Image
                  src='/assets/home/art-padi-section-5.png'
                  alt='PADI'
                  width={260}
                  height={350}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
            <div className='shrink-0 text-center'>
              <div className='w-40 md:w-60 lg:w-80 h-auto mb-4 mx-auto'>
                <Image
                  src='/assets/home/art-nassar-section-5.png'
                  alt='NASSAR'
                  width={260}
                  height={350}
                  className='w-full h-full object-cover'
                />
              </div>
            </div>
          </div>
          <div className='w-full flex justify-center md:hidden'>
            <button className='flex cursor-pointer border-2 border-gray-800 text-gray-800 px-6 py-3 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 items-center justify-center gap-2 group'>
              <span>Beli Tiketnya</span>
              <span className='group-hover:translate-x-1 transition-transform'>
                →
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pasar Rakyat Section */}
      <section
        id='pasar-rakyat'
        className='relative py-10 md:py-20 overflow-hidden h-auto md:h-[120vh]'>
        <div className='absolute inset-0 hidden md:block'>
          <Image
            src='/assets/home/home-bg-section-6.png'
            alt='Pasar Rakyat Background'
            fill
            className='object-cover'
          />
        </div>
        <div className='relative z-10 container mx-auto px-6'>
          <Image
            src='/assets/home/title-section-6.png'
            alt='Pasar Rakyat UMKM'
            width={546}
            height={116}
            className='w-[600px] md:w-[400px] lg:w-[546] h-auto mt-0 md:mt-10 lg:mt-20'
          />
        </div>
        <div className='flex relative z-10 container mx-auto px-6 md:hidden flex-col'>
          <p className='text-gray-800 mt-8 mb-6 text-base md:text-lg leading-relaxed text-left'>
            Nikmati jajanan{' '}
            <span className='font-bold'>#PasarRakyatDigiland</span> di acara{' '}
            <span className='font-bold'>#DIGILAND 2025</span>.
            <br />
            <br />
            Jangan lupa beli yang banyak ya untuk membantu para UMKM di
            Indonesia!!.
          </p>
          <button className='cursor-pointer border-2 border-gray-800 text-gray-800 px-6 py-3 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center gap-2 group w-fit'>
            <span>Selengkapnya</span>
            <span className='group-hover:translate-x-1 transition-transform'>
              →
            </span>
          </button>
        </div>
        <div className='hidden relative z-10 container ms-auto pr-20 md:flex flex-col flex-end items-end justify-end max-w-xl h-[80vh]'>
          <p className='text-gray-800 mb-6 text-lg leading-relaxed text-right'>
            Nikmati jajanan{' '}
            <span className='font-bold'>#PasarRakyatDigiland</span> di acara{' '}
            <span className='font-bold'>#DIGILAND 2025</span>.
            <br />
            <br />
            Jangan lupa beli yang banyak ya untuk membantu para UMKM di
            Indonesia!!.
          </p>
          <button className='cursor-pointer border-2 border-gray-800 text-gray-800 px-6 py-3 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 flex items-center gap-2 group'>
            <span>Selengkapnya</span>
            <span className='group-hover:translate-x-1 transition-transform'>
              →
            </span>
          </button>
        </div>
      </section>

      {/* Artikel Terbaru Section */}
      <section className='relative py-10 md:py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='flex justify-center md:justify-between items-center mb-8 md:mb-16'>
            <h2 className='text-3xl md:text-5xl font-bold text-gray-800'>
              ARTIKEL TERBARU
            </h2>
            <button className='hidden cursor-pointer border-2 border-gray-800 text-gray-800 px-6 py-3 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 md:flex items-center gap-2 group'>
              <span>Lihat Lebih Banyak</span>
              <span className='group-hover:translate-x-1 transition-transform'>
                →
              </span>
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-10 md:mb-0'>
            <article className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
              <div className='relative h-48 sm:h-96 md:h-64 lg:h-80'>
                <Image
                  src='/assets/home/article-1.png'
                  alt='Article 1'
                  fill
                  className='object-cover'
                />
              </div>
            </article>
            <article className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
              <div className='relative h-48 sm:h-96 md:h-64 lg:h-80'>
                <Image
                  src='/assets/home/article-2.png'
                  alt='Article 2'
                  fill
                  className='object-cover'
                />
              </div>
            </article>
            <article className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
              <div className='relative h-48 sm:h-96 md:h-64 lg:h-80'>
                <Image
                  src='/assets/home/article-3.png'
                  alt='Article 3'
                  fill
                  className='object-cover'
                />
              </div>
            </article>
          </div>
          <div className='w-full flex justify-center md:hidden'>
            <button className='flex cursor-pointer border-2 border-gray-800 text-gray-800 px-6 py-3 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 items-center justify-center gap-2 group'>
              <span>Lihat Lebih Banyak</span>
              <span className='group-hover:translate-x-1 transition-transform'>
                →
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Ticket Purchase CTA Section */}
      <TicketPurchaseSection
        marqueeText1={marqueeText1}
        marqueeText2={marqueeText2}
      />

      {/* Sponsor dan Partner Section */}
      <SponsorSection />
    </Layout>
  );
}
