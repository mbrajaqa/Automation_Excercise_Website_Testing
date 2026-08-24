import { test } from '@playwright/test';
import { HomePage } from '../pom/HomePage';
import { LoginPage} from '../pom/LoginPage';
import testUser from '../.lib/data/testUser.json';

test("Logout user", async({page})=>{

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
   
    await homePage.openHomePage();
    await homePage.verifyHomePageIsDisplayed();
    await homePage.clickOnSignupOrLoginLink();

    await loginPage.verifyTheLoginAccountHeading();
    await loginPage.login(testUser.data[0].valid_email, testUser.data[0].valid_password);

    await homePage.verifyUserNameInHomePage(testUser.data[0].name);
    await homePage.logout();
    
    await loginPage.verifyLoginPageIsDisplayed();


});


