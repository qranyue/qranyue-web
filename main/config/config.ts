import { defineConfig } from 'umi';
import { layout } from './layout';
import { routes } from './routes';

export default defineConfig({
  title: 'Qranyue',
  layout,
  routes,
  nodeModulesTransform: { type: 'none' },
  fastRefresh: {},
  dynamicImport: { loading: '@/components/Loading' },
  webpack5: { lazyCompilation: {} },
});
