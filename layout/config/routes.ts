import { Route } from '@ant-design/pro-layout/lib/typings';

export const routes: Route[] = [
  { exact: true, path: '/', redirect: '/welcome' },
  { exact: true, path: '/login', layout: false, component: '@/pages/Login' },
  { path: '/welcome', component: '@/pages/Welcome' },
  { path: '/system', component: '@/pages/System', routes: [{ path: '/system/dep', component: '@/pages/System' }] },
];
