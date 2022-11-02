import type { ProTableProps } from '@ant-design/pro-table';
import { ApiResponseList } from '@qrany-web/package';
import { request } from 'umi';

export interface Dep {
  id: string;
  name: string;
  code: string;
  parent: string;
  contact: string;
  phone: string;
}

export const getDep: ProTableProps<Dep, Dep>['request'] = async (params) => {
  return await request<ApiResponseList<Dep>>('system/dep');
};
