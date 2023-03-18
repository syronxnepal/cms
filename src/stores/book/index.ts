/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import commonConstants from 'constants/common';
import { IBookFilter } from 'interface/book';
import { RootState } from 'stores';

const { DEFAULT_TABLE_FILTER } = commonConstants;

interface State {
  filters: IBookFilter;
}

const initialState: State = {
  filters: {
    ...DEFAULT_TABLE_FILTER,
  },
};

export const slice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    // Changing the state directly (with mutation) in reducer
    // Redux Toolkit uses Immer under the hood (takes care of immutablility)
    changeFilters: (state, action: PayloadAction<Partial<IBookFilter>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },

    resetFilters: (state) => {
      state.filters = {
        ...state.filters,
      };
    },

    resetAllFilters: (state) => {
      state.filters = {
        ...state.filters,
      };
    },
  },
});

// Actions
export const { changeFilters, resetFilters, resetAllFilters } = slice.actions;

// Selectors
export const selectBookFilter = (state: RootState) => state.book.filters;
export const selectBook = (state: RootState) => state.book;

// Reducer
export default slice.reducer;
