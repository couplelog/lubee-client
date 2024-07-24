export interface loginResProps {
  success: boolean;
  response: { message: string; accessToken: string; refreshToken: string };
  success_or_error_code: {
    status: number;
    message: string;
  };
}

export interface loginErrorProps {
  success: boolean;
  response: { message: string; accessToken: string; refreshToken: string };
  success_or_error_code: {
    status: number;
    message: string;
  };
}
