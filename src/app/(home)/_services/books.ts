import { fetchPopularBooks } from '@/services';
import { BookItemData, PopularBookData } from '@/types';

const formatePopularBookDataToBookItemData = (doc: PopularBookData) => {
  let author = doc.authors;
  let translator;

  if (doc.authors.includes('지은이')) {
    author = doc.authors
      .split(';')[0]
      .trim()
      .replace(/지은이:/, '');
  }
  if (doc.authors.includes('옮긴이')) {
    translator = doc.authors
      .split(';')[1]
      .trim()
      .replace(/옮긴이:/, '');
  }

  const book: BookItemData = {
    title: doc.bookname,
    isbn: Number(doc.isbn13),
    author,
    translator,
    publisher: doc.publisher,
    coverImageUrl: doc.bookImageURL,
    publicationYear: Number(doc.publication_year),
  };

  return book;
};

export const getPopularBooks = async (): Promise<BookItemData[]> => {
  const data = await fetchPopularBooks();

  const popularBooks: BookItemData[] = data.docs.map((doc: PopularBookData) => {
    return formatePopularBookDataToBookItemData(doc.doc);
  });

  return popularBooks;
};
