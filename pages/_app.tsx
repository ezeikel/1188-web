import { AppProps } from "next/app";
import Page from "../components/Page";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

export default MyApp;
