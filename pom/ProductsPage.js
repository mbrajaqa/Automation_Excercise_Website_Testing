import { expect } from '@playwright/test';

exports.ProductsPage = class ProductsPage {
    constructor(page){
        this.page = page;

        //Locators:
        this.allProductsHeading = page.getByRole('heading', { name: 'All Products' });
        this.allProducts = page.locator('.col-sm-4');
        this.viewProductLink = this.allProducts.getByRole('link', {name:'View Product'});
        
    };

    async verifyAllProductsPageIsDisplayed(){
        await expect(this.allProductsHeading).toBeVisible();
    };

    async verifyProductListDisplayed(){
        await expect(this.allProducts.last()).toBeVisible();
    };

    async clickOnViewProduct (productNumber){
        await this.viewProductLink.nth(productNumber).click();
    };
}