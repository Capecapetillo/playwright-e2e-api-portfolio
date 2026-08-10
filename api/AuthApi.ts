import { ApiClient } from './ApiClient';

export class AuthApi extends ApiClient {

  async authenticate(username: string, password: string) {
    const response = await this.request.post(`${this.baseUrl}/auth`, {
      data: {
        username,
        password,
      },
    });

    return response;
  }
}

//this is like loginPage in UI, but for API testing. It will send a POST request to the /auth endpoint with the provided username and password, and return the response.    