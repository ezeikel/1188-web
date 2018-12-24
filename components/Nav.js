import Link from "next/link";
import styled from 'styled-components';

const Wrapper = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  box-shadow: 0 -3px 3rem 0px rgba(0, 0, 0, 0.1);
  @media (min-width: 768px) {
    position: relative;
    box-shadow: none;
  }
`;

const Nav = () => {
  return (
    <Wrapper>
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
