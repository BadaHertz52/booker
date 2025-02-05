import { XMLParser, X2jOptions } from 'fast-xml-parser';

interface ParseXmlToJsonOptions {
  xml: string;
  options?: X2jOptions;
}

const DEFAULT_OPTIONS: X2jOptions = {
  ignoreAttributes: false,
};

export const parseXmlToJson = ({ xml, options = DEFAULT_OPTIONS }: ParseXmlToJsonOptions) =>
  new XMLParser(options).parse(xml);

/**
 * XML에서 <p>, <span> 등 HTML 태그를 제거하고 순수한 텍스트만 가져오는 함수
 */
export function extractPlainTextFromXML(rawContent: string): string {
  // HTML 태그 제거 (줄바꿈 유지)
  const cleanText = rawContent
    .replace(/<\/?[^>]+(>|$)/g, '') // 모든 HTML 태그 제거
    .replace(/&nbsp;/g, ' ') // 공백 문자 처리
    .replace(/&middot;/g, '·') // 특수 문자 처리
    .replace(/\n\s*\n/g, '\n'); // 연속된 줄바꿈 정리

  return cleanText.trim(); // 앞뒤 공백 제거
}
