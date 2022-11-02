export interface ApiResponse<T extends unknown> {
  success: boolean;
  data: T;
}

export interface ApiResponseList<T extends unknown> extends Omit<ApiResponse<T>, 'data'> {
  data: T[];
  total: number;
}
