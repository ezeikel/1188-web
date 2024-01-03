import { cn } from '@/lib/utils';
import Image from 'next/image';

type PersonCardProps = {
  person: {
    name: string;
    role: string;
  };
  className?: string;
};

const PersonCard = ({ className, person }: PersonCardProps) => (
  <div
    className={cn('flex flex-col', {
      [className as string]: !!className,
    })}
  >
    <Image
      src={`/images/${person.name.toLowerCase().replace(/\s/g, '-')}.jpg`}
      alt="team member image"
      layout="fill"
      objectFit="cover"
      objectPosition="top center"
    />
    <span className="flex-[0_1_auto] grid justify-items-start items-center mt-0 font-normal text-black">
      {person.name}
    </span>
    <span className="flex-[0_1_auto] grid justify-items-start items-center font-extralight text-black">
      {person.role}
    </span>
  </div>
);

export default PersonCard;
