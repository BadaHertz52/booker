import { NotFound, HomeButton } from '@/components';

import styles from './not-found.module.scss';

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <NotFound>
        <p>페이지를 찾을 수 없어요</p>
      </NotFound>
      <HomeButton extraClassName={styles.homeButton} />
    </div>
  );
};

export default NotFoundPage;
