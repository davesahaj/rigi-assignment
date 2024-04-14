import { Post } from '@/components/common'
import { MemberList } from './components/member-list/member-list'

export const Feed = () => {
    return (
        <div className="flex flex-nowrap w-full h-full">
            <div className="min-w-[30%]" />
            <div className="min-w-[40%] space-y-8 border-x py-6 px-12 overflow-scroll bg-white dark:bg-gray-800">
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
            <div className="min-w-[30%] p-3 pl-[3%] overflow-scroll">
                <MemberList />
            </div>
        </div>
    )
}
