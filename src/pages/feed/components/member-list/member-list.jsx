import { Member } from '@/components/common'
import { Text } from '@/components/core'

export const MemberList = () => {
    return (
        <div className="space-y-4 border dark:border-emerald-500 p-3 bg-white dark:bg-gray-800 rounded-xl w-min min-w-[320px]">
            <Text className='' type='subheading'>Members</Text>
            <div className="flex flex-col gap-y-3">
                <Member name="Sahaj Dave" />
                <Member name="Aparna pandey" />
                <Member name="Leo Dave" />
                <Member name="Kitty Dave" />
                <Member name="Pranay Pandey" />
                <Member name="Nandkishor Kulkarni" />
            </div>
        </div>
    )
}
