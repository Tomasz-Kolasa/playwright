import {test, expect} from "../fotoblog-fixtures";

test.describe('Public Home Page Navigation test', () => {

    test('Navigation to login page', async ({ page, pageManager }) => {

        await page.goto(pageManager.loginPage.loginUrl);
        await pageManager.loginPage.navigation.goToLogin();
        await expect(page).toHaveURL(pageManager.loginPage.loginUrl);

    });

    test('Navigation to home page', async ({ page, pageManager }) => {

        await page.goto(pageManager.loginPage.loginUrl);
        await pageManager.homePublicPage.navigation.goToHome();
        await expect(page).toHaveURL(pageManager.homePublicPage.homeUrl);
        
    });
});

test.describe('Authenticated Home Page Navigation test', () => {
    
});

