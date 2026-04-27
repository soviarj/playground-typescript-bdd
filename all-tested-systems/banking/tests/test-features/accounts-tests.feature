@accounts @banking
Feature: Accounts Page Test Scenarios

Background: Common steps for all Scenarios
    Given The "ADMIN_USER" is logged in the banking system
    When The user is navigated to the "Accounts" Page

@regress @smoke
Scenario Outline: [TC-ACC-01] Create A New Account
    When The user is navigated to the "Dashboard" Page
    And The user clicks "ADD_ACCOUNT" button on the dashboard page
    And The user saves the form for "<Account>" Account type with mandatory fields filled in
    Then The new "<Account>" account is created
    Examples:
        | Account       |
        | Savings       |
        | Checking      |
        | Credit_Card   |

@regress
Scenario: [TC-ACC-02] Create New Account Is Not Possible Without Filling Mandatory Fields
    When The user is navigated to the "Dashboard" Page
    And The user clicks "ADD_ACCOUNT" button on the dashboard page
    And The user tries to save the form only with optional fields filled in
    Then The system writes error messages under the empty mandatory fields

@regress @smoke
Scenario: [TC-ACC-03] Edit Account Name With Edit Button
    When The user clicks "EDIT" button on the accounts page
    And The user updates account name
    Then The account is upated

@regress @smoke
Scenario: [TC-ACC-04] Delete Account And Verify It Is Removed
    When The user checks the account number of an account he wants to delete
    And The user clicks "DELETE" button on the accounts page
    And The user clicks "CANCEL" button on the accounts page
    And The user clicks "DELETE" button on the accounts page
    And The user clicks "CONFIRM_DELETE" button on the accounts page
    Then The account is deleted

@regress
Scenario Outline: [TC-ACC-05] Filter Accounts By Account Type
    When The user creates all account types
    And The user checks number of accounts listed on the page
    And The user selects "<Account>" account type
    Then The user verifies that only "<Account>" account types are visible
    When The user resets filter
    Then All account types are listed
    Examples:
        | Account       |
        | Savings       |
        | Checking      |
        | Credit        |