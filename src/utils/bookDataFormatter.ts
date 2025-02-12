import {
  BookDetailData,
  BookItemData,
  NaruApiBookData,
  NaruApiBookDetailData,
  NaruApiBookDetailDataTotalLoanInfo,
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
    if (doc.authors.includes(pattern.author) && doc.authors.includes(pattern.translator)) {
      const [first, second] = doc.authors.split(pattern.delimiter).map((item) => item.trim());
      author = first.replace(pattern.author, '').trim();
      translator = second.replace(pattern.translator, '').trim();
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
  naruBookDetailData: NaruApiBookDetailData;
  totalLoanInfo: NaruApiBookDetailDataTotalLoanInfo;
}
export const formatNaruApiBookDetailData = ({ naruBookDetailData, totalLoanInfo }: NaruApiBookDetailDataParams) => {
  const { author, translator } = formatAuthors(naruBookDetailData);

  const bookDetailData: BookDetailData = {
    isbn: naruBookDetailData.isbn13,
    title: naruBookDetailData.bookname,
    author,
    translator,
    publisher: naruBookDetailData.publisher,
    publicationYear: Number(naruBookDetailData.publication_year),
    coverImageUrl: naruBookDetailData.bookImageURL,
    content: naruBookDetailData.description,
    category: naruBookDetailData.class_nm,
    loans: { count: totalLoanInfo.loanCnt, rank: totalLoanInfo.ranking },
  };

  return bookDetailData;
};
