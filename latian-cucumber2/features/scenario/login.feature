Feature: The Internet Guinea Pig Website

  Scenario: passing ID
    Given I am on the front page
    When I login with "<username>" and "<password>"
    Then I should see a flash message saying "<username>"

    Examples: 
      | username        | password |
      | kokocrunch08    | Densus88 |
      | wibowo.bullseye | bullseye |

  Scenario: adding multiple item

  Given I am on the front page
  When I am 
