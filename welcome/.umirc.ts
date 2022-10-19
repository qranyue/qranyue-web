import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: { type: 'none', exclude: ['@qrany-web/package'] },
  fastRefresh: {},
  dynamicImport: {},
  webpack5: { lazyCompilation: {} },

  qiankun: { slave: {} },
});
