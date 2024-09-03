import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { UserCard } from './parts';
import { useReduxStore } from '../../../../hooks';
import { styles } from './styles';

type props = {};

export const UsersBoard: FC<props> = () => {
  const { users } = useReduxStore();

  return (
    <FlatList
      style={styles.board}
      data={users.data}
      renderItem={({ item }) => <UserCard key={item.id} user={item} />}
    />
  );
};
