import { Image, SkeletonVideo, Video } from '@/components/core';

export const Media = ({ type, src, ...otherProps }) => {
  return type === 'image' ? (
    <Image src={src} {...otherProps} />
  ) : src ? (
    <Video src={src} {...otherProps} />
  ) : (
    <SkeletonVideo />
  );
};
