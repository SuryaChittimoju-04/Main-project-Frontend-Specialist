/*eslint-disable*/
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'phrms',
      storage,
      whitelist: ['v1'],
    },
    reducers,
  );

  return persistedReducer;
};