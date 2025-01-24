import type { Meta, StoryObj } from '@storybook/react';

import { BOOK_SEARCH_CATEGORY_NAME } from '@/components/Topbar';

import Searchbar from '../components/Searchbar';

const meta: Meta<typeof Searchbar> = {
  component: Searchbar,
  title: 'components/Searchbar',
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
