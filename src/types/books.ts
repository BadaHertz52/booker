export interface BookSimpleInfo {
  title: string;
  isbn: string;
  author: string;
  translator?: string;
  publisher: string;
  content: string;
  coverImageUrl: string;
}

export interface BookItemData {
  isbn: string;
  title: string;
  coverImageUrl: string;
  author: string;
  translator?: string;
  publisher: string;
  publicationYear: number;
  loanRankingIncrease?: number; // 대출 상승폭 - 대출 급상승 도서에서 보여짐
}

export interface BookDetailData extends BookItemData {
  content: string;
  category: string;
  loans: { count: number; rank: number };
}
