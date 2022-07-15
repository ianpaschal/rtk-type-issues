import { configureStore, Store } from '@reduxjs/toolkit';
import { reducer } from './forceSlice';

export const store: Store = configureStore({
  reducer: {
    force: reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// FIXME: Why are no types?
export const selectForce = (state: RootState) => state.force;
