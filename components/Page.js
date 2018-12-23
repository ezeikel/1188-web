import styled from 'styled-components';
import Header from './Header';
import Meta from "./Meta";
import "../GlobalStyle";

const Page = props => (
  <div>
    <Meta />
    <Header />
    <p>Hey I'm the page component!</p>
    {props.children}
  </div>
);

export default Page;
