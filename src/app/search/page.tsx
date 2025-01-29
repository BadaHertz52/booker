import { BookList } from '@/components';
import { FRONTEND_BOOKS_MOCK_DATA } from '@/mocks/mockData';

import styles from './page.module.scss';

interface SearchPageProps {
  searchParams: Promise<{
    keyword: string;
    category: string;
  }>;
}
const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const params = await searchParams;
  const { keyword, category } = params;
  const searchResultGuideMessage = `'${keyword}'에 대한 검색 결과에요.`;
  const searchResultListTitle = `${keyword} 검색 결과`;

  return (
    <div>
      <h2 className={styles.title}>{searchResultGuideMessage}</h2>
      <BookList listTitle={searchResultListTitle} bookItemsData={FRONTEND_BOOKS_MOCK_DATA} />
    </div>
  );
};

export default SearchPage;
