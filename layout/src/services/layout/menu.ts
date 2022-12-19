import { MenuItem, MenuMap, MenuObj, MenuUrls } from '@/models/initial-state';
import { MenuDataItem } from '@ant-design/pro-layout';
import { ApiResponse } from '@qrany-web/package';
import { request } from 'umi';

export const getRoutes = async () => {
  const list = (await request<ApiResponse<MenuItem[]>>('layout/menu')).data;
  list.sort((a, b) => (a.sort > b.sort ? 1 : -1));
  const urls: MenuUrls = {};
  const obj: MenuObj = {};
  const map: MenuMap = {};
  list.forEach((x) => {
    urls[x.path] = x.id;
    obj[x.id] = x;
    if (!map[x.parent]) map[x.parent] = [];
    map[x.parent]!.push(x);
  });
  return { map, obj, urls };
};

export const parseMenu = (routes: MenuItem[], routeMap: MenuMap) => {
  return routes.map((x) => {
    const menu: MenuDataItem = { path: x.path, name: x.name };
    x.icon && (menu.icon = x.icon);
    if (routeMap[x.id]) menu.children = parseMenu(routeMap[x.id]!, routeMap);
    return menu;
  });
};
