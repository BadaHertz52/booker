import { fetchBookDetails } from '@/services/books/book';
import { fetchBooksForMania } from '@/services/books/bookList';
import { NaruApiBookData, NaruApiBookDetailsData, NaruApiBookDetailsDataTotalLoanInfo } from '@/types/api/bookApi';
import { BookItemData } from '@/types/books';
import { formatNaruApiBookDataToBookItemData, formatNaruApiBookDetailsData } from '@/utils/bookDataFormatter';

export const getBookDetails = async (isbn: string) => {
  const data = await fetchBookDetails(isbn);
  const { detail, loanInfo } = data.response;
  const naruBookDetailsData: NaruApiBookDetailsData = detail[0].book;
  const totalLoanInfo: NaruApiBookDetailsDataTotalLoanInfo = loanInfo[0].Total;

  return formatNaruApiBookDetailsData({ naruBookDetailsData, totalLoanInfo });
};

export const getBooksForMania = async (isbn: string) => {
  const data = await fetchBooksForMania(isbn);
  const { response } = data;

  if (response.resultNum === 0) return [];

  const books: BookItemData[] = data.response.docs.map(({ book }: { book: NaruApiBookData }) =>
    formatNaruApiBookDataToBookItemData(book),
  );

  return books;
};
