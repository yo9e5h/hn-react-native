import {useQuery} from '@tanstack/react-query';
import axios from 'axios';

const fetchComments = async (ids: number[]) => {
  const posts = await Promise.all(
    ids.map((id: number) =>
      axios.get(
        `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
      ),
    ),
  );
  return posts.map(post => post.data);
};

export const useComments = (ids: number[]) => {
  return useQuery(['posts', ids], () => fetchComments(ids), {
    staleTime: 1000 * 60 * 5,
    keepPreviousData: true,
  });
};
