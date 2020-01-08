import Document, {
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
// Import styled components ServerStyleSheet
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  //static getInitialProps({ renderPage }) {
  static async getInitialProps(ctx: DocumentContext) {
    // Step 1: Create an instance of ServerStyleSheet
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      // Step 2: Retrieve styles from components in the page
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        // Step 3: Extract the styles as <style> tags
        // Step 4: Pass styleTags as a prop
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  setGoogleAnalyticsTags() {
    return {
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-131531376-1');
      `,
    };
  }

  setCypressReactDevTools() {
    return {
      __html: `
      if (window && window.Cypress) {
        window.__REACT_DEVTOOLS_GLOBAL_HOOK__ = window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__
      }
      `,
    };
  }

  render() {
    return (
      <html>
        <Head>
          {/* Step 5: Output the styles in the head  */}
          {this.props.styles}
          {/* Global site tag (gtag.js) - Google Analytics */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-131531376-1"
          />
          <script dangerouslySetInnerHTML={this.setGoogleAnalyticsTags()} />
          <script dangerouslySetInnerHTML={this.setCypressReactDevTools()} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
