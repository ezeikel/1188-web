import ReactDOMServer from "react-dom/server";
import Contact from "../Contact";

test("render", () => {
  ReactDOMServer.renderToString(<Contact />);
});
