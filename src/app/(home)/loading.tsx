import BookListSection from './_components/BookListSection';
import BooksCarouselSection from './_components/BooksCarouselSection';
import styles from './page.module.scss';

const HomeLoading = () => {
  return (
    <div className={styles.homeContainer} aria-label="홈 페이지를 불러오는 중입니다. 잠시만 기다려주세요">
      <BooksCarouselSection.Skeleton title="사서 추천 도서" />
      <BookListSection.Skeleton listTitle="대출 급상승! 도서" listLength={5} />
      <BookListSection.Skeleton listTitle="다독자를 위한 추천 도서" listLength={5} />
    </div>
  );
};

export default HomeLoading;
