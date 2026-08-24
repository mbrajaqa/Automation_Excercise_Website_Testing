import { test } from '@playwright/test';

import { HomePage } from '../pom/HomePage';
import { LoginPage } from '../pom/LoginPage';

import testUser from '../.lib/data/testUser.json';

test('Login with correct email and password', async({page})=>{
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);

    await homePage.openHomePage();
    await homePage.verifyTheHomeLinkIsPresent();
    await homePage.clickOnSignupOrLoginLink();
    await loginPage.verifyLoginPageIsDisplayed();

    await loginPage.login(testUser.data[0].valid_email, testUser.data[0].valid_password);
    await homePage.verifyUserNameInHomePage(testUser.data[0].name);   

  });  

