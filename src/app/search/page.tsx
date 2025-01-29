import { BookList, NotFoundSearchResult } from '@/components';
import { FRONTEND_BOOKS_MOCK_DATA } from '@/mocks/mockData';
import { BookItemData } from '@/types';

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

  const searchResult: BookItemData[] | null = null;

  const truncatedKeyword =
    keyword.length > MAX_SEARCH_KEYWORD_LENGTH ? keyword.slice(0, MAX_SEARCH_KEYWORD_LENGTH) + '...' : keyword;
  const searchResultGuideMessage = `'${truncatedKeyword}'에 대한 검색 결과에요.`;
  const searchResultListTitle = `${keyword} 검색 결과`;
  const searchTarget = category === 'author' ? '저자' : '도서';

  return (
    <div className={styles.container}>
      <h1 className={styles.searchResultGuideMessage}>{searchResultGuideMessage}</h1>
      {searchResult ? (
        <BookList listTitle={searchResultListTitle} bookItemsData={FRONTEND_BOOKS_MOCK_DATA} />
      ) : (
        <div className={styles.notFoundResultWrapper}>
          <NotFoundSearchResult>
            <p>찾으시는 {searchTarget} 정보가 없어요.</p>
          </NotFoundSearchResult>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
