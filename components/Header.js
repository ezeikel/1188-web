import { Component, useState } from "react";
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
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Wrapper = styled.header`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  place-items: center;
  padding: var(--spacing-medium);
  height: 100px;
`;

const Logo = styled.h1`
  font-size: 3.2rem;
  z-index: 1;
  margin: 0;
  a {
    transition: color 0.3s ease-in-out;
    color: var(--color-${({ active }) => active ? 'black' : 'white'});
  }
  @media (min-width: 768px) {
    text-align: center;
    a {
      color: var(--color-white);
    }
  }
`;

class Header extends Component {
  // TODO: Reinstate once nextjs supports hooks
  //const [active, toggleActive] = useState(false);
  state = {
    active: false
  };

  toggleActive = () => {
    this.setState({
      active: !this.state.active
    });
  };

  render() {
    return (
      <Wrapper active={this.state.active}>
        <Logo active={this.state.active}>
          <Link href="/">
            <a>1188</a>
          </Link>
        </Logo>
        <Nav active={this.state.active}/>
        <Hamburger active={this.state.active} toggleActive={this.toggleActive}/>
      </Wrapper>
    );
  }
};

export default Header;
