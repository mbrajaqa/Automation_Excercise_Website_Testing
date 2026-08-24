import { expect } from '@playwright/test';

exports.HomePage = class HomePage {
    constructor (page) {
        this.page = page;
        this.url = 'https://automationexercise.com/';

        //Locators
        this.homePageLink = page.locator('#header');
        this.signupOrLoginLink = page.getByRole('link', { name: ' Signup / Login' });
        this.loggedInAsUser = page.getByText('Logged in as ');
        this.deleteLink = page.getByRole('link', { name: 'Delete Account' });
        this.logoutLink = page.getByText('Logout');

        //Values
        this.homePageLinkText = 'Home';
        
        
    };

    async openHomePage (){

        await this.page.goto(this.url);
        //await this.page.waitForLoadState('networkidle');
        await this.verifyHomePageIsDisplayed();

    };

    async verifyHomePageIsDisplayed() {
        
        await expect(this.page).toHaveURL(this.url);
    };

    async verifyTheHomeLinkIsPresent(){

        await expect(this.homePageLink).toContainText(this.homePageLinkText);
    };
    
    async clickOnSignupOrLoginLink(){

        await this.signupOrLoginLink.click();
        await this.page.waitForLoadState('networkidle');
    };


    async verifyUserNameInHomePage(name){

        await expect(this.loggedInAsUser).toContainText(name);
    };

    async deleteAccount(){
        
        await this.deleteLink.click();
        await this.page.waitForLoadState('networkidle');
    };

    async logout(){
        await this.logoutLink.click();
        await this.page.waitForLoadState('networkidle');
    }


};