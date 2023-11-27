Feature: Dashboard Queue module functionalities for APM application

    @APMQUEUE
    Scenario Outline: Verify the Queue functionality for APM is working as expected
        Given user navigates to the application to access Queue
        When user enter valid login credentials to access Queue
        Then user should login successfully with valid login to access Queue
        When go to the Queue menu in the application
        Then apply filter and verify the search result for queue
