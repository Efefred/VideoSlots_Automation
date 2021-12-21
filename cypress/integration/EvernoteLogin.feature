Feature: Login

    User tries to login to access the Home page

    Scenario: User login is unsuccessful
        Given User is on login page
        When  User types a an invalid username "<Username>"
        And   User hits the Enter key
        Then  User should see an error message

        Example:
            | Username           | 
            | speakinginrhymes@  |  

    Scenario: User login is unsuccessful
        When  User types an invalid password "<Password"
        And   User hits the Enter key
        Then  User should see an error message 

        Examples:
            | Username                    | Password | 
            | speakinginrhymes@gmail.com  | !YAF_7   | 

    Scenario: User login is successful
        When  User types a valid username
        And   User hits the Enter key
        And   User types a valid password
        And   User hits the Enter key
        Then  User should see the Homepage

        Examples:
            | Username                   | Password         | 
            | speakinginrhymes@gmail.com | !YAF_7RPZCm7gt5  | 
