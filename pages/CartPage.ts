import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CartPage extends BasePage {

    readonly productName: Locator;
    readonly productDescription: Locator;
    readonly checkoutButton: Locator;

    constructor(page: Page) {
    super(page);
    this.productName = page.getByTestId('inventory-item-name');
    this.productDescription = page.getByTestId('inventory-item-desc');
    this.checkoutButton = page.getByTestId('checkout');

    }

    async verifyProductIsInCart(expectedProductName: string) {
        await expect(this.productName).toHaveText(expectedProductName);
        await expect(this.productDescription).toBeVisible();
    }

    async goToCheckout() {
        await this.checkoutButton.click();
    }

}