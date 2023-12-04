Feature: Configuration module DMP Automation functionalities for APM application

    @CONFIGDMP
    Scenario Outline: Verify the Automation Configurations action for EC & Plano are working as expected
        Given user navigates to the APM application to access configurations menu - DMP Automation
        When user enter valid admin login credentials - DMP Automation
        Then user should login successfully as admin user - DMP Automation
        When choose DMP Automation from configurations menu
        Then verify the EC and Plano actions active to inactive or inversely