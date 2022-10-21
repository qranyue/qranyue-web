import { ProLayoutProps } from '@ant-design/pro-layout';
import { requestInterceptor } from '@qrany-web/package';
import { RequestConfig } from 'umi';
import { getRoutes } from './services/layout';

export const request: RequestConfig = {
  requestInterceptors: [requestInterceptor],
};

export const layout = (): ProLayoutProps => {
  return {
    menu: { request: async () => [] },
  };
};

export const render = (oldRender: () => void) => {
  console.log(456);
  setTimeout(() => {
    oldRender();
  }, 500);
};

export const getInitialState = async () => {
  console.log(123);
  const [routes] = await Promise.all([getRoutes()]);
  console.log(routes);
  return {
    routes,
  };
};
