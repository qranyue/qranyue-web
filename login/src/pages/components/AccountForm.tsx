import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { ProFormText } from '@ant-design/pro-form';
import type { FieldProps } from '@ant-design/pro-form/es/interface';
import type { InputProps, InputRef, FormRule } from 'antd';
import { memo } from 'react';

const Password = ProFormText.Password;

const icons: Record<'account' | 'password', FieldProps<InputRef> & InputProps> = {
  account: { size: 'large', prefix: <UserOutlined /> },
  password: { size: 'large', prefix: <LockOutlined /> },
};

const rules: Record<'account' | 'password', FormRule[]> = {
  account: [{ required: true, message: '请输入用户名' }],
  password: [{ required: true, message: '请输入密码' }],
};

const AccountForm = memo(() => {
  return (
    <>
      <ProFormText name="account" fieldProps={icons.account} placeholder="请输入用户名" rules={rules.account} />
      <Password name="password" fieldProps={icons.password} placeholder="请输入用户名" rules={rules.password} />
    </>
  );
});

export default AccountForm;
