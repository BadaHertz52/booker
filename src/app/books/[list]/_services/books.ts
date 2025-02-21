'use server';

import { getPopularBooks } from '@/services';

interface LoadNewBooksProps {
  list: string;
  nextPage: number;
}

export const loadNewBooks = async ({ list, nextPage }: LoadNewBooksProps) => {
  if (list === 'popular') {
    const result = await getPopularBooks({ pageNo: nextPage.toString(), pageSize: '10' });

    return { newBooks: result.books, lastPage: result.isLastPage, totalBooksLength: result.totalBooksLength };
  }

  return { newBooks: [], lastPage: true, totalBooksLength: 0 };
};
