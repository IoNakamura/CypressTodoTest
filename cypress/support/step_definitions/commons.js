import { Given } from '@badeball/cypress-cucumber-preprocessor';

beforeEach(() => {
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });
})

Given("que ingreso a la pagina todotest", () => {
  const app = window.top;
  if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
    const style = app.document.createElement('style');
    style.innerHTML =
      '.command-name-request, .command-name-xhr { display: none }';
    style.setAttribute('data-hide-command-log-request', '');

    app.document.head.appendChild(style);
  }
  cy.visit("https://www.todotest.com/");
});