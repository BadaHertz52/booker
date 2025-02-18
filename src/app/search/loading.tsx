import { BookList, H1 } from '@/components';

const SKELETON_LIST_LENGTH = 5;

const SearchPageLoading = () => {
  return (
    <>
      <H1 contents="검색 중..." />
      <BookList.Skeleton listTitle={''} listLength={SKELETON_LIST_LENGTH} />
    </>
  );
};

export default SearchPageLoading;
