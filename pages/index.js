import Link from 'next/link'
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 200vh;
`;

const Hero = styled.section`
  min-height: 100vh;
  background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.3),
      rgba(0, 0, 0, 0.3)
    ),
    url("/static/images/hero3.jpg");
  background-size: cover;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: black;
`;

const Index = () => (
  <Wrapper>
    <Hero />
  </Wrapper>
)

export default Index
