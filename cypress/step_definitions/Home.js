import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('el usuario en la página principal', () => {
  cy.visit('https://www.rosatel.cl');
});

When('presiona la flecha hacia la derecha', () => {
  cy.get('.slider__controls-container .slider__controls-button--next')
    .click();
});

Then('ve la primera imagen de la vitrina', () => {
  cy.get('.flex-viewport li[data-flexslider-index="0"]')
    .should('have.class', 'flex-active-slide')
});

Then('ve la segunda imagen de la vitrina', () => {
  cy.get('.flex-viewport li[data-flexslider-index="1"]')
    .should('have.class', 'flex-active-slide')
});

Then('ve la tercera imagen de la vitrina', () => {
  cy.get('.flex-viewport li[data-flexslider-index="2"]')
    .should('have.class', 'flex-active-slide')
});

Then('ve el botón {string}', (buttonText) => {
  /*
    Notar que no basta con identificar un atributo simple
    porque puede estar repetido
   
    cy.get('a[href="/collections/caja-con-rosas"]')
  */

  /*
    Podemos utilizar el navegador y conseguir un selector mucho más específico
    pero mucho menos legible y puede ser dependiente de la herramienta
    #slide--1595970343591 > div > div > a
  */
  /*
    Debemos ser más específicos y buscar por nuestra cuenta el mejor selector.
    En este caso nos basamos en el que tenga la clase ""
  */
    cy.get('.flex-active-slide a.slides__btn')
      .invoke('text')
      .should('include', buttonText);
});

