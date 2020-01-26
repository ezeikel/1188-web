import { buildEnquiry } from "../support/generate";

/**
 * Disable css smooth scroll, that doesn't plays nice with cypress.
 * See https://github.com/cypress-io/cypress/issues/3200
 */
const disableSmoothScroll = () => {
  cy.document().then(document => {
    const node = document.createElement("style");
    node.innerHTML = "html { scroll-behavior: inherit !important; }";
    document.body.appendChild(node);
  });
};

describe("contactForm", () => {
  it("should submit successfully when required fields are present", () => {
    const enquiry = buildEnquiry();

    disableSmoothScroll();

    cy.visit("/");
    disableSmoothScroll();
    cy.get("html")
      .findByTestId("contact-form")
      .scrollIntoView()
      .findByText(/send/i, { selector: "button" })
      .should("be.disabled")
      .findByTestId("first-name-input")
      .click()
      .type(enquiry.firstName)
      .findByTestId("last-name-input")
      .scrollIntoView()
      .click()
      .type(enquiry.lastName)
      .findByTestId("email-input")
      .scrollIntoView()
      .click()
      .type(enquiry.email)
      .findByTestId("phone-number-input")
      .scrollIntoView()
      .click()
      .type(enquiry.phoneNumber)
      .findByTestId("message-input")
      .scrollIntoView()
      .click()
      .type(enquiry.message)
      .findByText(/send/i, { selector: "button" })
      .should("not.be.disabled")
      .click();
  });
});
