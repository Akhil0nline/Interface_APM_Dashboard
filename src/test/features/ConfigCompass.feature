Feature: Configuration module Compass and Manituo functionalities for APM application

    @CONFIG
    Scenario Outline: Verify the Bot Configurations action for all the bots are working as expected
        Given user navigates to the APM application to access configurations menu
        When user enter valid admin login credentials for APM
        Then user should login successfully as admin user
        When choose compass and manitou from configurations menu
        Then verify the bot actions active to inactive or inversely