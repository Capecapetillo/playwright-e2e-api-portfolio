import { expect, Locator, Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class CheckoutOverviewPage extends BasePage {

readonly paymentInfo: Locator;
readonly shippingInfo: Locator;
readonly itemTotal: Locator;
readonly tax: Locator;
readonly totalPrice: Locator;
readonly finishButton: Locator;


constructor(page: Page) {
super(page);

this.paymentInfo = page.getByTestId('payment-info-value');
this.shippingInfo = page.getByTestId('shipping-info-value');
this.totalPrice = page.getByTestId('total-label');
this.itemTotal = page.getByTestId('subtotal-label');
this.tax = page.getByTestId('tax-label');
this.finishButton = page.getByTestId('finish');

}

async verifyCheckoutOverview(expectedPaymentInfo: string, expectedShippingInfo: string) {
    await expect(this.paymentInfo).toHaveText(expectedPaymentInfo);
    await expect(this.shippingInfo).toHaveText(expectedShippingInfo);
    
}

async verifyPriceSummary(
    expectedItemTotal: string, 
    expectedTax: string, 
    expectedTotalPrice: string
) {
await expect(this.itemTotal).toHaveText(expectedItemTotal);
await expect(this.tax).toHaveText(expectedTax);
await expect(this.totalPrice).toHaveText(expectedTotalPrice);
} 

async finishCheckout() {
    await this.finishButton.click();    
}
}