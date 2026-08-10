import { test, expect } from '@playwright/test';
import { AuthApi } from '../../api/AuthApi';

test('should authenticate successfully and return a token', async ({ request }) => {
  const username = process.env.BOOKER_USERNAME;
  const password = process.env.BOOKER_PASSWORD;
  const baseUrl = process.env.API_BASE_URL;

  if (!username || !password || !baseUrl) {
    throw new Error(
      'BOOKER_USERNAME, BOOKER_PASSWORD and API_BASE_URL must be defined.'
    );
  }

  const authApi = new AuthApi(request, baseUrl);

  const response = await authApi.authenticate(username, password);

  expect(response).toBeOK();

  const body = await response.json();

  console.log(body);

  expect(body.token).toBeDefined();
});