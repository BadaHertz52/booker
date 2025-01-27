import type { Meta, StoryObj } from '@storybook/react';

import { Searchbar } from '@/components';
import { BOOK_SEARCH_CATEGORY_NAME } from '@/components/Topbar';

const meta: Meta<typeof Searchbar> = {
  component: Searchbar,
  title: 'components/Searchbar',
  tags: ['autodocs'],
  argTypes: {
    categoryInfo: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof Searchbar>;

export const BookSearchbar: Story = {
  args: {
    categoryInfo: BOOK_SEARCH_CATEGORY_NAME,
  },
};
