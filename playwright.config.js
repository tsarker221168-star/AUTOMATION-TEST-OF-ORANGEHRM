// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 120000,

  use: {
    baseURL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',

    headless: false,
    actionTimeout: 30000,
    navigationTimeout: 60000,

    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }
  ],
});