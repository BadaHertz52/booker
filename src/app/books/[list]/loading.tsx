import { BookList } from '@/components';

const SKELETON_LIST_LENGTH = 6;

const BookDetailsLoading = () => {
  return <BookList.Skeleton listTitle={''} listLength={SKELETON_LIST_LENGTH} />;
};

export default BookDetailsLoading;
