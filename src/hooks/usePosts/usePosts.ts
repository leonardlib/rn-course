import { useState } from 'react';

import { PostType } from '../../../types';

export default function usePosts() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchPosts = () => {
    fetch('http://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then(setPosts)
      .catch(console.log);
  };

  return { posts, fetchPosts };
}
