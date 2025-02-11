import { NaruApiBookData } from '@/types';

import bookCoverImg from './cover.jpeg';
const BOOK_COVER_IMG_URL = bookCoverImg.src;

export const BOOKS_DOCS_DATA = {
  popular: [
    {
      doc: {
        no: 1,
        ranking: '1',
        bookname: '소년이 온다 :한강 장편소설 ',
        authors: '지은이: 한강',
        publisher: '창비',
        publication_year: '2014',
        isbn13: '9788936434120',
        addition_symbol: '03810',
        vol: '',
        class_no: '813.62',
        class_nm: '문학 > 한국문학 > 소설',
        loan_count: '1403',
        bookImageURL: BOOK_COVER_IMG_URL,
        bookDtlUrl: 'https://data4library.kr/bookV?seq=2037399',
      },
    },
    {
      doc: {
        no: 2,
        ranking: '2',
        bookname: '작별하지 않는다 :한강 장편소설 ',
        authors: '지은이: 한강',
        publisher: '문학동네',
        publication_year: '2021',
        isbn13: '9788954682152',
        addition_symbol: '03810',
        vol: '',
        class_no: '813.62',
        class_nm: '문학 > 한국문학 > 소설',
        loan_count: '1228',
        bookImageURL: BOOK_COVER_IMG_URL,
        bookDtlUrl: 'https://data4library.kr/bookV?seq=6086446',
      },
    },
    {
      doc: {
        no: 3,
        ranking: '3',
        bookname: '채식주의자:한강 연작소설',
        authors: '한강',
        publisher: '창비',
        publication_year: '2007',
        isbn13: '9788936433598',
        addition_symbol: '03810',
        vol: '',
        class_no: '813.6',
        class_nm: '문학 > 한국문학 > 소설',
        loan_count: '874',
        bookImageURL: BOOK_COVER_IMG_URL,
        bookDtlUrl: 'https://data4library.kr/bookV?seq=2155671',
      },
    },
    {
      doc: {
        no: 4,
        ranking: '4',
        bookname: '불편한 편의점 :김호연 장편소설 ',
        authors: '지은이: 김호연',
        publisher: '나무옆의자',
        publication_year: '2021',
        isbn13: '9791161571188',
        addition_symbol: '03810',
        vol: '',
        class_no: '813.7',
        class_nm: '문학 > 한국문학 > 소설',
        loan_count: '870',
        bookImageURL: BOOK_COVER_IMG_URL,
        bookDtlUrl: 'https://data4library.kr/bookV?seq=5962217',
      },
    },
    {
      doc: {
        no: 5,
        ranking: '5',
        bookname: '이처럼 사소한 것들 :클레어 키건 소설 ',
        authors: '지은이: 클레어 키건 ;옮긴이: 홍한별',
        publisher: '다산북스',
        publication_year: '2023',
        isbn13: '9791130646381',
        addition_symbol: '03840',
        vol: '',
        class_no: '843.6',
        class_nm: '문학 > 영미문학 > 소설',
        loan_count: '716',
        bookImageURL: BOOK_COVER_IMG_URL,
        bookDtlUrl: 'https://data4library.kr/bookV?seq=6791651',
      },
    },
  ],
  rising: [
    {
      doc: {
        authors: '코이케 류노스케 (지은이), 박재현 (옮긴이)',
        bookImageURL: BOOK_COVER_IMG_URL,
        bookname: '초역 부처의 말 - 2500년 동안 사랑받은',
        isbn13: '9791193506516',
        publication_year: '2024',
        publisher: '포레스트북스',
        difference: 211,
      },
    },
    {
      doc: {
        addition_symbol: '03900',
        authors: '지은이: 유발 하라리 ;옮긴이: 김명주',
        baseWeekRank: 80,
        bookDtlUrl: 'https://data4library.kr/bookV?seq=6957908',
        bookImageURL: BOOK_COVER_IMG_URL,
        bookname: '넥서스 =석기시대부터 AI까지, 정보 네트워크로 보는 인류 역사 ',
        class_nm: '사회과학 > 사회학, 사회문제 > 사회학',
        class_no: '331.5412',
        difference: 166,
        isbn13: '9791194330424',
        no: 2,
        pastWeekRank: 246,
        publication_year: '2024',
        publisher: '김영사',
        vol: '',
      },
    },
    {
      doc: {
        addition_symbol: '43810',
        authors: '지은이: 이꽃님',
        baseWeekRank: 61,
        bookDtlUrl: 'https://data4library.kr/bookV?seq=5986948',
        bookImageURL: BOOK_COVER_IMG_URL,
        bookname: '죽이고 싶은 아이 :이꽃님 장편소설 ',
        class_nm: '문학 > 한국문학 > 소설',
        class_no: '813.7',
        difference: 131,
        isbn13: '9791190337755',
        no: 3,
        pastWeekRank: 192,
        publication_year: '2021',
        publisher: '우리학교',
      },
    },
    {
      doc: {
        addition_symbol: '03810',
        authors: '지은이: 이옥선',
        baseWeekRank: 72,
        bookDtlUrl: 'https://data4library.kr/bookV?seq=6938004',
        bookImageURL: BOOK_COVER_IMG_URL,
        bookname: '즐거운 어른 :이옥선 산문 ',
        class_nm: '문학 > 한국문학 > 르포르타주 및 기타',
        class_no: '818',
        difference: 113,
        isbn13: '9791194184034',
        no: 4,
        pastWeekRank: 185,
        publication_year: '2024',
        publisher: '이야기장수',
      },
    },
    {
      doc: {
        addition_symbol: '03840',
        authors: '지은이: 클레어 키건 ;옮긴이: 허진',
        baseWeekRank: 63,
        bookDtlUrl: 'https://data4library.kr/bookV?seq=6681980',
        bookImageURL: BOOK_COVER_IMG_URL,
        bookname: '맡겨진 소녀 :클레어 키건 소설 ',
        class_nm: '문학 > 영미문학 > 소설',
        class_no: '843.6',
        difference: 102,
        isbn13: '9791130698199',
        no: 5,
        pastWeekRank: 165,
        publication_year: '2023',
        publisher: '다산북스',
      },
    },
  ],
};

export const POPULAR_BOOKS_DATA: { response: { docs: { doc: NaruApiBookData }[] } } = {
  response: {
    docs: BOOKS_DOCS_DATA.popular,
  },
};

export const RISING_BOOKS_DATA: { response: { results: { result: { docs: { doc: NaruApiBookData }[] } }[] } } = {
  response: {
    results: [
      {
        result: {
          docs: BOOKS_DOCS_DATA.rising,
        },
      },
    ],
  },
};
