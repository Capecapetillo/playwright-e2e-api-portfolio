import { Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { InventoryPage } from './InventoryPage';
import { CartPage } from './CartPage';

export class POMManager {
  readonly loginPage: LoginPage;//These properties store instances of the Page Objects.
  readonly inventoryPage: InventoryPage;//readonly means we can use these objects, but we should not replace them later.
  readonly cartPage: CartPage;
  
  constructor(page: Page) {//The constructor receives the Playwright browser tab.
    this.loginPage = new LoginPage(page);//Creates one object, or instance, of the LoginPage class.
    this.inventoryPage = new InventoryPage(page);//Creates one object, or instance, of the InventoryPage class.
    this.cartPage = new CartPage(page);//Creates one object, or instance, of the CartPage class.
  }
}