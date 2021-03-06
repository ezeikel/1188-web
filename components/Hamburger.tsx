import { FunctionComponent, useContext } from "react";
import styled from "styled-components";
import MenuContext from "../contexts/MenuContext";

type HamburgerProps = {
  onClick?: () => void;
};

interface WrapperProps {
  readonly active: boolean;
}

const Wrapper = styled.div<WrapperProps>`
  cursor: pointer;
  z-index: 1;
  > span {
    display: block;
    margin-top: var(--spacing-tiny);
    margin-bottom: var(--spacing-tiny);
    margin-right: auto;
    margin-left: auto;
    width: 25px;
    height: 2px;
    background-color: var(--color-black);
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  }
  ${({ active }) => {
    return active
      ? `
      > span:nth-child(1) {
        transform: translateY(6px) rotate(45deg);
      }
      > span:nth-child(2) {
        opacity: 0;
      }
      > span:nth-child(3) {
        transform: translateY(-6px) rotate(-45deg);
      }
    `
      : "";
  }};
  @media (min-width: 768px) {
    display: none;
  }
`;

const Hamburger: FunctionComponent<HamburgerProps> = () => {
  const { active, toggle } = useContext(MenuContext);

  return (
    <Wrapper
      active={active}
      onClick={(): void => toggle()}
      data-testid="hamburger"
    >
      <span></span>
      <span></span>
      <span></span>
    </Wrapper>
  );
};

export default Hamburger;
