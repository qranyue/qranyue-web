import { PageLoading } from '@ant-design/pro-layout';
import styles from './index.less';

const Loading = () => {
  return (
    <>
      <PageLoading key="loading" />
      <div key="text" className={styles['login-text']}>
        <span>Loading...</span>
      </div>
    </>
  );
};

export default Loading;
