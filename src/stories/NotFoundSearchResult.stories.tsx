import type { Meta, StoryObj } from '@storybook/react';

import { NotFoundSearchResult } from '@/components';

const meta: Meta<typeof NotFoundSearchResult> = {
  component: NotFoundSearchResult,
  title: 'components/Search/NotFoundSearchResult',
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NotFoundSearchResult>;

export const Default: Story = {
  args: {
    children: <p>찾으시는 도서 정보가 없어요.</p>,
  },
};
