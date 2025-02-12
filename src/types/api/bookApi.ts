export interface ApiLibrarianPickData {
  [key: string]: any; // 추가 속성 무시
  recomtitle: string;
  recomauthor: string;
  recompublisher: string;
  recomfilepath: string; // 커버 이미지
  recome_isbn: string;
  recomcontens: string;
}

export interface NaruApiBookData {
  [key: string]: any;
  bookname: string;
  authors: string;
  publisher: string;
  publication_year: string;
  isbn13: string;
  bookImageURL: string;
}

export interface NaruApiBookDetailsData extends NaruApiBookData {
  class_nm: string; //도서 종류 분류 (ex :문학 \u003E 한국문학 \u003E 소설)
  description: string;
}

export interface NaruApiBookDetailsDataTotalLoanInfo {
  ranking: number;
  loanCnt: number;
}
