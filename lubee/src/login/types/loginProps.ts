export interface loginResProps {
  data: {
    code: number;
    data: {
      accessToken: string;
      refreshToken: string;
    };
  };
}

export interface loginErrorProps {
  response: {
    data: {
      code: number;
      message: string;
      data: {
        accessToken: string;
        refreshToken: string;
      };
    };
  };
}
