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
  const repeatedText = Array(15).fill(text).join(' • ');

  const animationName = direction === 'left' ? 'marquee-left' : 'marquee-right';

  return (
    <div
      className={`absolute overflow-hidden whitespace-nowrap ${
        variant === 'primary' ? 'gradient-strip-1' : 'gradient-strip-2'
      }`}
      style={{
        width: '230vw',
        height: '100px',
        left: '-40vw',
        bottom: variant === 'secondary' ? '-60px' : `${offset}px`,
        transform: 'rotate(-35deg)',
        transformOrigin: 'center center',
      }}>
      <div
        className='flex items-center h-full'
        style={{
          animation: `${animationName} 100s linear infinite`,
          width: 'fit-content',
        }}>
        <span className='text-white font-semibold text-4xl tracking-wide px-20 whitespace-nowrap'>
          {repeatedText}
        </span>
        <span className='text-white font-semibold text-4xl tracking-wide px-20 whitespace-nowrap'>
          {repeatedText}
        </span>
      </div>
    </div>
  );
};

export default DiagonalMarquee;
