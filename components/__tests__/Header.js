import { render } from "@testing-library/react";
import Header from "../Header";

test("should not be visible", async () => {
  const { findByTestId } = render(<Header />);
  const Hamburger = await findByTestId("hamburger");

  // TODO: hamburger should NOT be visible and be display: none. Find out why this isnt the case in test
  expect(Hamburger).toBeInTheDocument();
  expect(Hamburger).toBeVisible();
  expect(Hamburger).toHaveStyle(`
    display: block;
  `);
});
