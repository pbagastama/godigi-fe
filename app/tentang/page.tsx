'use client';

import Image from 'next/image';
import Layout from '@/components/Layout';
import SponsorSection from '@/components/SponsorSection';
import TicketPurchaseSection from '@/components/TicketPurchaseSection';

export default function TentangPage() {
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
            src='/assets/about/bg-about-section-hero.png'
            alt='About Hero Background'
            fill
            className='object-cover'
          />
        </div>
        <div className='relative z-10 container mx-auto px-4 md:px-6 text-left'>
          <h1 className='text-2xl md:text-5xl lg:text-7xl font-semibold mb-2 md:mb-4'>
            TENTANG
          </h1>
          <h2 className='text-3xl md:text-6xl lg:text-8xl font-bold mb-3 md:mb-6'>
            DIGILAND <span className='font-light'>2025</span>
          </h2>
          <p className='text-base md:text-lg lg:text-xl font-bold text-white/90'>
            MINGGU, 18 MEI – ISTORA SENAYAN JAKARTA
          </p>
        </div>
      </section>

      {/* About Information Section */}
      <section className='relative py-16 md:py-24 bg-white'>
        <div className='relative hidden md:block'>
          <Image
            src='/assets/about/about-gradient-section-2.png'
            alt='gradient background'
            width={692}
            height={958}
            className='object-contain w-[692px] h-auto absolute top-[-600px] left-0 z-0'
          />
        </div>
        <div className='relative hidden md:block'>
          <Image
            src='/assets/about/about-bg-section-2.png'
            alt='about section 2'
            width={1097}
            height={961}
            className='object-contain w-[1097px] h-auto absolute top-[200px] right-[320px] z-0'
          />
        </div>
        <div className='container mx-auto px-4 md:px-6'>
          <div className='flex flex-col xl:flex-row gap-8 md:gap-12 items-start'>
            <div className='flex items-center justify-center md:justify-start w-full'>
              <Image
                src='/assets/ElevatingYourJoy.png'
                alt='elevate'
                width={160}
                height={160}
                className='w-[300px] xl:w-full h-auto -mb-6 xl:mb-0'
              />
            </div>
            <div className='space-y-3'>
              <p className='text-base md:text-lg leading-relaxed text-gray-700'>
                Digiland merupakan Signature Annual Event Telkom Indonesia.
                Mengusung semangat #ElevatingYourFuture, event tahunan ini
                menghadirkan pengalaman imersif yang didukung oleh kecanggihan
                teknologi, menggabungkan pemberdayaan UMKM sebagai penggerak
                perekonomian, dan inisiatif keberlanjutan melalui inovasi.
              </p>
              <p className='text-base md:text-lg leading-relaxed text-gray-700'>
                Seluruh rangkaian acara Digiland dirancang untuk menghibur
                masyarakat sekaligus memberikan dampak nyata bagi para pelaku
                bisnis di berbagai lapisan. Tahun ini Digiland akan
                diselenggarakan pada 18 Mei 2025 di Istora Senayan Jakarta
                dengan menghadirkan pengalaman seru seperti:
              </p>
              <div className='grid grid-cols-1 md:grid-cols-3 gap-10 mt-8 md:mt-12'>
                <div className='space-y-2'>
                  <h3 className='text-xl md:text-2xl font-bold text-gray-800'>
                    Pasar Rakyat UMKM
                  </h3>
                  <p className='text-base text-gray-600 leading-relaxed'>
                    Sebagai wujud komitmen untuk mendukung UMKM Indonesia,
                    Digiland kembali menghadirkan puluhan tenant UMKM dalam
                    Pasar Rakyat UMKM.
                  </p>
                </div>
                <div className='space-y-2'>
                  <h3 className='text-xl md:text-2xl font-bold text-gray-800'>
                    Digiland Run
                  </h3>
                  <p className='text-base text-gray-600 leading-relaxed'>
                    Menyambut runner dari seluruh Indonesia dan luar negeri
                    untuk bergabung dengan kegembiraan di Digiland Run. Hadir
                    kembali dalam bentuk lomba lari offline dengan pilihan jarak
                    5K, 10k, dan Half Marathon (21K).
                  </p>
                </div>
                <div className='space-y-2'>
                  <h3 className='text-xl md:text-2xl font-bold text-gray-800'>
                    Festival Music
                  </h3>
                  <p className='text-base text-gray-600 leading-relaxed'>
                    Keseruan Digiland 2025 akan semakin seru dan lengkap dengan
                    menghadirkan puluhan musisi terbaik
                  </p>
                </div>
              </div>
            </div>
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
