import Meta from "./Meta";
import Header from './Header';
import Footer from './Footer';
import GlobalStyle from "../GlobalStyle";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
//import { far } from "@fortawesome/pro-regular-svg-icons";

library.add(fab);

const Page = props => (
  <div>
    <Meta />
    <GlobalStyle />
    <Header />
    {props.children}
    <Footer />
  </div>
);

export default Page;
