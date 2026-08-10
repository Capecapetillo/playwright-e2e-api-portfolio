import { test as base } from '@playwright/test';
import { POMManager } from '../pages/POMManager';

type AuthFixtures = {
  pm: POMManager;
};

export const test = base.extend<AuthFixtures>({
  pm: async ({ page }, use) => {
    const username = process.env.SAUCE_USERNAME;
    const password = process.env.SAUCE_PASSWORD;

    if (!username || !password) {
      throw new Error(
        'SAUCE_USERNAME and SAUCE_PASSWORD environment variables must be defined.'
      );
    }

    const pm = new POMManager(page);

    await pm.loginPage.open();
    await pm.loginPage.login(username, password);
    await pm.inventoryPage.verifyInventoryPageLoaded();

    await use(pm);
  },
});

export { expect } from '@playwright/test';