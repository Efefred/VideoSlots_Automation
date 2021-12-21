Feature: Login

    User tries to login to access the Home page

    Scenario: User enters an invalid email and login fails
        Given User is on login page
        When  User types a an invalid username
        And   User clicks the Continue button
        Then  User should see an error message

    Scenario: User enters an invalid passord and login fails
        When  User types a valid username
        And   User types an invalid password
        And   User clicks the Sign in button
        Then  User should see an error message

    Scenario: User login is successful
        When  User types a valid username
        And   User hits the Enter key
        And   User types a valid password
        And   User hits the Enter key
        Then  User should see the Homepage    