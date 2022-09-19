import { MenuDataItem } from '@ant-design/pro-layout';
import { request } from 'umi';

export const getMenu = async () => {
  return (await request<Api.RequestData<MenuDataItem[]>>('layout/menu')).data;
};
