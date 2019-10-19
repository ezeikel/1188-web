import { useState } from "react";
import { withRouter } from "next/router";
import styled from "styled-components";
import Meta from "./Meta";
import Header from './Header';
import Footer from './Footer';
import GlobalStyle from "../GlobalStyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import {
  far,
  faTablet,
  faBrowser,
  faMobile,
  faMapMarkedAlt,
  faFillDrip,
  faPaperPlane
} from "@fortawesome/pro-regular-svg-icons";

library.add(fab, fal, far, fas, faTablet, faBrowser, faMobile, faMapMarkedAlt, faFillDrip, faPaperPlane);

const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: ${({ stickyHeader, home }) =>
    stickyHeader || home
      ? "1fr minmax(var(--header-height), auto)"
      : "var(--header-height) 1fr minmax(var(--footer-height), auto);"};
  min-height: 100vh;
  @media (min-width: 768px) {
    grid-template-rows: ${({ stickyHeader, home }) =>
      stickyHeader || home
        ? "1fr minmax(var(--header-height-wide), auto)"
        : "var(--header-height-wide) 1fr minmax(var(--header-footer-wide), auto);"};
  }
`;

const Page = (props) => {
  const [ stickyHeader, setStickyHeader ] = useState(false);
  const toggleStickyHeader = (value) => setStickyHeader(value);
  const home = props.router.pathname === '/';

  return (
    <div>
      <Meta />
      <GlobalStyle />
      <Wrapper home={home} stickyHeader={stickyHeader}>
        <Header home={home} stickyHeader={stickyHeader} toggleStickyHeader={toggleStickyHeader} />
        {props.children}
        <Footer />
      </Wrapper>
    </div>
  )
};

export default withRouter(Page);
