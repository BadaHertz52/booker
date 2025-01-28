export interface BookSimpleInfo {
  title: string;
  isbn: number;
  author: string;
  publisher: string;
  contents: string;
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
