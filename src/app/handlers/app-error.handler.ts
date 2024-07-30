import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppErrorHandler extends ErrorHandler {

  constructor() {
    super();
  }

  override handleError(error: any): void {
    // Log the error to the console
    console.error('An error occurred:', error);

    // additional error handling logic here, such as:
    // - Sending error details to a server
    // - Showing user-friendly messages
    // - Handling specific error types
    // - Log in app insights

    // Call the base class implementation if needed
    super.handleError(error);
  }
}
