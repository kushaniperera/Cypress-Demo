/// <reference types = 'Cypress' />

import { method } from "cypress/types/bluebird";

describe("0000 - First API tests", function(){
    it("1111: API Test 1 - GET (Validating the response)", function(){
        cy.request('GET', 'http://dummy.restapiexample.com/api/v1/employees').then(function(response){

            //validation of the response caught
            expect(response).to.have.property('status', 200);
            expect(response.body).not.to.null;
            expect(response.body.data).to.have.length(24);
        });    
    });

    it("2222: API Test 2 - POST (Validating the contents of body data)", function(){
        const bodyData = {"name": "testName", "salary": "123", "age": "23"};
        cy.request('POST', 'http://dummy.restapiexample.com/api/v1/create', bodyData)
        .its('body')
        .its('data')
        .should('include', {name: 'testName'}); //validates that body data includes testName
    });

    it("3333: API Test 3 - UPDATE (Validating the API status code)", function(){
        const bodyData = {"name": "test1"};
        cy.request({method: 'PUT', url: 'http://dummy.restapiexample.com/api/v1/update/1', body: bodyData, failOnStatusCode: false})
        .its('status').should('eq', 401);
    });

    it("4444:API Test 4 - DELETE (Deletes existing user)", function(){
        cy.request('DELETE', 'http://dummy.restapiexample.com/api/v1/delete/2').then(function(response){
            expect(response).to.have.property('status', 200);
            expect(response.body.message).to.equal('successfully! deleted Records');
        });
    });
});