import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { users } from '../test-data/users';

test('standard user can log in', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(users.standard.username, users.standard.password);

  await expect(page).toHaveURL(/inventory/);
});

test('Inventory test', async({page})=>{
  const loginPage =new  LoginPage(page);
  await loginPage.goto();
  await loginPage.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory/);

  const inventoryPage = new InventoryPage(page);
  await inventoryPage.addItem('Sauce Labs Bike Light');
  await expect(inventoryPage.cartBadge).toHaveText('1');





});