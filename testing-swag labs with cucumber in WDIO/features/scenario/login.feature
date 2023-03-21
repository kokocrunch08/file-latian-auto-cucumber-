Feature: Login Scenario

@positive
  Scenario Outline: As a user, I can log into the secure area
    Given I am on the login page
    When I login with username "<username>" and password "<password>"
    Then I verify logged in
      Examples: 
      | username      | password     |
      | standard_user | secret_sauce |
      | problem_user  | secret_sauce |

@negative
  Scenario Outline: As a user, I can log into the secure area
    Given I am on the login in page
    When I login with empty username "" and password ""
    Then I verify the error message


@positve @addingToCart
  Scenario: Adding Many items to the cart
    Given I am on the login page
    When I login with username "standard_user" and password "secret_sauce"
    Then I should see a title Product and adding item to cart:
      | itemName              | quantity |
      | sauce-labs-backpack   |        1 |
    
