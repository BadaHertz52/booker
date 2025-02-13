import type { Meta, StoryObj } from '@storybook/react';

import { Searchbar } from '@/components';
import { BOOK_SEARCH_CATEGORY_NAME } from '@/constants';

import { ProcessSearchParams } from '../components/search/Searchbar/action/searchAction';

const meta: Meta<typeof Searchbar> = {
  component: Searchbar,
  title: 'components/Search/Searchbar',
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
    processSearch: ({ selectedCategory, searchValue }: ProcessSearchParams) => {
      alert(`selectedCategory: ${selectedCategory}, searchValue: ${searchValue}`);
    },
  },
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <Searchbar {...args} />
    </div>
  ),
};
