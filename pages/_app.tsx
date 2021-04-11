import { AppProps } from "next/app";
import * as Sentry from "@sentry/browser";
import Page from "../components/Page";

Sentry.init({
  enabled: process.env.NODE_ENV === "production",
  environment: process.env.NODE_ENV,
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  release: process.env.SENTRY_RELEASE,
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Page>
    <Component {...pageProps} />
  </Page>
);

export default MyApp;
