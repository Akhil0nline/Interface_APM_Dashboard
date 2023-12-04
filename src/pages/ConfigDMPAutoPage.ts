import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { faker } from '@faker-js/faker';


export default class ConfigDMPAutoPage {
    constructor(private page: Page) {

    }

    private Elements = {
        ConfigurationsMenu: "(//span[@class='mat-mdc-button-touch-target'])[4]",
        DMPAutomation: "//a[contains(text(),'DMP Automation')]",
        RadiobuttonEC: "(//div[@class='mdc-switch__ripple'])[1]",
        RadiobuttonPlano: "(//div[@class='mdc-switch__ripple'])[2]",
        PopupStop: "//span[text()='Stop']",
        PopupStart: "//span[text()='Start']",
        CurrentStatus1: "//tbody/tr[1]/td[4]",
        CurrentStatus2: "//tbody/tr[2]/td[4]",
        Toastmessage: "//div[contains(text(),'Successfully updated robot information ')]",
        FailureThreshold: "//span[text()='Failure Threshold']",
        SerialNumber: "//td[contains(text(),'1')]",
        EditAction: "//i[contains(text(),'create')]",
        Valuefield: "//input[@placeholder='Value']",
        CommentBox: "//textarea[@placeholder='Comment']",
        PopupTitle: "//h2[text()='Edit Configuration']",
        SubmitButton: "//span[text()='Submit']",
        CancelButton: "//span[text()='Cancel']",
    }


    async navigatetomenu() {
        await this.page.click(this.Elements.ConfigurationsMenu);
        await this.page.click(this.Elements.DMPAutomation);


    }

    async Automation_EC() {


        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.RadiobuttonEC);

        const Status = await this.page.locator(this.Elements.PopupStart)
        if (await Status.isVisible()) {

            await this.page.click(this.Elements.PopupStart);
            await fixture.page.waitForTimeout(5000);
            const Toast = await this.page.locator(this.Elements.Toastmessage);
            if (await Toast.isVisible()) {
                console.log("Passed : Toastmessage displayed as " + Toast)

            } else {
                console.log("Failed : Toastmessage is not displayed")

            }
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.CurrentStatus1);
            console.log("Automation EC current status is " + locator);

        }
        else {
            await this.page.click(this.Elements.PopupStop);
            await fixture.page.waitForTimeout(5000);
            const Toast = await this.page.locator(this.Elements.Toastmessage);
            if (await Toast.isVisible()) {
                console.log("Passed : Toastmessage displayed as " + Toast)

            } else {
                console.log("Failed : Toastmessage is not displayed")

            }
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.CurrentStatus1);
            console.log("Automation EC current status is " + locator);

        }

    }


    async Automation_Plano() {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.RadiobuttonPlano);

        const Status = await this.page.locator(this.Elements.PopupStart)
        if (await Status.isVisible()) {

            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PopupStart);
            const Toast = await this.page.locator(this.Elements.Toastmessage);
            if (await Toast.isVisible()) {
                console.log("Passed : Toastmessage displayed as " + Toast)

            } else {
                console.log("Failed : Toastmessage is not displayed")

            }
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.CurrentStatus2);
            console.log("Automation Plano current status is " + locator);

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.PopupStop);
            const Toast = await this.page.locator(this.Elements.Toastmessage);
            if (await Toast.isVisible()) {
                console.log("Passed : Toastmessage displayed as " + Toast)

            } else {
                console.log("Failed : Toastmessage is not displayed")

            }
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.CurrentStatus2);
            console.log("Automation Plano current status is " + locator);

        }

    }

    async FailureThreshold() {

        await fixture.page.waitForTimeout(5000);
        const Status = await this.page.locator(this.Elements.SerialNumber)
        if (await Status.isVisible()) {
            await this.page.click(this.Elements.EditAction);
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.Valuefield);
            await fixture.page.waitForTimeout(5000);
            await this.page.keyboard.press('Backspace');
            await this.page.type(this.Elements.Valuefield, "4")
            await this.page.click(this.Elements.CommentBox);
            await fixture.page.waitForTimeout(5000);
            const testcomments = faker.commerce.productDescription()
            await this.page.type(this.Elements.CommentBox, testcomments)
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.SubmitButton);

            const Update = await this.page.innerText(this.Elements.Toastmessage);
            console.log(Update);

            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.EditAction);
            await this.page.click(this.Elements.Valuefield);
            await fixture.page.waitForTimeout(5000);
            await this.page.keyboard.press('Backspace');
            await this.page.type(this.Elements.Valuefield, "5")
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.CommentBox);
            await this.page.locator(this.Elements.CommentBox).clear();
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.SubmitButton);

        }
        else {
            console.log("Edit option is not available");

        }
    }

    async FieldValidations() {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.FailureThreshold);
        await this.page.click(this.Elements.EditAction);
        await this.page.click(this.Elements.Valuefield);
        await fixture.page.waitForTimeout(5000);
        await this.page.keyboard.press('Backspace');
        await this.page.click(this.Elements.SubmitButton);

        const BoxText = await this.page.locator(this.Elements.PopupTitle);
        if (await BoxText.isVisible()) {

            console.log("Empty value validation passed");

        } else {

            console.log("Empty value accepted : The Field validation is failed")

        }

        await this.page.click(this.Elements.CancelButton);


    }

    async MaxlimitField() {

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.FailureThreshold);
        await this.page.click(this.Elements.EditAction);
        await this.page.click(this.Elements.Valuefield);
        await fixture.page.waitForTimeout(5000);
        await this.page.keyboard.press('Backspace');
        await this.page.type(this.Elements.Valuefield, "6")
        await this.page.click(this.Elements.SubmitButton);

        const BoxText = await this.page.locator(this.Elements.EditAction);
        if (await BoxText.isVisible()) {

            console.log("Max count of 5 exceeded field validation passed");

        } else {

            console.log("Max count of 5 exceeded : The Field validation is failed")

        }

        await this.page.click(this.Elements.CancelButton);


    }
}