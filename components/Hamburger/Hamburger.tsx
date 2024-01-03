'use client';

import { useUIContext } from '@/contexts/ui';
import { cn } from '@/lib/utils';

const Hamburger = () => {
  const { isMenuOpen, toggleMenu } = useUIContext();

  return (
    <button
      type="button"
      className="cursor-pointer z-20 md:hidden"
      onClick={toggleMenu}
      data-testid="hamburger"
      aria-label="Toggle Menu"
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <span
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          className={cn(
            'block my-1 mx-auto w-[25px] h-0.5 bg-black transition-[transform,opacity] duration-300 ease-in-out',
            {
              'translate-y-[6px] rotate-45': i === 0 && isMenuOpen,
              'opacity-0': i === 1 && isMenuOpen,
              '-translate-y-[6px] -rotate-45': i === 2 && isMenuOpen,
            },
          )}
        />
      ))}
    </button>
  );
};

export default Hamburger;
