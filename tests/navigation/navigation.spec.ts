import {test, expect} from "../../fotoblog-fixtures";

test.describe('Page navigation test', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/');
    });

    test('Navigation to login page', async ({ page, pageManager }) => {
        await pageManager.loginPage.navigation.goToLogin();

        await expect(page).toHaveURL(pageManager.loginPage.loginUrl);
    });
});