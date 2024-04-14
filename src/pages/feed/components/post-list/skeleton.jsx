import { SkeletonPost } from '@/components/common';

export const Skeleton = () => {
  return (
    <>
      <SkeletonPost />
      <SkeletonPost multiAttachments />
      <SkeletonPost />
      <SkeletonPost multiAttachments />
    </>
  );
};
