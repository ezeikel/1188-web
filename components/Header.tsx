import { useState, useEffect, useRef, FunctionComponent } from "react";
import Link from "next/link";
import Router from "next/router";
import styled from "styled-components";
import NProgress from "nprogress";
import {
  disableBodyScroll,
  enableBodyScroll,
  clearAllBodyScrollLocks,
} from "body-scroll-lock";
import MenuContext from "../contexts/MenuContext";
import Nav from "./Nav";
import Hamburger from "./Hamburger";

interface WrapperProps {
  readonly active: boolean;
  readonly sticky: boolean;
  readonly home: boolean;
}

interface LogoProps {
  readonly active: boolean;
}

type HeaderProps = {
  toggleStickyHeader(value: boolean): void;
  stickyHeader: boolean;
  home: boolean;
};

if (typeof window !== "undefined") {
  NProgress.configure({ showSpinner: false });

  Router.events.on("routeChangeStart", () => {
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", () => {
    NProgress.done();
  });

  Router.events.on("routeChangeError", () => {
    NProgress.done();
  });
}

const Wrapper = styled.header<WrapperProps>`
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

const Logo = styled.div<LogoProps>`
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

const Header: FunctionComponent<HeaderProps> = ({
  home,
  stickyHeader,
  toggleStickyHeader,
}) => {
  const [active, setActive] = useState(false);
  const headerEl = useRef<HTMLElement>(null!);

  const handleScroll = (): void => {
    // TODO: Should be able to get rid of if and use optional chaining
    // plugins already added to babelrc but const el = headerEl?.current; doesnt work
    // https://github.com/zeit/next.js/issues/9004
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
      toggleStickyHeader(false);
    } else {
      el.classList.add("is-sticky");
      toggleStickyHeader(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    if (active) {
      disableBodyScroll(headerEl.current);
    } else {
      enableBodyScroll(headerEl.current);
    }

    return (): void => {
      window.removeEventListener("scroll", handleScroll);
      clearAllBodyScrollLocks();
    };
  }, [active]);

  const toggleActive = (option?: string): void => {
    if (option === "close-nav") {
      setActive(false);
      enableBodyScroll(headerEl && headerEl.current);

      return;
    }

    setActive(!active);
  };

  return (
    <MenuContext.Provider value={{ active, toggle: toggleActive }}>
      <Wrapper active={active} sticky={stickyHeader} home={home} ref={headerEl}>
        <Logo active={active}>
          <Link href="/">
            <a onClick={(): void => toggleActive("close-nav")}>
              <img src="/logos/1188.svg" />
            </a>
          </Link>
        </Logo>
        <Nav sticky={stickyHeader} home={home} />
        <Hamburger />
      </Wrapper>
    </MenuContext.Provider>
  );
};

export default Header;
