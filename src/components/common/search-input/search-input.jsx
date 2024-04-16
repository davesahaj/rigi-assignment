import { useCallback, useEffect, useState } from 'react';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import { useMutation } from '@tanstack/react-query';
import { useDebounce } from '@uidotdev/usehooks';

import { getSearchResults } from '@/api';
import { SearchContainer } from '@/components/common';
import { TextInput } from '@/components/core';

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [containerVisible, setContianerVisible] = useState(false);

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

  return (
    <div className="relative w-[250px] lg:w-[500px]">
      <TextInput
        value={searchTerm}
        onChange={handleSearch}
        onFocus={() => toggleContainer(true)}
        icon={MagnifyingGlassIcon}
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
