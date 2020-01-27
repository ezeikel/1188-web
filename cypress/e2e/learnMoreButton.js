describe("clicking hero cta", () => {
  it("should take user to who we are page", () => {
    cy.visit("/")
      .findByText(/learn more/i)
      .click()
      .url()
      .should("eq", `${Cypress.config().baseUrl}/who-we-are`);
  });
});
