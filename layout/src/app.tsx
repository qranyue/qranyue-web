import { ProLayoutProps } from '@ant-design/pro-layout';
import { requestInterceptor, responseInterceptor } from '@qrany-web/package';
import { RequestConfig } from 'umi';
import { getMenu } from './services/layout';

export const request: RequestConfig = {
  requestInterceptors: [requestInterceptor],
  responseInterceptors: [responseInterceptor],
};

export const layout = (): ProLayoutProps => {
  return {
    menu: { request: getMenu },
  };
};
