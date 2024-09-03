import React, { FC, useState } from 'react';
import { View } from 'react-native';

import { useAlert, useAppDispatch, useReduxStore } from '../../hooks';
import { addUser, clearUsers } from '../../redux';
import { generateId } from '../../utils';
import { UserValues } from '../../inderfaces';

import { UserButton, Layout, DotcodeModal, UserForm } from '../../components';
import { UsersBoard } from './parts';

import { styles } from './styles';

export const Main: FC = () => {
  const { users } = useReduxStore();
  const dispatch = useAppDispatch();
  const alert = useAlert();

  const [modalVisible, setModalVisible] = useState(false);

  const handleAddUser = (values: UserValues) => {
    dispatch(
      addUser({
        ...values,
        id: generateId(),
      }),
    );

    setModalVisible(false);
  };

  const handleClearUsers = () => {
    alert({
      title: 'Are you sure?',
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Clear',
          onPress: () => dispatch(clearUsers()),
          style: 'destructive',
        },
      ],
    });
  };

  return (
    <Layout>
      <View style={styles.buttons}>
        <UserButton text={'Add User'} onPress={() => setModalVisible(true)} />
        {users.data.length > 0 && (
          <UserButton text={'Crear Users'} onPress={handleClearUsers} />
        )}
      </View>
      <DotcodeModal open={modalVisible} toggleModal={setModalVisible}>
        <UserForm handleSubmit={handleAddUser} />
      </DotcodeModal>
      <UsersBoard />
    </Layout>
  );
};
