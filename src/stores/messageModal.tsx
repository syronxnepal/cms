/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'stores';

interface State {
  open: boolean;
  title?: string;
  message?: string;
  alertMessage?: string;
}

const initialState: { options: State } = {
  options: {
    open: false,
    title: undefined,
    message: undefined,
    alertMessage: undefined,
  },
};

export const slice = createSlice({
  name: 'messageModal',
  initialState,
  reducers: {
    // Changing the state directly (with mutation) in reducer
    // Redux Toolkit uses Immer under the hood (takes care of immutablility)
    changeMessageOption: (state, action: PayloadAction<Partial<State>>) => {
      state.options = { ...state.options, ...action.payload };
    },
    clearMessageOption: (state) => {
      state.options = initialState.options;
    },
  },
});

// Actions
export const { changeMessageOption, clearMessageOption } = slice.actions;

// Selectors
export const selectModalOption = (state: RootState) =>
  state.messageModal.options;

// Reducer
export default slice.reducer;
