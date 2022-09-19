import { ProLayoutProps } from '@ant-design/pro-layout';
import { RequestConfig } from 'umi';
import { getMenu } from './services/layout';
import { requestInterceptor, responseInterceptor } from './utils/request';

export const request: RequestConfig = {
  requestInterceptors: [requestInterceptor],
  responseInterceptors: [responseInterceptor],
};

export const layout = (): ProLayoutProps => {
  return {
    menu: { request: getMenu },
  };
};
