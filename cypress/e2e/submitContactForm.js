describe("test", () => {
  it("testing how this works", () => {
    cy.visit("/")
      // .get(".ContactForm__DoubleFormfield-qlhrzj-2 > :nth-child(1) > input")
      .findByTestId("first-name-input")
      .scrollIntoView()
      .pause()
      .click();
  });
});
