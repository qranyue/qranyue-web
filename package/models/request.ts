export interface ApiRequest<T extends unknown> {
  success: boolean;
  message: string;
  data: T;
}
