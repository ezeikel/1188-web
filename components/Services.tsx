'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBrowser,
  faFillDrip,
  faMapMarkerAlt,
  faMobile,
  faPaperPlane,
  faTablet,
} from '@fortawesome/pro-light-svg-icons';
import { cn } from '@/lib/utils';
import H2 from './H2/H2';

const Services = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [sliderData] = useState([
    {
      icon: faTablet,
      title: 'Platforms & Apps',
      copy: `Creating platforms & apps is what we are most passionate
      about. 1188 has worked with a number of different industries to
      create market leading platforms, from property portals to
      community spaces.`,
      buttonLink: '#',
      buttonCopy: 'Read More',
    },
    {
      icon: faBrowser,
      title: 'Websites',
      copy: `We specialise in the design & development of websites that
      work – for your users and you. Powered by sophisticated backend
      systems and APIs, they generate leads, sales, enquiries and
      whatever else your online goals may be.`,
      buttonLink: '#',
      buttonCopy: 'Read More',
    },
    {
      icon: faMobile,
      title: 'Mobile',
      copy: `Mobile first – always! With the opportunity to reach users at any
      given moment, we deliver expert mobile strategy, responsive design
      and mobile application development.`,
      buttonLink: '#',
      buttonCopy: 'Read More',
    },
    {
      icon: faMapMarkerAlt,
      title: 'Digital Strategy',
      copy: `Analysis, research and insight to position brands at the forefront
      of digital.`,
      buttonLink: '#',
      buttonCopy: 'Read More',
    },
    {
      icon: faFillDrip,
      title: 'Design & UX',
      copy: `Let our team of talented designers craft your digital experience.
      We create beautiful, functional and delicious design solutions
      and, we're proud of it!`,
      buttonLink: '#',
      buttonCopy: 'Read More',
    },
    {
      icon: faPaperPlane,
      title: 'Marketing',
      copy: `Our experienced team, along with our proven platforms, will help
      build your business. With proven results on the board, we not only
      offer solutions, we deliver game changing ideas.`,
      buttonLink: '#',
      buttonCopy: 'Read More',
    },
  ]);
  const sliderEl = useRef<Slider>(null);

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

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <div className="p-8 text-black grid gap-y-8 overflow-x-hidden md:grid-cols-[repeat(4,1fr)] md:grid-rows-[auto_auto_1fr] md:gap-x-8 md:p-16">
        <h4 className="row-[1_/_span_1] col-span-full uppercase text-[#b3b3b3] text-sm font-normal m-0">
          Services
        </h4>
        <H2 className="col-[1_/_span_3]">What we&apos;re good at.</H2>
        <Slider
          className="w-full md:col-[1_/_span_3] md:row-[3_/_span_-1]"
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...settings}
          ref={sliderEl}
        >
          {sliderData.map((slide, i) => (
            <div
              className="grid grid-rows-[auto_auto_1fr_auto] gap-y-8 outline-none place-items-center md:grid-cols-[repeat(4,1fr)] md:grid-rows-[auto_auto_1fr_auto] md:justify-items-start"
              key={i}
            >
              <FontAwesomeIcon
                icon={slide.icon}
                color="#3B3B3B"
                size="5x"
                className="md:row-[1_/_span_1] md:col-span-full"
              />
              <h3 className="m-0 text-3xl md:col-span-full md:row-[2_/_span_1]">
                {slide.title}
              </h3>
              <p className="text-lg m-0 text-center md:col-[1_/_span_3] md:row-[3_/_span_3] md:[text-align:initial]">
                {slide.copy}
              </p>
              <Link
                href={slide.buttonLink}
                className="border-tertiary border-[3px] text-white bg-tertiary text-2xl font-bold px-8 py-4 grid place-items-center md:col-[1_/_span_1] md:transition-all md:duration-300 md:ease-in-out md:text-lg md:hover:bg-primary md:hover:border-primary md:hover:cursor-pointer"
              >
                {slide.buttonCopy}
              </Link>
            </div>
          ))}
        </Slider>
        <div className="hidden md:col-[4_/_-1] md:row-[3_/_-1] md:grid md:justify-center md:gap-y-4">
          <h4 className="text-sm uppercase m-0">The Expertise</h4>
          <ul className="grid gap-y-4">
            {sliderData.map((slide, i) => (
              <li
                onClick={() => handleClick(i)}
                className={cn(
                  'group transition-colors duration-300 ease-in-out md:cursor-pointer',
                  {
                    active: activeSlide === i,
                  },
                )}
                key={i}
              >
                <h3 className="transition-colors duration-300 ease-in-out group-[.active]:relative after:content-[''] after:bg-transparent after:rounded-[50%] after:h-2.5  after:w-2.5 after:top-1/2 after:translate-y-[-50%] after:left-[-30px] after:transition-colors after:duration-300 after:ease-in-out  group-[.active]:text-black group-[.active]:after:bg-primary md:color-[#d3d3d3] md:text-3xl md:m-0">
                  {slide.title}
                </h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Services;
