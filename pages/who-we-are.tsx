import { FunctionComponent } from "react";
import styled from "styled-components";
import Title from "../components/styles/Title";
import PersonCard from "../components/PersonCard";
import PersonList from "../components/PersonList";

const Wrapper = styled.div`
  padding: var(--spacing-large);
  display: grid;
  grid-row-gap: var(--spacing-large);
  @media (min-width: 768px) {
    padding: var(--spacing-huge);
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto 1fr;
  }
`;

const TeamCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 300px));
  justify-content: center;
  grid-gap: var(--spacing-large);
  @media (min-width: 768px) {
    justify-content: start;
    grid-column: 1 / span 1;
  }
`;

const TeamCard = styled.div`
  display: flex;
  flex-direction: column;
`;

const Photo = styled.img`
  flex: 8 1 auto;
  max-height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top center;
`;

const Name = styled.span`
  flex: 0 1 auto;
  display: grid;
  justify-items: start;
  align-items: center;
  margin-top: var(--spacing-medium);
  font-weight: normal;
  color: var(--color-black);
`;

const Role = styled.span`
  flex: 0 1 auto;
  display: grid;
  justify-items: start;
  align-items: center;
  font-weight: lighter;
  color: var(--color-black);
`;

const AvailableRolesWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-row-gap: var(--spacing-large);
`;

const AvailableRoles = styled.div`
  display: grid;
  grid-auto-rows: 2.4rem;
  grid-row-gap: var(--spacing-large);
  color: var(--color-black);
`;

const AvailableRole = styled.span`
  font-size: 2.4rem;
`;

const team = [
  {
    name: "Ezeikel Pemberton",
    role: "Founder & CTO",
  },
  {
    name: "Shirley Denchie",
    role: "Design Lead",
  },
  {
    name: "Anthony Allen",
    role: "Head of Marketing",
  },
  {
    name: "Deji Ishola",
    role: "Head of Operations",
  },
  {
    name: "Kunle Ogunjimi",
    role: "Android & Web Developer",
  },
  {
    name: "Maya Rowe",
    role: "Social Media Manager",
  },
  {
    name: "Romaine Smith",
    role: "Digital Content Management & Strategist",
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
  "Writer (Intern)",
];

const WhoWeAre: FunctionComponent = () => (
  <Wrapper>
    <PersonList heading="The Team" people={team} />
    <AvailableRolesWrapper>
      <Title>We are hiring</Title>
      <AvailableRoles>
        {availableRoles.map((role, i) => (
          <TeamCard key={i}>
            <AvailableRole>{role}</AvailableRole>
          </TeamCard>
        ))}
      </AvailableRoles>
    </AvailableRolesWrapper>
  </Wrapper>
);

export default WhoWeAre;
