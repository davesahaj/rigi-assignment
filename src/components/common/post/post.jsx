import { Image, ProfilePic, Text } from '@/components/core';

export const Post = () => {
  return (
    <div className="flex cursor-pointer gap-x-2  rounded-xl border px-8 py-6 transition-shadow duration-200 hover:shadow-lg dark:border-emerald-500 dark:bg-gray-800 dark:shadow-none">
      <ProfilePic size="lg" />
      <div className="space-y-2">
        <Text type="subheading">Sahaj</Text>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores
          minima architecto odio totam assumenda est, rerum ex quo. Earum itaque
          provident excepturi neque eum sequi incidunt quod blanditiis laborum
          cumque!
        </Text>
        <Image />
      </div>
    </div>
  );
};
