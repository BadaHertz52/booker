import type { Meta, StoryObj } from '@storybook/react';

import NotFoundPage from '@/app/not-found';
import NotFound from '@/components/common/NotFound';

import StoryWrapper from '../_components/StoryWrapper';

const meta: Meta<typeof NotFound> = {
  component: NotFound,
  title: 'components/Error/NotFound',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotFound>;

export const Default: Story = {
  args: {
    children: <p>찾으시는 도서 정보가 없어요.</p>,
  },
  render: (args) => (
    <StoryWrapper message="NOT FOUND BOOK">
      <NotFound>{args.children}</NotFound>
    </StoryWrapper>
  ),
};

export const NotFoundPageStory = {
  render: () => (
    <StoryWrapper message="NOT FOUND PAGE">
      <NotFoundPage />
    </StoryWrapper>
  ),
  parameters: {
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/not-found',
      },
    },
  },
};
