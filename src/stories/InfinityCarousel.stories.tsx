import type { Meta, StoryObj } from '@storybook/react';

import { InfinityCarousel } from '@/components';

const meta = {
  title: 'Components/Carousel/InfinityCarousel',
  component: InfinityCarousel,
  tags: ['autodocs'],
} satisfies Meta<typeof InfinityCarousel>;

export default meta;
type Story = StoryObj<typeof meta>;

const cardsInfoScreenReader = [
  { title: 'BOOKER - 무한 슬라이드 사용법' },
  { title: '카드를 순회하며 카드 정보를 확인할 수 있어요' },
  { title: '자동 슬라이드 기능을 사용해보세요' },
  { title: '이전, 다음 버튼으로 카드를 이동해보세요' },
];

const colors = ['#ffc300', '#d1fbba', '#7bf0f7', '#d6b0e1'];

export const Default: Story = {
  args: {
    title: '무한 슬라이드 사용법',
    children: cardsInfoScreenReader.map((info, index) => (
      <div
        key={info.title}
        style={{
          width: '600px',
          height: '300px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: colors[index],
          fontSize: '2rem',
        }}
      >
        <p>{info.title}</p>
      </div>
    )),
    cardsInfoForScreenReader: cardsInfoScreenReader,
  },
};
