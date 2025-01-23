import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Default is localStorage for web
import { blogReducer } from './features/blogReducer';
// import blogReducer from './features/blogReducer'; 

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['blogs'],
};

export const persistedReducer = persistReducer(persistConfig, blogReducer);