import type { Meta, StoryObj } from '@storybook/react';

import { Searchbar } from '@/components';
import { BOOK_SEARCH_CATEGORY_NAME } from '@/constants';

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
  },
  render: (args) => (
    <div style={{ width: '30rem' }}>
      <Searchbar {...args} />
    </div>
  ),
};
