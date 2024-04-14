import { Link } from '@tanstack/react-router';

import { ROUTES } from '@/constants';

export const Logo = ({ className }) => {
  return (
    <Link to={ROUTES.HOME}>
      <img src="/logo.svg" className={`h-auto w-[160px] ${className}`} />
    </Link>
  );
};
