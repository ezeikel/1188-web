import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import NProgress from "nprogress";
import Nav from "./Nav";

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
`;

const Logo = styled.h1`
  font-size: 4rem;
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
`;

const Header = () => {
  const [active, toggleActive] = useState(false);

  return (
    <Wrapper>
      <Logo>
        <Link href="/">
          <a>1188</a>
        </Link>
      </Logo>
      <Nav active={active} toggleActive={toggleActive} />
    </Wrapper>
  );
};

export default Header;
