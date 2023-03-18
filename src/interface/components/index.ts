import { Theme } from '@emotion/react';
import { SvgIconTypeMap, SxProps } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export interface IListItem {
  // eslint-disable-next-line @typescript-eslint/ban-types
  icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string;
  };
  label: string;
  sx?: SxProps<Theme>;
  path?: string;
  onClick?: VoidFunction;
}
