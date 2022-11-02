import { defineConfig } from 'umi';
import { layout } from './layout';
import { qiankun } from './qiankun';
import { routes } from './routes';

export default defineConfig({
  title: 'Qranyue',
  layout,
  nodeModulesTransform: { type: 'none', exclude: ['@qrany-web/package'] },
  fastRefresh: {},
  dynamicImport: { loading: '@qrany-web/package/components/Loading' },
  webpack5: { lazyCompilation: {} },
  routes,
  qiankun: { master: qiankun },

  chainWebpack: (memo) => {
    memo.resolve.symlinks(false);
  },
});
