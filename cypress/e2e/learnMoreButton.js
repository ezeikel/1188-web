describe("clicking hero cta", () => {
  it("should take user to who we are page", () => {
    cy.visit("/")
      .findByText(/learn more/i)
      .click()
      .url({ timeout: 10000 })
      .should("eq", `${Cypress.config().baseUrl}/who-we-are`);
  });
});
