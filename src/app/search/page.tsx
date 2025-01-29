import { BookList } from '@/components';
import { FRONTEND_BOOKS_MOCK_DATA } from '@/mocks/mockData';

import styles from './page.module.scss';

interface SearchPageProps {
  searchParams: Promise<{
    keyword: string;
    category: string;
  }>;
}

const MAX_SEARCH_KEYWORD_LENGTH = 16;

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const params = await searchParams;
  const { keyword, category } = params;

  const truncatedKeyword =
    keyword.length > MAX_SEARCH_KEYWORD_LENGTH ? keyword.slice(0, MAX_SEARCH_KEYWORD_LENGTH) + '...' : keyword;
  const searchResultGuideMessage = `'${truncatedKeyword}'에 대한 검색 결과에요.`;
  const searchResultListTitle = `${keyword} 검색 결과`;

  return (
    <div>
      <BookList listTitle={searchResultListTitle} bookItemsData={FRONTEND_BOOKS_MOCK_DATA} />
      <h1 className={styles.searchResultGuideMessage}>{searchResultGuideMessage}</h1>
    </div>
  );
};

export default SearchPage;
