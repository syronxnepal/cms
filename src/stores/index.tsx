import { configureStore } from '@reduxjs/toolkit';

import book from './book';
import menu from './menu';
import messageModal from './messageModal';
import organization from './organization';

export const store = configureStore({
  reducer: {
    organization,
    messageModal,
    menu,
    book,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
