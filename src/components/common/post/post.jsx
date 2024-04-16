import { useMemo } from 'react';
import { useRouterState } from '@tanstack/react-router';

import { Media } from '@/components/common';
import { ProfilePic, SkeletonProfilePic, Text } from '@/components/core';

export const SkeletonPost = ({ multiAttachments }) => {
  return (
    <div className="flex cursor-pointer flex-col gap-x-2  rounded-xl border px-8 py-6 transition-shadow duration-200 hover:shadow-lg dark:border-emerald-500 dark:bg-gray-800 dark:shadow-none">
      <SkeletonProfilePic />
      <div className="animate-pulse space-y-2">
        <div className="mb-2.5 h-2 max-w-[330px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="mb-2.5 h-2 max-w-[300px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        <div className="h-2 max-w-[360px] rounded-full bg-gray-200 dark:bg-gray-700"></div>
        {multiAttachments ? (
          <div className="flex flex-row flex-wrap gap-3">
            <Media type="image" className="w-[calc(50%_-_6px)]" />
            <Media type="image" className="w-[calc(50%_-_6px)]" />
            <Media type="video" className="w-1/2" />
          </div>
        ) : (
          <Media type={'image'} src={null} className="min-h-[200px] w-full" />
        )}
      </div>
    </div>
  );
};

export const Post = ({
  image,
  name,
  description,
  attachments,
  ...otherProps
}) => {
  const router = useRouterState();

  const isPostPage = useMemo(
    () => router.location.pathname.includes('/post'),
    [router?.location?.pathname]
  );

  return (
    <div
      className={`flex cursor-pointer gap-x-2  rounded-xl border px-2 py-3 transition-all duration-200 hover:border-emerald-500 dark:border-emerald-500 dark:bg-gray-800 dark:shadow-none dark:hover:border-emerald-300 lg:px-8 lg:py-6 ${isPostPage ? 'border-emerald-500' : ''}`}
      {...otherProps}
    >
      <ProfilePic size="lg" src={image} />
      <div className="w-full space-y-2">
        <Text type="subheading">{name}</Text>
        <Text>{description}</Text>
        <div className="flex flex-col flex-wrap gap-3 lg:flex-row">
          {attachments.map(({ id, type, url }) => (
            <Media
              key={id}
              type={type}
              src={url}
              className={
                attachments.length > 1
                  ? 'w-full xl:w-[calc(50%_-_6px)]'
                  : 'w-full'
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
