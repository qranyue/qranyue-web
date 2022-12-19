// import { mock } from 'mockjs';

export default {
  '/api/layout/menu': {
    success: true,
    errorCode: '3201',
    errorMessage: '123456',
    showType: 4,
    data: [
      { id: '000', parent: 'root', path: '/welcome', name: '欢迎', icon: 'icon-home', sort: 0 },
      { id: '999', parent: 'root', path: '/system', name: '系统设置', icon: 'icon-setting', sort: 999 },
      { id: '000', parent: '999', path: '/system/dep', name: '部门管理', sort: 20 },
      { id: '005', parent: '999', path: '/system/menu', name: '菜单设置', sort: 40 },
      { id: '010', parent: '999', path: '/system/role', name: '角色管理', sort: 60 },
      { id: '099', parent: '999', path: '/system/user', name: '用户管理', sort: 80 },
    ],
  },
};
