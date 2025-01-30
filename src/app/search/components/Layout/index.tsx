import styles from './index.module.scss';

interface LayoutProps {
  children: React.ReactNode;
  searchResultGuideMessage: string;
}

const Layout = ({ children, searchResultGuideMessage }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.searchResultGuideMessage}>{searchResultGuideMessage}</h1>
      {children}
    </div>
  );
};

export default Layout;
