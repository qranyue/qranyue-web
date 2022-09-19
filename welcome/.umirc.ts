import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: { type: 'none' },
  fastRefresh: {},
  dynamicImport: {},
  webpack5: {},

  qiankun: { slave: {} },
});
