import { LoginForm } from '@ant-design/pro-form';
import { local, TOKEN } from '@qrany-web/package';
import type { TabsProps } from 'antd';
import { Tabs } from 'antd';
import { useCallback, useState } from 'react';
import { useModel } from 'umi';
import AccountForm from './components/AccountForm';
import PhoneForm from './components/PhoneForm';
import styles from './index.less';

enum LoginType {
  ACCOUNT = 'ACCOUNT',
  PHONE = 'PHONE',
}

const tabItems: TabsProps['items'] = [
  { key: LoginType.ACCOUNT, label: '账号密码登录' },
  { key: LoginType.PHONE, label: '手机号登录' },
];

const IndexPage = () => {
  const { onLogin } = useModel('@@qiankunStateFromMaster');

  const [loginType, setLoginType] = useState<LoginType>(LoginType.ACCOUNT);

  const loginTypeChange = useCallback((activeKey: string) => {
    setLoginType(activeKey as LoginType);
  }, []);

  const onFinish = async (form: Record<string, unknown>) => {
    local.set(TOKEN, 'master.index.path', 8 * 3600000);
    onLogin();
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <LoginForm title="标题" subTitle="副标题" onFinish={onFinish}>
          <Tabs items={tabItems} centered activeKey={loginType} onChange={loginTypeChange} />

          {loginType === LoginType.ACCOUNT && <AccountForm />}
          {loginType === LoginType.PHONE && <PhoneForm />}
        </LoginForm>
      </div>
    </div>
  );
};

export default IndexPage;
