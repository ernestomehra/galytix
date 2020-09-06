import { homePage, jobDetails } from "../page-objects/base-objects"

describe("SmokeSuite", function()  {
    beforeEach(function(){
        //Read the fixture file for paramterized test data.
        cy.fixture("testdata").as('userdata').then((data) => {
          this.data=data
  })
})

it("Summary: Verify successful navigation to browse jobs page", function() { 
    cy.visit("jobs")
    cy.get(homePage.heading)
      .should('contain.text', this.data.generic.jobsHome)
    cy.title()
        .should('eq', 'GalytixTestExercise')
    
    
})

it("Summary: Get url to each job available on the browse jobs page", function() {
    cy.visit("jobs")
    cy.get('ul>li>a')
        .each(($el) => {
            cy.wrap($el).and('have.attr', 'href').then((href) => {
                cy.log(href)
            })
        })
})

it("Summary: Check successful navigation to first job", function() {
    cy.get(homePage.firstJob)
        .click()
    cy.get(jobDetails.applyBtn)
        .should('be.visible')
        .click()
    cy.get(jobDetails.applyNowForm)
        .should('be.visible')
    cy.get(jobDetails.applyFormFields.firstName)
        .type(this.data.jobApplication.applierFirstName)
    cy.get(jobDetails.applyFormFields.lastName)
        .type(this.data.jobApplication.applierLastName)
    cy.get(jobDetails.applyFormFields.uploadResume)
        .click()
})

it("Summary: Check job application can be made successfully", function() {
    const filename = "CV_Karan Mehra_updated_pdf.docx"

    cy.applyJob(Cypress.env('firstJob'), "Karan", "Mehra") //custom function(which takes job url, applicant's name as args) defined in commands.js
    cy.get(jobDetails.applyFormFields.uploadResume)
        .attachFile(filename);
    cy.get(jobDetails.applyFormFields.submit)
        .click({force:true})
    cy.get(jobDetails.applyFormFields.successmsg)
        .contains(this.data.jobApplication.successMsg)
    
})

it("Summary: Validate sections present on the job details info page.", function() {

    cy.visit(Cypress.env('firstJob'))
    cy.get(jobDetails.detailRoleDesc)
        .should('be.visible')
    cy.get(jobDetails.desiredSkills)
        .should('be.visible')
    cy.get(jobDetails.benefits)
        .should('be.visible')
            .should('have.text', this.data.generic.benefitsTitle)
})

});