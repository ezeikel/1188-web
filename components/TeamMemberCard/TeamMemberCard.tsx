import { cn } from '@/lib/utils';
import Image from 'next/image';

type TeamMemberCardProps = {
  teamMember: {
    name: string;
    role: string;
  };
  className?: string;
};

const TeamMemberCard = ({ className, teamMember }: TeamMemberCardProps) => (
  <div
    className={cn('relative flex flex-col items-center', {
      [className as string]: !!className,
    })}
  >
    <Image
      src={`/images/${teamMember.name.toLowerCase().replace(/\s/g, '-')}.jpg`}
      alt={`picture of ${teamMember.name}`}
      width={300}
      height={450}
      className="mb-4 self-center w-[300px] h-[450px] object-cover"
    />
    <div className="font-normal text-base text-black">{teamMember.name}</div>
    <div className="font-thin text-base text-black">{teamMember.role}</div>
  </div>
);

export default TeamMemberCard;
