describe("hero", () => {
  it("clicking learn more button should take user to who we are page", () => {
    cy.visit("/")
      .findByTestId("first-name-input")
      .findByText(/learn more/i)
      .click()
      .url()
      .should("eq", `${Cypress.config().baseUrl}/who-we-are`);
  });
});
