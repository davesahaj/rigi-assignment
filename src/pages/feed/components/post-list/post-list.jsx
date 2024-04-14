import { useQuery } from '@tanstack/react-query';

import { Post } from '@/components/common';

import { getAllPosts } from '../../utils/api';

import { Skeleton } from './skeleton';

export const PostList = () => {
  const postsList = useQuery({ queryKey: ['postsList'], queryFn: getAllPosts });

  return (
    <>
      {postsList.isSuccess && Array.isArray(postsList?.data?.data) ? (
        postsList.data.data.map(({ id, author, text, attachments }) => (
          <>
            <Post
              image={author.profilePictureUrl}
              key={id}
              name={author.name}
              description={text}
              attachments={attachments}
            />
          </>
        ))
      ) : (
        <Skeleton />
      )}
    </>
  );
};
