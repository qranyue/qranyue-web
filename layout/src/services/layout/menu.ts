import { MenuItem, MenuMap } from '@/models/initial-state';
import { MenuDataItem } from '@ant-design/pro-layout';
import { ApiResponse } from '@qrany-web/package';
import { request } from 'umi';

export const getRoutes = async () => {
  const list = (await request<ApiResponse<MenuItem[]>>('layout/menu')).data;
  list.sort((a, b) => (a.parent + a.code > b.parent + b.code ? 1 : -1));
  const map: MenuMap = {};
  list.forEach((x) => {
    if (!map[x.parent]) map[x.parent] = [];
    map[x.parent].push(x);
  });
  return { list, map };
};

export const parseMenu = (routes: MenuItem[], routeMap: MenuMap) => {
  return routes.map((x) => {
    const menu: MenuDataItem = { path: x.path, name: x.name };
    x.icon && (menu.icon = x.icon);
    if (routeMap[x.code]) menu.children = parseMenu(routeMap[x.code], routeMap);
    return menu;
  });
};
