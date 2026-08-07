import { test } from '@playwright/test';//We're importing Playwright's test function.
import { POMManager } from '../../pages/POMManager';//We import our Page Object Manager.

test('User can log in successfully', async ({ page }) => {//page is called a fixture
  const pm = new POMManager(page);

  const username = process.env.SAUCE_USERNAME;
  const password = process.env.SAUCE_PASSWORD;

  if (!username || !password) {
    throw new Error(
      'SAUCE_USERNAME and SAUCE_PASSWORD environment variables must be defined.'
    );
  }

  await pm.loginPage.open();
  await pm.loginPage.login(username, password);
  await pm.inventoryPage.verifyInventoryPageLoaded();
});


/*async = it means In JavaScript/TypeScript, 
async marks the function as asynchronous. 
In Playwright Test and other automation frameworks,
it is required because almost all browser interactions take time to complete 
(e.g., loading a page, clicking a button).*/