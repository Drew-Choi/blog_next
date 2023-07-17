import NavBar from './NavBar';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      <div className={styles.container}> {children}</div>
    </>
  );
};

export default Layout;
