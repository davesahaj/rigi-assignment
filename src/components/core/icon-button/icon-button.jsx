export const IconButton = ({ children: Icon, ...otherProps }) => {
  return (
    <button
      className="group rounded-md border border-emerald-300 p-2 transition-all duration-200 hover:border-emerald-500 hover:bg-emerald-500"
      {...otherProps}
    >
      {
        <Icon className="text-emerald-500 transition-all duration-200 group-hover:text-white" />
      }
    </button>
  );
};
