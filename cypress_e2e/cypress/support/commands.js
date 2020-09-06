// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';
import { jobDetails } from "../page-objects/base-objects"

Cypress.Commands.add("applyJob", (url, firstName, lastName)=> {
    cy.visit(url)
    cy.get(jobDetails.applyBtn)
        .should('be.visible')
        .click()
    cy.get(jobDetails.applyNowForm)
        .should('be.visible')
    cy.get(jobDetails.applyFormFields.firstName)
        .type(firstName)
    cy.get(jobDetails.applyFormFields.lastName)
        .type(lastName)
    cy.get(jobDetails.applyFormFields.uploadResume)
        .click()
})
