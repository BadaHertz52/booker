import { BookDetailData, BookItemData, BookSimpleInfo } from '@/types';

import bookCoverImg from './cover.jpeg';
const BOOK_COVER_IMG_URL = bookCoverImg.src;

export const RECOMMENDED_BOOKS_MOCK_DATA: BookSimpleInfo[] = [
  {
    isbn: 9780743273565,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publisher: 'Scribner',
    contents:
      'The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island. The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island.',
    coverImageUrl: BOOK_COVER_IMG_URL,
  },
  {
    isbn: 9780446310786,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publisher: 'J.B. Lippincott & Co.',
    contents:
      'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it. The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.',
    coverImageUrl: BOOK_COVER_IMG_URL,
  },
  {
    isbn: 9780451524934,
    title: '1984',
    author: 'George Orwell',
    publisher: 'Penguin Random House',
    contents:
      'The chilling dystopian novel that explores the dangers of totalitarianism and the importance of individual freedom. The chilling dystopian novel that explores the dangers of totalitarianism and the importance of individual freedom. The chilling dystopian novel that explores the dangers of totalitarianism and the importance of individual freedom.',
    coverImageUrl: BOOK_COVER_IMG_URL,
  },
  {
    isbn: 9780141439518,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    publisher: 'Penguin Classics',
    contents: '영국 중산층 가정의 다섯 자매와 그들을 둘러싼 사랑과 결혼 이야기를 그린 고전 소설.',
    coverImageUrl: BOOK_COVER_IMG_URL,
  },
  {
    isbn: 9780316769488,
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    publisher: 'Little, Brown and Company',
    contents: '16세 소년 홀든 콜필드의 3일간의 방황을 통해 청소년기의 혼란과 성장통을 그린 현대 문학의 고전.',
    coverImageUrl: BOOK_COVER_IMG_URL,
  },
];

export const HOT_BOOKS_MOCK_DATA: BookItemData[] = RECOMMENDED_BOOKS_MOCK_DATA.map((book) => ({
  ...book,
  publicationYear: 2025,
}));

export const FRONTEND_BOOKS_MOCK_DATA: BookItemData[] = [
  {
    isbn: 9781449331818,
    title: '러닝 리액트',
    author: '알렉스 뱅크스, 이브 포셀로',
    publisher: '한빛미디어',
    coverImageUrl: BOOK_COVER_IMG_URL,
    publicationYear: 2021,
  },
  {
    isbn: 9788966262557,
    title: '모던 자바스크립트 Deep Dive',
    author: '이웅모',
    publisher: '위키북스',
    coverImageUrl: BOOK_COVER_IMG_URL,
    publicationYear: 2020,
  },
  {
    isbn: 9791158392239,
    title: '타입스크립트 프로그래밍',
    author: '보리스 체르니',
    publisher: '인사이트',
    coverImageUrl: BOOK_COVER_IMG_URL,
    publicationYear: 2021,
  },
  {
    isbn: 9791165921675,
    title: '프론트엔드 성능 최적화 가이드',
    author: '김효진',
    publisher: '프로그래밍인사이트',
    coverImageUrl: BOOK_COVER_IMG_URL,
    publicationYear: 2022,
  },
  {
    isbn: 9791162245262,
    title: 'Next.js 완벽 가이드',
    author: '이재승',
    publisher: '길벗',
    coverImageUrl: BOOK_COVER_IMG_URL,
    publicationYear: 2023,
  },
];

export const BOOK_DETAIL_MOCK_DATA: BookDetailData = {
  isbn: 9781449331818,
  title: '러닝 리액트',
  author: '알렉스 뱅크스, 이브 포셀로',
  publisher: '한빛미디어',
  publicationYear: 2021,
  contents: '러닝 리액트',
  coverImageUrl: BOOK_COVER_IMG_URL,
  category: '프론트엔드',
  loans: { count: 100, rank: 1 },
};
