import { useEffect, useState } from 'react';
import styles from './layout.module.css';
import Image from 'next/image';

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
    if (localTheme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      localStorage.setItem('theme', 'light');
      setTheme('light');
    }
  };

  return (
    <div className="bg-white dark:bg-black text-gray-800 dark:text-gray-200 heigh h-screen">
      <button className="w-12 px-2 relative left-5 top-5" onClick={handleClick}>
        {theme === 'dark' ? (
          <Image src="/sun-8728.svg" alt="light" width={120} height={120} />
        ) : (
          <Image src="/moon-6689.svg" alt="dark" width={120} height={120} />
        )}
      </button>
      <div className={styles.containerLayout}>{children}</div>
    </div>
  );
};

export default Layout;
