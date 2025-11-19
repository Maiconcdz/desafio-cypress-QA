import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open the EBAC shop page", () => {
  cy.visit("/");
});

Then("I should see the home page", () => {
  cy.title().should("include", "EBAC");
  cy.get("body").should("be.visible");
});