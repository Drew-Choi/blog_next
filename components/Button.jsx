import Link from 'next/link';

const Button = ({ children, link }) => {
  return (
    <button className="bg-black dark:bg-white text-gray-200 dark:text-gray-800 rounded-full">
      <Link href={link}>{children}</Link>
    </button>
  );
};

export default Button;
