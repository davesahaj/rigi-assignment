import { useCallback } from 'react';
import { MoonIcon, SunIcon } from '@radix-ui/react-icons';

import { IconButton } from '@/components/core';
import { useTheme } from '@/providers';

export const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }, [theme, setTheme]);

  return (
    <IconButton onClick={toggleTheme}>
      {theme == 'light' ? SunIcon : MoonIcon}
    </IconButton>
  );
};
