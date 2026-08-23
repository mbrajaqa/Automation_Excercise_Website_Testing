import { expect } from '@playwright/test';

exports.LoginPage = class LoginPage {
    constructor (page) {
        this.page = page;
        this.url = 'https://www.automationexercise.com/login';
        
        //Locators
        this.newUserSignupHeading = page.getByRole('heading', { name: 'New User Signup!' });
        this.signupName = page.getByTestId('signup-name');
        this.signupEmail = page.getByTestId('signup-email');
        this.signupButton = page.getByTestId('signup-button');


        //Values
        this.newUserSignUpHeadingText = 'New User Signup!';
        
    };

    

    async verifyTheNewUserSignUpHeading(){
        await expect(this.newUserSignupHeading).toBeVisible();
        await expect(this.newUserSignupHeading).toContainText(this.newUserSignUpHeadingText);
    };

    async signup(name, email){
        await this.signupName.fill(name);
        await this.signupEmail.fill(email);
        await this.signupButton.click();
    };

};