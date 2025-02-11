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

export const naruEndpoint = {
  popularBooks: NARU_BASE_URL + '/loanItemSrch' + '?' + getPopularBooksParams(),
  risingBooks: NARU_BASE_URL + '/hotTrend' + '?' + getRisingBooksParams(),
};
