import { defineConfig, devices } from '@playwright/test';

import * as dotenv from 'dotenv';
import * as path from 'path';
dotenv.config();

// determinate the environment based on the ENV variable, defaulting to 'prod' if not set
const environment = process.env.ENV || 'prod';
dotenv.config({ path: path.resolve(__dirname, `.env.${environment}`) });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('')`. */
    baseURL: process.env.BASE_URL, // determined by the .env.[prod|test|dev|staging] file based on the ENV variable

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'Fotoblog - Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

  ],
});
