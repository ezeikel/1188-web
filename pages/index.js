import Link from 'next/link'
import styled from 'styled-components';
import ScrollDown from '../components/ScrollDown';

const Wrapper = styled.div`
  height: 150vh;
`;

const Hero = styled.section`
  display: grid;
  grid-template-rows: repeat(4, auto);
  justify-items: center;
  min-height: 100vh;
  background: linear-gradient(100deg, rgba(251, 84, 43, .7) 0%,rgba(42, 0, 84, 1) 100%),
    url("/static/images/hero3.jpg");
  background-size: cover;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 0 var(--spacing-medium);
`;

const HeroTitle = styled.h1`
  grid-row: 2 / span 1;
  margin: 0;
  font-size: 4rem;
  color: var(--color-white);
  text-align: center;
  max-width: 1300px;
  @media (min-width: 768px) {
    grid-row: 3 / span 1;
    font-size: 6.4rem;
  }
  @media (min-width: 1024px) {
    font-size: 8.2rem;
  }
`;

const StyledScrollDown = styled(ScrollDown)`
  grid-row: 4 / -1;
  align-self: center;
`;

const Index = () => (
  <Wrapper>
    <Hero>
      <HeroTitle>Building out the dope tech ideas of women, people of colour and other marginalised communities.</HeroTitle>
      <StyledScrollDown />
    </Hero>
  </Wrapper>
)

export default Index
