import { postRoute } from '@/providers/';

export const Post = () => {
  const { id } = postRoute.useParams();

  return <div>Post</div>;
};
