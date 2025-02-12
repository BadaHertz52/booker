import {
  BookDetailData,
  BookItemData,
  NaruApiBookData,
  NaruApiBookDetailsData,
  NaruApiBookDetailsDataTotalLoanInfo,
} from '@/types';

export const formatAuthors = (doc: NaruApiBookData) => {
  let author = doc.authors;
  let translator;

  const patterns = [
    { author: '지은이:', translator: '옮긴이:', delimiter: ';' },
    { author: '(지은이)', translator: '(옮긴이)', delimiter: ',' },
    { author: '지음', translator: '옮김', delimiter: ';' },
  ];

  for (const pattern of patterns) {
    if (doc.authors.includes(pattern.author) || doc.authors.includes(pattern.translator)) {
      const [first, second] = doc.authors.split(pattern.delimiter).map((item) => item.trim());
      author = first.replace(pattern.author, '').trim();
      if (second) {
        translator = second.replace(pattern.translator, '').trim();
      }
      break;
    }
  }

  author = author.replace(';', '﹒');

  return { author, translator };
};

export const formatNaruApiBookDataToBookItemData = (doc: NaruApiBookData) => {
  const { author, translator } = formatAuthors(doc);

  const book: BookItemData = {
    title: doc.bookname,
    isbn: doc.isbn13,
    author,
    translator,
    publisher: doc.publisher,
    coverImageUrl: doc.bookImageURL,
    publicationYear: Number(doc.publication_year),
  };

  if ('difference' in doc) {
    book.loanRankingIncrease = Number(doc.difference);
  }

  return book;
};

interface NaruApiBookDetailDataParams {
  naruBookDetailsData: NaruApiBookDetailsData;
  totalLoanInfo: NaruApiBookDetailsDataTotalLoanInfo;
}

export const formatNaruApiBookDetailsData = ({ naruBookDetailsData, totalLoanInfo }: NaruApiBookDetailDataParams) => {
  const { author, translator } = formatAuthors(naruBookDetailsData);

  const bookDetailData: BookDetailData = {
    isbn: naruBookDetailsData.isbn13,
    title: naruBookDetailsData.bookname,
    author,
    translator,
    publisher: naruBookDetailsData.publisher,
    publicationYear: Number(naruBookDetailsData.publication_year),
    coverImageUrl: naruBookDetailsData.bookImageURL,
    content: naruBookDetailsData.description,
    category: naruBookDetailsData.class_nm,
    loans: { count: totalLoanInfo.loanCnt, rank: totalLoanInfo.ranking },
  };

  return bookDetailData;
};
