import { NextPage } from "next";
import Link from "next/link";
import styled from "styled-components";
import ScrollDown from "../components/ScrollDown";
import Services from "../components/Services";
import Contact from "../components/Contact";

type IndexProps = {
  className: string;
};

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr auto auto;
`;

const Overlay = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  display: grid;
  grid-template-rows: repeat(6, 1fr);
  grid-template-columns: repeat(12, 1fr);
  justify-items: center;
  background: linear-gradient(
    100deg,
    rgba(251, 84, 43, 0.7) 0%,
    rgba(42, 0, 84, 1) 100%
  );
`;

const Hero = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const HeroTitle = styled.h1`
  grid-row: 2 / span 1;
  grid-column: 1 / -1;
  margin: 0;
  font-size: 4.2rem;
  color: var(--color-white);
  display: grid;
  place-items: center;
  text-align: center;
  @media (min-width: 768px) {
    grid-row: 2 / span 2;
    font-size: 6.4rem;
  }
  @media (min-width: 1024px) {
    font-size: 6.8rem;
  }
`;

const StyledScrollDown = styled(ScrollDown)`
  grid-row: 5 / -1;
  grid-column: 1 / -1;
  align-self: center;
`;

const StyledVideo = styled.video`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledLink = styled.a`
  grid-row: 4 / span 1;
  grid-column: 1 / -1;
  align-self: end;
  border: 3px solid var(--color-tertiary);
  border-radius: 4px;
  color: var(--color-white);
  background-color: var(--color-tertiary);
  font-size: 2.2rem;
  font-weight: bold;
  padding: var(--spacing-medium) var(--spacing-large);
  color: var(--color-white);
  @media (min-width: 768px) {
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: #6043ed;
      border-color: #6043ed;
      cursor: pointer;
    }
  }
`;

const Index: NextPage<IndexProps> = ({ className }) => (
  <Wrapper>
    <Hero>
      <StyledVideo autoPlay muted loop playsInline>
        <source
          src="https://res.cloudinary.com/ezeikelpemberton/video/upload/v1546188744/1188/hero.mp4"
          type="video/mp4"
        />
      </StyledVideo>
      <Overlay>
        <HeroTitle>The diverse tech partner to big brands</HeroTitle>
        <Link href="/who-we-are">
          <StyledLink>Learn More</StyledLink>
        </Link>
        <StyledScrollDown className={className} />
      </Overlay>
    </Hero>
    <Services />
    <Contact />
  </Wrapper>
);

export default Index;
