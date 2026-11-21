import { expect } from "@playwright/test";

export async function Login(page, username = 'standard_user', password = 'secret_sauce') {
    await page.goto('/');
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button',{name:'Login'}).click();
    await expect(page).toHaveURL(/inventory/);

    
}