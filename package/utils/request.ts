import { RequestInterceptor, ResponseInterceptor } from 'umi-request';
import { TOKEN } from '../constants';
import { local } from './storage';

export const requestInterceptor: RequestInterceptor = (url, options) => {
  const opt = { ...options, headers: { ...options.headers } };
  const token = local.get<string>(TOKEN);
  token && ((opt.headers as Record<string, string>).token = token);
  return {
    url: `/api/${url}`,
    options: opt,
  };
};

export const responseInterceptor: ResponseInterceptor = (response) => {
  return response;
};
