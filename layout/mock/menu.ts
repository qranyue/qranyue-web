// import { mock } from 'mockjs';

export default {
  '/api/layout/menu': {
    success: true,
    errorCode: '3201',
    errorMessage: '123456',
    showType: 4,
    data: [
      { code: '000', parent: '', path: '/welcome', name: '欢迎', icon: 'icon-home' },
      { code: '999', parent: '', path: '/system', name: '系统设置', icon: 'icon-home' },
      { code: '000', parent: '999', path: '/system/dep', name: '部门管理' },
      { code: '005', parent: '999', path: '/system/menu', name: '菜单设置' },
      { code: '010', parent: '999', path: '/system/role', name: '角色管理' },
      { code: '099', parent: '999', path: '/system/user', name: '用户管理' },
    ],
  },
};
