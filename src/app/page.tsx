import InfinityCarousel from '@/components/common/InfinityCarousel';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <section className={styles.section}>
        <h2>사서 추천 도서</h2>
        <div className={styles.recommendBooksCarouselWrapper}>
          <InfinityCarousel
            title="사서 추천 도서"
            cardInfoForScreenReader={[
              { title: '책1' },
              { title: '책2' },
              { title: '책3' },
              { title: '책4' },
              { title: '책5' },
            ]}
          >
            {[{ id: '책1' }, { id: '책2' }, { id: '책3' }, { id: '책4' }, { id: '책5' }].map((book) => (
              <div key={book.id} className={styles.fullWidthCard}>
                {book.id}
              </div>
            ))}
          </InfinityCarousel>
        </div>
      </section>
    </div>
  );
}
