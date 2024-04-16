import { MemberList } from './components/member-list/member-list';
import { PostList } from './components/post-list/post-list';

export const FeedPage = () => {
  return (
    <div className="flex h-full w-full flex-col-reverse flex-nowrap justify-center overflow-scroll lg:flex-row lg:justify-start">
      <div className="min-w-[30%]" />
      <div className="min-w-[40%] border-x bg-white px-2 py-6 dark:bg-gray-800 lg:px-12">
        <PostList />
      </div>
      <div className="w-full lg:min-w-[30%] lg:p-3 lg:pl-[3%]">
        <MemberList />
      </div>
    </div>
  );
};
