export const PUBLIC_LIBRARY_API_BASE_URL = 'https://nl.go.kr/NL/search/openApi';

export interface GetLibrarianPickParams {
  startDate: number;
  endDate: number;
}
/**
 * 국립 중앙 도서관 - 사서 추천 도서 목록 요청 파라미터
 * @param startDate 시작 날짜
 * @param endDate 종료 날짜
 * @returns 파라미터 문자열
 */
const getLibrarianPickParams = ({ startDate, endDate }: GetLibrarianPickParams) => {
  const LIBRARIAN_ROW = {
    startRowNumApi: '1',
    endRowNumApi: '10',
  };

  return new URLSearchParams({
    key: process.env.NEXT_PUBLIC_BOOK_LIBRARY_API_KEY || '',
    start_date: startDate.toString(),
    end_date: endDate.toString(),
    ...LIBRARIAN_ROW,
  }).toString();
};

/**
 * 국립 중앙 도서관 - 사서 추천 도서 목록 요청 엔드포인트
 * @param startDate 시작 날짜
 * @param endDate 종료 날짜
 * @returns 엔드포인트 문자열
 */
export const publicLibraryEndpoint = {
  gettingLibrarianPick: ({ startDate, endDate }: GetLibrarianPickParams) =>
    PUBLIC_LIBRARY_API_BASE_URL + '/saseoApi.do' + '?' + getLibrarianPickParams({ startDate, endDate }),
};
