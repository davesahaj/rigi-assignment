export const Video = ({
  src = '/media-image.svg',
  className,
  ...otherProps
}) => {
  return (
    <video
      className={`rounded-xl border border-slate-200 object-cover dark:border-slate-500 ${className}`}
      {...otherProps}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};
