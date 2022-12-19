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
      routes: {},
      menu: {},
      menuMap: { root: [] },
    };
  }
  const data = await Promise.all([getRoutes()]);
  return {
    routes: data[0].urls,
    menu: data[0].obj,
    menuMap: data[0].map,
  };
};

export const layout = ({ initialState }: { initialState: InitialState }): ProLayoutProps => {
  return {
    menu: {
      params: { map: initialState.menuMap },
      request: async ({ map }) => parseMenu(map['root'], map),
    },
  };
};
