import styles from './index.module.scss';

interface H1Props {
  message: string;
}

const H1 = ({ message }: H1Props) => {
  return <h1 className={styles.message}>{message}</h1>;
};

export default H1;
