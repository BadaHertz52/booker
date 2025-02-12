import { BookDetails, RelatedBooks } from './_components';
import { getBookDetails, getBooksForMania } from './_services/book';
import styles from './page.module.scss';

export interface BookDetailsPageParams {
  params: Promise<{
    isbn: string;
  }>;
}

const BookDetailsPage = async ({ params }: BookDetailsPageParams) => {
  const { isbn } = await params;
  const bookDetailData = await getBookDetails(isbn);
  const booksForMania = await getBooksForMania(isbn);
  return (
    <div className={styles.container}>
      <BookDetails.Loaded bookDetailData={bookDetailData} />
      <RelatedBooks relatedBooks={booksForMania} />
    </div>
  );
};

export default BookDetailsPage;
