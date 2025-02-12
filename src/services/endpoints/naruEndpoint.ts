import { BOOK_SEARCH_CATEGORY_NAME, SEARCH_PAGE_SIZE } from '@/constants';
import { getCurrentAndPastWeek, getPastDate } from '@/utils';

const NARU_BASE_URL = 'http://data4library.kr/api';
const authKey = process.env.NEXT_BOOK_NARU_API_KEY || '';
const format = 'json';

const getPopularBooksParams = () => {
  const { currentDate: endDt, onWeekago: startDt } = getCurrentAndPastWeek();

  return new URLSearchParams({
    authKey,
    startDt,
    endDt,
    pageNo: '1',
    pageSize: '5',
    format,
  });
};
/**
 * 어제일 기준 대출 급상승 도서 목록 API 요청 url 파라미터
 */
const getRisingBooksParams = () => {
  return new URLSearchParams({
    authKey,
    searchDt: getPastDate(1),
    format,
  });
};

export interface GetSearchBooksParamsParams {
  category: keyof typeof BOOK_SEARCH_CATEGORY_NAME;
  keyword: string;
  pageNumber: string;
}
/**
 * 검색어를 대출이 많은 순으로 내려주는 검색 API 파라미터
 */
export const getSearchBooksParams = ({ category, keyword, pageNumber }: GetSearchBooksParamsParams) => {
  const params: Record<string, string> = {
    authKey,
    sort: 'loan',
    pageSize: SEARCH_PAGE_SIZE.toString(),
    pageNo: pageNumber,
    format,
    [category]: keyword,
  };

  return new URLSearchParams(params);
};

export const BASIC_SEARCH_BOOKS_URL = NARU_BASE_URL + '/srchBooks';

export const naruEndpoint = {
  popularBooks: NARU_BASE_URL + '/loanItemSrch' + '?' + getPopularBooksParams(),
  risingBooks: NARU_BASE_URL + '/hotTrend' + '?' + getRisingBooksParams(),
  gettingSearchBooks: (params: GetSearchBooksParamsParams) =>
    BASIC_SEARCH_BOOKS_URL + '?' + getSearchBooksParams(params),
};
