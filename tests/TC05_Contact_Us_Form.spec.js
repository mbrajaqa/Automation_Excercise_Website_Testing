import { test } from '@playwright/test';
import { HomePage } from '../pom/HomePage';
import { ContactUsPage} from '../pom/ContactUsPage';

const contactUsData = require("../.lib/data/contactUsData.json");
const filePath = 'C:/Users/manob/AutomationExcerciseWebsiteTesting/Automation_Excercise_Website_Testing/.lib/data/test.txt';

test('Contact Us Form Testing', async ({page}) => {

    const homePage = new HomePage(page);
    const contactUsPage = new ContactUsPage(page);

    await homePage.openHomePage();
    await homePage.verifyHomePageIsDisplayed();
    await homePage.contactUs();

    await contactUsPage.verifyGetInTouchHeadingIsVisible();
    await contactUsPage.enterName(contactUsData.data[0].name);
    await contactUsPage.enterEmail(contactUsData.data[0].email);
    await contactUsPage.enterSubject(contactUsData.data[0].subject);
    await contactUsPage.enterMessage(contactUsData.data[0].message);
    await contactUsPage.uploadTheFile();
    await contactUsPage.submit();
    await contactUsPage.verifySuccessMessage();

   
 
});
