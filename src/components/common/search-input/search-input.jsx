import { useCallback, useEffect, useState } from 'react';
import { Cross1Icon, MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useMutation } from '@tanstack/react-query';
import { useRouterState } from '@tanstack/react-router';
import { useDebounce } from '@uidotdev/usehooks';

import { getSearchResults } from '@/api';
import { SearchContainer } from '@/components/common';
import { TextInput } from '@/components/core';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [containerVisible, setContianerVisible] = useState(false);

  const router = useRouterState();

  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const mutation = useMutation({
    mutationFn: () => getSearchResults(debouncedSearchTerm, 1)
  });

  const handleSearch = useCallback(e => {
    setSearchTerm(e.target.value);
  }, []);

  const toggleContainer = useCallback(value => {
    setContianerVisible(value);
  }, []);

  useEffect(() => {
    mutation.mutate();
    if (!debouncedSearchTerm) {
      toggleContainer(false);
    }
  }, [debouncedSearchTerm]);

  useEffect(() => {
    setContianerVisible(false);
  }, [router?.location?.pathname]);

  return (
    <div className="relative w-[250px] lg:w-[500px]">
      <TextInput
        value={searchTerm}
        onChange={handleSearch}
        onFocus={() => toggleContainer(true)}
        leftIcon={MagnifyingGlassIcon}
        rightIcon={Cross1Icon}
        rightIconClick={() => {
          setSearchTerm('');
          toggleContainer(false);
        }}
        className="z-50 mx-auto w-[230px] lg:w-[400px]"
        placeholder="What are you looking for?"
      />
      {debouncedSearchTerm && containerVisible ? (
        <SearchContainer results={mutation.data} />
      ) : (
        ''
      )}
    </div>
  );
};

export { SearchInput };
