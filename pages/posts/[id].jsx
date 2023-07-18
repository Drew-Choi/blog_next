import { getPostData } from '../../lib/posts';
import Date from '../../components/Date';
import { useRouter } from 'next/router';

export async function getStaticPaths() {
  // const paths = getAllPostIds();
  const paths = [
    {
      params: {
        id: 'ssg-ssr',
      },
    },
  ];
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

const Post = ({ postData }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {postData.title}
      <br />
      {postData.id}
      <br />
      <Date dateString={postData.date} />
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
    </>
  );
};

export default Post;
