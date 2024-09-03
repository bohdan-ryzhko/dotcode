import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    minWidth: '100%',
    height: 65,
    position: 'relative',
  },
  label: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 17,
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderWidth: 1,
    minWidth: '100%',
    borderRadius: 8,
  },
  errorText: {
    position: 'absolute',
    left: 0,
    bottom: -20,
    color: 'red',
  },
});
