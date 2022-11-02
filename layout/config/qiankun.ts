import { MasterOptions } from '@umijs/plugin-qiankun';

export const qiankun: MasterOptions = {
  apps: [
    { name: 'login', entry: '//localhost:8001' },
    { name: 'welcome', entry: '//localhost:8002' },
  ],
};
