import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { CAROUSEL_ITEMS } from '@/app/constants';
import { cn } from '@/lib/utils';

type CarouselContentProps = {
  className?: string;
};

// TODO: this didn't work when I tried to import it into Services.tsx
const CarouselContent = ({ className }: CarouselContentProps) =>
  CAROUSEL_ITEMS.map((slide) => (
    // wrapper div needed as react-slick injects inline styles
    <div>
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

        <Link href={slide.buttonLink}>
          <button
            type="button"
            className="flex border-tertiary border-[3px] text-white bg-tertiary text-2xl font-bold px-8 py-4 md:transition-all md:duration-300 md:ease-in-out md:text-lg md:hover:bg-primary md:hover:border-primary md:hover:cursor-pointer"
          >
            {slide.buttonCopy}
          </button>
        </Link>
      </div>
    </div>
  ));

export default CarouselContent;
