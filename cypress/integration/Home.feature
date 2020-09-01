Feature: Página inicial

  Al ingresar en la página principal
  
  Scenario: Página inicial
    Given el usuario en la página principal
    When ve la primera imagen de la vitrina
    Then ve el botón "Ver Catálogo"

  Scenario: Vitrina principal
    Given el usuario en la página principal
    When presiona la flecha hacia la derecha
    Then ve la segunda imagen de la vitrina
    Then ve el botón "Ver"
    When presiona la flecha hacia la derecha
    Then ve la tercera imagen de la vitrina
    Then ve el botón "Ver Catálogo"
