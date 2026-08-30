const { test } = require('@playwright/test');

const { HomePage } = require ('../pom/HomePage');
const { ProductsPage } = require ('../pom/ProductsPage');
const { ProductDetailsPage } = require ('../pom/ProductDetailsPage');

import productDetails from '../.lib/data/productDetails.json';

test('Search Product', async ({page}) => {

    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const searchText = 'bl';

    await homePage.openHomePage();
    await homePage.verifyHomePageIsDisplayed();
    await homePage.clickOnProductsLink();

    await productsPage.verifyAllProductsPageIsDisplayed();
    await productsPage.searchProduct(searchText);
    await productsPage.verifySearchedProductIsDisplayed(searchText);

    // 2. Navigate to url 'http://automationexercise.com'
    // 3. Verify that home page is visible successfully
    // 4. Click on 'Products' button
    // 5. Verify user is navigated to ALL PRODUCTS page successfully
    // 6. Enter product name in search input and click search button
    // 7. Verify 'SEARCHED PRODUCTS' is visible
    // 8. Verify all the products related to search are visible

});