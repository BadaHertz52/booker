import type { Meta, StoryObj } from '@storybook/react';

import { NotFound } from '@/components';

import StoryWrapper from './components/StoryWrapper';

const meta: Meta<typeof NotFound> = {
  component: NotFound,
  title: 'components/NotFound',
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

