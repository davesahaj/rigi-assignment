import { TextInput } from '@/components/core'
import { MagnifyingGlassIcon } from '@radix-ui/react-icons'

const SearchInput = () => {
    return <TextInput icon={MagnifyingGlassIcon} className='w-[300px]' placeholder="What are you looking for?"/>
}

export { SearchInput }
