import { useTheme } from '@/providers';

export const Image = ({ src, className, ...otherProps }) => {
  const { theme } = useTheme();

  return (
    <img
      className={`rounded-xl border border-slate-200 object-cover dark:border-slate-700 ${className}`}
      src={
        src ||
        (theme === 'light' ? '/media-image.svg' : '/media-image-dark.svg')
      }
      {...otherProps}
    />
  );
};
