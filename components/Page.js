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
  grid-template-rows: auto 1fr auto;
`;

const Page = props => (
  <div>
    <Meta />
    <GlobalStyle />
    <Wrapper>
      <Header />
      {props.children}
      <Footer />
    </Wrapper>
  </div>
);

export default Page;
