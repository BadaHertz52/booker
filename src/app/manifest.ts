import { MetadataRoute } from 'next';

export default function mainfest(): MetadataRoute.Manifest {
  return {
    name: 'BOOKER',
    description: '도서관에서 사랑받는 책을 한곳에! 도서 추천, 도서 검색 및 상세 정보를 확인해보세요',
    start_url: '/',
    theme_color: '#ffff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
