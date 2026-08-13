import { test as base } from '@playwright/test';
import { BookingApi } from '../api/BookingApi';
import { AuthApi } from '../api/AuthApi';

type ApiFixtures = {
  bookingApi: BookingApi;
  authApi: AuthApi;
  token: string;
};

export const test = base.extend<ApiFixtures>({
  bookingApi: async ({ request }, use) => {
    const baseUrl = process.env.API_BASE_URL;

    if (!baseUrl) {
      throw new Error('API_BASE_URL must be defined.');
    }

    const bookingApi = new BookingApi(request, baseUrl);

    await use(bookingApi);
  },

  authApi: async ({ request }, use) => {
    const baseUrl = process.env.API_BASE_URL;

    if (!baseUrl) {
      throw new Error('API_BASE_URL must be defined.');
    }

    const authApi = new AuthApi(request, baseUrl);

    await use(authApi);
  },

  token: async ({ authApi }, use) => {
    const username = process.env.BOOKER_USERNAME;
    const password = process.env.BOOKER_PASSWORD;

    if (!username || !password) {
      throw new Error(
        'BOOKER_USERNAME and BOOKER_PASSWORD must be defined.'
      );
    }

    const authResponse = await authApi.authenticate(username, password);

    if (!authResponse.ok()) {
      throw new Error(
        `Authentication failed with status ${authResponse.status()}`
      );
    }

    const authBody = await authResponse.json();
    const token = authBody.token;

    if (!token) {
      throw new Error('Authentication token was not returned.');
    }

    await use(token);
  },
});




export { expect } from '@playwright/test';