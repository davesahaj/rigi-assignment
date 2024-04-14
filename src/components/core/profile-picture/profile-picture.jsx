const pictureSizes = {
  sm: 'max-h-3 max-w-3 min-h-3 min-w-3',
  md: 'max-h-6 max-w-6 min-h-6 min-w-6',
  lg: 'max-h-9 max-w-9 min-h-9 min-w-9'
};

export const SkeletonProfilePic = () => {
  return (
    <div role="status" className="max-w-sm animate-pulse">
      <div className="flex items-center">
        <svg
          className="me-2 h-10 w-10 text-gray-200 dark:text-gray-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
        </svg>

        <div className="h-4 w-32 rounded-full bg-gray-200 dark:bg-gray-700" />
      </div>
    </div>
  );
};

export const ProfilePic = ({
  src = '/user.svg',
  size = 'md',
  className = ''
}) => {
  return (
    <img
      src={src}
      className={`overflow-hidden rounded-full border ${pictureSizes[size]} ${className}`}
    />
  );
};
