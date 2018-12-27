import Link from "next/link";
import styled from 'styled-components';

const Wrapper = styled.nav`
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
  padding-top: 100px;
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

const NavListItem =  styled.li`
  @media (min-width: 768px) {
    overflow-x: hidden;
    height: 100%;
    display: grid;
    place-items: center;
  }
`;

const StyledLink = styled.a`
  color: var(--color-black);
  font-weight: bold;
  @media (min-width: 768px) {
    display: grid;
    place-items: center;
    height: 100%;
    position: relative;
    color: ${({ sticky }) => sticky ? 'var(--color-black)' : 'var(--color-white)'};
    overflow-x: hidden;
    cursor: pointer;
    &:after {
      position: relative;
      content: "";
      display: block;
      position: absolute;
      background-color: ${({ sticky }) => sticky ? 'var(--color-black)' : 'var(--color-white)'};
      height: 2px;
      width: 50%;
      bottom: 0;
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

const Nav = ({ active, sticky }) => {
  return (
    <Wrapper active={active}>
      <NavList>
        <NavListItem>
          <Link href="/">
            <StyledLink sticky={sticky}>Home</StyledLink>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/what-we-do">
            <StyledLink sticky={sticky}>What we do</StyledLink>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/who-we-are">
            <StyledLink sticky={sticky}>Who we are</StyledLink>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/blog">
            <StyledLink sticky={sticky}>Blog</StyledLink>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/contact">
            <StyledLink sticky={sticky}>Contact</StyledLink>
          </Link>
        </NavListItem>
      </NavList>
    </Wrapper>
  );
};

export default Nav;
