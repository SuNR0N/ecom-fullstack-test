export class HttpError extends Error {
  constructor(status, statusText, message) {
    super(`[${status} - ${statusText}] ${message}`);
    this.status = status;
    this.statusText = statusText;
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}