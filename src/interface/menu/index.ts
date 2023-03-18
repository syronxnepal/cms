import { IListItem } from 'interface/components';

export interface IMenuData extends IListItem {
  child: IListItem[];
  path: string;
}
