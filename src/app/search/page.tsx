import { BookList, BookListSkeleton, NotFoundSearchResult } from '@/components';
import { FRONTEND_BOOKS_MOCK_DATA } from '@/mocks/mockData';

import styles from './page.module.scss';

interface SearchPageProps {
  searchParams: Promise<{
    keyword: string;
    category: string;
  }>;
}

const MAX_SEARCH_KEYWORD_LENGTH = 16;
const SKELETON_LIST_LENGTH = 5;

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const params = await searchParams;
  const { keyword, category } = params;
  // TODO : 검색 api 호출 추후 세부 작업 진행
  const result: { state: 'pending' | 'success' | 'fail' } = { state: 'success' };
  const truncatedKeyword =
    keyword.length > MAX_SEARCH_KEYWORD_LENGTH ? keyword.slice(0, MAX_SEARCH_KEYWORD_LENGTH) + '...' : keyword;
  const searchResultGuideMessage = `'${truncatedKeyword}'에 대한 검색 ${result.state === 'pending' ? '중 이에요' : '결과에요'}`;
  const searchResultListTitle = `${keyword} 검색 결과`;
  const searchTarget = category === 'author' ? '저자' : '도서';

  return (
    <div className={styles.container}>
      <h1 className={styles.searchResultGuideMessage}>{searchResultGuideMessage}</h1>
      {result.state === 'pending' && (
        <BookListSkeleton listTitle={searchResultListTitle} listLength={SKELETON_LIST_LENGTH} />
      )}
      {result.state === 'success' && (
        <BookList listTitle={searchResultListTitle} bookItemsData={FRONTEND_BOOKS_MOCK_DATA} />
      )}
      {result.state === 'fail' && (
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
