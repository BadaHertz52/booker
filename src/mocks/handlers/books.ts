import { http, HttpResponse } from 'msw';

import { publicLibraryEndpoint } from '@/services';
import {
  BASIC_BOOK_DETAILS_URL,
  BASIC_BOOKS_FOR_MANIA,
  BASIC_POPULAR_BOOKS_URL,
  BASIC_SEARCH_BOOKS_URL,
  naruEndpoint,
} from '@/services/endpoints/naruEndpoint';

import { LIBRARIAN_PICK_XML } from '../mockData';
import { BOOKS_DOCS_DATA, BOOKS_FOR_MANIA, NARU_API_BOOK_DETAILS_DATA, RISING_BOOKS_DATA } from '../mockData/books';

const interceptGetLastMonthLibrarianPick = () => {
  return http.get(publicLibraryEndpoint.librarianPick, async () => {
    return HttpResponse.xml(LIBRARIAN_PICK_XML, { status: 200 });
  });
};

const interceptGetPopularBooks = () => {
  return http.get(BASIC_POPULAR_BOOKS_URL, async ({ request }) => {
    const url = new URL(request.url);
    const pageNo = Number(url.searchParams.get('pageNo'));
    const pageSize = Number(url.searchParams.get('pageSize'));

    const numFound = 45;
    const books = [];
    const availBooksLength = BOOKS_DOCS_DATA.popular.length;
    const remains = numFound - pageNo * pageSize;
    const targetLength = remains >= 0 ? pageNo * pageSize : numFound;
    // 첫 페이지이면 1부터, 아닐 경우 이전 페이지 다음 부터
    const startIndex = pageNo === 1 ? 1 : (pageNo - 1) * pageSize + 1;
    for (let i = startIndex; i <= targetLength; i++) {
      const targetBookDoc = BOOKS_DOCS_DATA.popular[i % availBooksLength];

      const thirteenDigitNumber = `${i < 10 ? '9' : ''}` + i.toString() + '0'.repeat(10);

      books.push({ doc: { ...targetBookDoc.doc, isbn13: thirteenDigitNumber } });
    }

    const data = {
      response: {
        docs: books,
        numFound,
        resultSum: books.length,
      },
    };
    return HttpResponse.json(data);
  });
};

const interceptGetRisingBooks = () => {
  return http.get(naruEndpoint.risingBooks, async () => {
    return HttpResponse.json(RISING_BOOKS_DATA);
  });
};

const interceptGetSearchBooks = () => {
  return http.get(BASIC_SEARCH_BOOKS_URL, async ({ request }) => {
    const url = new URL(request.url);
    const pageNo = Number(url.searchParams.get('pageNo'));
    const pageSize = Number(url.searchParams.get('pageSize'));

    const dataRequest = {
      pageNo,
      pageSize,
      title: 'mock',
    };
    const numFound = 45;
    const searchBooks = [];
    const availBooksLength = BOOKS_DOCS_DATA.popular.length;
    const remains = numFound - pageNo * pageSize;
    const targetLength = remains >= 0 ? pageNo * pageSize : numFound;
    // 첫 페이지이면 1부터, 아닐 경우 이전 페이지 다음 부터
    const startIndex = pageNo === 1 ? 1 : (pageNo - 1) * pageSize + 1;
    for (let i = startIndex; i <= targetLength; i++) {
      const targetBookDoc = BOOKS_DOCS_DATA.popular[i % availBooksLength];

      const thirteenDigitNumber = `${i < 10 ? '9' : ''}` + i.toString() + '0'.repeat(10);

      searchBooks.push({ doc: { ...targetBookDoc.doc, isbn13: thirteenDigitNumber } });
    }

    const data = {
      response: {
        docs: searchBooks,
        request: dataRequest,
        numFound,
      },
    };

    return HttpResponse.json(data);
  });
};

const interceptBookDetails = () => {
  return http.get(BASIC_BOOK_DETAILS_URL, async () => {
    return HttpResponse.json(NARU_API_BOOK_DETAILS_DATA);
  });
};

const interceptBooksForMania = () => {
  return http.get(BASIC_BOOKS_FOR_MANIA, async () => {
    return HttpResponse.json(BOOKS_FOR_MANIA);
  });
};

export const booksHandlers = [
  interceptGetLastMonthLibrarianPick(),
  interceptGetPopularBooks(),
  interceptGetRisingBooks(),
  interceptGetSearchBooks(),
  interceptBookDetails(),
  interceptBooksForMania(),
];
