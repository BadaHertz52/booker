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
