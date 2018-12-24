import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import NProgress from "nprogress";
import Nav from "./Nav";
import Hamburger from "./Hamburger";

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
  console.log("onRouteChangeComplete");
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  place-items: center;
  padding: var(--spacing-medium);
  @media (min-width: 768px) {
  }
`;

const Logo = styled.h1`
  font-size: 4rem;
  z-index: 1;
  a {
    transition: color 0.3s ease-in-out;
    color: var(--color-${({ active }) => active ? 'white' : 'black'});
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const Header = () => {
  const [active, toggleActive] = useState(false);

  return (
    <Wrapper active={active}>
      <Logo active={active}>
        <Link href="/">
          <a>1188</a>
        </Link>
      </Logo>
      <Nav active={active}/>
      <Hamburger active={active} toggleActive={toggleActive}/>
    </Wrapper>
  );
};

export default Header;
