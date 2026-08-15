import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {

  readonly pageTitle: Locator;
  readonly shoppingCart: Locator;
  readonly backpackButton: Locator;

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.getByTestId('title');
    this.shoppingCart = page.getByTestId('shopping-cart-link');
    this.backpackButton = page.getByTestId('add-to-cart-sauce-labs-backpack');
  }

  async verifyInventoryPageLoaded() {
    await expect(this.pageTitle).toHaveText('Products');
  }

  async addBackpackToCart() {
    await this.backpackButton.click();
  }

  async openShoppingCart() {
    await this.shoppingCart.click();
  }
  
}