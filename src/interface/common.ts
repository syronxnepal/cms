import { SortOrder } from 'enums/common';

export type SortOrderType = SortOrder.ASC | SortOrder.DESC;

export interface IFilter {
  keyword?: string;
  limit: number;
  offset: number;
}

export interface ISelectOptionProps {
  label: string;
  value: string;
}
