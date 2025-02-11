import { http, HttpResponse } from 'msw';

import { publicLibraryEndpoint } from '@/services';

import { LIBRARIAN_PICK_XML } from '../mockData';

const interceptGetLastMonthLibrarianPick = () => {
  return http.get(publicLibraryEndpoint.librarianPick, async () => {
    return HttpResponse.xml(LIBRARIAN_PICK_XML, { status: 200 });
  });
};

export const booksHandlers = [interceptGetLastMonthLibrarianPick()];
