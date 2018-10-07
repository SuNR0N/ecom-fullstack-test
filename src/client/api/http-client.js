import { HttpError } from '../errors/http-error';

export class HttpClient {
  static async request(url, options) {
    const request = new Request(url, options);
    try {
      const response = await fetch(request, options);
      if (!response.ok) {
        const message = await response.text();
        throw new HttpError(response.status, response.statusText, message);
      }
      return response;
    } catch (error) {
      throw error;
    }

  }

  static async get(url, options) {
    const getOptions = {
      ...options,
      method: 'GET',
    };
    return await HttpClient.request(url, getOptions);
  }
}