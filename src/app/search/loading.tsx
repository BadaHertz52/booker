import BookList from '@/components/book/BookList';
import H1 from '@/components/common/H1';

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
