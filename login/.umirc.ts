import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: { type: 'none', exclude: ['@qrany-web/package'] },
  fastRefresh: {},
  dynamicImport: { loading: '@qrany-web/package/components/Loading' },
  webpack5: { lazyCompilation: {} },

  qiankun: { slave: {} },
  chainWebpack: (memo) => {
    memo.resolve.symlinks(false);
  },
});
