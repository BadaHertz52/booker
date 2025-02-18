import { H1 } from '@/components';
import { BOOKS_TITLE } from '@/constants';

import styles from './layout.module.scss';

export const TITLE: Record<string, string> = {
  popular: '인기 대출 도서',
};

export type BooksPageParams = Promise<{
  list: string;
}>;

export const generateMetadata = async ({ params }: { params: BooksPageParams }) => {
  const { list } = await params;

  return {
    title: `BOOKER - ${BOOKS_TITLE[list]}`,
  };
};

interface BookListPageLayoutProps {
  list: string;
  children: React.ReactNode;
}

export const BookListPageLayout = ({ list, children }: BookListPageLayoutProps) => {
  return (
    <div className={styles.layout}>
      <H1 contents={TITLE[list]} />
      {children}
    </div>
  );
};

interface LayoutProps {
  children: React.ReactNode;
  params: BooksPageParams;
}

const Layout = async ({ children, params }: LayoutProps) => {
  const { list } = await params;

  return <BookListPageLayout list={list}>{children}</BookListPageLayout>;
};

export default Layout;
