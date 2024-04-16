import { SearchInput } from '@/components/common';
import { Logo } from '@/components/core';
import { ToggleTheme } from '@/components/core/toggle-theme/toggle-theme';

const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 h-24 border bg-white px-3 dark:bg-gray-800 lg:h-16 lg:px-16">
      <div className="relative flex h-full w-full flex-wrap items-center justify-center space-y-2 lg:flex-nowrap lg:items-center lg:justify-between">
        <Logo className="min-w-[160px]" />
        <SearchInput />
        <div className="lg:min-w-[160px]">
          <ToggleTheme />
        </div>
      </div>
    </div>
  );
};

export { Header };
