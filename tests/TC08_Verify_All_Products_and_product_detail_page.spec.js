import { test } from '@playwright/test';

import { HomePage } from '../pom/HomePage';
import { ProductsPage } from '../pom/ProductsPage';
import { ProductDetailsPage } from '../pom/ProductDetailsPage';

import productDetails from '../.lib/data/productDetails.json';

test ('Verify all products and product details page', async ({page}) => {

    const homePage = new HomePage(page);
    const productsPage = new ProductsPage(page);
    const productDetailsPage = new ProductDetailsPage(page);

    const productNumber = '1';

    await homePage.openHomePage();
    await homePage.verifyHomePageIsDisplayed();
    await homePage.clickOnProductsLink();

    await productsPage.verifyAllProductsPageIsDisplayed();
    await productsPage.verifyProductListDisplayed();
    await productsPage.clickOnViewProduct(0);

    await productDetailsPage.verifyUserIsLandedOnProductDetailsPage(productNumber);
    await productDetailsPage.verifyTheProductDetails(
        productDetails.data[1].productName,
        productDetails.data[1].category,
        productDetails.data[1].price,
        productDetails.data[1].availability,
        productDetails.data[1].condition,
        productDetails.data[1].brand
    );

});