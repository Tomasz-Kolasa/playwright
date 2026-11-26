import { test as base } from '@playwright/test';
import { PageManager } from './pages/page-manager';

type FotoblogFixtures = {
  pageManager: PageManager;
};

export const test = base.extend<FotoblogFixtures>({

  pageManager: async ({ page }, use) => {
    await use(new PageManager(page));
  },

});

export { expect, Page, Locator } from '@playwright/test';