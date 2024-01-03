import { cn } from '@/lib/utils';

type H2Props = {
  children: React.ReactNode;
  className?: string;
};

const H2 = ({ children, className }: H2Props) => (
  <h2
    className={cn(
      "text-3xl md:text-4xl m-0 relative text-black font-bold after:content-[''] after:block after:absolute after:bg-primary after:h-1.5 after:w-[100px] after:bottom-[-6px] after:left-0",
      {
        [className as string]: !!className,
      },
    )}
  >
    {children}
  </h2>
);

export default H2;
