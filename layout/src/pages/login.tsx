import { useCallback } from 'react';
import { history, MicroApp, useModel } from 'umi';

const LoginPage = () => {
  const { refresh } = useModel('@@initialState');

  const onLogin = useCallback(async () => {
    await refresh();
    history.replace('/welcome');
  }, []);

  return <MicroApp name="login" autoSetLoading base="login" onLogin={onLogin} />;
};

export default LoginPage;
