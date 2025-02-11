import { fetchPopularBooks, fetchRisingBooks } from '@/services';
import { BookItemData, NaruApiBookData } from '@/types';

const formatAuthors = (doc: NaruApiBookData) => {
  let author = doc.authors;
  let translator;
  // case1 : "지은이:~; 옮긴이:~"
  if (doc.authors.includes('지은이:')) {
    author = doc.authors
      .split(';')[0]
      .trim()
      .replace(/지은이:/, '');
  }
  if (doc.authors.includes('옮긴이:')) {
    translator = doc.authors
      .split(';')[1]
      .trim()
      .replace(/옮긴이:/, '');
  }
  // case2 : "~(지은이), ~(옮긴이)"
  if (doc.authors.includes('(지은이)')) {
    author = doc.authors
      .split(',')[0]
      .trim()
      .replace(/\(지은이\)/, '');
  }
  if (doc.authors.includes('(옮긴이)')) {
    translator = doc.authors
      .split(',')[1]
      .trim()
      .replace(/\(옮긴이\)/, '');
  }

  return { author, translator };
};
const formatNaruApiBookDataToBookItemData = (doc: NaruApiBookData) => {
  const { author, translator } = formatAuthors(doc);

  const book: BookItemData = {
    title: doc.bookname,
    isbn: Number(doc.isbn13),
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

export const getPopularBooks = async (): Promise<BookItemData[]> => {
  const data = await fetchPopularBooks();

  return data.response.docs.map(({ doc }: { doc: NaruApiBookData }) => {
    return formatNaruApiBookDataToBookItemData(doc);
  });
};

export const getRisingBooks = async () => {
  const data = await fetchRisingBooks();

  const books = data.response.results[0].result.docs.map(({ doc }: { doc: NaruApiBookData }) => {
    return formatNaruApiBookDataToBookItemData(doc);
  });

  return books;
};
