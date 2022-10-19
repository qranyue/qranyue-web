import { MenuDataItem } from '@ant-design/pro-layout';
import { ApiRequest } from '@qrany-web/package';
import { request } from 'umi';

interface MenuItem {
  key: string;
  parent: string;
  icon?: string;
  path: string;
  name: string;
  children?: MenuItem[];
}

export const getMenu = async () => {
  const list = (await request<ApiRequest<MenuItem[]>>('layout/menu')).data;
  const menu: MenuDataItem[] = [];
  const inds: Record<string, number> = {};
  list.forEach((x, i) => (inds[x.key] = i));
  console.log(inds);
  list.forEach((x) => {
    // if (!list[inds[x.parent]].children) list[inds[x.parent]].children = [];
    // list[inds[x.parent]].children
    !x.children && menu.push({ path: x.path, icon: x.icon, name: x.name });
  });
  return menu;
};
