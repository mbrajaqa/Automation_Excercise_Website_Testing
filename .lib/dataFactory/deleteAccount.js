import { HomePage } from '../../pom/HomePage';
import { LoginPage } from '../../pom/LoginPage';
import { AccountDeletedPage } from '../../pom/AccountDeletedPage';

export async function deleteTestUser(page, email, password) {
    const homePage = new HomePage(page);
        const loginPage = new LoginPage(page);
        const accountDeletedPage = new AccountDeletedPage(page);
    
        await homePage.openHomePage();
        await homePage.verifyTheHomeLinkIsPresent();
        await homePage.clickOnSignupOrLoginLink();
        await loginPage.verifyLoginPageIsDisplayed();
    
        await loginPage.login(email, password);
    
        await homePage.verifyUserNameInHomePage('TestUser');
        
        await homePage.deleteAccount();
        await accountDeletedPage.verifyAccountDeleted();

}