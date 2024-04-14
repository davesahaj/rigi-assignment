import { Image, Video } from '@/components/core';

export const Media = ({ type, ...otherProps }) => {
  return type === 'image' ? (
    <Image {...otherProps} />
  ) : (
    <Video {...otherProps} />
  );
};
