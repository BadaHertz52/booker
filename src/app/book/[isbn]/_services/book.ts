import { fetchBookDetails } from '@/services/books';
import { NaruApiBookDetailsData, NaruApiBookDetailsDataTotalLoanInfo } from '@/types';
import { formatNaruApiBookDetailsData } from '@/utils';

export const getBookDetails = async (isbn: string) => {
  const data = await fetchBookDetails(isbn);
  const { detail, loanInfo } = data.response;
  const naruBookDetailsData: NaruApiBookDetailsData = detail[0].book;
  const totalLoanInfo: NaruApiBookDetailsDataTotalLoanInfo = loanInfo[0].Total;

  return formatNaruApiBookDetailsData({ naruBookDetailsData, totalLoanInfo });
};
