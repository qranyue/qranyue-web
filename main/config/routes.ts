import { IConfigFromPlugins } from '@@/core/pluginConfig';

export const routes: IConfigFromPlugins['routes'] = [{ path: '/', name: '欢迎', component: '@/pages/index' }];
