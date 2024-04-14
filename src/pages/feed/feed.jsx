import { MemberList } from './components/member-list/member-list';
import { PostList } from './components/post-list/post-list';

export const FeedPage = () => {
  return (
    <div className="flex h-full w-full flex-nowrap">
      <div className="min-w-[30%]" />
      <div className="min-w-[40%] space-y-8 overflow-auto border-x bg-white px-12 py-6 dark:bg-gray-800">
        <PostList />
      </div>
      <div className="min-w-[30%] overflow-auto p-3 pl-[3%]">
        <MemberList />
      </div>
    </div>
  );
};
