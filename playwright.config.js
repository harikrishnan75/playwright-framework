// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers:1,
  reporter: 'html',

  use: {
    baseURL: 'https://www.saucedemo.com',
    testIdAttribute: 'data-test',   // SauceDemo uses data-test
    headless: false,
    screenshot: 'only-on-failure',
    trace: 'retain-on-failure',
    video: 'retain-on-failure',
    launchOptions: {
      slowMo: 1000,                 // 1 second between actions (learning only)
    },
  },
  

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});