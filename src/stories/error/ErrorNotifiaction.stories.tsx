import type { Meta, StoryObj } from '@storybook/react';

import ErrorNotification from '@/components/common/ErrorNotification';

import StoryWrapper from '../_components/StoryWrapper';

const meta: Meta<typeof ErrorNotification> = {
  component: ErrorNotification,
  title: 'components/Error/ErrorNotification',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorNotification>;

export const Default: Story = {
  args: {
    reset: () => {},
    children: <p>에러가 발생하였습니다.</p>,
  },
  render: (args) => (
    <StoryWrapper message="홈페이지가 아닌 곳에서의 에러 발생">
      <ErrorNotification {...args} />
    </StoryWrapper>
  ),
  parameters: {
    nextjs: { appDirectory: true, navigation: { pathname: '/not-home' } },
  },
};

export const HomeErrorNotification: Story = {
  args: {
    children: <p>에러가 발생하였습니다.</p>,
  },
  parameters: {
    nextjs: { appDirectory: true, navigation: { pathname: '/' } },
  },
  render: (args) => (
    <StoryWrapper message="홈페이지에서의 에러 발생">
      <ErrorNotification {...args} />
    </StoryWrapper>
  ),
};
