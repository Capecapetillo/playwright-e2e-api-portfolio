import { APIRequestContext } from '@playwright/test';

export class ApiClient {
  constructor(
    protected request: APIRequestContext,
    protected baseUrl: string
    ) {}
}