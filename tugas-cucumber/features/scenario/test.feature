Feature: Testing click and drag and drop Automation

@Scenario1
  Scenario: Automation click on element 

    Given I am from on the front page
    When I am in element page
    Then I m clicking dynamic click and verify assertion
    When I m clicking dynamic right click
    Then I m got comment in under button
    When I m double clicking 
    Then I m got comment in third time 

@Scenario2
  Scenario: Automation drag and drop interaction

  Given I am back to homepage
  When I am in element page
  Then I am scrolling down to interaction menu
  When I am drag and drop
  Then I am validate css property of background-color to the console

  