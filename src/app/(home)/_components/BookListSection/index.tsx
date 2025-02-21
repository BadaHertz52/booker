import Link from 'next/link';

import styles from '@/app/(home)/page.module.scss';
import { BookList } from '@/components';
import { BookListSkeletonProps } from '@/components/book/BookList';
import { BookItemData } from '@/types';

const H2 = ({ title }: { title: string }) => {
  return <h2>{title}</h2>;
};
interface BookListSectionProps {
  linkHref?: string;
  title: string;
  bookItemsData: BookItemData[];
}

const BookListSectionLoaded = ({ title, bookItemsData, linkHref }: BookListSectionProps) => {
  return (
    <section>
      {linkHref ? (
        <Link href={linkHref}>
          <H2 title={title} />
        </Link>
      ) : (
        <H2 title={title} />
      )}
      <BookList.Loaded listTitle={title} bookItemsData={bookItemsData} />
    </section>
  );
};

const BookListSectionSkeleton = ({ listTitle, listLength }: BookListSkeletonProps) => {
  return (
    <section>
      <div className={styles.titleSkeleton} />
      <BookList.Skeleton listTitle={listTitle} listLength={listLength} />
    </section>
  );
};

const BookListSection = {
  Loaded: BookListSectionLoaded,
  Skeleton: BookListSectionSkeleton,
};

export default BookListSection;
