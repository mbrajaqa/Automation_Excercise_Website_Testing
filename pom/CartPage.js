const { expect } = require ('@playwright/test');

class CartPage {

    constructor(page){

        this.page = page;

        this.subscriptionHeading = page.getByRole('heading', { name: 'Subscription' });
        this.subscribeEmail = page.getByPlaceholder('Your email address');
        this.subcribeButton = page.locator('#subscribe');
        this.subcribeSuccessMessage = page.getByText('You have been successfully subscribed!');
    };

    async verifySubscriptionHeadingIsDisplayed(){

        await expect(this.subscriptionHeading).toBeVisible();
        
    };

    async subscribe (email){

        await this.subscribeEmail.fill(email);
        await this.subcribeButton.click();
        
    };

    async verifySubscribeSuccessMessageIsDisplayed(){
        await expect(this.subcribeSuccessMessage).toBeVisible();
    };


};

module.exports = {CartPage};