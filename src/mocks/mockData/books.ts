import { BookSimpleInfo } from '@/types';

const BOOK_COVER_IMG_URL =
  'https://images.unsplash.com/photo-1612541831162-96d8fe7558f9?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

export const RECOMMENDED_BOOKS_MOCK_DATA: BookSimpleInfo[] = [
  {
    isbn: 9780743273565,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    publisher: 'Scribner',
    contents:
      'The story of the mysteriously wealthy Jay Gatsby and his love for the beautiful Daisy Buchanan, of lavish parties on Long Island.',
    coverImageUrl: BOOK_COVER_IMG_URL,
  },
  {
    isbn: 9780446310786,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    publisher: 'J.B. Lippincott & Co.',
    contents:
      'The unforgettable novel of a childhood in a sleepy Southern town and the crisis of conscience that rocked it.',
    coverImageUrl: BOOK_COVER_IMG_URL,
  },
  {
    isbn: 9780451524934,
    title: '1984',
    author: 'George Orwell',
    publisher: 'Penguin Random House',
    contents:
      'The chilling dystopian novel that explores the dangers of totalitarianism and the importance of individual freedom.',
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
