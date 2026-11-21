import {expect, test} from '@playwright/test';
import { Login } from '../utils/login';
import { beforeEach } from 'node:test';


test.beforeEach(async ({ page }) => {
    await Login(page)
});


test('Add item to the Cart', async({page })=>{

//Find the Product Cart
const item =page.locator('.inventory_item', {hasText:'Sauce Labs Bike Light'});

//verify before Clik the Product
await expect(item).toHaveCount(1);
await expect(item.locator('.inventory_item_name')).toHaveText('Sauce Labs Bike Light');
await expect(item.getByRole('button', { name: 'Add to cart' })).toBeVisible();
// click the Add to cart
await item.getByRole('button',{name:'Add to cart'}).click();

//verify if its Add in the Cart
await expect(item.getByRole('button', { name: 'Remove' })).toBeVisible();
await expect(page.locator('.shopping_cart_badge')).toHaveCount(1);
});