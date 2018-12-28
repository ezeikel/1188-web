import { Component } from "react";
import { withRouter } from "next/router";
import styled from "styled-components";
import Meta from "./Meta";
import Header from './Header';
import Footer from './Footer';
import GlobalStyle from "../GlobalStyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
//import { far } from "@fortawesome/pro-regular-svg-icons";

library.add(fab);

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: ${({ home }) =>
    home ? "1fr minmax(var(--header-height), auto)" : "var(--header-height) 1fr minmax(var(--header-height), auto);"};
  min-height: 100vh;
`;

class Page extends Component {
  render() {
    const home = this.props.router.pathname === '/';

    return (
      <div>
        <Meta />
        <GlobalStyle />
        <Wrapper home={home}>
          <Header home={home} />
          {this.props.children}
          <Footer />
        </Wrapper>
      </div>
    );
  }
};

export default withRouter(Page);
