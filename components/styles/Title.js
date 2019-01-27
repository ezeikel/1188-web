import styled from 'styled-components';

const Title = styled.h2`
  font-size: 3.2rem;
  margin: 0;
  position: relative;
  color: var(--color-black);
  &:after {
    position: relative;
    content: "";
    display: block;
    position: absolute;
    background-color: var(--color-primary);
    height: 6px;
    width: 10rem;
    bottom: -6px;
    left: 0;
  }
  @media (min-width: 768px) {
    font-size: 4rem;
  }
`;

export default Title;
