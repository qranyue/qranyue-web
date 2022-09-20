import { defineConfig } from 'umi';
import { layout } from './layout';
import { qiankun } from './qiankun';

export default defineConfig({
  title: 'Qranyue',
  layout,
  nodeModulesTransform: { type: 'none', exclude: ['@qrany-web/package'] },
  fastRefresh: {},
  dynamicImport: { loading: '@/components/Loading' },
  webpack5: { lazyCompilation: {} },

  qiankun: { master: qiankun },
});
