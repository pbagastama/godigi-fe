'use client';

import { useEffect, useState } from 'react';

interface DiagonalMarqueeProps {
  text: string;
  variant: 'primary' | 'secondary';
  offset?: number;
  direction?: 'left' | 'right';
}

const DiagonalMarquee = ({
  text,
  variant,
  offset = 100,
  direction = 'left',
}: DiagonalMarqueeProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const repeatedText = Array(15).fill(text).join(' • ');

  const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div
      className={`absolute overflow-hidden whitespace-nowrap ${
        variant === 'primary' ? 'gradient-strip-1' : 'gradient-strip-2'
      }`}
      style={{
        width: isMobile ? '100vw' : '230vw',
        height: isMobile ? '48px' : '100px',
        left: isMobile ? '0' : '-40vw',
        bottom: isMobile
          ? variant === 'secondary'
            ? '0px'
            : '45px'
          : variant === 'secondary'
          ? '125px'
          : '5px',
        transform: isMobile ? 'rotate(0deg)' : 'rotate(-35deg)',
        transformOrigin: 'center center',
      }}>
      <div
        className='flex items-center h-full'
        style={{
          animation: `${animationName} 100s linear infinite`,
          width: 'fit-content',
        }}>
        <span className='text-white font-semibold text-sm md:text-4xl tracking-wide px-4 md:px-20 whitespace-nowrap'>
          {repeatedText}
        </span>
        <span className='text-white font-semibold text-sm md:text-4xl tracking-wide px-4 md:px-20 whitespace-nowrap'>
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default DiagonalMarquee;
