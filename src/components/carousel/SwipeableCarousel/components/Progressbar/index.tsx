import styles from './index.module.scss';

interface ProgressbarProps {
  scrollProgress: number;
}

const Progressbar = ({ scrollProgress }: ProgressbarProps) => {
  return (
    <div className={styles.progressBar}>
      <div className={styles.progressIndicator} style={{ width: `${scrollProgress * 100}%` }} />
    </div>
  );
};

export default Progressbar;
