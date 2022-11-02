import { Route } from '@ant-design/pro-layout/lib/typings';

export const routes: Route[] = [
  { exact: true, path: '/', redirect: '/welcome' },
  { exact: true, path: '/login', layout: false, component: './Login' },
  { path: '/welcome', component: './Welcome' },
  { path: '/system', component: './System' },
];
