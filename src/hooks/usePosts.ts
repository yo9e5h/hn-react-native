import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const getPosts = async (page: number, type: string) => {
  const {data} = await axios.get(
    `https://hacker-news.firebaseio.com/v0/${type}stories.json`,
  );

  const posts = await Promise.all(
    data
      .slice(page * 10, (page + 1) * 10)
      .map((id: number) =>
        axios.get(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
        ),
      ),
  );
  return posts.map(post => post.data);
};

export const usePosts = (page: number, type: string) => {
  return useQuery(['posts', page, type], () => getPosts(page, type), {
    staleTime: 1000 * 60 * 5,
    keepPreviousData: true,
  });
};
