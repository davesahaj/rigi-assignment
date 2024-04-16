import { useCallback } from 'react';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from '@tanstack/react-router';

import { Post, SkeletonPost } from '@/components/common';
import { IconButton } from '@/components/core';
import { postRoute } from '@/providers/';

import { getPost } from './utils/api';

export const PostPage = () => {
  /*----------  Hooks  ----------*/

  const { id } = postRoute.useParams();
  const { history } = useRouter();

  const postData = useQuery({
    queryKey: ['post' + id],
    queryFn: () => getPost(id)
  });

  /*----------  Functions  ----------*/
  const goBack = useCallback(() => {
    history.go(-1);
  }, [history]);

  /*----------  Component  ----------*/

  return (
    <div className="flex h-full w-full flex-nowrap">
      <div className="min-w-[30%]" />
      <div className="min-w-[40%] space-y-8 overflow-auto border-x bg-white px-12 py-6 dark:bg-gray-800">
        <IconButton onClick={goBack}>{ArrowLeftIcon}</IconButton>
        {postData.isSuccess ? (
          <Post
            image={postData.data.author.profilePictureUrl}
            key={postData.data.id}
            name={postData.data.author.name}
            description={postData.data.text}
            attachments={postData.data.attachments}
          />
        ) : (
          <SkeletonPost />
        )}
      </div>
      <div className="min-w-[30%]" />
    </div>
  );
};
