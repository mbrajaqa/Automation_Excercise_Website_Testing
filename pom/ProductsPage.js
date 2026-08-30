const { expect } = require('@playwright/test');

class ProductsPage {
    constructor(page){
        this.page = page;

        //Locators:
        this.allProductsHeading = page.getByRole('heading', { name: 'All Products' });
        this.searchedProductsHeading = page.getByRole('heading', { name: 'Searched Products' });

        this.allProducts = page.locator('div.features_items >> div.col-sm-4');

        this.viewProductLink = this.allProducts.getByRole('link', {name:'View Product'});
        this.nameSection = this.allProducts.locator('p');

        this.searchBox = page.getByPlaceholder('Search Product');
        this.searchIcon = page.locator('#submit_search');
        
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

    async searchProduct (productName){
        await this.searchBox.fill(productName);
        await this.searchIcon.click();
    };

    async verifySearchedProductsHeadingIsDisplayed(){
        await expect(this.searchedProductsHeading).toBeVisible();
    };

    async verifySearchedProductIsDisplayed(productName){

        await this.verifySearchedProductsHeadingIsDisplayed();

        const names = await this.nameSection.allTextContents();
        expect(names.length).toBeGreaterThan(0);

        for (const name of names){
            expect(name.toLowerCase()).toContain(productName);
        };


    };
}

module.exports = {ProductsPage};