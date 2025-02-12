import type { Meta, StoryObj } from '@storybook/react';

import BookDetails from '@/app/book/[isbn]/_components/BookDetails';
import { BOOK_DETAILS_MOCK_DATA } from '@/mocks/mockData';

const meta: Meta<typeof BookDetails.Loaded> = {
  component: BookDetails.Loaded,
  title: 'components/Book/BookDetails',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ul style={{ border: '1px solid black', padding: '1rem', borderRadius: '1rem', width: '45rem' }}>
        <Story />
      </ul>
    ),
  ],
  argTypes: {
    bookDetailData: { control: 'object' },
  },
};

export default meta;
type Story = StoryObj<typeof BookDetails.Loaded>;

export const Default: Story = {
  args: {
    bookDetailData: BOOK_DETAILS_MOCK_DATA,
  },
};

export const Skeleton: StoryObj<typeof BookDetails.Skeleton> = {
  render: () => <BookDetails.Skeleton />,
};
