import H2 from '@/components/H2/H2';
import TeamMemberCard from '@/components/TeamMemberCard/TeamMemberCard';
import { client } from '@/sanity/lib/client';
import { urlFor } from '@/lib/utils';

type AvailableRole = {
  _id: string;
  name: string;
};

type TeamMember = {
  _id: string;
  name: string;
  role: string;
  image: {
    asset: {
      _ref: string;
      _type: string;
    };
  };
};

const WhoWeAre = async () => {
  const availableRoles = await client.fetch<AvailableRole[]>(
    `*[_type == "availableRole"]`,
  );
  const teamMembers = await client.fetch<TeamMember[]>(
    `*[_type == "teamMember"]`,
  );

  return (
    <div className="flex flex-col md:flex-row p-8 gap-y-8 md:p-16">
      <div className="md:flex-[0_0_66.66%] flex flex-col">
        <H2 className="mb-8">The Team</H2>
        <ul className="flex flex-col gap-8 md:flex-row md:flex-wrap justify-center md:justify-start">
          {teamMembers.map((teamMember) => (
            // eslint-disable-next-line no-underscore-dangle
            <li key={teamMember._id}>
              <TeamMemberCard
                teamMember={{
                  name: teamMember.name,
                  role: teamMember.role,
                  // eslint-disable-next-line no-underscore-dangle
                  image: urlFor(teamMember.image.asset._ref),
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      <div className="md:flex-[0_0_33.33%] flex flex-col gap-y-8">
        <H2>We are hiring</H2>
        <div className="flex flex-col gap-y-8 text-black">
          {availableRoles.map((role) => (
            // eslint-disable-next-line no-underscore-dangle
            <div className="flex flex-col" key={role._id}>
              <span className="text-2xl">{role.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
