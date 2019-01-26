import styled from 'styled-components';

const Title = styled.h2`
  font-size: 4rem;
  margin: 0;
  position: relative;
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
`;

export default Title;
