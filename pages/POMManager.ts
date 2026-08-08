import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { InventoryPage } from './InventoryPage';
import { CartPage } from './CartPage';
import { CheckoutInformationPage } from './CheckoutInformationPage';
import { CheckoutOverviewPage } from './CheckoutOverviewPage';
import { CheckoutCompletePage } from './CheckoutCompletePage';

export class POMManager {
  readonly loginPage: LoginPage;
  readonly inventoryPage: InventoryPage;
  readonly cartPage: CartPage;
  readonly checkoutOverviewPage: CheckoutOverviewPage;
  readonly checkoutInformationPage: CheckoutInformationPage;
  readonly checkoutCompletePage: CheckoutCompletePage;
  
  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.inventoryPage = new InventoryPage(page);
    this.cartPage = new CartPage(page);
    this.checkoutInformationPage = new CheckoutInformationPage(page); 
    this.checkoutOverviewPage = new CheckoutOverviewPage(page);
    this.checkoutCompletePage = new CheckoutCompletePage(page);
    }
}