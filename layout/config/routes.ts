import { IConfigFromPlugins } from '@/.umi/core/pluginConfig';

export const routes: IConfigFromPlugins['routes'] = [{ path: '/', name: '欢迎', icon: 'icon-home', component: '@/pages/index' }];
