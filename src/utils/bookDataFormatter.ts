import { BookItemData, NaruApiBookData } from '@/types';

export const formatAuthors = (doc: NaruApiBookData) => {
  let author = doc.authors;
  let translator;

  const patterns = [
    { author: '지은이:', translator: '옮긴이:', delimiter: ';' },
    { author: '(지은이)', translator: '(옮긴이)', delimiter: ',' },
    { author: '지음', translator: '옮김', delimiter: ';' },
  ];

  for (const pattern of patterns) {
    if (doc.authors.includes(pattern.author) && doc.authors.includes(pattern.translator)) {
      const [first, second] = doc.authors.split(pattern.delimiter).map((item) => item.trim());
      author = first.replace(pattern.author, '').trim();
      translator = second.replace(pattern.translator, '').trim();
      break;
    }
  }

  author = author.replace(';', '﹒');

  return { author, translator };
};

export const formatNaruApiBookDataToBookItemData = (doc: NaruApiBookData) => {
  const { author, translator } = formatAuthors(doc);

  const book: BookItemData = {
    title: doc.bookname,
    isbn: doc.isbn13,
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
