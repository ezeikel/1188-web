import { cn } from '@/lib/utils';

type ScrollDownProps = {
  className?: string;
};

const ScrollDown = ({ className }: ScrollDownProps) => (
  <div
    className={cn(
      "w-10 h-[60px] rounded-3xl border-[3px] border-white relative before:content-[''] before:block before:absolute before:h-[30px] before:w-1 before:top-2.5 before:left-[calc(50%_-_2px)] before:bg-[rgba(255,_255,_255,_0.55)] before:rounded-sm after:content-[''] after:block after:absolute after:w-2.5 after:h-2.5 after:rounded-[50%] after:top-[15px] after:left-[calc(50%_-_5px)] after:bg-white after:animate-scroll-down",
      {
        [className as string]: !!className,
      },
    )}
  />
);

export default ScrollDown;
