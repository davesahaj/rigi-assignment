import { useCallback } from 'react';
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import { useRouter } from '@tanstack/react-router';

import { Post } from '@/components/common';
import { IconButton } from '@/components/core';
import { postRoute } from '@/providers/';

export const PostPage = () => {
  const { id } = postRoute.useParams();
  const { history } = useRouter();

  const goBack = useCallback(() => {
    history.go(-1);
  }, [history]);

  return (
    <div className="flex h-full w-full flex-nowrap">
      <div className="min-w-[30%]" />
      <div className="min-w-[40%] space-y-8 overflow-auto border-x bg-white px-12 py-6 dark:bg-gray-800">
        <IconButton onClick={goBack}>{ArrowLeftIcon}</IconButton>
        <Post />
      </div>
      <div className="min-w-[30%]" />
    </div>
  );
};
