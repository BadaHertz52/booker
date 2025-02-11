import { getCurrentAndPastWeek } from '@/utils';

const NARU_BASE_URL = 'http://data4library.kr/api';

const getPopularBooksParams = () => {
  const { currentDate: endDt, onWeekago: startDt } = getCurrentAndPastWeek();

  return new URLSearchParams({
    authKey: process.env.NEXT_BOOK_NARU_API_KEY || '',
    startDt,
    endDt,
    pageNo: '1',
    pageSize: '5',
    format: 'json',
  });
};

export const naruEndpoint = {
  popularBooks: NARU_BASE_URL + '/loanItemSrch' + '?' + getPopularBooksParams(),
};
