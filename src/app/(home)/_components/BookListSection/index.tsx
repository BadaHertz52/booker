import styles from '@/app/(home)/page.module.scss';
import { BookList } from '@/components';
import { BookListSkeletonProps } from '@/components/book/BookList';
import { BookItemData } from '@/types';

interface BookListSectionProps {
  title: string;
  bookItemsData: BookItemData[];
}

const BookListSectionLoaded = ({ title, bookItemsData }: BookListSectionProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <BookList.Loaded listTitle="대출 급상승 도서" bookItemsData={bookItemsData} />
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
