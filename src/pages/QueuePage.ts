import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { url } from "inspector";


export default class QueuePage {
    constructor(private page: Page) {

    }

    private Elements = {

        QueueMenu: "//a[contains(text(),'Queue')]",
        Dropdown1: "//mat-label[text()='Case Origin']",
        Option1: "//span[text()=' Security Manager ']",
        Option2: "//span[text()=' DG Alarm Portal ']",
        Option3: "//span[text()=' DG Security Manager ']",
        Dropdown2: "//mat-label[text()='Status']",
        DropOption1: "//span[text()=' To be processed ']",
        ApplyFilter: "//span[text()='Apply Filter']",
        Statusupdate: "(//i[text()='update'])[1]",
        CaseOrginText: "(//td[@role='cell'])[2]",
        NodataText: "//p[text()='No data available for applied filter']"


    }



    async navigatetomenu() {
        await this.page.click(this.Elements.QueueMenu);

    }

    async securitymanagerfilter() {
        await this.page.click(this.Elements.Dropdown1);
        await this.page.click(this.Elements.Option1);
        await this.page.click(this.Elements.Dropdown2);
        await this.page.click(this.Elements.DropOption1);
        await this.page.click(this.Elements.ApplyFilter);

        await fixture.page.waitForTimeout(5000);
        const myElement = this.page.locator(this.Elements.Statusupdate)
        if (await myElement.isVisible()) {
            const SearchResult = await this.page.innerText(this.Elements.CaseOrginText);
            console.log(SearchResult);
        }
        else {
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.NodataText);
            await expect(locator).toMatch("No data available for applied filter");
            const TitleTable = await this.page.innerText(this.Elements.NodataText);
            console.log(TitleTable);

        }

    }

    async DGalarmportalfilter() {
        await this.page.click(this.Elements.Dropdown1);
        await this.page.click(this.Elements.Option2);
        //await this.page.click(this.Elements.Dropdown2);
        //await this.page.click(this.Elements.DropOption1);
        await this.page.click(this.Elements.ApplyFilter);

        await fixture.page.waitForTimeout(5000);
        const myElement = this.page.locator(this.Elements.Statusupdate)
        if (await myElement.isVisible()) {
            const SearchResult = await this.page.innerText(this.Elements.CaseOrginText);
            console.log(SearchResult);
        }
        else {
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.NodataText);
            await expect(locator).toMatch("No data available for applied filter");
            const TitleTable = await this.page.innerText(this.Elements.NodataText);
            console.log(TitleTable);

        }

    }

    async DGSecurityManagerfilter() {
        await this.page.click(this.Elements.Dropdown1);
        await this.page.click(this.Elements.Option3);
        //await this.page.click(this.Elements.Dropdown2);
        //await this.page.click(this.Elements.DropOption1);
        await this.page.click(this.Elements.ApplyFilter);

        await fixture.page.waitForTimeout(5000);
        const myElement = this.page.locator(this.Elements.Statusupdate)
        if (await myElement.isVisible()) {
            const SearchResult = await this.page.innerText(this.Elements.CaseOrginText);
            console.log(SearchResult);
        }
        else {
            await fixture.page.waitForTimeout(5000);
            const locator = await this.page.innerText(this.Elements.NodataText);
            await expect(locator).toMatch("No data available for applied filter");
            const TitleTable = await this.page.innerText(this.Elements.NodataText);
            console.log(TitleTable);

        }
    }


}