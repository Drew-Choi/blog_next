import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import { useRouter } from 'next/router';
// import Button from '@/components/Button';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const Button = dynamic(() => import('@/components/Button'), {
  loading: () => <div>Loading...</div>,
});

const ErrorComp = () => {
  const [error, setError] = useState(false);

  if (error) {
    throw new Error('Error occured');
  }

  return (
    <button
      className="rounded px-2 bg-green-500"
      onClick={() => setError(true)}
    >
      Error Fire
    </button>
  );
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

const Post = ({ postData, pathname }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <ErrorComp />
      <h1>{pathname}</h1>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      <br />
      <br />
      <Button link="/">Home</Button>
    </>
  );
};

export default Post;
