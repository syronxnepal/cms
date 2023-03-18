/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import commonConstants from 'constants/common';
import { SortOrderType } from 'interface/common';
import {
  IOrganizationFilters,
  OrganizationSortByType,
} from 'interface/organization';
import { RootState } from 'stores';

const { DEFAULT_TABLE_FILTER } = commonConstants;

const advancedSearchDefaultValues = {
  name: '',
  email: '',
  phone: '',
  agent: '',
  status: '',
  enrollmentStatus: '',
  isAdvancedSearch: false,
};

interface IGroupSort {
  sortBy: OrganizationSortByType | null;
  sortOrder: SortOrderType | null;
}

interface State {
  filters: IOrganizationFilters;
  // advancedSearch: IGroupAdvancedSearchForm;
  sort: IGroupSort;
  advanceFilterOfferings: any;
}

const initialState: State = {
  filters: {
    ...DEFAULT_TABLE_FILTER,
    type: commonConstants.TYPE.GROUP,
    tenantId: '',
    agentId: '',
  },
  // advancedSearch: { ...advancedSearchDefaultValues },
  sort: {
    sortBy: null,
    sortOrder: null,
  },
  advanceFilterOfferings: null,
};

export const slice = createSlice({
  name: 'organization',
  initialState,
  reducers: {
    // Changing the state directly (with mutation) in reducer
    // Redux Toolkit uses Immer under the hood (takes care of immutablility)
    changeFilters: (
      state,
      action: PayloadAction<Partial<IOrganizationFilters>>
    ) => {
      state.filters = { ...state.filters, ...action.payload };
    },

    resetFilters: (state) => {
      state.filters = {
        ...state.filters,
        ...DEFAULT_TABLE_FILTER,
        type: commonConstants.TYPE.GROUP,
      };
    },

    // changeAdvancedSearch: (
    //   state,
    //   action: PayloadAction<Partial<IGroupAdvancedSearchForm>>
    // ) => {
    //   const advanceFilters = { ...state.advancedSearch, ...action.payload };
    //   const { isAdvancedSearch, ...rest } = advanceFilters;
    //   state.advancedSearch = {
    //     ...advanceFilters,
    //     isAdvancedSearch: !checkIfValuesInObjectIsEmpty(rest),
    //   };
    //   state.advancedSearch = { ...state.advancedSearch, ...action.payload };
    // },

    // resetAdvancedSearch: (state) => {
    //   state.advancedSearch = { ...advancedSearchDefaultValues };
    //   state.advanceFilterOfferings = null;
    // },

    changeSortByAndOrder: (state, action: PayloadAction<IGroupSort>) => {
      state.sort = {
        sortBy: action.payload.sortBy,
        sortOrder: action.payload.sortOrder,
      };
    },

    resetAllFilters: (state) => {
      // state.advancedSearch = { ...advancedSearchDefaultValues };
      state.sort = initialState.sort;
      state.filters = {
        ...state.filters,
        ...DEFAULT_TABLE_FILTER,
        type: commonConstants.TYPE.GROUP,
      };
      state.advanceFilterOfferings = [];
    },
  },
});

// Actions
export const {
  changeFilters,
  // changeAdvancedSearch,
  resetFilters,
  // resetAdvancedSearch,
  changeSortByAndOrder,
  resetAllFilters,
} = slice.actions;

// Selectors
export const selectOrganizationFilter = (state: RootState) =>
  state.organization.filters;
export const selectOrganizationSort = (state: RootState) =>
  state.organization.sort;
// export const selectGroupAdvancedSearch = (state: RootState) =>
//   state.organization.advancedSearch;
export const selectOrganization = (state: RootState) => state.organization;

// export const selectAdvanceFilteredOfferings = (state: RootState) =>
//   state.organization.advanceFilterOfferings;

// Reducer
export default slice.reducer;
