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
Cypress.Commands.add('createPaste', (randomData, data) => {
    cy.request({
        url: "/",
        method: "POST",
        body: data,
        headers: {
            "X-Auth-Token": Cypress.env("token")
        },
        failOnStatusCode: false
    })
})

Cypress.Commands.add('getPaste', (id) => {
    cy.request({
        url: `/${id}`,
        method: "GET",
        headers: {
            "X-Auth-Token": Cypress.env("token")
        }
    })
})

Cypress.Commands.add('deletePaste', (id) => {
    cy.request({
        url: `/${id}`,
        method: "DELETE",
        headers: {
            "X-Auth-Token": Cypress.env("token")
        }
    })
})

Cypress.Commands.add('prepareData', (randomData) => {
    cy.fixture("data.json").then(data => {
        data.sections[0].contents = randomData
    }).as("data")
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })