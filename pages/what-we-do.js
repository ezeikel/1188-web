import styled from "styled-components";

const Wrapper = styled.div`
  padding: var(--spacing-large);
  display: grid;
  justify-items: center;
  grid-row-gap: var(--spacing-huge);
  padding-bottom: var(--spacing-huge);
  @media (min-width: 768px) {
    justify-items: start;
  }
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

const Services = styled.section`
  display: grid;
  grid-row-gap: var(--spacing-huge);
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    justify-items: start;
    width: 100%;
  }
`;

const WhatWeDo = styled.div`
  display: grid;
  justify-items: center;
  grid-row-gap: var(--spacing-medium);
  color: var(--color-black);
  @media (min-width: 768px) {
      justify-items: start;
    }
  h3 {
    font-size: 2.6rem;
    margin: 0;
  }
  ul {
    font-size: 3rem;
    line-height: 42px;
    display: grid;
    justify-items: center;
    grid-row-gap: var(--spacing-medium);
    @media (min-width: 768px) {
      justify-items: start;
    }
  }
`;

const WhatWeDont = styled.div`
  display: grid;
  justify-items: center;
  grid-row-gap: var(--spacing-large);
  color: var(--color-black);
  opacity: 0.7;
  @media (min-width: 768px) {
      justify-items: start;
    }
  h3 {
    font-size: 2.6rem;
    margin: 0;
    text-decoration: line-through;
  }
  ul {
    font-size: 3rem;
    line-height: 42px;
    display: grid;
    justify-items: center;
    grid-row-gap: var(--spacing-medium);
    @media (min-width: 768px) {
      justify-items: start;
    }
  }
  @media (min-width: 768px) {
  }
`;

const WhatWeDoPage = () => (
  <Wrapper>
    <Title>Services</Title>
    <Services>
      <WhatWeDo>
        <h3>What we do</h3>
        <ul>
          <li>World-class digital</li>
          <li>Expect creativity</li>
          <li>Hustle</li>
          <li>Obsess over details</li>
          <li>Value relationships</li>
          <li>High-five</li>
          <li>Make things, break things</li>
          <li>Meme</li>
          <li>Exceed expectations</li>
          <li>Party</li>
        </ul>
      </WhatWeDo>
      <WhatWeDont>
        <h3>What we don't</h3>
        <ul>
          <li>Work late / weekends</li>
          <li>Have a sales team</li>
          <li>Resist cake</li>
          <li>Sacrifice quality for profit</li>
          <li>Fax</li>
          <li>Lose at Mario Kart</li>
          <li>Work for free</li>
          <li>Egos</li>
          <li>Impossible deadlines</li>
          <li>Outsource</li>
        </ul>
      </WhatWeDont>
    </Services>
  </Wrapper>
);

export default WhatWeDoPage;
