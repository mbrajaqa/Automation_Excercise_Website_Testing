const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium, expect } = require("@playwright/test");
const { LoginPage } = require("../../pom/LoginPage");
const { HomePage } = require("../../pom/HomePage");

let browser;
let page;
let loginPage;
let homePage;

Given("User is on login page", async () => {
    
    browser = await chromium.launch({ headless: false });
    const context = await browser.newContext();
    page = await context.newPage();

    loginPage = new LoginPage(page);
    homePage = new HomePage(page);

    loginPage.openLoginPage();
});

When("User login correct email {string} and password {string}", async (email, password) => {
    loginPage.login(email, password);
});

Then("Homepage displayed with username {string}", async (name) => {
    homePage.verifyUserNameInHomePage(name);
});