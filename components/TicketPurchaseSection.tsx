import Image from 'next/image';
import DiagonalMarquee from '@/components/DiagonalMarquee';

interface TicketPurchaseSectionProps {
  marqueeText1?: string;
  marqueeText2?: string;
  title?: string;
  description?: string;
  buttonText?: string;
  onButtonClick?: () => void;
}

const TicketPurchaseSection = ({
  marqueeText1 = '#DigilandRun • #DigilandMusic • #PasarRakyatDigiland',
  marqueeText2 = '#ElevatingYourFuture • #ElevatingYourJoy • #Digiland2025',
  title = 'DAPATKAN TIKETNYA DENGAN MUDAH',
  description = 'di MyTelkomsel, bersiap jadi bagian kemeriahan Digiland',
  buttonText = 'Beli Tiket',
  onButtonClick,
}: TicketPurchaseSectionProps) => {
  return (
    <section className='relative pt-16 pb-40 md:pb-20 overflow-hidden h-[65vh] md:h-auto'>
      <div className='absolute inset-0'>
        <Image
          src='/assets/home/home-bg-section-7.png'
          alt='Festival Musik Background'
          fill
          className='object-cover'
        />
      </div>
      <div className='relative z-10 container mx-auto pt-0 md:pt-10 px-6 text-center md:text-left h-auto md:h-[40vh]'>
        <h2 className='text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4'>
          {title}
        </h2>
        <p className='text-base md:text-lg text-white/90 mb-8'>{description}</p>
        <div className='flex flex-col items-center md:items-start justify-center md:justify-start gap-6'>
          <Image
            src='/assets/home/section-7-logo-mytelkomsel.png'
            alt='MyTelkomsel'
            width={200}
            height={60}
            className='h-12 w-auto'
          />
          <button
            onClick={onButtonClick}
            className='flex cursor-pointer border-2 border-gray-800 text-gray-800 px-6 py-3 font-semibold hover:bg-gray-800 hover:text-white transition-all duration-300 items-center justify-center gap-2 group'>
            <span>{buttonText}</span>
            <span className='group-hover:translate-x-1 transition-transform'>
              →
            </span>
          </button>
        </div>
      </div>
      <div className='absolute inset-0 pointer-events-none overflow-hidden'>
        <DiagonalMarquee
          text={marqueeText2}
          variant='secondary'
          offset={0}
          direction='right'
        />
        <DiagonalMarquee
          text={marqueeText1}
          variant='primary'
          offset={60}
          direction='left'
        />
      </div>
    </section>
  );
};

export default TicketPurchaseSection;
