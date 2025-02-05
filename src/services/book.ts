import { getLastMonthDates, parseXmlToJson } from '@/utils';

import { publicLibraryEndpoint } from './index';

/**
 * 국립 중앙 도서관 - 지난달 사서 추천 도서 목록
 */
export const fetchLastMonthLibrarianPick = async () => {
  const { firstDay: startDate, lastDay: endDate } = getLastMonthDates();

  const response = await fetch(publicLibraryEndpoint.gettingLibrarianPick({ startDate, endDate }));

  if (!response.ok) {
    console.error(`${response.status}:사서 추천 도서 목록 요청 실패`);
    throw new Error('사서 추천 도서 목록을 불러오는데 실패했어요');
  }

  return response;
};

