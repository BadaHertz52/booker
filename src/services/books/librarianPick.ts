import { ERROR_MESSAGE, ERROR_NAME } from '@/constants';
import CustomError from '@/errors/CustomError';
import { ApiLibrarianPickData, BookSimpleInfo } from '@/types';
import { extractPlainTextFromXML, getLastMonthDates, parseXmlToJson } from '@/utils';

import { publicLibraryEndpoint } from '../index';

/**
 * 국립 중앙 도서관 - 지난달 사서 추천 도서 목록
 */
export const fetchLastMonthLibrarianPick = async () => {
  const { firstDay: startDate, lastDay: endDate } = getLastMonthDates();
  // NOTE: 변경 사항이 없는 지난 달 사서 추천 도서 목록을 가져오는 것이므로 캐시를 강제함
  const response = await fetch(publicLibraryEndpoint.gettingLibrarianPick({ startDate, endDate }), {
    cache: 'force-cache',
  });

  if (!response.ok) {
    const error = new CustomError({
      message: ERROR_MESSAGE.librarianPick,
      statusCode: response.status,
      name: ERROR_NAME.librarianPick,
    });

    console.error(error.message);

    throw error;
  }

  return response;
};

/**
 * 국립 중앙 도서관 - xml형태의 사서 추천 도서 목록을 JSON 형식으로 변환
 */
export const formatLastMonthLibrarianPick = async (response: Response): Promise<BookSimpleInfo[]> => {
  const xml = await response.text();
  const {
    channel: { list },
  } = parseXmlToJson({ xml });
  const result: BookSimpleInfo[] = list.map(({ item }: ApiLibrarianPickData) => {
    const info: BookSimpleInfo = {
      title: item.recomtitle,
      author: item.recomauthor,
      publisher: item.recompublisher,
      isbn: Number(item.recome_isbn),
      coverImageUrl: item.recomfilepath,
      content: extractPlainTextFromXML(item.recomcontens),
    };
    return info;
  });

  return result;
};
