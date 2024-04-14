const TextInput = ({ icon: Icon, className, ...props }) => {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-1.5 top-2.5">
        {Icon ? <Icon className="text-emerald-500" /> : ''}
      </span>
      <input
        type="text"
        className={`h-9 rounded-md border border-gray-300 py-1 pr-2 text-xs font-medium text-gray-500 shadow-sm transition-[border] duration-200 placeholder:text-gray-400 focus:border-emerald-500 focus:outline-none focus:ring-0 dark:border-slate-500 dark:bg-gray-800 dark:text-gray-100 focus:dark:border-emerald-500 ${Icon ? 'pl-6' : 'pl-2'} ${className}`}
        {...props}
      />
    </div>
  );
};

export { TextInput };
