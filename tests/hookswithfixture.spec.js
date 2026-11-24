import { test, expect } from '../fixtures/index.js';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
});

test('add item', async ({ inventoryPage }) => {
  await inventoryPage.addItem('Sauce Labs Bike Light');
  await expect(inventoryPage.cartBadge).toHaveText('1');
});

test('check title', async ({ inventoryPage }) => {
  await expect(inventoryPage.title).toHaveText('Products');
});