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

        await expect(pageManager.loginPage.errorMessage).toBeVisible();
    });

});