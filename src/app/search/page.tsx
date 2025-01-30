import { BookList, NotFoundSearchResult } from '@/components';
import { BOOK_SEARCH_CATEGORY_NAME } from '@/constants';
import { FRONTEND_BOOKS_MOCK_DATA } from '@/mocks/mockData';

import Layout from './components/Layout';
import styles from './page.module.scss';

interface SearchPageProps {
  searchParams: Promise<{
    keyword: string;
    category: string;
  }>;
}

const MAX_SEARCH_KEYWORD_LENGTH = 16;

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const params = await searchParams;
  const { keyword, category } = params;
  // TODO : 검색 api 호출 추후 세부 작업 진행
  const result: { state: 'success' | 'fail' } = { state: 'success' };
  const truncatedKeyword =
    keyword.length > MAX_SEARCH_KEYWORD_LENGTH ? keyword.slice(0, MAX_SEARCH_KEYWORD_LENGTH) + '...' : keyword;
  const searchResultGuideMessage = `'${truncatedKeyword}'에 대한 검색 결과에요`;
  const searchResultListTitle = `${keyword} 검색 결과`;
  const searchTarget = BOOK_SEARCH_CATEGORY_NAME[category];

  return (
    <Layout searchResultGuideMessage={searchResultGuideMessage}>
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
    </Layout>
  );
};

export default SearchPage;
