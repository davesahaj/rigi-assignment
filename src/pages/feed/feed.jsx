import { Post } from '@/components/common';

import { MemberList } from './components/member-list/member-list';

export const Feed = () => {
  return (
    <div className="flex h-full w-full flex-nowrap">
      <div className="min-w-[30%]" />
      <div className="min-w-[40%] space-y-8 overflow-scroll border-x bg-white px-12 py-6 dark:bg-gray-800">
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <div className="min-w-[30%] overflow-scroll p-3 pl-[3%]">
        <MemberList />
      </div>
    </div>
  );
};
