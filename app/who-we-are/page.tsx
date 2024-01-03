import PersonList from '@/components/PersonList';
import H2 from '@/components/H2/H2';

const team = [
  {
    name: 'Ezeikel Pemberton',
    role: 'Founder & CTO',
  },
  {
    name: 'Shirley Denchie',
    role: 'Design Lead',
  },
  {
    name: 'Anthony Allen',
    role: 'Head of Marketing',
  },
  {
    name: 'Deji Ishola',
    role: 'Head of Operations',
  },
  {
    name: 'Kunle Ogunjimi',
    role: 'Android & Web Developer',
  },
  {
    name: 'Maya Rowe',
    role: 'Social Media Manager',
  },
  {
    name: 'Romaine Smith',
    role: 'Digital Content Management & Strategist',
  },
];

const availableRoles = [
  // 'Design Lead',
  // 'Development Lead',
  // 'Project Manager Lead',
  // 'QA Lead',
  // 'UI Designer',
  // 'UX Designer',
  // 'Front End Developer',
  // 'Back End Developer',
  // 'Project Manager',
  // 'QA Engineer'
  // 'Social Media Manager (Intern)',
  'Writer (Intern)',
];

const WhoWeAre = () => (
  <div className="p-8 grid gap-y-8 md:p-16 md:grid-cols-[2fr_1fr] md:grid-rows-[auto_1fr]">
    <PersonList heading="The Team" people={team} />
    <div className="grid grid-rows-[auto_1fr] gap-y-8">
      <H2>We are hiring</H2>
      <div className="grid auto-rows-[24px] gap-y-8 text-black">
        {availableRoles.map((role, i) => (
          <div className="flex flex-col" key={i}>
            <span className="text-2xl">{role}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default WhoWeAre;
