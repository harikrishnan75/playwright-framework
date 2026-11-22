import { test as base } from '@playwright/test';
import { LoginPage } from '../pages/loginPage.js';
import { InventoryPage } from '../pages/InventoryPage.js';

export const test = base.extend({  //base.extend is adding our own fixture or builed the Objects like loginpage from LoginPage class
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
});

export { expect } from '@playwright/test';