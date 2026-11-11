import { test as base } from '@playwright/test';
import { LoginPage } from './pages/login-page';
import { PublicNavigation } from './pages/components/public-navigation';
import { PageManager } from './pages/page-manager';

type FotoblogFixtures = {
    pageManager: PageManager;
    loginPage: LoginPage;
};

export const test = base.extend<FotoblogFixtures>({
    pageManager: async ({ page }, use) => {
    await use(new PageManager(page));
  },
    loginPage: async ({ page }, use) => {
    await use(new LoginPage(page, new PublicNavigation(page)));
  },
});

export { expect } from '@playwright/test';