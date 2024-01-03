'use client';

import { NAVIGATION_ITEMS } from '@/app/constants';
import { useUIContext } from '@/contexts/ui';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const MobileMenu = () => {
  const { isMenuOpen, headerHeight, closeMenu } = useUIContext();

  return (
    <nav
      className={cn('fixed left-0 right-0 z-10 p-4 bg-white w-full h-full', {
        flex: isMenuOpen,
        hidden: !isMenuOpen,
      })}
      style={{
        top: headerHeight,
      }}
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
