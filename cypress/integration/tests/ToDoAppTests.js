/// <reference types = 'Cypress' />

describe ('Test Suite 0000 : ToDo App Testing', function() {
    it('Test Case 1111 : Adding a new ToDo', function (){
        cy.visit('http://ktperera-serverless-demo.com.s3-website.ap-south-1.amazonaws.com/');

        cy.get('app-todo-list-item').its('length').then(e => {
            //Add ToDo
            cy.get('.new-todo').type('New ToDo Cypress').type('{enter}');
            
            //Validate addition
            cy.get('app-todo-list-item').should('have.length.greaterThan', e);
            //cy.get('app-todo-list-item').its('length').should('be.greaterThan', 6);
        });
    });

    it('Test Case 2222 : Deleting a new ToDo', function (){
        cy.visit('http://ktperera-serverless-demo.com.s3-website.ap-south-1.amazonaws.com/');

        cy.get('app-todo-list-item').its('length').then(e => {
            //Delete ToDo
            cy.get('ul li:nth-child(1)').find('.destroy').invoke('show').click();
            
            //Validate addition
            cy.get('app-todo-list-item').should('have.length.lessThan', e);
        });
    });


});  