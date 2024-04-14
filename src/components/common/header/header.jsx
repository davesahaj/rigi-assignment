import { SearchInput } from '@/components/common'
import { Logo } from '@/components/core'
import { ToggleTheme } from '@/components/core/toggle-theme/toggle-theme'

const Header = () => {
    return (
        <div className="fixed bg-white dark:bg-gray-800 top-0 left-0 right-0 h-16 border px-16">
            <div className="flex w-full items-center justify-between h-full relative">
                <Logo />
                <SearchInput />
                <ToggleTheme />
            </div>
        </div>
    )
}

export { Header }
