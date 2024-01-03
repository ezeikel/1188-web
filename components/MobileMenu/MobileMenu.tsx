'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from 'body-scroll-lock';
import { useMediaQuery } from 'react-responsive';
import { NAVIGATION_ITEMS } from '@/app/constants';
import { useUIContext } from '@/contexts/ui';
import { cn } from '@/lib/utils';

const MobileMenu = () => {
  const navEl = useRef<HTMLElement>(null!);
  const { isMenuOpen, headerHeight, closeMenu } = useUIContext();
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    if (!isMobile) {
      closeMenu();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  useEffect(() => {
    if (isMenuOpen) {
      disableBodyScroll(navEl.current);
    } else {
      enableBodyScroll(navEl.current);
    }

    return (): void => {
      clearAllBodyScrollLocks();
    };
  }, [isMenuOpen]);

  return (
    <nav
      className={cn('fixed left-0 right-0 z-10 p-4 bg-white w-full h-full', {
        flex: isMenuOpen,
        hidden: !isMenuOpen,
      })}
      style={{
        top: headerHeight,
      }}
      ref={navEl}
    >
      <ul
        className={cn(
          'w-full flex flex-col gap-y-16 text-3xl font-bold text-black uppercase text-center',
        )}
      >
        {NAVIGATION_ITEMS.map((item) => (
          <li className={cn('cursor-pointer')} key={item.id}>
            {item.isExternal ? (
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.label}
              </a>
            ) : (
              <Link href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MobileMenu;
