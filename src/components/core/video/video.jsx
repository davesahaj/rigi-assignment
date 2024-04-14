export const SkeletonVideo = () => {
  return (
    <div
      className={`min-h-[200px] w-full animate-pulse  rounded-xl border border-slate-200 bg-gray-200 object-cover dark:border-slate-800 dark:bg-gray-700`}
    />
  );
};

export const Video = ({ src, className, ...otherProps }) => {
  return (
    <video
      className={`rounded-xl border border-slate-200 object-cover dark:border-slate-800 ${className}`}
      {...otherProps}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
};
