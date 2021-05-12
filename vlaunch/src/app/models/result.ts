export class Result{
  data: any;
  error_message: string;
  success: boolean;

  constructor(error_message: string) {
    this.error_message = error_message;
  }
}
