import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)

import * as data from "../../helper/util/test-data/SMdata.json";
import { fixture } from "../../hooks/pageFixture";
import QueueMenu from "../../pages/QueuePage";
import UserMenu from "../../pages/UserPage";

let QueuePage: QueueMenu
let UserPage: UserMenu

Given('user navigates to the application to access Queue', async function () {
    UserPage = new UserMenu(fixture.page);
    QueuePage = new QueueMenu(fixture.page);
    await UserPage.navigateToSite(data.Title);

})

When('user enter valid login credentials to access Queue', async () => {

    await UserPage.enterUsername(data.userName);
    await UserPage.enterPassword(data.password);

})

Then('user should login successfully with valid login to access Queue', async () => {

    await UserPage.ClickLogin();

})

When('go to the Queue menu in the application', async () => {

    await QueuePage.navigatetomenu();

})

Then('apply filter and verify the search result for queue', async () => {

    await QueuePage.securitymanagerfilter();
    await QueuePage.DGalarmportalfilter();
    await QueuePage.DGSecurityManagerfilter();

})


