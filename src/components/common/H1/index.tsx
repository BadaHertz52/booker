import styles from './index.module.scss';

interface H1Props {
  contents: string;
}

const H1 = ({ contents }: H1Props) => {
  return <h1 className={styles.contents}>{contents}</h1>;
};

export default H1;
