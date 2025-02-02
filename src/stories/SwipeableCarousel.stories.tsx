import type { Meta, StoryObj } from '@storybook/react';

import { SwipeableCarousel } from '@/components';

import StoryWrapper from './components/StoryWrapper';

const meta = {
  title: 'Components/Carousel/SwipeableCarousel',
  component: SwipeableCarousel,
  tags: ['autodocs'],
} satisfies Meta<typeof SwipeableCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const cardsInfoScreenReader = [
  { title: 'BOOKER - SwipeableCarousel 사용법' },
  { title: '좌우로 스와이프하며 카드를 이동할 수 있어요' },
  { title: '카드 이동 시, 프로그레스바가 이동해요' },
  { title: 'BOOKER - SwipeableCarousel 사용법' },
  { title: '좌우로 스와이프하며 카드를 이동할 수 있어요' },
  { title: '카드 이동 시, 프로그레스바가 이동해요' },
];

const colors = ['#ffc300', '#d1fbba', '#7bf0f7', '#d6b0e1', '#9387ff', '#0af7bf'];

export const Default: Story = {
  args: {
    children: cardsInfoScreenReader.map((info, index) => (
      <div
        key={info.title}
        style={{
          width: '50rem',
          height: '20rem',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors[index],
          fontSize: '1.6rem',
        }}
      >
        <p>{info.title}</p>
      </div>
    )),
  },
  render: (args) => (
    <div style={{ width: '70rem', height: '30rem' }}>
      <SwipeableCarousel {...args} />
    </div>
  ),
};
