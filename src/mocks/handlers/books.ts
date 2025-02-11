import { http, HttpResponse } from 'msw';

import { publicLibraryEndpoint } from '@/services';
import { naruEndpoint } from '@/services/endpoints/naruEndpoint';

import { LIBRARIAN_PICK_XML } from '../mockData';
import { POPULAR_BOOKS_DATA } from '../mockData/books';

const interceptGetLastMonthLibrarianPick = () => {
  return http.get(publicLibraryEndpoint.librarianPick, async () => {
    return HttpResponse.xml(LIBRARIAN_PICK_XML, { status: 200 });
  });
};

const interceptGetPopularBooks = () => {
  return http.get(naruEndpoint.popularBooks, async () => {
    return HttpResponse.json(POPULAR_BOOKS_DATA);
  });
};

export const booksHandlers = [interceptGetLastMonthLibrarianPick(), interceptGetPopularBooks()];
