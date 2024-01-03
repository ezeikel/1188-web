import H2 from '@/components/H2/H2';
import TeamMemberCard from '@/components/TeamMemberCard/TeamMemberCard';
import { AVAILABLE_ROLES, TEAM } from '../constants';

const WhoWeAre = () => (
  <div className="flex flex-col md:flex-row p-8 gap-y-8 md:p-16">
    <div className="md:flex-[0_0_66.66%] flex flex-col">
      <H2 className="mb-8">The Team</H2>
      <ul className="flex flex-col gap-8 md:flex-row md:flex-wrap justify-center md:justify-start">
        {TEAM.map((person) => (
          <li key={person.name}>
            <TeamMemberCard teamMember={person} />
          </li>
        ))}
      </ul>
    </div>
    <div className="md:flex-[0_0_33.33%] flex flex-col gap-y-8">
      <H2>We are hiring</H2>
      <div className="flex flex-col gap-y-8 text-black">
        {AVAILABLE_ROLES.map((role) => (
          <div className="flex flex-col" key={role}>
            <span className="text-2xl">{role}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default WhoWeAre;
