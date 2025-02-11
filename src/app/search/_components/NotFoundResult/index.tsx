import { NotFound } from '@/components';

import styles from './index.module.scss';

interface NotFoundResultProps {
  message: string;
}

const NotFoundResult = ({ message }: NotFoundResultProps) => {
  return (
    <div className={styles.notFoundResultWrapper}>
      <NotFound>
        <p>{message}</p>
      </NotFound>
    </div>
  );
};

export default NotFoundResult;
