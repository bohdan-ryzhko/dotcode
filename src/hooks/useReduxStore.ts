import { useSelector } from 'react-redux';
import { RootState } from '../redux';

export const useReduxStore = (): RootState => ({
  users: useSelector((state: RootState) => state.users),
});
