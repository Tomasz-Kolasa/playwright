import { test, expect } from '../fotoblog-fixtures';

// test data
const invalidUser: string = 'invalid_user';
const invalidPassword: string = 'invalid_password';
//------------------

test.beforeEach(async ({ pageManager }) => {
    await pageManager.loginPage.goTo();
});

test.describe('Unsuccessful Login', () => {

    test('Unsuccessful login with invalid credentials', async ({ pageManager }) => {
        await pageManager.loginPage.loginWith(invalidUser, invalidPassword);

        await expect(pageManager.loginPage.errorMessage).toBeVisible({timeout:10000});
    });

});

test.describe('Successful Login', () => {

    test('Successful login with valid credentials', async ({pageManager}) => {
        await pageManager.loginPage.goTo();
        await pageManager.loginPage.login(
        process.env.CI_VALID_USERNAME!,
        process.env.CI_VALID_PASSWORD!
        );

        await expect(pageManager.homeAuthenticatedPage.page).toHaveURL(pageManager.homeAuthenticatedPage.homeUrl)    
    });

});