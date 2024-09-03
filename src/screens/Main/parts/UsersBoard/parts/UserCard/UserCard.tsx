import React, { FC, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { UserType, UserValues } from '../../../../../../inderfaces';
import { styles } from './styles';
import { useAlert, useAppDispatch } from '../../../../../../hooks';
import { deleteUser, updateUser } from '../../../../../../redux';
import { DotcodeModal, UserForm } from '../../../../../../components';

type props = {
  user: UserType;
};

export const UserCard: FC<props> = ({ user }) => {
  const dispatch = useAppDispatch();
  const alert = useAlert();
  const [modalVisible, setModalVisible] = useState(false);

  const onDeleteUser = () => {
    alert({
      title: 'Are you sure?',
      buttons: [
        { text: 'Cancel' },
        {
          text: 'Delete',
          onPress: () => dispatch(deleteUser(user.id)),
          style: 'destructive',
        },
      ],
    });
  };

  const handleUpdateUser = (values: UserValues) => {
    dispatch(
      updateUser({
        ...values,
        id: user.id,
      }),
    );

    setModalVisible(false);
  };

  return (
    <View style={styles.card}>
      <View style={styles.block}>
        <Text>First Name: {user.firstName}</Text>
        <Text>Last Name: {user.lastName}</Text>
      </View>
      <View style={styles.block}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDeleteUser}>
          <Text>Delete</Text>
        </TouchableOpacity>
      </View>
      <DotcodeModal open={modalVisible} toggleModal={setModalVisible}>
        <UserForm
          handleSubmit={handleUpdateUser}
          userValues={{
            firstName: user.firstName,
            lastName: user.lastName,
          }}
        />
      </DotcodeModal>
    </View>
  );
};
