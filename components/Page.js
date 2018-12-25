import styled from 'styled-components';
import Header from './Header';
import Meta from "./Meta";
import GlobalStyle from "../GlobalStyle";

const Page = props => (
  <div>
    <Meta />
    <GlobalStyle />
    <Header />
    {props.children}
  </div>
);

export default Page;
