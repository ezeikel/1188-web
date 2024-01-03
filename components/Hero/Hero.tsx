'use client';

import Link from 'next/link';
import Balancer from 'react-wrap-balancer';
import { useUIContext } from '@/contexts/ui';
import ScrollDown from '../ScrollDown/ScrollDown';

const Hero = () => {
  const { headerHeight } = useUIContext();

  return (
    <section className="relative h-screen">
      <video
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source
          src="https://res.cloudinary.com/ezeikelpemberton/video/upload/v1546188744/1188/hero.mp4"
          type="video/mp4"
        />
      </video>
      <section
        className="p-8 flex flex-col items-center justify-center absolute top-0 left-0 right-0 bottom-0 bg-overlay-gradient"
        style={{
          paddingTop: headerHeight,
        }}
      >
        <div className="flex flex-col h-full place-items-center place-content-center">
          <h1 className="mb-16 text-7xl text-white font-bold place-items-center text-center lg:text-7xl text-wrap">
            <Balancer>The diverse tech partner to big brands</Balancer>
          </h1>
          <button className="mb-16" type="button">
            <Link
              href="/who-we-are"
              className="self-end border-tertiary border-[3px] rounded text-white bg-tertiary text-xl font-bold py-4 px-8 md:transition-all md:hover:bg-[#6043ed] md:hover:border-[#6043ed] md:hover:cursor-pointer"
            >
              Learn more
            </Link>
          </button>
        </div>
        <ScrollDown className="mt-auto" />
      </section>
    </section>
  );
};

export default Hero;
