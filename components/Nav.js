import Link from "next/link";
import styled from 'styled-components';

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #6cc7be;
  transform: translate3d(0, ${({ active }) => (active ? "0" : "-100vh")}, 0);
  transition: transform 0.3s ease-in-out, background-color 0.2s ease;
  display: grid;
  place-items: center;
  ul {
    display: grid;
    grid-template-rows: repeat(5, auto);
    grid-row-gap: var(--spacing-huge);
    justify-content: center;
    align-content: start;
    height: 100%;
    font-weight: bold;
    text-align: center;
    font-size: 3.6rem;
    text-transform: uppercase;
    padding-top: var(--spacing-gargantuan);
    a {
      color: var(--color-white);
    }
  }
  @media (min-width: 768px) {
    position: relative;
    transform: translate3d(0, 0, 0);
    background-color: initial;
    ul {
      grid-template-columns: repeat(5, auto);
      grid-template-rows: initial;
      grid-column-gap: var(--spacing-large);
      text-transform: uppercase;
      font-size: 1.8rem;
      padding-top: 0;
      display: grid;
      justify-content: center;
      align-content: start;
      height: 100%;
      font-weight: 300;
      text-align: center;
      transition: all 0.3s ease-in-out 0s;
      a {
        color: var(--color-black);
      }
    }
  }
`;

const Nav = ({ active }) => {
  return (
    <Wrapper active={active}>
      <ul>
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
      </ul>
    </Wrapper>
  );
};

export default Nav;
