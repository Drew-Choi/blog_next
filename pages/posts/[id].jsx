import { getAllPostIds, getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import { useRouter } from 'next/router';
// import Button from '@/components/Button';
import dynamic from 'next/dynamic';

const Button = dynamic(() => import('@/components/Button'), {
  loading: () => <div>Loading...</div>,
});

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
