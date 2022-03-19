
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import Reducers from './Reducers/index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistStore, persistReducer } from 'redux-persist';
const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
   
  };
const persistedReducer=persistReducer(persistConfig,Reducers)
export const store = createStore(persistedReducer, applyMiddleware(ReduxThunk));
export const persistor = persistStore(store);