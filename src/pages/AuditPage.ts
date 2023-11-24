import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { url } from "inspector";


export default class AuditPage {
    constructor(private page: Page) {

    }

    private Elements = {
        AuditMenu: "//a[contains(text(),'Audit')]",
        UserDropdown: "(//span[contains(@class,'mat-mdc-select-placeholder mat-mdc-select-min-line')])[2]",
        UserID: "//span[text()=' akhil.krishnan ']",
        ApplyButton: "//span[text()='Apply Filter']",
        ActivityField: "//table[contains(@class,'mat-mdc-table mdc-data-table__table')]",



    }

    async navigatetomenu() {
        await this.page.click(this.Elements.AuditMenu);

    }

    async chooseloginuser() {
        await this.page.click(this.Elements.UserDropdown);
        await this.page.click(this.Elements.UserID);
        await this.page.click(this.Elements.ApplyButton);

    }

    async verifyauditlog() {
        await fixture.page.waitForTimeout(5000);
        const locator = this.page.locator(this.Elements.ActivityField);
        await expect(locator).toHaveText(' User Role of sajitha.kunnath');
        const VerifyUserRole = await this.page.innerText(this.Elements.ActivityField);
        console.log(VerifyUserRole);
        await this.page.dblclick(this.Elements.ActivityField);
        await fixture.page.waitForTimeout(3000);

    }
}