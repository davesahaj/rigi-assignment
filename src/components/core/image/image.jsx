export const Image = ({
  src = '/media-image.svg',
  className,
  ...otherProps
}) => {
  return (
    <img
      className={`rounded-xl border border-slate-200 dark:border-slate-500 ${className}`}
      src={src}
      {...otherProps}
    />
  );
};
