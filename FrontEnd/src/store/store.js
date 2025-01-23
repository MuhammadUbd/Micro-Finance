import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import { persistedReducer } from './persist';


export const store = configureStore({
    reducer: {
        blog: persistedReducer,
    },
});

export const persistor = persistStore(store);
