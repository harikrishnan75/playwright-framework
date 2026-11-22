import { test, expect } from '../fixtures/index.js';

test('standard user can log in', async ({ loginPage, page }) => {
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await expect(page).toHaveURL(/inventory/);
});

test('Inventory test', async({loginPage,inventoryPage, page})=>{
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');

  await inventoryPage.addItem('Sauce Labs Bike Light');
  await expect(inventoryPage.cartBadge).toHaveText('1');


});