'use client';

import ErrorNotification from '@/components/common/ErrorNotification';

import styles from './error.module.scss';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div className={styles.container}>
      <ErrorNotification reset={reset}>
        <p>{error.message}</p>
      </ErrorNotification>
    </div>
  );
};

export default Error;
