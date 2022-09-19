import { MasterOptions } from '@umijs/plugin-qiankun';

export const qiankun: MasterOptions = {
  apps: [{ name: 'welcome', entry: '//localhost:8002' }],
};
