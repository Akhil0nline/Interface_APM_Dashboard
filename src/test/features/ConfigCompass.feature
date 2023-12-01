Feature: Configuration module Compass and Manituo functionalities for APM application

    @CONFIG
    Scenario Outline: Verify the Bot Configurations action for all the bots are working as expected
        Given user navigates to the APM application to access configurations menu
        When user enter valid admin login credentials for APM
        Then user should login successfully as admin user
        When choose compass and manitou from configurations menu
        Then verify the bot actions active to inactive or inversely

    @CONFIG
    Scenario Outline: Verify the Bot Configurations primary role changes are working as expected
        Given user navigates to the APM application to access configurations menu
        When user enter valid admin login credentials for APM
        Then user should login successfully as admin user
        When choose compass and manitou from configurations menu
        Then change and verify the primary role for the bots

    @CONFIG1
    Scenario Outline: Verify the Failure Threshold field validations are working as expected
        Given user navigates to the APM application to access configurations menu
        When user enter valid admin login credentials for APM
        Then user should login successfully as admin user
        When choose compass and manitou from configurations menu
        Then verify the max count and blank field validations

    @CONFIG0
    Scenario Outline: Verify the Failure Threshold action for all the bots are working as expected
        Given user navigates to the APM application to access configurations menu
        When user enter valid admin login credentials for APM
        Then user should login successfully as admin user
        When choose compass and manitou from configurations menu
        Then verify the failue threshold edit actions

