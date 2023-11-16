import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(60 * 1000 * 2)

import * as data from "../../helper/util/test-data/SMdata.json";
import { fixture } from "../../hooks/pageFixture";
import Auditlog from "../../pages/AuditPage";

let AuditPage: Auditlog

Then('go to audit menu and search for the user', async function () {
    AuditPage = new Auditlog(fixture.page);
    await AuditPage.navigateToSite(data.Title);

})

Then('verify the audit log for the respective user', async function () {
    await AuditPage.navigateToSite(data.Title);
})
