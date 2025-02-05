export const PUBLIC_LIBRARY_API_BASE_URL = 'https://nl.go.kr/NL/search/openApi';

export interface GetLibrarianPickParams {
  startDate: string;
  endDate: string;
}

const getLibrarianPickParams = ({ startDate, endDate }: GetLibrarianPickParams) =>
  new URLSearchParams({
    key: process.env.NEXT_PUBLIC_BOOK_LIBRARY_API_KEY || '',
    start_date: startDate,
    end_date: endDate,
    startRowNumApi: '1',
    endRowNumApi: '5',
  }).toString();

export const publicLibraryEndpoint = {
  gettingLibrarianPick: ({ startDate, endDate }: GetLibrarianPickParams) =>
    PUBLIC_LIBRARY_API_BASE_URL + '/saseoApi.do' + '?' + getLibrarianPickParams({ startDate, endDate }),
};
