@login @banking
Feature: Login Page Test Scenarios

Scenario: [TC-LOGIN-01] Successful Login With Admin Credentials
    Given The user is navigated to the bank homepage
    When "ADMIN_USER" fills Credentials
    And The user clicks "LOGIN" button
    Then The user is redirected to the bank dashboard

@regress
Scenario: [TC-LOGIN-02] Failed Login Shows Error Alert For Invalid Credentials
    Given The user is navigated to the bank homepage
    When "WRONG_USER" fills Credentials
    And The user clicks "LOGIN" button
    Then The system generates an error alert
        
@regress
Scenario: [TC-LOGIN-03] Toggle Password Visibility
    Given The user is navigated to the bank homepage
    When "WRONG_USER" fills Credentials
    Then The password field type is "password"
    When The user clicks "TOGGLE" button
    Then The password field type is "text"
    When The user clicks "TOGGLE" button
    Then The password field type is "password"

Scenario: [TC-LOGIN-04] Pressing Enter In The Password Field Submits The Login Form
    Given The user is navigated to the bank homepage
    When "ADMIN_USER" fills Credentials
    And The user presses "Enter" key
    Then The user is redirected to the bank dashboard

@regress
Scenario: [TC-LOGIN-05] Read-Only Viewer Login Grants Restricted Access
    Given The user is navigated to the bank homepage
    When "VIEWER_USER" fills Credentials
    And The user clicks "LOGIN" button
    Then The user is redirected to the bank dashboard
    Then The Read-Only user can see the viewer badge and correct role indicator
    When The user is navigated to the "Accounts" Page
    Then The Read-Only user cannot see Edit and Delete Accounts buttons
