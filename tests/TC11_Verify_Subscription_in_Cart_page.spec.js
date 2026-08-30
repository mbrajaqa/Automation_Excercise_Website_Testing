const {test } = require ('@playwright/test');

const { HomePage } = require('../pom/HomePage');
const { CartPage } = require('../pom/CartPage');

test('test', async ({ page }) => {

  const homePage = new HomePage(page);
  const cartPage = new CartPage(page);
  const email = 'mano@gmail.com';

  await homePage.openHomePage();
  await homePage.verifyHomePageIsDisplayed();
  await homePage.clickOnCartLink();

  await cartPage.verifySubscriptionHeadingIsDisplayed();
  await cartPage.subscribe(email);
  await cartPage.verifySubscribeSuccessMessageIsDisplayed();



});