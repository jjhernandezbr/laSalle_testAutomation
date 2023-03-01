Feature: Search

  Scenario: Initial Search
    Given I am on the initial page
    When I search a ticket from "Madrid"
    And I search a ticket to "Barcelona"
    And I select a trip type "Ida"
    And I seach with date of dateDepature "01" de "Junio"
