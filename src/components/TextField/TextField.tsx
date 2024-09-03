import React, { FC } from 'react';
import { TextInput, View, Text } from 'react-native';
import { styles } from './styles';
import { FormikValues } from 'formik';

type props = {
  label: string;
  name: string;
  formik: FormikValues;
  placeholder?: string;
};

export const TextField: FC<props> = ({ label, placeholder, name, formik }) => {
  const errorMessage = formik.errors[name];

  const isError = errorMessage && formik.touched[name];

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={formik.values[name]}
        onChangeText={formik.handleChange(name)}
        onBlur={formik.handleBlur(name)}
        style={styles.input}
        placeholder={placeholder}
      />
      {isError && <Text style={styles.errorText}>{errorMessage}</Text>}
    </View>
  );
};
