import axios from 'axios';
import { useRouter } from 'next/router';
import { useRef } from 'react';

const Write = () => {
  const router = useRouter();

  const idRef = useRef(undefined);
  const titleRef = useRef(undefined);
  const contentRef = useRef(undefined);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const id = idRef.current.value;
    const title = titleRef.current.value;
    const content = contentRef.current.value;

    if (id && title && content) {
      // fetch('/api/post/write', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     id,
      //     title,
      //     content,
      //   }),
      // })
      //   .then((res) => {
      //     if (res.ok) {
      //       return res.json();
      //     }
      //     throw new Error('Fetch Error');
      //   })
      //   .then((data) => {
      //     alert(data.message);
      //     router.push(`/posts/${id}`);
      //   })
      //   .catch((err) => alert(`Request Error: ${err}`));
      try {
        const response = await axios.post('/api/post/write', {
          id,
          title,
          content,
        });

        if (response.status === 200) {
          alert(response.data.message);
          router.push(`/posts/${id}`);
        } else {
          throw new Error('Fetch Error');
        }
      } catch (error) {
        alert(`Request Error: ${error}`);
      }
    }
  };

  return (
    <section>
      <h1>Write a Post</h1>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" name="id" placeholder="id" required ref={idRef} />
        <br />
        <br />
        <input
          type="text"
          name="title"
          placeholder="title"
          required
          ref={titleRef}
        />
        <br />
        <br />
        <textarea
          type="text"
          name="content"
          placeholder="content"
          required
          ref={contentRef}
        />
        <br />
        <br />
        <input type="submit" value="Create" />
      </form>
    </section>
  );
};

export default Write;
