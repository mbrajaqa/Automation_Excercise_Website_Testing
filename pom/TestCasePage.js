import { expect } from '@playwright/test';

exports.TestCasePage = class TestCasePage {

    constructor(page){
        this.page = page;
        this.url = 'https://www.automationexercise.com/test_cases';

        //Locators:
        this.testCasesHeading = page.locator('b');

        //Values
        this.testCasesHeadingText = 'Test Cases';
    };

    async verifyTestCasesPageIsDisplayed(){
        await expect(this.testCasesHeading).toBeVisible();
        await expect(this.testCasesHeading).toContainText(this.testCasesHeadingText);
    };


};