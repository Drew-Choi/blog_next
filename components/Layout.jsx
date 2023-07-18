import { useEffect, useState } from 'react';
import styles from './layout.module.css';

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(() =>
    typeof window !== 'undefined'
      ? localStorage.getItem('theme') === 'dark'
        ? 'dark'
        : 'light'
      : 'light',
  );

  useEffect(() => {
    if (theme === 'dark') {
      document.querySelector('body').classList.add('dark');
    } else {
      document.querySelector('body').classList.remove('dark');
    }
  }, [theme]);

  const handleClick = () => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    } else {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    }
  };

  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200">
      <button className="w-12 px-2 relative left-5 top-5" onClick={handleClick}>
        {theme === 'dark' ? (
          <img src="/sun-8728.svg" alt="lightMode" />
        ) : (
          <img src="/moon-6689.svg" alt="darkMode" />
        )}
      </button>
      <div className={styles.container}> {children}</div>
    </div>
  );
};

export default Layout;
