import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { faker } from '@faker-js/faker';


export default class DMPSMPage {
    constructor(private page: Page) {

    }

    private Elements = {
        ReportMenu: "(//span[@class='mat-mdc-button-touch-target'])[3]",
        ReportDMPSM: "//a[contains(text(),'DMP SM')]",

        CaseOrgin: "//mat-label[text()='Case Origin']",
        ReportCompassManitou: "//a[contains(text(),'Compass & Manitou')]",

        CaseOrginOption: "//span[text()=' Security Manager ']",
        Action: "//mat-label[text()='Action']",
        ActionOption: "//span[text()=' Add ']",

        Status: "//mat-label[text()='Status']",
        StatusValue1: "//span[text()=' To be processed ']",
        StatusValue2: "//span[text()=' In Progress ']",
        StatusValue3: "//span[text()=' Success ']",
        StatusValue4: "//span[text()=' Failure ']",
        StatusValue5: "//span[text()=' Awaiting Retry ']",

        ProcessedDate: "//span[text()='Today']",
        ProcessedDateValue1: "//span[text()='Today']",
        ProcessedDateValue2: "//span[text()=' Weekly ']",
        ProcessedDateValue3: "//span[text()=' Monthly ']",
        ProcessedDateValue4: "//span[text()=' Custom ']",

        KeywordFilter: "//mat-label[text()='Keyword Filter']",

        ApplyFilter: "//span[text()=' Apply Filter ']",

        NoResultmessage: "//p[text()='No data available for applied filter']",

        ExportExcel: "//span[text()=' Export to Excel ']",
        NodataToast: "//div[@class='toast-bottom-right toast-container']",

        TitleListing: "(//td[@role='cell']//i)[1]",

        CaseQueueNumber: "(//div[@class='infoWrapper infoLeftWrapper']//span)[2]",

        ClosePopup: "(//span[@class='mat-mdc-button-touch-target'])[11]/.."
    }

    async navigatetomenu() {
        await this.page.click(this.Elements.ReportMenu);
        await this.page.click(this.Elements.ReportDMPSM);

    }

    async Alldropdowns_Happyflow() {
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.CaseOrgin);
        await this.page.click(this.Elements.CaseOrginOption);

        //await fixture.page.waitForTimeout(5000);
        //await this.page.click(this.Elements.CaseOrgin);
        //await this.page.click(this.Elements.CaseOrginValue1);

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Action);
        await this.page.click(this.Elements.ActionOption);

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Status);
        await this.page.click(this.Elements.StatusValue1);

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ProcessedDate);
        await this.page.click(this.Elements.ProcessedDateValue2);

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ApplyFilter);

        const Searchresult = await this.page.locator(this.Elements.NoResultmessage)
        if (await Searchresult.isVisible()) {

            const displayedmessage = await this.page.innerText(this.Elements.NoResultmessage)
            console.log(displayedmessage)

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.TitleListing);
            await fixture.page.waitForTimeout(5000);
            const casenumber = await this.page.innerText(this.Elements.CaseQueueNumber)
            console.log("Case queue number is " + casenumber)

        }

    }
}