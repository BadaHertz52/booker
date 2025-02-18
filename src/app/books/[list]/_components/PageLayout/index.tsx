import { H1 } from '@/components';
import { BOOKS_TITLE } from '@/constants';

import styles from './index.module.scss';

interface BookListPageLayoutProps {
  list: string;
  children: React.ReactNode;
}

export const BookListPageLayout = ({ list, children }: BookListPageLayoutProps) => {
  return (
    <div className={styles.layout}>
      <H1 contents={BOOKS_TITLE[list]} />
      {children}
    </div>
  );
};
