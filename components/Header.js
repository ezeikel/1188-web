import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Router from "next/router";
import PropTypes from "prop-types";
import styled from "styled-components";
import NProgress from "nprogress";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import Nav from "./Nav";
import Hamburger from "./Hamburger";

NProgress.configure({ showSpinner: false });

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
  z-index: 1;
  display: grid;
  grid-template-columns: auto auto;
  justify-content: space-between;
  place-items: center;
  padding: var(--spacing-medium) var(--spacing-large);
  height: var(--header-height);
  background-color: ${({ sticky }) =>
    sticky ? "var(--color-white)" : "transparent"};
  box-shadow: ${({ sticky }) =>
    sticky ? "rgba(0, 0, 0, 0.1) 0px 2px 1.5rem 0px" : "none"};
  @media (min-width: 768px) {
    padding: var(--spacing-medium) var(--spacing-large);
    position: ${({ sticky, home }) =>
      sticky ? "fixed" : home ? "absolute" : "static"};
    top: 0;
    left: 0;
    right: 0;
    height: 100px;
  }
`;

const Logo = styled.div`
  display: grid;
  place-items: center;
  z-index: 1;
  margin: 0;
  width: 100px;
  img,
  a {
    width: 100%;
  }
  @media (min-width: 768px) {
    text-align: center;
  }
`;

const Header = props => {
  const [active, setActive] = useState(false);
  const headerEl = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll.bind(this));

    if (active) {
      disableBodyScroll(headerEl.current);
    } else {
      enableBodyScroll(headerEl.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearAllBodyScrollLocks();
    };
  }, [active]);

  const toggleActive = option => {
    if (option === "close-nav") {
      setActive(false);
      enableBodyScroll(headerEl.current);

      return;
    }

    setActive(!active);
  };

  const handleScroll = () => {
    if (!headerEl.current) {
      return;
    }

    const el = headerEl.current;
    const elementTop = el.offsetTop;
    const elementBottom = elementTop + el.offsetHeight;
    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.outerHeight;

    if (elementBottom > viewportTop && elementTop < viewportBottom) {
      el.classList.remove("is-sticky");
      props.toggleStickyHeader(false);
    } else {
      el.classList.add("is-sticky");
      props.toggleStickyHeader(true);
    }
  };

  return (
    <Wrapper
      active={active}
      sticky={props.stickyHeader}
      home={props.home}
      ref={headerEl}
    >
      <Logo active={active}>
        <Link href="/">
          <a onClick={() => toggleActive("close-nav")}>
            <img src="/static/logos/1188.svg" />
          </a>
        </Link>
      </Logo>
      <Nav
        active={active}
        toggleActive={toggleActive}
        sticky={props.stickyHeader}
        home={props.home}
      />
      <Hamburger
        active={active}
        toggleActive={toggleActive}
        sticky={props.stickyHeader}
      />
    </Wrapper>
  );
};

Header.propTypes = {
  toggleStickyHeader: PropTypes.func,
  stickyHeader: PropTypes.bool,
  home: PropTypes.bool,
};

export default Header;
