export interface BookSimpleInfo {
  title: string;
  isbn: number;
  author: string;
  publisher: string;
  content: string;
  coverImageUrl: string;
}

export interface BookItemData {
  isbn: number;
  title: string;
  coverImageUrl: string;
  author: string;
  publisher: string;
  publicationYear: number;
}

export interface BookDetailData {
  isbn: number;
  title: string;
  author: string;
  publisher: string;
  publicationYear: number;
  publicationDate: Date;
  content: string;
  coverImageUrl: string;
  category: string;
  loans: { count: number; rank: number };
}
