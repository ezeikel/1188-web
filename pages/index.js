import Link from 'next/link'
import styled from 'styled-components';
import ScrollDown from '../components/ScrollDown';

const Wrapper = styled.div`
  height: 150vh;
`;

const Overlay = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-rows: repeat(4, auto);
  justify-items: center;
  background: linear-gradient(100deg, rgba(251, 84, 43, .7) 0%,rgba(42, 0, 84, 1) 100%);
  padding: 0 var(--spacing-medium);
`;

const Hero = styled.section`
  position: relative;
  height: 80vh;
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

const StyledVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Index = () => (
  <Wrapper>
    <Hero>
      <StyledVideo autoPlay muted loop src="/static/videos/hero.mp4" type="video/mp4" />
      <Overlay>
        <HeroTitle>Building the internet.</HeroTitle>
        <StyledScrollDown />
      </Overlay>
    </Hero>
  </Wrapper>
)

export default Index
