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

    // 1. Launch browser
    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Signup / Login' button
    // 5. Verify 'New User Signup!' is visible
    // 6. Enter name and already registered email address
    // 7. Click 'Signup' button
    // 8. Verify error 'Email Address already exist!' is visible

});





