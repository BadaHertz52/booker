import { NoBooksYet } from '@/components';
import { BookItemData } from '@/types';

import SwipeableBooksCarousel from './components/SwipeableBooksCarousel';
import styles from './index.module.scss';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <section className={styles.layout}>
      <h3>{title}</h3>
      <div className={styles.carouselWrapper}>{children}</div>
    </section>
  );
};

interface LoadedProps {
  isbn: string;
  title: string;
  fetchBooks: (isbn: string) => Promise<BookItemData[]>;
}

const Loaded = async ({ isbn, title, fetchBooks }: LoadedProps) => {
  const relatedBooks = await fetchBooks(isbn);

  return (
    <Layout title={title}>
      {relatedBooks.length === 0 ? (
        <NoBooksYet title={title} />
      ) : (
        <SwipeableBooksCarousel.Loaded relatedBooks={relatedBooks} />
      )}
    </Layout>
  );
};

const Skeleton = ({ title }: Pick<LayoutProps, 'title'>) => {
  return (
    <Layout title={title}>
      <SwipeableBooksCarousel.Skeleton />
    </Layout>
  );
};
const RelatedBooks = {
  Loaded,
  Skeleton,
};

export default RelatedBooks;
