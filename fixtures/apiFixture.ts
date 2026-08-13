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
});

export { expect } from '@playwright/test';