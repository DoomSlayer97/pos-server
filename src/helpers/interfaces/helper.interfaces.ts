
export interface ResponseParams {
  data?: any;
  message: string;
  code: number;
  status: boolean;
  errors?: any;
}

export interface ResponseProps {
  data?: any;
  message: string;
  status: boolean;
  errors?: any;
}