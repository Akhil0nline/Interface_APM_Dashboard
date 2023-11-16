import { expect, Page } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrappers";
import { fixture } from "../hooks/pageFixture";
import { url } from "inspector";


export default class UserPage {
    private base: PlaywrightWrapper
    constructor(private page: Page) {
        this.base = new PlaywrightWrapper(page);
    }

    private Elements = {
    }

    async navigateToSite(Title: string) {
        await this.base.goto(process.env.BASEURL);
        await expect(this.page).toHaveTitle(Title);
    }
}