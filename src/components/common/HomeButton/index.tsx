import classNames from 'classnames';
import Link from 'next/link';

import styles from './index.module.scss';
interface HomeButtonProps {
  extraClassName?: string;
}

const HomeButton = ({ extraClassName }: HomeButtonProps) => {
  return (
    <Link href="/" prefetch={false} className={classNames(styles.homeButton, extraClassName)}>
      <p>홈으로 돌아가기</p>
    </Link>
  );
};

export default HomeButton;
