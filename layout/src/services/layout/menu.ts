import { MenuItem } from '@/models/initial-state';
import { MenuDataItem } from '@ant-design/pro-layout';
import { ApiResponse } from '@qrany-web/package';
import { request } from 'umi';

export const getRoutes = async () => {
  const list = (await request<ApiResponse<MenuItem[]>>('layout/menu')).data;
  list.sort((a, b) => +(a.parent + a.code) - +(b.parent + b.code));
  return list;
};

export const parseMenu = (routes: MenuItem[]) => {
  const menu: MenuDataItem[] = [];
  const inds: Partial<Record<string, number>> = {};
  routes.forEach((x, i) => {
    inds[x.parent + x.code] = i;
    if (x.parent === '') {
      menu.push({ path: x.path, name: x.name, icon: x.icon });
    } else {
      const ind = inds[x.parent];
    }
  });
  return menu;
};
