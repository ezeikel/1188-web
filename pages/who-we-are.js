import styled from "styled-components";

const Wrapper = styled.div`
  padding: var(--spacing-large);
`;

const Title = styled.h2`
  font-size: 4.8rem;
  line-height: 1;
  text-align: center;
  color: var(--color-primary);
  margin: 0;
  @media (min-width: 768px) {
    font-size: 5.6rem;
    grid-column: 1 / span 1;
    text-align: left;
  }
`;

const TeamCards = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 300px));
  justify-content: center;
  grid-gap: var(--spacing-large);
  padding: var(--spacing-large) 0;
  @media (min-width: 768px) {
    justify-content: space-between;
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
  flex: 1 1 auto;
  display: grid;
  justify-items: start;
  align-items: center;
  margin-top: var(--spacing-medium);
  font-weight: normal;
  color: var(--color-black);
`;

const Role = styled.span`
  flex: 1 1 auto;
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
  justify-items: center;
  text-align: center;
  @media (min-width: 768px) {
    justify-items: start;
    text-align: left;
  }
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
    image: "/static/images/ezeikel-pemberton.jpg"
  }
];

const availableRoles = [
  'Design Lead',
  'Development Lead',
  'Project Manager Lead',
  'QA Lead',
  'UI Designer',
  'UX Designer',
  'Front End Developer',
  'Back End Developer',
  'Project Manager',
  'QA Engineer'
];

const WhoWeAre = () => (
  <Wrapper>
    <Title>The Team</Title>
    <TeamCards>
      {
        team.map((member,i) => (
          <TeamCard key={i}>
            <Photo src={member.image} />
            <Name>{member.name}</Name>
            <Role>{member.role}</Role>
          </TeamCard>
        ))
      }
    </TeamCards>
    <AvailableRolesWrapper>
      <Title>We are looking for</Title>
      <AvailableRoles>
        {
          availableRoles.map((role,i) => (
            <TeamCard key={i}>
              <AvailableRole>{role}</AvailableRole>
            </TeamCard>
          ))
        }
      </AvailableRoles>
    </AvailableRolesWrapper>
  </Wrapper>
);

export default WhoWeAre;
