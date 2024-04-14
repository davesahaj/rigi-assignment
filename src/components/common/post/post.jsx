import { Media } from '@/components/common';
import { ProfilePic, Text } from '@/components/core';

export const Post = ({ image, name, description, attachments }) => {
  return (
    <div className="flex cursor-pointer gap-x-2  rounded-xl border px-8 py-6 transition-shadow duration-200 hover:shadow-lg dark:border-emerald-500 dark:bg-gray-800 dark:shadow-none">
      <ProfilePic size="lg" src={image} />
      <div className="space-y-2">
        <Text type="subheading">{name}</Text>
        <Text>{description}</Text>
        <div className="flex flex-row flex-wrap gap-3">
          {attachments.map(({ id, type, url }) => (
            <Media
              key={id}
              type={type}
              src={url}
              className={
                attachments.length > 1 ? 'w-[calc(50%_-_12px)]' : 'w-full'
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};
