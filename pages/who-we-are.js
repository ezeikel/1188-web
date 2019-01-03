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
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-auto-rows: 80px;
  grid-auto-flow: dense;
  padding: var(--spacing-large);
`;

const TeamCard = styled.div`

`;

const team = [
  {
    name: 'Ezeikel Pemberton',
    role: 'Founder & CTO',
    image: '/static/images/ezeikel-pemberton.jpg'
  },
  {
    name: 'Ezeikel Pemberton',
    role: 'Founder & CTO',
    image: '/static/images/ezeikel-pemberton.jpg'
  },
  {
    name: 'Ezeikel Pemberton',
    role: 'Founder & CTO',
    image: '/static/images/ezeikel-pemberton.jpg'
  },
  {
    name: 'Ezeikel Pemberton',
    role: 'Founder & CTO',
    image: '/static/images/ezeikel-pemberton.jpg'
  },
  {
    name: 'Ezeikel Pemberton',
    role: 'Founder & CTO',
    image: '/static/images/ezeikel-pemberton.jpg'
  },
  {
    name: 'Ezeikel Pemberton',
    role: 'Founder & CTO',
    image: '/static/images/ezeikel-pemberton.jpg'
  }
];

const WhoWeAre = () => (
  <Wrapper>
    <Title>The Team</Title>
    <TeamCards>
      {
        team.map(member => (
          <TeamCard>
            <img src={member.image} />
            <span>{member.name}</span>
            <span>{member.role}</span>
          </TeamCard>
        ))
      }
    </TeamCards>
  </Wrapper>
);

export default WhoWeAre;
