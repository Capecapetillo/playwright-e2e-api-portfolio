import { test } from '../../fixtures/authFixture';
import { POMManager } from '../../pages/POMManager';
import { checkoutData } from '../../test-data/checkoutData';

test('User can purchase a backpack', async ({ pm }) => {
    await pm.inventoryPage.addBackpackToCart();
    await pm.inventoryPage.openShoppingCart();
    await pm.cartPage.verifyProductIsInCart(
        checkoutData.expectedProductName
    );

    await pm.cartPage.goToCheckout();
    await pm.checkoutInformationPage.fillCheckoutInformation(
        checkoutData.firstName, 
        checkoutData.lastName, 
        checkoutData.postalCode
    );

    await pm.checkoutInformationPage.continueCheckout();
    await pm.checkoutOverviewPage.verifyCheckoutOverview(
        checkoutData.expectedPaymentInfo, 
        checkoutData.expectedShippingInfo
    );

    await pm.checkoutOverviewPage.verifyPriceSummary(
        checkoutData.expectedItemTotal,
        checkoutData.expectedTax,
        checkoutData.expectedTotalPrice
    );

    await pm.checkoutOverviewPage.finishCheckout();
    await pm.checkoutCompletePage.verifyorderCompleted(
        checkoutData.expectedCompleteMessage
    );
});