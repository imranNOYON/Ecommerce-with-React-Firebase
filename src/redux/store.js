import { configureStore } from '@reduxjs/toolkit'
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import bazarRedcuer from "./bazarSlice";
import { version } from 'react';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
const persistConfig={
  key:"root",
  version:1,
  storage,
};
const persistedReducer=persistReducer(persistConfig,bazarRedcuer)
export const store = configureStore({
 reducer:{bazar:persistedReducer},
 middleware:(getDefaultMiddleware)=>
  getDefaultMiddleware({
    serializableCheck:{
      ignoreActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
    }
  })
})
export let persistor=persistStore(store)