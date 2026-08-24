const { stat } = require("node:fs");

exports.SignUpPage = class SignUpPage {
    constructor (page) {
        this.page = page;
        this.url = 'https://www.automationexercise.com/signup';


        //Locators
        this.Mr = page.getByTestId('title').first();
        this.Mrs = page.getByTestId('title').last();
        this.password = page.getByTestId('password');
        this.days = page.getByTestId('days');
        this.months = page.getByTestId('months');
        this.years = page.getByTestId('years');
        this.newsLetterCheckBox = page.getByRole('checkbox', { name: 'Sign up for our newsletter!' });
        this.specialOfferCheckBox =page.getByRole('checkbox', { name: 'Receive special offers from' });
        this.firstName = page.getByTestId('first_name');
        this.lastName = page.getByTestId('last_name');
        this.company = page.getByTestId('company');
        this.address1 = page.getByTestId('address');
        this.address2 = page.getByTestId('address2');
        this.country = page.getByTestId('country');
        this.state = page.getByTestId('state');
        this.city = page.getByTestId('city');
        this.zipCode = page.getByTestId('zipcode');
        this.mobileNumber = page.getByTestId('mobile_number');
        this.createAccountButton = page.getByTestId('create-account');
    };

    async selectTitle(gender){
        if(gender === 'Mr.'){
            await this.Mr.click();
        } else {
            await this.Mrs.click();
        }

    };

    async enterPassword(password){
        await this.password.fill(password);
    };

    async selectDate(date){
        await this.days.selectOption(date);
    };

    async selectMonth(month){
        await this.months.selectOption(month);
    };

    async selectYear(year){
        await this.years.selectOption(year);
    };

    async checkNewsLetterCheckbox(){
        await this.newsLetterCheckBox.click();
    };

    async checkSpecialOfferCheckbox(){
        await this.specialOfferCheckBox.click();
    };

    async enterFirstName(firstName){
        await this.firstName.fill(firstName);
    };

    async enterlastName(lastName){
        await this.lastName.fill(lastName);
    };

    async enterCompany(company){
        await this.company.fill(company);
    };

    async enterAddress(address){
        await this.address1.fill(address);
    };

    async enterAddress2(address2){
        await this.address2.fill(address2);
    };

    async selectCountry(country){
        await this.country.selectOption(country);
    };

    async enterState(state){
        await this.state.fill(state);
    };

    async enterCity(city){
        await this.city.fill(city);
    };

    async enterZipCode(zipCode){
        await this.zipCode.fill(zipCode);
    };

    async enterMobileNumber(mobileNumber){
        await this.mobileNumber.fill(mobileNumber);
    };

    async createAccount(){
        await this.createAccountButton.click();
        await this.page.waitForLoadState('networkidle');
    };

};