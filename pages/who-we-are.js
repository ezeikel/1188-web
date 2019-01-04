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
  grid-auto-flow: dense;
  justify-items: center;
  grid-gap: var(--spacing-large);
  padding: var(--spacing-large) 0;
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

const team = [
  {
    name: "Ezeikel Pemberton",
    role: "Founder & Creative Director",
    image: "/static/images/ezeikel-pemberton.jpg"
  },
  {
    name: "Karen Hollywood",
    role: "Co-founder / Front-end Development",
    image: "/static/images/ezeikel-pemberton.jpg"
  },
  {
    name: "Lee Karolczak",
    role: "Development Lead",
    image: "/static/images/ezeikel-pemberton.jpg"
  },
  {
    name: "Paul Spencer",
    role: "Design & Front-end Development",
    image: "/static/images/ezeikel-pemberton.jpg"
  },
  {
    name: "Mark Gale",
    role: "Project Manager",
    image: "/static/images/ezeikel-pemberton.jpg"
  },
  {
    name: "Dedy Lawidjaja",
    role: "Web & Mobile Developer",
    image: "/static/images/ezeikel-pemberton.jpg"
  },
  {
    name: "Kylie Timpani",
    role: "Senior Designer",
    image: "/static/images/ezeikel-pemberton.jpg"
  },
  {
    name: "Sandy Lim",
    role: "Words + Strategy",
    image: "/static/images/ezeikel-pemberton.jpg"
  },
  {
    name: "Matt Boddy",
    role: "Web Developer",
    image: "/static/images/ezeikel-pemberton.jpg"
  },
  {
    name: "Teegan Lincoln",
    role: "Front-end Development",
    image: "/static/images/ezeikel-pemberton.jpg"
  },
  {
    name: "Callum Shand",
    role: "Designer",
    image: "/static/images/ezeikel-pemberton.jpg"
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
