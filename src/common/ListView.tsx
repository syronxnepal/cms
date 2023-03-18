import React from 'react';

import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import { ToggleButton, ToggleButtonGroup } from '@mui/material';

interface IProps {
  onChange: (value: boolean) => void;
}
const ListView = ({ onChange }: IProps) => {
  const [alignment, setAlignment] = React.useState<string | null>('table');

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    const isGridView = newAlignment === 'grid';
    onChange(isGridView);
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      aria-label="view details"
      exclusive
      onChange={handleAlignment}
      value={alignment}
    >
      <ToggleButton aria-label="table" size="small" value="table">
        <TableChartOutlinedIcon />
      </ToggleButton>
      <ToggleButton aria-label="grid" size="small" value="grid">
        <GridViewOutlinedIcon />
      </ToggleButton>
    </ToggleButtonGroup>
  );
};

export default ListView;
