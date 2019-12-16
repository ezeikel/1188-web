import { render } from "@testing-library/react";
import Contact from "../Contact";

test("renders", () => {
  const { debug } = render(<Contact />);
  debug();
});
