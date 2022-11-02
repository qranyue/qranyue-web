import { LoginForm } from '@ant-design/pro-form';
import { local, TOKEN } from '@qrany-web/package';
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

const TabPane = Tabs.TabPane;

const IndexPage = () => {
  const { onLogin } = useModel('@@qiankunStateFromMaster');

  const [loginType, setLoginType] = useState<LoginType>(LoginType.ACCOUNT);

  const loginTypeChange = useCallback((activeKey: string) => {
    setLoginType(activeKey as LoginType);
  }, []);

  const onFinish = async (form: Record<string, unknown>) => {
    local.set(TOKEN, 'master.index.path');
    onLogin();
  };

  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <LoginForm title="标题" subTitle="副标题" onFinish={onFinish}>
          <Tabs centered activeKey={loginType} onChange={loginTypeChange}>
            <TabPane key={LoginType.ACCOUNT} tab="账号密码登录" />
            <TabPane key={LoginType.PHONE} tab="手机号登录" />
          </Tabs>

          {loginType === LoginType.ACCOUNT && <AccountForm />}
          {loginType === LoginType.PHONE && <PhoneForm />}
        </LoginForm>
      </div>
    </div>
  );
};

export default IndexPage;
