// pages/InventoryPage.js
export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.title = page.locator('.title');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addItem(name) {
    const item = this.page.locator('.inventory_item', { hasText: name });
    await item.getByRole('button', { name: 'Add to cart' }).click();
  }
}