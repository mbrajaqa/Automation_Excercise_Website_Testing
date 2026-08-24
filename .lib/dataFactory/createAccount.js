import { HomePage } from '../../pom/HomePage';
import { LoginPage } from '../../pom/LoginPage';
import { SignUpPage } from '../../pom/SignUpPage';
import { AccountCreatedPage } from '../../pom/AccountCreatedPage';

export async function createTestUser(page, email, password) {
    
    const homePage = new HomePage(page);
    const loginPage = new LoginPage(page);
    const signupPage = new SignUpPage(page);
    const accountCreatedPage = new AccountCreatedPage(page);
    

    await homePage.openHomePage();
    await homePage.verifyTheHomeLinkIsPresent();
    await homePage.clickOnSignupOrLoginLink();


    await loginPage.verifyTheNewUserSignUpHeading();
    await loginPage.signup('TestUser', email);

    await signupPage.selectTitle('Mr.');
    await signupPage.enterPassword(password);
    await signupPage.selectDate('10');
    await signupPage.selectMonth('8');
    await signupPage.selectYear('2016');
    await signupPage.checkNewsLetterCheckbox();
    await signupPage.checkSpecialOfferCheckbox();
    await signupPage.enterFirstName('Test');
    await signupPage.enterlastName('User');
    await signupPage.enterCompany('Test Company');
    await signupPage.enterAddress('Test Street');
    await signupPage.enterAddress2('Test City');
    await signupPage.enterState('Test Nadu');
    await signupPage.enterCity('Test City');
    await signupPage.enterZipCode('123456');
    await signupPage.enterMobileNumber('1234567890');
    await signupPage.createAccount();

    await accountCreatedPage.verifyAccountCreated();
    await accountCreatedPage.clickContinueButton();

    await homePage.verifyUserNameInHomePage('TestUser');

    await homePage.logout();
    
};