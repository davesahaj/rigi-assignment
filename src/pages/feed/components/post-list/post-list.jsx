import { useCallback, useEffect, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useNavigate } from '@tanstack/react-router';
import { useVirtualizer } from '@tanstack/react-virtual';

import { Post } from '@/components/common';
import { ROUTES } from '@/constants';
import { getAllPosts } from '@/pages/feed/utils/api';

import { Skeleton } from './skeleton';
export const PostList = () => {
  /*----------  Hooks  ----------*/

  const parentRef = useRef(null);
  const navigate = useNavigate();
  const postsList = useQuery({ queryKey: ['postsList'], queryFn: getAllPosts });

  const [listItems, setListItems] = useState([]);

  /*----------  Functions  ----------*/

  const getItemHeight = useCallback(
    index => {
      if (!listItems.length) return 0;

      switch (listItems[index].attachments.length) {
        case 1:
          return 400;
        case 2:
          return 350;
        case 3:
          return 520;

        default:
          return 150;
      }
    },
    [listItems]
  );
  /*--------------------*/

  const navigateToPost = useCallback(
    id => navigate({ to: ROUTES.POST.replace('$id', id) }),
    [navigate]
  );

  const virtualizer = useVirtualizer({
    count: listItems.length,
    getScrollElement: () => parentRef.current,
    estimateSize: index => getItemHeight(index),
    overscan: 5
  });

  const virtualItems = virtualizer.getVirtualItems();

  /*----------  Effects  ----------*/

  useEffect(() => {
    if (Array.isArray(postsList?.data?.data)) {
      setListItems(postsList.data.data);
    }
  }, [postsList?.data?.data]);

  /*----------  Component  ----------*/

  return (
    <div ref={parentRef} className="h-full overflow-auto">
      <div
        className="relative w-full"
        style={{
          height: `${virtualizer.getTotalSize()}px`
        }}
      >
        {Array.isArray(virtualItems) && virtualItems.length ? (
          virtualItems.map(virtualItem => {
            const { id, author, text, attachments } =
              listItems[virtualItem.index];
            return (
              <div
                role="button"
                key={id}
                onClick={() => navigateToPost(id)}
                className="absolute left-0 top-0 box-border w-full overflow-hidden pt-4 lg:px-4"
                ref={virtualItem.measureRef}
                style={{
                  height: `${virtualItem.size}px`,
                  transform: `translateY(${virtualItem.start}px)`
                }}
              >
                <Post
                  image={author.profilePictureUrl}
                  key={id}
                  name={author.name}
                  description={text}
                  attachments={attachments}
                  style={{ height: '100%' }}
                />
              </div>
            );
          })
        ) : (
          <Skeleton />
        )}
      </div>
    </div>
  );
};
