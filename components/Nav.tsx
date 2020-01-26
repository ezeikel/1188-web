import { FunctionComponent, useContext } from "react";
import Link from "next/link";
import styled from "styled-components";
import MenuContext from "../contexts/MenuContext";

type NavProps = {
  toggleActive(mode: string): void;
  sticky: boolean;
  home: boolean;
};

interface WrapperProps {
  readonly active: boolean;
}

interface StyledLinkProps {
  readonly sticky: boolean;
  readonly home: boolean;
}

const Wrapper = styled.nav<WrapperProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--color-white);
  transform: translate3d(0, ${({ active }) => (active ? "0" : "-100vh")}, 0);
  transition: transform 0.3s ease-in-out, background-color 0.2s ease;
  display: grid;
  align-items: start;
  padding-top: var(--header-height);
  overflow: hidden;
  @media (min-width: 768px) {
    z-index: 1;
    height: 100%;
    position: relative;
    transform: translate3d(0, 0, 0);
    background-color: initial;
    padding-top: 0;
  }
`;

const NavList = styled.ul`
  display: grid;
  grid-template-rows: repeat(5, auto);
  grid-row-gap: var(--spacing-huge);
  place-items: center;
  justify-content: center;
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  @media (min-width: 768px) {
    height: 100%;
    grid-template-columns: repeat(5, auto);
    grid-template-rows: initial;
    grid-column-gap: var(--spacing-large);
    grid-row-gap: 0;
    text-transform: uppercase;
    font-size: 1.8rem;
    padding-top: 0;
    transition: all 0.3s ease-in-out 0s;
    text-transform: capitalize;
  }
`;

const NavListItem = styled.li`
  @media (min-width: 768px) {
    overflow-x: hidden;
    height: 100%;
    display: grid;
    place-items: center;
  }
`;

const StyledLink = styled.a<StyledLinkProps>`
  color: var(--color-black);
  font-weight: bold;
  @media (min-width: 768px) {
    display: grid;
    place-items: center;
    position: relative;
    color: ${({ sticky, home }) =>
      sticky || !home ? "var(--color-black)" : "var(--color-white)"};
    cursor: pointer;
    &:after {
      position: relative;
      content: "";
      display: block;
      position: absolute;
      background-color: ${({ sticky, home }) =>
        sticky || !home ? "var(--color-black)" : "var(--color-white)"};
      height: 2px;
      width: 50%;
      bottom: calc(var(--spacing-tiny) * -1);
      left: 0;
      transform: translateX(-150%);
      transition: transform 0.2s ease-in-out;
    }
    &:hover {
      &:after {
        transform: translatex(0);
      }
    }
  }
`;

const Nav: FunctionComponent<NavProps> = ({ toggleActive, sticky, home }) => {
  const active = useContext(MenuContext);

  return (
    <Wrapper active={active}>
      <NavList>
        <NavListItem>
          <Link href="/">
            <StyledLink
              onClick={() => toggleActive("close-nav")}
              sticky={sticky}
              home={home}
            >
              Home
            </StyledLink>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/what-we-do">
            <StyledLink
              onClick={() => toggleActive("close-nav")}
              sticky={sticky}
              home={home}
            >
              What we do
            </StyledLink>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/who-we-are">
            <StyledLink
              onClick={() => toggleActive("close-nav")}
              sticky={sticky}
              home={home}
            >
              Who we are
            </StyledLink>
          </Link>
        </NavListItem>
        <NavListItem>
          <StyledLink
            href="https://medium.com/@118eighty8"
            sticky={sticky}
            home={home}
          >
            Blog
          </StyledLink>
        </NavListItem>
        <NavListItem>
          <Link href="/#contact">
            <StyledLink
              onClick={() => toggleActive("close-nav")}
              sticky={sticky}
              home={home}
            >
              Contact
            </StyledLink>
          </Link>
        </NavListItem>
      </NavList>
    </Wrapper>
  );
};

export default Nav;
