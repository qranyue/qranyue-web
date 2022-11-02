import { requestInterceptor } from '@qrany-web/package';
import { RequestConfig } from 'umi';

export const request: RequestConfig = {
  requestInterceptors: [requestInterceptor],
};
