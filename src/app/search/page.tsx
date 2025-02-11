import { BOOK_SEARCH_CATEGORY_NAME } from '@/constants';
import { BOOK_LIST_MOCK_DATA } from '@/mocks/mockData';

import H1 from './_components/H1';
import NotFoundResult from './_components/NotFoundResult';
import SearchResult from './_components/SearchResult';
import { getSearchBooks } from './_services/searchBooks';

interface SearchPageProps {
  searchParams: Promise<{
    keyword: string;
    category: string;
  }>;
}

const MAX_SEARCH_KEYWORD_LENGTH = 16;
const INVALIDATED_CATEGORY_MESSAGE = '유효하지 않은 카테고리에요 (운영진에게 문의해주세요)';
type Category = keyof typeof BOOK_SEARCH_CATEGORY_NAME;

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  // NOTE : 검색 api 호출 중인 경우를 위한 임시 코드 - api 호출 작업 후 삭제 예정
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const params = await searchParams;
  const { keyword, category } = params;

  const truncatedKeyword =
    keyword.length > MAX_SEARCH_KEYWORD_LENGTH ? keyword.slice(0, MAX_SEARCH_KEYWORD_LENGTH) + '...' : keyword;
  const searchResultGuideMessage = `'${truncatedKeyword}'에 대한 검색 결과에요`;
  const searchResultListTitle = `${keyword} 검색 결과`;

  const isValidCategory = (target: string): target is Category => {
    return target in BOOK_SEARCH_CATEGORY_NAME;
  };
  if (!isValidCategory(category)) {
    return <NotFoundResult message={INVALIDATED_CATEGORY_MESSAGE} />;
  }

  const { books: initialSearchBooks, isLastPage: initialIsLastPage } = await getSearchBooks({
    keyword,
    category,
    pageNumber: '1',
  });

  // TODO : 검색 api 호출 추후 세부 작업 진행 , api 요청 실패 시, 에러 메세지에 에러 페이지에 보여줄 문구 넣을 것!

  const searchTarget = BOOK_SEARCH_CATEGORY_NAME[category];

  return (
    <>
      <H1 message={searchResultGuideMessage} />
      {initialSearchBooks.length > 0 ? (
        <SearchResult
          key={searchResultListTitle}
          title={searchResultListTitle}
          initialSearchBooks={initialSearchBooks}
          initialIsLastPage={initialIsLastPage}
          searchParams={{ keyword, category }}
        />
      ) : (
        <NotFoundResult message={`찾으시는 ${searchTarget} 정보가 없어요.`} />
      )}
    </>
  );
};

export default SearchPage;
