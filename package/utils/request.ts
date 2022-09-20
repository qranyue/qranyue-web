import { RequestInterceptor, ResponseInterceptor } from 'umi-request';

export const requestInterceptor: RequestInterceptor = (url, options) => ({
  url: `/api/${url}`,
  options,
});

export const responseInterceptor: ResponseInterceptor = async (response) => {
  return response;
};
