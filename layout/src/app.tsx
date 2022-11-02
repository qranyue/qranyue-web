import { ProLayoutProps } from '@ant-design/pro-layout';
import { local, requestInterceptor, TOKEN } from '@qrany-web/package';
import { history, RequestConfig } from 'umi';
import { InitialState } from './models/initial-state';
import { getRoutes, parseMenu } from './services/layout/menu';

export const request: RequestConfig = {
  requestInterceptors: [requestInterceptor],
};

export const getInitialState = async (): Promise<InitialState> => {
  if (!local.get<string>(TOKEN)) {
    history.replace('/login');
    return {
      routes: [],
      routeMap: { '': [] },
    };
  }
  const data = await Promise.all([getRoutes()]);
  return {
    routes: data[0].list,
    routeMap: data[0].map,
  };
};

export const layout = ({ initialState }: { initialState: InitialState }): ProLayoutProps => {
  return {
    menu: {
      params: { map: initialState.routeMap },
      request: async ({ map }) => parseMenu(map[''], map),
    },
  };
};
