import React, { FC, PropsWithChildren } from 'react';
import { Modal, Text, TouchableOpacity, View } from 'react-native';

import { FeedbackLayout } from '../index';

import { styles } from './styles';

interface props extends Required<PropsWithChildren> {
  open: boolean;
  toggleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DotcodeModal: FC<props> = ({ children, open, toggleModal }) => {
  return (
    <Modal animationType="fade" transparent={true} visible={open}>
      <FeedbackLayout>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <TouchableOpacity
              onPress={() => toggleModal(false)}
              style={styles.closeButton}>
              <Text style={styles.closeButtonText}>✕</Text>
            </TouchableOpacity>
            {children}
          </View>
        </View>
      </FeedbackLayout>
    </Modal>
  );
};
