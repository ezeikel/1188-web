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
  font-weight: bold;
  text-align: center;
  font-size: 3rem;
  text-transform: uppercase;
  a {
    color: var(--color-black);
  }
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
    a {
      color: var(--color-white);
    }
  }
`;

const Nav = ({ active }) => {
  return (
    <Wrapper active={active}>
      <NavList>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/what-we-do">
            <a>What we do</a>
          </Link>
        </li>
        <li>
          <Link href="/who-we-are">
            <a>Who we are</a>
          </Link>
        </li>
        <li>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </NavList>
    </Wrapper>
  );
};

export default Nav;
