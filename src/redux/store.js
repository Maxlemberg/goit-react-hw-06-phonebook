import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import todosReducer from './reducer';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

// const persReducer = persistReducer(persistConfig, rootReducer);
const todosPersistConfig = {
  key: 'todos',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: { todos: persistReducer(todosPersistConfig, todosReducer) },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
