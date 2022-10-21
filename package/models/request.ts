export interface ApiResponse<T extends unknown> {
  success: boolean;
  msg: string;
  data: T;
}

export interface ApiResponseList<T extends unknown> extends Omit<ApiResponse<T>, 'data'> {
  data: T[];
  total: number;
}
