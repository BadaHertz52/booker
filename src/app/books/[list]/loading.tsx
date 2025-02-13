import { BookList } from '@/components';

const SKELETON_LIST_LENGTH = 5;

const BookDetailsLoading = () => {
  return <BookList.Skeleton listTitle={'검색 목록'} listLength={SKELETON_LIST_LENGTH} />;
};

export default BookDetailsLoading;
