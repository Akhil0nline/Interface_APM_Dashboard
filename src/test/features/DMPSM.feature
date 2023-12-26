Feature: Reports module DMP SM functionalities for APM application 

    @DMPSM
    Scenario Outline: Verify the DMP SM filter functionlaities are working as expected
        Given user navigates to the APM application to access reports menu - DMP SM
        When user enter valid admin login credentials to access reports - DMP SM
        Then user should login successfully as admin user to access reports - DMP SM
        When user select compass and manitou from reports menu - DMP SM
        Then verify the apply filters for reports compass and manituo - DMP SM
    
    @DMPSM
    Scenario Outline: Verify the DMP SM filter functionlaities are working as expected
        Given user navigates to the APM application to access reports menu - DMP SM
        When user enter valid admin login credentials to access reports - DMP SM
        Then user should login successfully as admin user to access reports - DMP SM
        When user select compass and manitou from reports menu - DMP SM
        Then click to export to excel and the validation message should displayed - DMP SM
    