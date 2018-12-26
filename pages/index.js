import Link from 'next/link'
import styled from 'styled-components';
import ScrollDown from '../components/ScrollDown';

const Wrapper = styled.div`
  height: 200vh;
`;

const Hero = styled.section`
  display: grid;
  grid-template-rows: repeat(4, auto);
  justify-items: center;
  min-height: 100vh;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("/static/images/hero3.jpg");
  background-size: cover;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: black;
`;

const HeroTitle = styled.h1`
  grid-row: 2 / span 2;
  margin: 0;
  font-size: 5rem;
  color: var(--color-white);
  text-align: center;
`;

const StyledScrollDown = styled(ScrollDown)`
  grid-row: 4 / -1;
  align-self: center;
`;

const Index = () => (
  <Wrapper>
    <Hero>
      <HeroTitle>The FUBU of the tech space.</HeroTitle>
      <StyledScrollDown />
    </Hero>
  </Wrapper>
)

export default Index
