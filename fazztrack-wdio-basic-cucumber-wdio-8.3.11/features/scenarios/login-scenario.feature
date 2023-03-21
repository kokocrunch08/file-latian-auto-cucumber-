Feature: Heroku app Login Scenario

  # Scenario Outline: Login with multiple account
  #   Given I am on the front page
  #   When I try to login with username "<username>" and password "<password>"
  #   Then I am successfully logged in with username "<username>"

  # Examples: 
  #       |username|password|
  #       |kokocrunch08|Densus88|
  #       |wibowo.bullseye|bullseye|


  Scenario: Add item to cart
    Given I am on the front page
    When I try to login with username "kokocrunch08" and password "Densus88"
    Then I am successfully logged in with username "kokocrunch08"
    When I add items to the cart:
    |itemName|quantity|
    |Samsung galaxy s6|1|


