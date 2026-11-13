import { test, expect } from "../fotoblog-fixtures";

test.describe('Public Home Page Navigation test', () => {

  test('Navigation to login page', async ({ page, pageManager }) => {

    await page.goto(pageManager.homePublicPage.homeUrl);
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

  test.beforeEach(async ({ page, pageManager }) => {

    await page.goto(pageManager.homePublicPage.homeUrl);
    await pageManager.loginPage.navigation.goToLogin();
    await pageManager.loginPage.login(
        process.env.CI_VALID_USERNAME!,
        process.env.CI_VALID_PASSWORD!
    );

  });

  test('After login user should be redirected to authenticated home page', async ({ pageManager }) => {

    await expect(pageManager.homeAuthenticatedPage.page).toHaveURL(pageManager.homeAuthenticatedPage.homeUrl);
    await expect(pageManager.homeAuthenticatedPage.navigation.logoutButton).toBeVisible();

  });

  test('Navigation to Manage Tags page', async ({ pageManager }) => {
    await pageManager.homeAuthenticatedPage.navigation.goToTags();
    await expect(pageManager.manageTagsPage.page).toHaveURL(pageManager.manageTagsPage.tagsUrl);
    await expect(pageManager.manageTagsPage.buttonAddTag).toBeVisible();
  });

  test('Navigation to Add Photo page', async ({ pageManager }) => {
    await pageManager.homeAuthenticatedPage.navigation.goToAddPhoto();
    await expect(pageManager.addPhotoPage.page).toHaveURL(pageManager.addPhotoPage.addPhotoUrl);
    await expect(pageManager.addPhotoPage.headingAddPhoto).toBeVisible();
  });

  test('Navigation to Settings page', async ({ pageManager }) => {
    await pageManager.homeAuthenticatedPage.navigation.goToSettings();
    await expect(pageManager.settingsPage.page).toHaveURL(pageManager.settingsPage.settingsUrl);
    await expect(pageManager.settingsPage.headingSettings).toBeVisible();
  });
});