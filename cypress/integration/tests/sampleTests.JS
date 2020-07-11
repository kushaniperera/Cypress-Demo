import 'cypress-plugin-tab';
/// <reference types = 'Cypress' />

describe ('Test Suite 0000 : My first test suite', function() {
    it('Test Case 1111 : Add an Appointment', function (){
        cy.visit('https://katalon-demo-cura.herokuapp.com/');

        //login
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();

        //selecting the facility
        cy.get('#combo_facility')
        .select('Seoul CURA Healthcare Center').should('have.value', 'Seoul CURA Healthcare Center');

        //enabling readmission
        cy.get('#chk_hospotal_readmission').click().should('be.checked');

        //selecting healthcare program
        cy.get('#radio_program_medicare').should('be.checked');
        cy.get('#radio_program_none').should('not.be.checked');
        cy.get('#radio_program_medicaid').should('not.be.checked');
        cy.get('#radio_program_medicare').click().should('be.checked');

        //setting date
        cy.get('#txt_visit_date').type('20/05/2021');
        cy.focused().tab();

        //Adding comment
        cy.get('#txt_comment').type('2016/IS/066 | 16020669 | K T Perera');

        //submit appointment
        cy.get('#btn-book-appointment').click();

        //validate the appointment
        cy.get('.text-center > h2').should('be.visible');
        cy.get('#facility').should('have.text', 'Seoul CURA Healthcare Center');
        cy.get('#hospital_readmission').should('have.text', 'Yes');
        cy.get('#program').should('have.text', 'Medicare');
        cy.get('#visit_date').should('have.text', '20/05/2021');
        cy.get('#comment').should('have.text', '2016/IS/066 | 16020669 | K T Perera');

        //go back to home page
        cy.get('.btn-default').click();
        cy.get('#btn-make-appointment').should('be.visible');

        //logout
        cy.get('#menu-toggle').click();
        cy.get('#sidebar-wrapper ul li:nth-child(6)').click();
    });

    it('Test Case 2222: Check History',function(){
        cy.visit('https://katalon-demo-cura.herokuapp.com/');

        //login
        cy.get('#btn-make-appointment').click();
        cy.get('#txt-username').type('John Doe');
        cy.get('#txt-password').type('ThisIsNotAPassword');
        cy.get('#btn-login').click();

        //selecting the facility
        cy.get('#combo_facility')
        .select('Seoul CURA Healthcare Center').should('have.value', 'Seoul CURA Healthcare Center');

        //enabling readmission
        cy.get('#chk_hospotal_readmission').click().should('be.checked');

        //selecting healthcare program
        cy.get('#radio_program_medicare').should('be.checked');
        cy.get('#radio_program_none').should('not.be.checked');
        cy.get('#radio_program_medicaid').should('not.be.checked');
        cy.get('#radio_program_medicare').click().should('be.checked');

        //setting date
        cy.get('#txt_visit_date').type('20/05/2021');
        cy.focused().tab();

        //Adding comment
        cy.get('#txt_comment').type('2016/IS/066 | 16020669 | K T Perera');

        //submit appointment
        cy.get('#btn-book-appointment').click();

        //navigate to history page
        cy.get('#menu-toggle').click();
        cy.get('#sidebar-wrapper ul li:nth-child(4)').click();

        //validate appointment details
        cy.get('.text-center > h2').should('be.visible');
        cy.get('.panel-heading').should('have.text', '20/05/2021');
        cy.get('#facility').should('have.text', 'Seoul CURA Healthcare Center');
        cy.get('#hospital_readmission').should('have.text', 'Yes');
        cy.get('#program').should('have.text', 'Medicare');
        cy.get('#comment').should('have.text', '2016/IS/066 | 16020669 | K T Perera');

        //logout
        cy.get('#menu-toggle').click();
        cy.get('#sidebar-wrapper ul li:nth-child(6)').click();

    })
});