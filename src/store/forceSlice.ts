import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Force } from 'src/types/Force';
import { Unit } from 'src/types/Unit';

const initialState: Force = {
  formations: [],
  general: {
    faction: 'foo',
    book: 'foo',
  },
  meta: {
    author: 'ian',
  },
  units: [],
};

export const forceSlice = createSlice({
  initialState,
  name: 'force',
  reducers: {
    addUnit: (state, action: PayloadAction<Unit>): Force => ({
      ...state,
      units: [
        ...state.units,
        {
          ...action.payload,
          isDraft: true,
        },
      ],
    }),
  },
});

export const { reducer } = forceSlice;

export default forceSlice.reducer;
