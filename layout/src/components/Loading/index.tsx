import { PageLoading } from '@ant-design/pro-layout';
import styles from './index.less';

const Loading = () => {
  return (
    <>
      <PageLoading key="loading" />
      <div key="text" className={styles['login-text']}>
        Loading...
      </div>
    </>
  );
};

export default Loading;
