import { defineConfig } from 'umi';
import { routes } from './routes';

export default defineConfig({
  nodeModulesTransform: { type: 'none', exclude: ['@qrany-web/package'] },
  fastRefresh: {},
  dynamicImport: { loading: '@qrany-web/package/components/Loading' },
  webpack5: { lazyCompilation: {} },
  routes,
  qiankun: { slave: {} },
  chainWebpack: (memo) => {
    memo.resolve.symlinks(false);
  },
});
