Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the front page
    When I try to login with "<username>" and "<password>"
    Then I am successfully login with "<username>"

 Examples: 
        |username|password|
        |kokocrunch08|Densus88|
        |wibowo.bullseye|bullseye|
