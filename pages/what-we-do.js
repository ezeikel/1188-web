import styled from "styled-components";
import Services from "../components/Services";
import Title from "../components/styles/Title";

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-row-gap: var(--spacing-huge);
  @media (min-width: 768px) {
    justify-items: start;
  }
`;

const DoDont = styled.section`
  display: grid;
  grid-row-gap: var(--spacing-huge);
  padding: var(--spacing-large);
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    justify-items: start;
    grid-column: 1 / -1;
    width: 100%;
    padding: 0 var(--spacing-huge) var(--spacing-huge) var(--spacing-huge);
  }
`;

const StyledTitle = styled(Title)`
  @media (min-width: 768px) {
    grid-row: 1 / span 1;
    grid-column: 1 / -1;
  }
`;

const WhatWeDo = styled.div`
  display: grid;
  justify-items: center;
  grid-row-gap: var(--spacing-large);
  color: var(--color-black);
  @media (min-width: 768px) {
    justify-items: start;
    grid-column: 1 / span 1;
    grid-row: 2 / -1;
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
    li {
      text-align: center;
    }
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
    grid-column: 2 / -1;
    grid-row: 2 / -1;
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
    li {
      text-align: center;
    }
    @media (min-width: 768px) {
      justify-items: start;
    }
  }
`;

const WhatWeDoPage = () => (
  <Wrapper>
    <Services />
    <DoDont>
      <StyledTitle>What to expect from us</StyledTitle>
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
    </DoDont>
  </Wrapper>
);

export default WhatWeDoPage;
