import Link from 'next/link';

const NotFound = () => {
  return (
    <>
      <h1>Not Found</h1>
      <Link href="/">
        <h3>홈으로</h3>
      </Link>
    </>
  );
};

export default NotFound;
