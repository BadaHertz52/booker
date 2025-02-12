export interface BookSimpleInfo {
  title: string;
  isbn: number;
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

export interface BookDetailData {
  isbn: number;
  title: string;
  author: string;
  translator?: string;
  publisher: string;
  publicationYear: number;
  publicationDate: Date;
  content: string;
  coverImageUrl: string;
  category: string;
  loans: { count: number; rank: number };
}
