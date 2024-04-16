const TextInput = ({
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  rightIconClick,
  className,
  ...props
}) => {
  return (
    <div className={`relative ${className}`}>
      <span className="pointer-events-none absolute left-1.5 top-2.5">
        {LeftIcon ? <LeftIcon className="text-emerald-500" /> : ''}
      </span>
      <input
        type="text"
        className={`h-9 w-full rounded-md border border-gray-300 py-1 pr-2 text-xs font-medium text-gray-500 shadow-sm transition-[border] duration-200 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-0 dark:border-slate-500 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-emerald-500 ${LeftIcon ? 'pl-6' : 'pl-2'} ${RightIcon ? 'pr-6' : 'pr-2'}`}
        {...props}
      />
      <span
        className="absolute right-1.5 top-2.5"
        role="button"
        onClick={rightIconClick}
      >
        {RightIcon ? (
          <RightIcon className="cursor-pointer text-emerald-500" />
        ) : (
          ''
        )}
      </span>
    </div>
  );
};

export { TextInput };
