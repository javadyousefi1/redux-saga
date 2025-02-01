import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import characterReducer from './characterSlice';
import { watchCharacterSaga } from '../characterSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    characters: characterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(watchCharacterSaga);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
