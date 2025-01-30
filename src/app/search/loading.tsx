import { BookListSkeleton } from '@/components';

import Layout from './components/Layout';

const SKELETON_LIST_LENGTH = 5;

const Loading = () => {
  return (
    <Layout searchResultGuideMessage="검색 중...">
      <BookListSkeleton listTitle={'검색 목록'} listLength={SKELETON_LIST_LENGTH} />
    </Layout>
  );
};

export default Loading;
