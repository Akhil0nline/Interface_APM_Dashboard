import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { faker } from '@faker-js/faker';


export default class ReportCompassPage {
    constructor(private page: Page) {

    }

    private Elements = {

        ReportMenu: "(//span[@class='mat-mdc-button-touch-target'])[3]",
        ReportCompassManitou: "//a[contains(text(),'Compass & Manitou')]",

        Dropdown1: "//div[@class='mat-mdc-form-field-infix ng-tns-c5-33']",
        Drop1Value1: "//span[text()=' Case ']",
        Drop1Value2: "//span[text()=' Excel ']",

        CaseOrgin: "//mat-label[text()='Case Origin']",
        CaseOrginValue1: "//span[text()=' Security Manager ']",
        CaseOrginValue2: "//span[text()=' DG Alarm Portal ']",
        CaseOrginValue3: "//span[text()=' DG Security Manager ']",

        Status: "//mat-label[text()='Status']",
        StatusValue1: "//span[text()=' To be processed ']",
        StatusValue2: "//span[text()=' In Progress ']",
        StatusValue3: "//span[text()=' Success ']",
        StatusValue4: "//span[text()=' Failure ']",
        StatusValue5: "//span[text()=' Awaiting Retry ']",

        Robot: "//mat-label[text()='Robot']",
        RobotValue1: "//span[text()='EC Bot 1 ']",
        RobotValue2: "//span[text()='EC Bot 2 ']",
        RobotValue3: "//span[text()='Plano Bot 3 ']",
        RobotValue4: "//span[text()='EC Virtual Bot ']",
        RobotValue5: "//span[text()='Plano Virtual Bot ']",

        ProcessedDate: "//span[text()='Today']",
        ProcessedDateValue1: "//span[text()='Today']",
        ProcessedDateValue2: "//span[text()=' Weekly ']",
        ProcessedDateValue3: "//span[text()=' Monthly ']",
        ProcessedDateValue4: "//span[text()=' Custom ']",

        CustomDateFrom: "(//span[@class='mat-mdc-button-touch-target'])[6]",
        FromDateSelected: "//tbody/tr[1]/td[2]/button[1]/span[1]",
        ToDateSelected: "//span[contains(text(),'11')]",
        CustomDateTo: "(//span[@class='mat-mdc-button-touch-target'])[7]",

        KeywordFilter: "//mat-label[text()='Keyword Filter']",

        ApplyFilter: "//span[text()=' Apply Filter ']",

        NoResultmessage: "//p[text()='No data available for applied filter']",

        ExportExcel: "//span[text()=' Export to Excel ']",
        NodataToast: "//div[@class='toast-bottom-right toast-container']",

        TitleListing: "(//td[@role='cell']//i)[1]",

        CaseQueueNumber: "(//div[@class='infoWrapper infoLeftWrapper']//span)[2]"



    }


    async navigatetomenu() {
        await this.page.click(this.Elements.ReportMenu);
        await this.page.click(this.Elements.ReportCompassManitou);

    }

    async Alldropdowns_Happyflow() {


        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Dropdown1);
        await this.page.click(this.Elements.Drop1Value2);

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.CaseOrgin);
        await this.page.click(this.Elements.CaseOrginValue1);

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Status);
        await this.page.click(this.Elements.StatusValue1);

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Robot);
        await this.page.click(this.Elements.RobotValue1);

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ProcessedDate);
        await this.page.click(this.Elements.ProcessedDateValue1);

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ApplyFilter);

        const Searchresult = await this.page.locator(this.Elements.NoResultmessage)
        if (await Searchresult.isVisible()) {


            console.log(this.page.innerText(this.Elements.NoResultmessage))

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.TitleListing);
            await fixture.page.waitForTimeout(5000);
            const casenumber = await this.page.innerText(this.Elements.CaseQueueNumber)
            console.log("Case queue number is " + casenumber)


        }


    }

    async Reportbaseddropdown() {

        await this.page.click(this.Elements.Dropdown1);
        await this.page.click(this.Elements.Drop1Value1);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ApplyFilter);

        const Searchresult = await this.page.locator(this.Elements.NoResultmessage)
        if (await Searchresult.isVisible()) {


            console.log(this.page.innerText(this.Elements.NoResultmessage))

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.TitleListing);
            await fixture.page.waitForTimeout(5000);
            const casenumber = await this.page.innerText(this.Elements.CaseQueueNumber)
            console.log("Case queue number is " + casenumber)


        }

    }

    async Caseorgindropdown() {

        await this.page.click(this.Elements.CaseOrgin);
        await this.page.click(this.Elements.CaseOrginValue2);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ApplyFilter);

        const Searchresult = await this.page.locator(this.Elements.NoResultmessage)
        if (await Searchresult.isVisible()) {


            console.log(this.page.innerText(this.Elements.NoResultmessage))

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.TitleListing);
            await fixture.page.waitForTimeout(5000);
            const casenumber = await this.page.innerText(this.Elements.CaseQueueNumber)
            console.log("Case queue number is " + casenumber)


        }

    }

    async Statusdropdown() {

        await this.page.click(this.Elements.Status);
        await this.page.click(this.Elements.StatusValue2);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ApplyFilter);

        const Searchresult = await this.page.locator(this.Elements.NoResultmessage)
        if (await Searchresult.isVisible()) {


            console.log(this.page.innerText(this.Elements.NoResultmessage))

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.TitleListing);
            await fixture.page.waitForTimeout(5000);
            const casenumber = await this.page.innerText(this.Elements.CaseQueueNumber)
            console.log("Case queue number is " + casenumber)


        }

    }

    async Robotdropdown() {

        await this.page.click(this.Elements.Robot);
        await this.page.click(this.Elements.RobotValue2);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ApplyFilter);

        const Searchresult = await this.page.locator(this.Elements.NoResultmessage)
        if (await Searchresult.isVisible()) {


            console.log(this.page.innerText(this.Elements.NoResultmessage))

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.TitleListing);
            await fixture.page.waitForTimeout(5000);
            const casenumber = await this.page.innerText(this.Elements.CaseQueueNumber)
            console.log("Case queue number is " + casenumber)


        }

    }

    async Processeddatedropdown() {

        await this.page.click(this.Elements.ProcessedDate);
        await this.page.click(this.Elements.ProcessedDateValue2);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ApplyFilter);

        const Searchresult = await this.page.locator(this.Elements.NoResultmessage)
        if (await Searchresult.isVisible()) {


            console.log(this.page.innerText(this.Elements.NoResultmessage))

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.TitleListing);
            await fixture.page.waitForTimeout(5000);
            const casenumber = await this.page.innerText(this.Elements.CaseQueueNumber)
            console.log("Case queue number is " + casenumber)


        }

    }

    async CustomProcesseddate() {

        await this.page.click(this.Elements.ProcessedDate);
        await this.page.click(this.Elements.ProcessedDateValue4);
        await this.page.click(this.Elements.CustomDateFrom);
        await this.page.click(this.Elements.FromDateSelected);
        await this.page.click(this.Elements.CustomDateTo);
        await this.page.click(this.Elements.ToDateSelected);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ApplyFilter);

        const Searchresult = await this.page.locator(this.Elements.NoResultmessage)
        if (await Searchresult.isVisible()) {

            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.TitleListing);
            await fixture.page.waitForTimeout(5000);
            const casenumber = await this.page.innerText(this.Elements.CaseQueueNumber)
            console.log("Case queue number is " + casenumber)

        }
        else {

            console.log(this.page.innerText(this.Elements.NoResultmessage))


        }
    }

    async Alldropdowns_Negative() {


        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Dropdown1);
        await this.page.click(this.Elements.Drop1Value2);

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.CaseOrgin);
        await this.page.click(this.Elements.CaseOrginValue1);

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Status);
        await this.page.click(this.Elements.StatusValue1);

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.Robot);
        await this.page.click(this.Elements.RobotValue1);

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ProcessedDate);
        await this.page.click(this.Elements.ProcessedDateValue4);
        await this.page.click(this.Elements.CustomDateFrom);
        await this.page.click(this.Elements.FromDateSelected);
        await this.page.click(this.Elements.CustomDateTo);
        await this.page.click(this.Elements.ToDateSelected);

        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ExportExcel);

        const Searchresult = await this.page.locator(this.Elements.NoResultmessage)
        if (await Searchresult.isVisible()) {


            console.log(this.page.innerText(this.Elements.NodataToast) + "Testcase is failed")

        }
        else {
            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.TitleListing);
            await fixture.page.waitForTimeout(5000);
            const casenumber = await this.page.innerText(this.Elements.CaseQueueNumber)
            console.log("Testcase is passed and the case queue number is " + casenumber)

        }
    }

    async KeywordFilter(Keyword: string) {
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ProcessedDate);
        await this.page.click(this.Elements.ProcessedDateValue2);
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.KeywordFilter);
        await this.page.type(this.Elements.KeywordFilter, Keyword)
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ApplyFilter);

        const Searchresult = await this.page.locator(this.Elements.NoResultmessage)
        if (await Searchresult.isVisible()) {

            await fixture.page.waitForTimeout(5000);
            await this.page.click(this.Elements.TitleListing);
            await fixture.page.waitForTimeout(5000);
            const casenumber = await this.page.innerText(this.Elements.CaseQueueNumber)
            console.log("Case queue number is " + casenumber)

        }
        else {

            console.log(this.page.innerText(this.Elements.NoResultmessage))

        }

    }

    async CustomNodateselected() {
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ProcessedDate);
        await this.page.click(this.Elements.ProcessedDateValue4)
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ApplyFilter)

        const Searchresult = await this.page.locator(this.Elements.NodataToast)
        if (await Searchresult.isVisible()) {

            console.log(this.page.innerText(this.Elements.NodataToast) + "Testcase is passed")

        }
        else {
            await fixture.page.waitForTimeout(5000);
            console.log("No validation for blank date search : Testcase is failed")

        }
    }

    async Excelexportwithdata() {
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ExportExcel);
    }

    async NodataExcelexport() {
        await fixture.page.waitForTimeout(5000);
        await this.page.click(this.Elements.ExportExcel)
        const Searchresult = await this.page.locator(this.Elements.NodataToast)
        if (await Searchresult.isVisible()) {

            console.log(this.page.innerText(this.Elements.NodataToast) + "Testcase is passed")

        }
        else {
            await fixture.page.waitForTimeout(5000);
            console.log("Excel exported without data : Testcase is failed")

        }
    }
}