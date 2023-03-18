import { OrganizationSortBy } from 'enums/organization';
import { IFilter } from 'interface/common';

export interface IOrganizationFilters extends IFilter {
  type: string;
  tenantId: string;
  clientId?: string;
  agentId?: string;
  quickView?: boolean;
}

export type OrganizationSortByType =
  | OrganizationSortBy.NAME
  | OrganizationSortBy.EMAIL;
