/// <reference types="cypress" />

import LoginPage from '../pages/loginPage'


describe('Login Tests', () => {
   let credentials;
   before(() => {
      cy.fixture('credentials.json').then((credentials) => {
         credentials = credentials;
      });

   })

   it('TC01: Valid Login', () => {
      const loginPage = new LoginPage()
      new LoginPage()
         .load()
      loginPage.validlogin()
      cy.url().should('include', '/dashboard');

   })

   // this is a suite of tests


});
