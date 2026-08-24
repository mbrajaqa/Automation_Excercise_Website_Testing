const { expect } = require('@playwright/test');

class LoginPage {
    constructor (page) {
        this.page = page;
        this.url = 'https://automationexercise.com/login';
        
        //Locators
        this.newUserSignupHeading = page.getByRole('heading', { name: 'New User Signup!' });
        this.signupName = page.getByTestId('signup-name');
        this.signupEmail = page.getByTestId('signup-email');
        this.signupButton = page.getByTestId('signup-button');
        this.emailAlreadyExistMessage = page.getByText('Email Address already exist!',{exact: 'true'});


        this.loginAccountHeading = page.getByText('Login to your account');
        this.loginEmail = page.getByTestId('login-email');
        this.loginPassword = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-button');
        this.invalidLoginMessage = this.page.getByText('Your email or password is incorrect!',{exact: 'true'});


        //Values
        this.newUserSignUpHeadingText = 'New User Signup!';
        this.loginAccountHeadingText = 'Login to your account';
        
    };

    async verifyLoginPageIsDisplayed(){
        await expect(this.page).toHaveURL(/automationexercise\.com\/login/);
    };

    async openLoginPage(){
        await this.page.goto(this.url);
        //await this.page.waitForLoadState('networkidle');
        await this.verifyLoginPageIsDisplayed();
    };

    async verifyTheNewUserSignUpHeading(){
        await expect(this.newUserSignupHeading).toBeVisible();
        await expect(this.newUserSignupHeading).toContainText(this.newUserSignUpHeadingText);
    };

    async verifyTheLoginAccountHeading(){
        await expect(this.loginAccountHeading).toBeVisible();
        await expect(this.loginAccountHeading).toContainText(this.loginAccountHeadingText);
    };

    async signup(name, email){
        await this.verifyTheNewUserSignUpHeading();
        await this.signupName.fill(name);
        await this.signupEmail.fill(email);
        await this.signupButton.click();
        //await this.page.waitForLoadState('networkidle');
    };

    async login(email, password){
        await this.verifyTheLoginAccountHeading();
        await this.loginEmail.fill(email);
        await this.loginPassword.fill(password);
        await this.loginButton.click();
        //await this.page.waitForLoadState('networkidle');
    };

    async verifyInvalidLoginMessage(){

        await expect(this.invalidLoginMessage).toBeVisible();
    };

    async verifyEmailAlreadyExistMessage(){

        await expect(this.emailAlreadyExistMessage).toBeVisible();
    };


    

};

module.exports = { LoginPage };