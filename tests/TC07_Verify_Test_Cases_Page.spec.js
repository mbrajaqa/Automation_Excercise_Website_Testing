import { test } from '@playwright/test';

import { HomePage } from '../pom/HomePage';
import { TestCasePage } from '../pom/TestCasePage';

test('Verify Test Cases Page', async ({page}) => {

    const homePage = new HomePage(page);
    const testCasePage = new TestCasePage(page);

    await homePage.openHomePage();
    await homePage.clickOnTestCasesLink();

    await testCasePage.verifyTestCasesPageIsDisplayed();
})