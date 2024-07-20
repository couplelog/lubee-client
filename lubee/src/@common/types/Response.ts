export interface Response<T> {
  success: boolean;
  response: T;
  success_or_error_code: {
    status: number;
    message: string;
  };
}
