import React, { FC } from 'react';
import { GestureResponderEvent, Text, TouchableOpacity } from 'react-native';

import { styles } from './styles';

type props = {
  text: string;
  onPress: (event: GestureResponderEvent) => void;
};

export const UserButton: FC<props> = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
