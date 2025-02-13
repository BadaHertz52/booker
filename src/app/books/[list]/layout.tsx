import { H1 } from '@/components';

import styles from './layout.module.scss';

const TITLE: Record<string, string> = {
  popular: '인기 대출 도서',
};

export type BooksPageParams = Promise<{
  list: string;
}>;

export const generateMetadata = async ({ params }: { params: BooksPageParams }) => {
  const { list } = await params;

  return {
    title: `BOOKER - ${TITLE[list]}`,
  };
};

interface LayoutProps {
  children: React.ReactNode;
  params: BooksPageParams;
}

const Layout = async ({ children, params }: LayoutProps) => {
  const { list } = await params;

  return (
    <div className={styles.layout}>
      <H1 contents={TITLE[list]} />
      {children}
    </div>
  );
};

export default Layout;
