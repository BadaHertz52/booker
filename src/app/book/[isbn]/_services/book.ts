import { fetchBookDetails, fetchBooksForMania } from '@/services/books';
import { NaruApiBookDetailsData, NaruApiBookDetailsDataTotalLoanInfo, NaruApiBookData } from '@/types';
import { formatNaruApiBookDataToBookItemData, formatNaruApiBookDetailsData } from '@/utils';

export const getBookDetails = async (isbn: string) => {
  const data = await fetchBookDetails(isbn);
  const { detail, loanInfo } = data.response;
  const naruBookDetailsData: NaruApiBookDetailsData = detail[0].book;
  const totalLoanInfo: NaruApiBookDetailsDataTotalLoanInfo = loanInfo[0].Total;

  return formatNaruApiBookDetailsData({ naruBookDetailsData, totalLoanInfo });
};

export const getBooksForMania = async (isbn: string) => {
  const data = await fetchBooksForMania(isbn);
  const books = data.response.docs.map(({ book }: { book: NaruApiBookData }) =>
    formatNaruApiBookDataToBookItemData(book),
  );

  return books;
};
