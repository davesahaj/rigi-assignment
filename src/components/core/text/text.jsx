const textStyles = {
  heading: 'text-4xl font-bold',
  subheading: 'text-xl font-semibold font-urbanist text-emerald-500',
  regular: 'text-base font-normal font-lato',
  thin: 'text-base font-thin'
};

export const Text = ({ children, type = textStyles.regular, className }) => {
  return <div className={`${textStyles[type]} ${className}`}>{children}</div>;
};
