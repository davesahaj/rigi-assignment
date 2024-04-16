import { UpdateIcon } from '@radix-ui/react-icons';
import { Link } from '@tanstack/react-router';

import { Member } from '@/components/common';
import { Text } from '@/components/core';
import { ROUTES } from '@/constants';

const Spinner = () => (
  <div className="mt-auto w-full py-5">
    <UpdateIcon className="mx-auto h-6 w-6 animate-spin text-slate-500" />
  </div>
);

const NoResults = () => (
  <div className="mt-auto w-full py-5">
    <Text className="mx-auto text-center" type="thin">
      No results Found
    </Text>
  </div>
);

const SearchResult = ({ image, name, description, id }) => {
  return (
    <Link
      to={ROUTES.POST.replace('$id', id)}
      className="w-full rounded-md border py-3 shadow"
    >
      <Member image={image} name={name} className="scale-90" />
      <Text className="px-6 text-slate-600">{description}</Text>
    </Link>
  );
};

export const SearchContainer = ({ results }) => {
  return (
    <div className="absolute -top-3 left-0 right-0 z-40 flex max-h-[70vh]  min-h-[15vh] rounded-xl border bg-white shadow-xl dark:border-gray-500 dark:bg-gray-800">
      {Array.isArray(results) ? (
        results.length ? (
          <div className="mt-16 flex w-full flex-col gap-y-4 overflow-auto px-4 py-4">
            {results.map(({ id, text, author }) => (
              <SearchResult
                key={id}
                id={id}
                description={text}
                name={author.name}
                image={author.profilePictureUrl}
              />
            ))}
          </div>
        ) : (
          <NoResults />
        )
      ) : (
        <Spinner />
      )}
    </div>
  );
};
