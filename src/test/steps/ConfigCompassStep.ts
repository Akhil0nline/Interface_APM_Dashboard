import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)

import * as data from "../../helper/util/test-data/SMdata.json";
import { fixture } from "../../hooks/pageFixture";
import CompassTest from "../../pages/ConfigCompassPage";
import UserMenu from "../../pages/UserPage";

let ConfigCompassPage: CompassTest
let UserPage: UserMenu

Given('user navigates to the APM application to access configurations menu', async function () {
    UserPage = new UserMenu(fixture.page);
    ConfigCompassPage = new CompassTest(fixture.page);
    await UserPage.navigateToSite(data.Title);

})

When('user enter valid admin login credentials for APM', async () => {

    await UserPage.enterUsername(data.userName);
    await UserPage.enterPassword(data.password);

})

Then('user should login successfully as admin user', async () => {

    await UserPage.ClickLogin();

})

When('choose compass and manitou from configurations menu', async () => {

    await ConfigCompassPage.navigatetomenu();

})

Then('verify the bot actions active to inactive or inversely', async () => {

    await ConfigCompassPage.ECBot1();
    await ConfigCompassPage.ECBot2();
    await ConfigCompassPage.PlanoBot3();
    await ConfigCompassPage.ECVirtualBot();
    await ConfigCompassPage.PlanoVirtualBot();

})