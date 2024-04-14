import { ProfilePic, Text } from '@/components/core';

export const Member = ({ image, name }) => {
  return (
    <div className="flex items-center gap-x-2.5">
      <ProfilePic size="lg" src={image} />
      <Text className="!font-medium text-zinc-400">{name}</Text>
    </div>
  );
};
