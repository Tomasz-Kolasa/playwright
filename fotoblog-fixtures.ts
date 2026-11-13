import { test as base } from '@playwright/test';
import { LoginPage } from './pages/login-page';
// import { PublicNavigation } from './pages/components/public-navigation';
import { PageManager } from './pages/page-manager';
// import { HomePublicPage } from './pages/home-public-page';

type FotoblogFixtures = {
  pageManager: PageManager;
  // loginPage: LoginPage;
  // homePublicPage: HomePublicPage;
};

export const test = base.extend<FotoblogFixtures>({

  pageManager: async ({ page }, use) => {
    await use(new PageManager(page));
  },

});

export { expect, Page, Locator } from '@playwright/test';