import React, { FC } from 'react';
import { View } from 'react-native';
import { useFormik } from 'formik';

import { UserValues } from '../../inderfaces';
import { UserButton, TextField } from '../index';

import { validationSchema } from './utils';
import { styles } from './styles';

const initialValues: UserValues = {
  firstName: '',
  lastName: '',
};

type props = {
  handleSubmit: (values: UserValues) => void;
  userValues?: UserValues;
};

export const UserForm: FC<props> = ({ handleSubmit, userValues }) => {
  const onSubmit = (values: UserValues) => {
    handleSubmit(values);
  };

  const formik = useFormik({
    initialValues: {
      ...initialValues,
      ...userValues,
    },
    onSubmit,
    validationSchema,
  });

  return (
    <View style={styles.form}>
      <TextField
        placeholder="Enter first name"
        label={'First Name'}
        name={'firstName'}
        formik={formik}
      />
      <TextField
        placeholder="Enter last name"
        label={'Last Name'}
        name={'lastName'}
        formik={formik}
      />
      <UserButton
        text={userValues ? 'Update' : 'Add'}
        onPress={() => formik.handleSubmit()}
      />
    </View>
  );
};
