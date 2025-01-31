import { BookListSkeleton } from '@/components';

import H1 from './components/H1';

const SKELETON_LIST_LENGTH = 5;

const Loading = () => {
  return (
    <>
      <H1 message="검색 중..." />
      <BookListSkeleton listTitle={'검색 목록'} listLength={SKELETON_LIST_LENGTH} />
    </>
  );
};

export default Loading;
