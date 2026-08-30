const { expect } = require("@playwright/test");

class ProductDetailsPage{
    constructor(page) {

        this.page = page;
        this.url = 'https://www.automationexercise.com/product_details/1';

        //Locators
        this.productName = page.locator('.product-information >> h2');
        this.category = page.getByText('Category: ');
        this.price = page.getByText('Rs. ');
        this.availability = page.getByText('Availability: ');
        this.condition = page.getByText('Condition: ');
        this.brand = page.getByText('Brand: ');

        //Valus

    };

    async verifyUserIsLandedOnProductDetailsPage(productNumber){
        await expect(this.page).toHaveURL(
            new RegExp(`automationexercise\\.com/product_details/${productNumber}`)
        );
    };

    async verifyTheProductDetails(productName, category, price, availability, condition, brand){

        await expect(this.productName).toContainText(productName);
        await expect(this.category).toContainText(category);
        await expect(this.price).toContainText(price);
        //await expect(this.availability).toContainText(availability);
        // await expect(this.condition).toContainText(condition);
        // await expect(this.brand).toContainText(brand);
    }

    


};

module.exports = {ProductDetailsPage};