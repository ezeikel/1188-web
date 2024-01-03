'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import { NAVIGATION_ITEMS } from '@/app/constants';
import { useUIContext } from '@/contexts/ui';
import { cn } from '@/lib/utils';
import Hamburger from '../Hamburger';
import Logo from '../svgs/Logo';

const Header = () => {
  const headerEl = useRef<HTMLHeadElement>(null);
  const [isSticky, setIsSticky] = useState(false);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const { setHeaderHeight } = useUIContext();

  const checkIfShouldStick = () => {
    if (!headerEl.current) return;

    // if we have scrolled past the header, make it sticky
    setIsSticky(window.scrollY >= headerEl.current.offsetHeight);
  };

  useEffect(() => {
    if (headerEl.current) {
      setHeaderHeight(headerEl.current.offsetHeight);
    }

    window.addEventListener('scroll', checkIfShouldStick);

    return () => {
      window.removeEventListener('scroll', checkIfShouldStick);
    };
  }, []);

  const anchorLinkClasses = cn(
    "flex relative after:absolute after:content-[''] after:block after:h-0.5 after:w-1/2 after:-bottom-1 after:left-0 after:z-10 after:transition-transform after:duration-200 after:ease-in-out after:translate-x-[-150%] group-hover:after:translate-x-0",
    {
      'after:bg-black': isSticky,
      'after:bg-white': !isSticky,
    },
  );

  return (
    <header
      className={cn('flex justify-between items-center p-8 z-10 top-0', {
        'sticky shadow-md': isSticky,
        'absolute left-0 right-0 bg-transparent': !isSticky,
        'bg-white': isSticky || isMobile,
      })}
      ref={headerEl}
    >
      <Link href="/">
        <Logo className="w-[100px]" />
      </Link>
      {isMobile ? (
        <Hamburger />
      ) : (
        <nav>
          <ul
            className={cn('flex gap-x-8 text-lg font-bold', {
              'text-white': !isSticky,
              'text-black': isSticky,
            })}
          >
            {NAVIGATION_ITEMS.map((item) => (
              <li
                className={cn(
                  'cursor-pointer pb-1 group overflow-x-hidden',
                  {},
                )}
                key={item.id}
              >
                {item.isExternal ? (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={anchorLinkClasses}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link href={item.href} className={anchorLinkClasses}>
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
