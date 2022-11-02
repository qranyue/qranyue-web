import type { ProTableProps } from '@ant-design/pro-table';
// import { request } from 'umi';

export const createRequest = <T>(url: string): ProTableProps<T, T>['request'] => async (params, sort, filter) => ({ success: false });
// await request(url, { method: 'POST', data: { params, sort, filter } });
