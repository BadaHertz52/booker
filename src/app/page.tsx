import InfinityCarousel from '@/components/common/InfinityCarousel';

export default function Home() {
  return (
    <div>
      <h1>✨🍀📚</h1>
      <h2>사서 추천 도서</h2>
      <InfinityCarousel title="사서 추천 도서" duration={1000}>
        {[{ id: '책1' }, { id: '책2' }, { id: '책3' }, { id: '책4' }, { id: '책5' }].map((book) => (
          <div key={book.id} style={{ width: '100px', backgroundColor: 'skyblue' }}>
            {book.id}
          </div>
        ))}
      </InfinityCarousel>
    </div>
  );
}
