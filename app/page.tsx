'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Layout from '@/components/Layout';

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

  return (
    <Layout>
      {/* Hero Section */}
      <section
        id='beranda'
        className='relative min-h-screen flex items-center justify-center text-white pt-20'>
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
        <div className='relative z-10 text-center px-6 max-w-4xl mx-auto'>
          <h1 className='text-7xl md:text-9xl font-bold mb-6 tracking-tight'>
            DIGILAND 2025
          </h1>
          <p className='text-2xl md:text-3xl font-semibold mb-4'>
            Elevating Your Future
          </p>
          <p className='text-lg md:text-xl leading-relaxed max-w-2xl mx-auto'>
            Digiland adalah acara signature yang menginspirasi, menciptakan, dan
            memberdayakan komunitas untuk masa depan yang lebih baik.
          </p>
        </div>
      </section>

      {/* Countdown Section */}
      <section className='relative py-16 overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/assets/home/bg-count-elevate.png'
            alt='Countdown Background'
            fill
            className='object-cover'
          />
        </div>
        <div className='relative z-10 container mx-auto px-6'>
          <div className='flex flex-wrap justify-center gap-8 md:gap-12'>
            <div className='text-center'>
              <div className='text-5xl md:text-7xl font-bold text-white mb-2'>
                {countdown.days}
              </div>
              <div className='text-xl md:text-2xl text-white/90'>HARI</div>
            </div>
            <div className='text-center'>
              <div className='text-5xl md:text-7xl font-bold text-white mb-2'>
                {countdown.hours}
              </div>
              <div className='text-xl md:text-2xl text-white/90'>JAM</div>
            </div>
            <div className='text-center'>
              <div className='text-5xl md:text-7xl font-bold text-white mb-2'>
                {countdown.minutes}
              </div>
              <div className='text-xl md:text-2xl text-white/90'>MENIT</div>
            </div>
            <div className='text-center'>
              <div className='text-5xl md:text-7xl font-bold text-white mb-2'>
                {countdown.seconds}
              </div>
              <div className='text-xl md:text-2xl text-white/90'>DETIK</div>
            </div>
          </div>
        </div>
      </section>

      {/* Digiland Run Section */}
      <section id='digiland-run' className='relative py-20 overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/assets/home/home-bg-section-3.png'
            alt='Run Background'
            fill
            className='object-cover'
          />
          <div className='absolute inset-0 bg-teal-500/30'></div>
        </div>
        <div className='relative z-10 container mx-auto px-6'>
          <h2 className='text-5xl md:text-7xl font-bold text-white mb-4 text-center'>
            DGLD DIGILAND RUN 2025
          </h2>
          <p className='text-xl md:text-2xl text-gray-800 text-center mb-12 font-semibold'>
            LARI UNTUK KEBAHAGIAANMU
          </p>
          <div className='flex flex-wrap justify-center gap-6 mb-12'>
            <button className='bg-teal-500 hover:bg-teal-600 text-white px-12 py-6 rounded-full text-2xl font-bold transition-colors'>
              5K
            </button>
            <button className='bg-teal-500 hover:bg-teal-600 text-white px-12 py-6 rounded-full text-2xl font-bold transition-colors'>
              10K
            </button>
            <button className='bg-teal-500 hover:bg-teal-600 text-white px-12 py-6 rounded-full text-2xl font-bold transition-colors'>
              HALF MARATHON
            </button>
          </div>
          <div className='max-w-3xl mx-auto text-center'>
            <p className='text-gray-800 mb-6 text-lg leading-relaxed'>
              Daftarkan dirimu sekarang untuk menjadi bagian dari Digiland Run
              2025. Acara lari yang penuh semangat dan kebahagiaan untuk semua
              kalangan.
            </p>
            <button className='bg-white hover:bg-gray-100 text-teal-600 px-8 py-3 rounded-full font-semibold transition-colors'>
              Selengkapnya
            </button>
          </div>
        </div>
      </section>

      {/* Festival Musik Section */}
      <section className='relative py-20 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-teal-400 via-purple-500 to-blue-500'></div>
        <div className='relative z-10 container mx-auto px-6'>
          <div className='flex justify-between items-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800'>
              FESTIVAL MUSIK
            </h2>
            <button className='bg-white hover:bg-gray-100 text-gray-800 px-6 py-2 rounded-full font-semibold transition-colors'>
              Lihat Semua
            </button>
          </div>
          <div className='flex gap-8 overflow-x-auto pb-4 scrollbar-hide'>
            <div className='flex-shrink-0 text-center'>
              <div className='w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 mx-auto border-4 border-white shadow-lg'>
                <Image
                  src='/assets/home/art-bernadya-section-5.png'
                  alt='BERNADYA'
                  width={160}
                  height={160}
                  className='w-full h-full object-cover'
                />
              </div>
              <p className='text-white font-semibold'>BERNADYA</p>
            </div>
            <div className='flex-shrink-0 text-center'>
              <div className='w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 mx-auto border-4 border-white shadow-lg'>
                <Image
                  src='/assets/home/art-tiara-section-5.png'
                  alt='TIARA ANDINI'
                  width={160}
                  height={160}
                  className='w-full h-full object-cover'
                />
              </div>
              <p className='text-white font-semibold'>TIARA ANDINI</p>
            </div>
            <div className='flex-shrink-0 text-center'>
              <div className='w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 mx-auto border-4 border-white shadow-lg'>
                <Image
                  src='/assets/home/art-padi-section-5.png'
                  alt='PROJECT POP'
                  width={160}
                  height={160}
                  className='w-full h-full object-cover'
                />
              </div>
              <p className='text-white font-semibold'>PROJECT POP</p>
            </div>
            <div className='flex-shrink-0 text-center'>
              <div className='w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 mx-auto border-4 border-white shadow-lg'>
                <Image
                  src='/assets/home/art-jkt48-section-5.png'
                  alt='JKT48'
                  width={160}
                  height={160}
                  className='w-full h-full object-cover'
                />
              </div>
              <p className='text-white font-semibold'>JKT48</p>
            </div>
            <div className='flex-shrink-0 text-center'>
              <div className='w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 mx-auto border-4 border-white shadow-lg'>
                <Image
                  src='/assets/home/art-nassar-section-5.png'
                  alt='NASSAR'
                  width={160}
                  height={160}
                  className='w-full h-full object-cover'
                />
              </div>
              <p className='text-white font-semibold'>NASSAR</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pasar Rakyat Section */}
      <section id='pasar-rakyat' className='relative py-20 overflow-hidden'>
        <div className='absolute inset-0'>
          <Image
            src='/assets/home/home-bg-section-6.png'
            alt='Pasar Rakyat Background'
            fill
            className='object-cover'
          />
        </div>
        <div className='relative z-10 container mx-auto px-6'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-8'>
            PASAR RAKYAT UMKM
          </h2>
          <div className='max-w-3xl'>
            <p className='text-gray-800 mb-6 text-lg leading-relaxed'>
              Nikmati berbagai kuliner dan produk lokal di #PasarRakyatDigiland.
              Dukung UMKM Indonesia dan rasakan kehangatan pasar tradisional
              dengan sentuhan modern.
            </p>
            <button className='bg-teal-500 hover:bg-teal-600 text-white px-8 py-3 rounded-full font-semibold transition-colors'>
              Selengkapnya
            </button>
          </div>
        </div>
      </section>

      {/* Artikel Terbaru Section */}
      <section className='relative py-20 bg-white'>
        <div className='container mx-auto px-6'>
          <div className='flex justify-between items-center mb-12'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800'>
              ARTIKEL TERBARU
            </h2>
            <button className='bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-2 rounded-full font-semibold transition-colors'>
              Lihat Lebih Banyak
            </button>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <article className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
              <div className='relative h-48'>
                <Image
                  src='/assets/gallery/gallery-article-1.png'
                  alt='Article 1'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                  Telkomsel Gelar Digiland Run 2024
                </h3>
                <p className='text-gray-600 text-sm'>Selasa, 2024 Juni 04</p>
              </div>
            </article>
            <article className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
              <div className='relative h-48'>
                <Image
                  src='/assets/gallery/gallery-article-2.png'
                  alt='Article 2'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                  Antusiasme Tinggi, Lebih Dari 14000 Tiket Flash Sale Dari
                  Early Bird Habis...
                </h3>
                <p className='text-gray-600 text-sm'>Kamis, 2024 Juni 13</p>
              </div>
            </article>
            <article className='bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow'>
              <div className='relative h-48'>
                <Image
                  src='/assets/gallery/gallery-article-1.png'
                  alt='Article 3'
                  fill
                  className='object-cover'
                />
              </div>
              <div className='p-6'>
                <h3 className='text-xl font-bold text-gray-800 mb-2'>
                  Telkom Sukses Investasi Lebih Dari 30.000 Pengunjung Digiland
                  Indones...
                </h3>
                <p className='text-gray-600 text-sm'>Minggu, 2024 Mei 19</p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Ticket Purchase CTA Section */}
      <section className='relative py-20 overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-br from-teal-400 via-purple-500 to-blue-500'></div>
        <div className='relative z-10 container mx-auto px-6 text-center'>
          <h2 className='text-4xl md:text-6xl font-bold text-white mb-4'>
            DAPATKAN TIKETNYA DENGAN MUDAH
          </h2>
          <p className='text-xl md:text-2xl text-white/90 mb-8'>
            di MyTelkomsel, bersiap jadi bagian kemeriahan Digiland
          </p>
          <div className='flex flex-col md:flex-row items-center justify-center gap-6'>
            <Image
              src='/assets/home/section-7-logo-mytelkomsel.png'
              alt='MyTelkomsel'
              width={200}
              height={60}
              className='h-12 w-auto'
            />
            <button className='bg-white hover:bg-gray-100 text-teal-600 px-8 py-4 rounded-full font-bold text-lg transition-colors'>
              Beli Tiket
            </button>
          </div>
          <div className='mt-12 flex flex-wrap justify-center gap-4 text-white/80 text-xl md:text-2xl font-semibold'>
            <span className='transform -rotate-12'>#DigilandRun</span>
            <span className='transform rotate-12'>#Digiland</span>
            <span className='transform -rotate-12'>#ElevatingYourFuture</span>
            <span className='transform rotate-12'>2025</span>
          </div>
        </div>
      </section>

      {/* Sponsor dan Partner Section */}
      <section className='relative py-16 bg-white'>
        <div className='container mx-auto px-6'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-12 text-center'>
            SPONSOR DAN PARTNER
          </h2>
          <div className='flex flex-wrap justify-center items-center gap-8 md:gap-12'>
            <Image
              src='/assets/home/section-8-brooks-logo.png'
              alt='BROOKS'
              width={120}
              height={60}
              className='h-12 w-auto opacity-70 hover:opacity-100 transition-opacity'
            />
            <Image
              src='/assets/home/section-8-bri-logo.png'
              alt='BRIlife'
              width={120}
              height={60}
              className='h-12 w-auto opacity-70 hover:opacity-100 transition-opacity'
            />
            <Image
              src='/assets/home/section-8-crystalin-logo.png'
              alt='CRYSTALIN'
              width={120}
              height={60}
              className='h-12 w-auto opacity-70 hover:opacity-100 transition-opacity'
            />
            <Image
              src='/assets/home/section-8-sunpride-logo.png'
              alt='Sipride'
              width={120}
              height={60}
              className='h-12 w-auto opacity-70 hover:opacity-100 transition-opacity'
            />
            <Image
              src='/assets/home/section-8-isoplus-logo.png'
              alt='ISOPLUS'
              width={120}
              height={60}
              className='h-12 w-auto opacity-70 hover:opacity-100 transition-opacity'
            />
            <Image
              src='/assets/home/section-8-ot-logo.png'
              alt='OT'
              width={120}
              height={60}
              className='h-12 w-auto opacity-70 hover:opacity-100 transition-opacity'
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
