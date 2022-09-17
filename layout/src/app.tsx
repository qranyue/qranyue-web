import { GithubFilled } from '@ant-design/icons';
import { ProLayoutProps } from '@ant-design/pro-layout';

export const layout = (): ProLayoutProps => {
  return {
    actionsRender: () => [<GithubFilled key="GithubFilled" />],
    avatarProps: { title: 'Qranyue' },
  };
};
