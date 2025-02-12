import { fetchDetailBook } from '@/services/books';
import { NaruApiBookDetailData, NaruApiBookDetailDataTotalLoanInfo } from '@/types';
import { formatNaruApiBookDetailData } from '@/utils';

export const getDetailBook = async (isbn: string) => {
  const data = await fetchDetailBook(isbn);
  const { detail, loanInfo } = data.response;
  const naruBookDetailData: NaruApiBookDetailData = detail[0].book;
  const totalLoanInfo: NaruApiBookDetailDataTotalLoanInfo = loanInfo[0].Total;

  return formatNaruApiBookDetailData({ naruBookDetailData, totalLoanInfo });
};
