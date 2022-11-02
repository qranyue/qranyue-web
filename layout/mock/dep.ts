import mockjs from 'mockjs';

export default {
  '/api/system/dep': mockjs.mock({
    success: true,
    errorCode: '3201',
    errorMessage: '123456',
    showType: 4,
    'data|10': [{ id: '@id', name: '@cname', code: '000', parent: '000', contact: '@cname', phone: '12345678987' }],
    'total|1-50': 1,
  }),
};
