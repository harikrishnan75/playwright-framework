import { test, expect } from '@playwright/test';
import { Login } from '../utils/login.js';

test('two contexts do not share state', async ({ browser }) => {
  const context1 = await browser.newContext({ baseURL: 'https://www.saucedemo.com' });
  const context2 = await browser.newContext({ baseURL: 'https://www.saucedemo.com' });
  const page1 = await context1.newPage();
  const page2 = await context2.newPage();

  await Login(page1, 'standard_user');
  await Login(page2, 'problem_user');

  await page1.getByTestId('add-to-cart-sauce-labs-bike-light').click();
  await expect(page1.locator('.shopping_cart_badge')).toHaveText('1');

  // user 2 is a separate session, so there is no badge
  await expect(page2.locator('.shopping_cart_badge')).toHaveCount(0);

  await context1.close();
  await context2.close();
});