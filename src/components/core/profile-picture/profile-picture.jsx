const pictureSizes = {
  sm: 'h-3 ',
  md: 'h-6 ',
  lg: 'h-9 '
};

export const ProfilePic = ({
  src = 'user.svg',
  size = 'md',
  className = ''
}) => {
  return (
    <img
      src={src}
      className={`"rounded-full w-auto" ${pictureSizes[size]} ${className}`}
    />
  );
};
