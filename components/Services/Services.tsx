'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import { useMediaQuery } from 'react-responsive';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CAROUSEL_ITEMS } from '@/app/constants';
import { cn } from '@/lib/utils';
import H2 from '../H2/H2';

const Services = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderEl = useRef<Slider>(null);
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useEffect(() => {
    sliderEl?.current?.slickGoTo(activeSlide);
  }, [activeSlide]);

  const handleClick = (index: number) => setActiveSlide(index);

  const settings = {
    dots: false,
    infinite: true,
    fade: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 968,
        settings: {
          rows: 6,
        },
      },
    ],
    beforeChange: (prev: number, next: number) => setActiveSlide(next),
  };

  const getCarouselContent = (className?: string) =>
    CAROUSEL_ITEMS.map((slide) => (
      // wrapper div needed as react-slick injects inline styles
      <div key={slide.id}>
        <div
          className={cn('flex flex-col gap-y-8', {
            [className as string]: !!className,
          })}
          key={slide.id}
        >
          <FontAwesomeIcon
            icon={slide.icon}
            color="#3B3B3B"
            size="3x"
            className=""
          />
          <h3 className="m-0 text-3xl font-bold ">{slide.title}</h3>
          <p className="text-lg m-0 text-center md:[text-align:initial] text-wrap">
            {slide.copy}
          </p>
          <Link
            href={slide.buttonLink}
            className="border-tertiary border-[3px] text-white bg-tertiary text-2xl font-bold px-8 py-4 md:transition-all md:duration-300 md:ease-in-out md:text-lg md:hover:bg-primary md:hover:border-primary md:hover:cursor-pointer"
          >
            {slide.buttonCopy}
          </Link>
        </div>
      </div>
    ));

  return (
    <div className="p-8 text-black">
      <h4 className="uppercase text-[#b3b3b3] text-sm font-normal mb-8">
        Services
      </h4>
      <div className="flex flex-col md:grid grid-cols-4 gap-8">
        <div className="col-[1_/_span_3] flex flex-col gap-y-8">
          <H2 className="">What we&apos;re good at.</H2>
          {isMobile ? (
            <div className="flex flex-col gap-y-32">
              {/* <CarouselContent className="items-start" /> */}
              {getCarouselContent('items-center')}
            </div>
          ) : (
            <Slider
              className="w-full"
              // eslint-disable-next-line react/jsx-props-no-spreading
              {...settings}
              ref={sliderEl}
            >
              {getCarouselContent('items-start')}
            </Slider>
          )}
        </div>
        {isMobile ? null : (
          <div className="col-[4_/_-1] flex flex-col gap-y-8">
            <h4 className="text-sm font-bold uppercase m-0">The Expertise</h4>
            <ul className="flex flex-col gap-y-4">
              {CAROUSEL_ITEMS.map((slide, i) => (
                // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
                <li
                  onClick={() => handleClick(i)}
                  className={cn('group md:cursor-pointer', {
                    active: activeSlide === i,
                  })}
                  key={slide.id}
                >
                  <h3
                    className={cn(
                      "text-black font-bold transition-colors duration-300 ease-in-out md:after:content-[''] md:after:bg-transparent md:after:rounded-[50%] md:after:h-2.5 md:after:w-2.5 md:after:absolute md:after:top-1/2 md:after:translate-y-[-50%] md:after:left-[-30px] md:after:transition-colors md:after:duration-300 md:after:ease-in-out md:text-[#d3d3d3] md:text-3xl md:m-0",
                      {
                        'md:text-black md:after:bg-primary md:relative':
                          activeSlide === i,
                      },
                    )}
                  >
                    {slide.title}
                  </h3>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
