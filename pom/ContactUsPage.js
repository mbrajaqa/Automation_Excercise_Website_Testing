const { expect } = require("@playwright/test");

class ContactUsPage {
    constructor(page){
        this.page = page;
        this.url = 'https://www.automationexercise.com/contact_us';

        //Locators:
        this.getInTouchHeading = page.getByRole('heading', { name: 'Get In Touch' });
        this.name = page.getByRole('textbox', { name: 'Name' });
        this.email = page.getByRole('textbox', { name: 'Email', exact: true });
        this.subject = page.getByRole('textbox', { name: 'Subject' });
        this.message = page.getByRole('textbox', { name: 'Your Message Here' });
        this.uploadFile = page.getByRole('button', { name: 'Choose File' });
        this.submitButton = page.getByRole('button', { name: 'Submit' });
        this.successMessage = page.locator('#contact-page').getByText('Success! Your details have');


        //Values:
        this.confirmAlertMessage = 'Press OK to proceed!';



//   await page.getByRole('button', { name: 'Choose File' }).setInputFiles('test.txt');


    };

    async verifyGetInTouchHeadingIsVisible(){
        await expect(this.getInTouchHeading).toBeVisible();
    };

    async enterName (name){

        await this.name.fill(name);
    };

    async enterEmail (email){
        
        await this.email.fill(email);
    };

    async enterSubject (subject) {

        await this.subject.fill(subject);
    };

    async enterMessage (message) {

        await this.message.fill(message);
    };

    async uploadTheFile (){

        await this.uploadFile.setInputFiles('uploadFile/uploadFile1.png');
    };

    async submit() {    
        this.page.on('dialog', dialog => dialog.accept());
        await this.submitButton.click();

    };


    async verifySuccessMessage(){
        await expect(this.successMessage).toBeVisible();
    };

};

module.exports = { ContactUsPage };