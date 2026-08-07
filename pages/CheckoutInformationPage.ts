import { Locator, Page } from '@playwright/test';//We import the expect function, Locator type, and Page type from Playwright's test module.
import { BasePage } from './BasePage';//We import the BasePage class from the BasePage module.          


export class CheckoutInformationPage extends BasePage {

    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;

    constructor(page: Page) {
    super(page);

    this.firstNameInput = page.getByTestId('first-name');
    this.lastNameInput = page.getByTestId('last-name');
    this.postalCodeInput = page.getByTestId('postal-code');
    this.continueButton = page.getByTestId('continue');
    }

    async fillCheckoutInformation(firstName: string, lastName: string, postalCode: string) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }

    async continueCheckout() {
        await this.continueButton.click();
    }
}
