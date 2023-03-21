Feature: Adding item to Cart many times

  @case-1
  Scenario: Login with multiple username and password
    Given I am on the login page
    When I login with "<username>" and "<password>"
    Then I should see a flash message saying "<username>"

    Examples: 
      | username        | password |
      | kokocrunch08    | Densus88 |
      | wibowo.bullseye | bullseye |

  @case-2
  Scenario: Adding item to Cart
    Given I am on the login page
    When I login with "kokocrunch08" and "Densus88"
    Then I should see a flash message saying "kokocrunch08"
    When I adding itemName to the cart:
      | itemName          | quantity |
      | Samsung galaxy s6 |        1 |
      | Nokia lumia 1520  |        1 |
      | Nexus 6           |        1 |
      | Samsung galaxy s7 |        1 |
      | Iphone 6 32gb     |        1 |
      | Sony xperia z5    |        1 |
    Then i m check on the item in Cart Page
