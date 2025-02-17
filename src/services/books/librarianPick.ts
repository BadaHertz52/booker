import { ERROR_MESSAGE, ERROR_NAME, ONE_DAY_IN_SECONDS } from '@/constants';
import { ApiLibrarianPickData, BookSimpleInfo } from '@/types';
import { extractPlainTextFromXML, parseXmlToJson, throwRequestError, truncateText } from '@/utils';

import { publicLibraryEndpoint } from '../index';

/**
 * 국립 중앙 도서관 - 지난달 사서 추천 도서 목록
 */
export const fetchLastMonthLibrarianPick = async () => {
  const response = await fetch(publicLibraryEndpoint.librarianPick, { next: { revalidate: ONE_DAY_IN_SECONDS } });
  if (!response.ok) {
    throwRequestError({
      statusCode: response.status,
      errorMessage: ERROR_MESSAGE.librarianPick,
      errorName: ERROR_NAME.librarianPick,
    });
  }

  return response;
};
/**
 * 지난달 사서 추천 도서 목록 접근 권한 오류 처리
 * @param data 지난달 사서 추천 도서 목록 데이터
 */
const handleLastMonthLibrarianPickError = (data: any) => {
  const STATUS_CODE = {
    '010': 400,
    '011': 401,
  };

  const errorCode = data.errorCode;

  throwRequestError({
    statusCode: STATUS_CODE[errorCode as keyof typeof STATUS_CODE],
    errorMessage: ERROR_MESSAGE.librarianPick,
    errorName: ERROR_NAME.librarianPick,
  });
};

/**
 * 지난달 사서 추천 도서 목록 포맷팅
 * @param data 지난달 사서 추천 도서 목록 데이터
 * @returns 지난달 사서 추천 도서 목록 포맷팅 데이터
 */
const formatLastMonthLibrarianPick = (data: any) => {
  const {
    channel: { list },
  } = data;
  const MAX_CONTENT_LENGTH = 100;

  const result: BookSimpleInfo[] = list.map(({ item }: ApiLibrarianPickData) => {
    let author = item.recomauthor.replace('지음', '').trim();
    let translator;

    if (item.recomauthor.includes('옮김')) {
      const splitedText = item.recomauthor.split(';');
      author = splitedText[0].trim().replace('지음', '');
      translator = splitedText[1].trim().replace('옮김', '');
    }
    const recomcontents = extractPlainTextFromXML(item.recomcontens);
    const content = truncateText({ text: recomcontents, maxLength: MAX_CONTENT_LENGTH });

    const info: BookSimpleInfo = {
      title: item.recomtitle,
      author,
      translator,
      publisher: item.recompublisher,
      isbn: item.recomisbn,
      coverImageUrl: item.recomfilepath,
      content,
    };
    return info;
  });

  return result;
};

/**
 * 국립 중앙 도서관 - xml형태의 사서 추천 도서 목록을 JSON 형식으로 변환
 */
export const parseLastMonthLibrarianPick = async (response: Response) => {
  const xml = await response.text();
  const data = parseXmlToJson({
    xml,
    options: {
      ignoreAttributes: true,
    },
  });

  if ('error' in data) {
    handleLastMonthLibrarianPickError(data);
  }

  return formatLastMonthLibrarianPick(data);
};
