Feature: Latian passing username and password

@positive
  Scenario Outline: As a user, I can log into the secure area
    Given I am on the login page
    When I login with username "<username>" and password "<password>"
    # Then I should see a title Product and adding item to cart

    Examples: 
      | username      | password     |
      | standard_user | secret_sauce |
      | problem_user  | secret_sauce |

  # @smoke
  # Scenario: Adding Many items to the cart
  #   Given I am on the login page
  #   When I login with username "standard_user" and password "secret_sause"
  #   Then I should see a title Product and adding item to cart:
  #     | itemName              | quantity |
  #     | Sauce Labs Backpack   |        1 |
  #     | Sauce Labs Bike Light |        1 |

  @negative
  Scenario Outline: As a user, I can log into the secure area
    Given I am on the login page
    When I login with invalid username "" and password ""
    Then I verify
