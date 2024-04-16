import { useQuery } from '@tanstack/react-query';

import { Member } from '@/components/common';
import { Text } from '@/components/core';

import { getAllUsers } from '../../utils/api';

import { Skeleton } from './skeleton';

export const MemberList = () => {
  /*----------  Hooks  ----------*/
  const usersList = useQuery({ queryKey: ['usersList'], queryFn: getAllUsers });

  /*----------  Component  ----------*/
  return (
    <div className="mx-auto w-max min-w-[320px] space-y-4 rounded-xl border bg-white p-3 dark:border-emerald-500 dark:bg-gray-800 lg:w-min">
      <Text className="" type="subheading">
        Members
      </Text>
      <div className="flex flex-col gap-y-3">
        {usersList.isSuccess && Array.isArray(usersList.data) ? (
          usersList.data.map(({ id, name, profilePictureUrl }) => (
            <Member key={id} name={name} image={profilePictureUrl} />
          ))
        ) : (
          <>
            <Skeleton />
          </>
        )}
      </div>
    </div>
  );
};
