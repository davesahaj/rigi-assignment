export const Image = ({ src = '/media-image.svg', ...otherProps }) => {
  return <img className="" src={src} {...otherProps} />;
};
