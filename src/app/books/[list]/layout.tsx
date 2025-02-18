import { BOOKS_TITLE } from '@/constants';

import { BookListPageLayout } from './_components/PageLayout';

export type BooksPageParams = Promise<{
  list: string;
}>;

export const generateMetadata = async ({ params }: { params: BooksPageParams }) => {
  const { list } = await params;

  return {
    title: `BOOKER - ${BOOKS_TITLE[list]}`,
  };
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
