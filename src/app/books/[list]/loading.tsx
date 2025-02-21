import BookList from '@/components/book/BookList';

const SKELETON_LIST_LENGTH = 6;

const BookListLoading = () => {
  return <BookList.Skeleton listTitle={''} listLength={SKELETON_LIST_LENGTH} />;
};

export default BookListLoading;
