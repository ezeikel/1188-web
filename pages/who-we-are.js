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
  grid-template-columns: repeat(auto-fit, minmax(300px, auto));
  grid-auto-rows: 600px;
  grid-auto-flow: dense;
  justify-items: center;
  grid-gap: var(--spacing-large);
  padding: var(--spacing-large) 0;
`;

const TeamCard = styled.div`
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  grid-row-gap: var(--spacing-small);
`;

const Photo = styled.img`
  max-height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: top center;
`;

const Name = styled.span`
  display: grid;
  justify-items: start;
  align-items: center;
`;

const Role = styled.span`
  display: grid;
  justify-items: start;
  align-items: center;
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
        team.map((member,i) => (
          <TeamCard key={i}>
            <Photo src={member.image} />
            <Name>{member.name}</Name>
            <Role>{member.role}</Role>
          </TeamCard>
        ))
      }
    </TeamCards>
  </Wrapper>
);

export default WhoWeAre;
