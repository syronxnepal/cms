import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';
import commonConstants from 'constants/common';

const { PAGE_ITEM_LIMITS } = commonConstants;

interface IProps {
  data: number;
  onChange: (value: number) => void;
  disabled: boolean;
}

const PageLimitSelect = ({ data, onChange, disabled }: IProps) => (
  <Box alignItems="center" display="inline-flex">
    <Box component="label" mr={1}>
      <Typography
        color="text.secondary"
        gutterBottom={false}
        id="page-limit-select-label"
        variant="body1"
      >
        Show
      </Typography>
    </Box>
    <FormControl
      className="select-text-variant select-text-variant--limit-changer"
      size="small"
    >
      <Select
        disabled={disabled}
        id="page-limit-select"
        labelId="page-limit-select-label"
        onChange={(e) => onChange(+e.target.value)}
        value={data}
      >
        {PAGE_ITEM_LIMITS.map((item) => (
          <MenuItem key={item} value={item}>
            {item}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </Box>
);

export default PageLimitSelect;
