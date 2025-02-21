import styles from '@/app/(home)/page.module.scss';
import BooksInfinityCarousel, { BooksInfinityCarouselProps } from '@/components/carousel/BooksInfinityCarousel';

const BooksCarouselSectionLoaded = ({ title, booksSimpleInfo }: BooksInfinityCarouselProps) => {
  return (
    <section>
      <h2>{title}</h2>
      <div>
        <BooksInfinityCarousel.Loaded booksSimpleInfo={booksSimpleInfo} title={title} />
      </div>
    </section>
  );
};

interface BooksCarouselSectionSkeletonProps {
  title: string;
}
const BooksCarouselSectionSkeleton = ({ title }: BooksCarouselSectionSkeletonProps) => {
  return (
    <section aria-label={`${title}을 불러오는 중입니다. 잠시만 기다려주세요`}>
      <div className={styles.titleSkeleton} />
      <BooksInfinityCarousel.Skeleton />
    </section>
  );
};

const BooksCarouselSection = {
  Loaded: BooksCarouselSectionLoaded,
  Skeleton: BooksCarouselSectionSkeleton,
};

export default BooksCarouselSection;
