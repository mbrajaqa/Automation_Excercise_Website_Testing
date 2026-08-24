import { test } from '@playwright/test';

import { HomePage } from '../pom/HomePage';
import { LoginPage } from '../pom/LoginPage';

import testUser from '../.lib/data/testUser.json';

test ('Register user with exixting email', async({page})=>{

    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
   
    await homePage.openHomePage();
    await homePage.verifyHomePageIsDisplayed();
    await homePage.clickOnSignupOrLoginLink();

    await loginPage.verifyTheNewUserSignUpHeading();
    await loginPage.signup(testUser.data[0].name, testUser.data[0].valid_email);
    await loginPage.verifyEmailAlreadyExistMessage();

});





