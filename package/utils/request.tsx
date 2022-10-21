import { RequestInterceptor } from 'umi-request';

export const requestInterceptor: RequestInterceptor = (url, options) => ({
  url: `/api/${url}`,
  options,
});
