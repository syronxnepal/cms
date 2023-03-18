/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IListItem } from 'interface/components';
import { IMenuData } from 'interface/menu';
import { RootState } from 'stores';

interface State {
  activeMenu: IMenuData | null;
  menus: IMenuData[] | null;
  childMenus: {
    parentMenu: IListItem;
    children: IListItem[];
  } | null;
}

const initialState: State = {
  activeMenu: null,
  childMenus: null,
  menus: null,
};

export const slice = createSlice({
  name: 'menus',
  initialState,
  reducers: {
    // Changing the state directly (with mutation) in reducer
    // Redux Toolkit uses Immer under the hood (takes care of immutablility)
    changeActiveMenu: (state, action: PayloadAction<Partial<IMenuData>>) => {
      state.activeMenu = action.payload as any;
    },
    setMenus: (state, action: PayloadAction<Partial<IMenuData[]>>) => {
      state.menus = action.payload as any;
    },
    setChildMenus: (
      state,
      action: PayloadAction<
        Partial<{ parentMenu: IListItem; children: IListItem[] } | null>
      >
    ) => {
      state.childMenus = action.payload as any;
    },

    resetAll: (state) => {
      state.menus = [];
    },
  },
});

// Actions
export const { changeActiveMenu, setMenus, setChildMenus, resetAll } =
  slice.actions;

// Selectors
export const selectActiveMenu = (state: RootState) => state.menu.activeMenu;
export const selectMenus = (state: RootState) => state.menu.menus;
export const selectChildMenus = (state: RootState) => state.menu.childMenus;

export const selectMenu = (state: RootState) => state.menu;

export default slice.reducer;
