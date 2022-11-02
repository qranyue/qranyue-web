import { LockOutlined, MobileOutlined } from '@ant-design/icons';
import { ProFormCaptcha, ProFormText } from '@ant-design/pro-form';
import type { FieldProps } from '@ant-design/pro-form/es/interface';
import type { ButtonProps, FormRule, InputProps, InputRef } from 'antd';
import { message } from 'antd';
import { memo, useCallback } from 'react';

const icons: Record<'phone' | 'captcha', FieldProps<InputRef> & InputProps> = {
  phone: { size: 'large', prefix: <MobileOutlined /> },
  captcha: { size: 'large', prefix: <LockOutlined /> },
};

const rules: Record<'phone' | 'captcha', FormRule[]> = {
  phone: [{ required: true, message: '请输入用户名' }],
  captcha: [{ required: true, message: '请输入验证码' }],
};

const captchaProps: ButtonProps = { size: 'large' };

const captchaTextRender = (timing: boolean, count: number) => {
  if (timing) return `${`0${count}`.slice(-2)} 获取验证码`;
  return '获取验证码';
};

const onGetCaptcha = async (mobile: string) => {
  message.success('成功获取验证码');
};

const PhoneForm = memo(() => {
  return (
    <>
      <ProFormText name="phone" fieldProps={icons.phone} placeholder="请输入用户名" rules={rules.phone} />
      <ProFormCaptcha
        name="password"
        fieldProps={icons.captcha}
        placeholder="请输入用户名"
        captchaProps={captchaProps}
        captchaTextRender={captchaTextRender}
        rules={rules.captcha}
        onGetCaptcha={onGetCaptcha}
      />
    </>
  );
});

export default PhoneForm;
