import { PageLoading } from '@ant-design/pro-layout';
import { Typography } from 'antd';
import styles from './loading.less';

const Title = Typography.Title;
const Paragraph = Typography.Paragraph;

const Loading = () => {
  return (
    <div className={styles.body}>
      <PageLoading />
      <Title>Qranyue</Title>
      <Paragraph>加载中...</Paragraph>
    </div>
  );
};

export default Loading;
