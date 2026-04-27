@forms @regress
Feature: Filling Forms Test Scenarios

Background: Common steps for all Scenarios
    Given The user is on the forms page

@smoke
Scenario: [TC-FORMS-01] Fill All Fields In The Form With Valid Data And Submit It
    When The user submits form with all fields filled with valid data
    Then The form is submitted successfully

@smoke
Scenario: [TC-FORMS-02] Verify required field error messages appear on empty submit
    When The user submits empty form
    Then The appropriate error messages are displayed

Scenario Outline: [TC-FORMS-03] Verify invalid field format shows validation error messages
    When The user fills the form with invalid "<Field>" format and submits it
    Then The appropriate validation error message is displayed for "<Field>"
    Examples:
        | Field             |
        | Email             |
        | Phone Number      |
        | Password          |
        | Confirm Password  |
        