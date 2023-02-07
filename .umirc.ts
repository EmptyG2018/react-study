export default {
  npmClient: 'yarn',
  mfsu: false,
  proxy: {
    '/api': {
      'target': 'http://gateway.wubangtu.xyz:9999',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    }
  }
};
