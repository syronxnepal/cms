import { Box, Button } from '@mui/material';

interface Props {
  children?: JSX.Element;
  handleClear?: VoidFunction;
  clearText?: string;
  submitText?: string;
}

const AdvancedFilterLayout = ({
  children,
  handleClear,
  clearText,
  submitText,
}: Props) => (
  <Box>
    {children}
    <Box display="flex" justifyContent="space-between" mt={2}>
      <Button onClick={handleClear} size="small" variant="neutral">
        {clearText}
      </Button>
      <Button size="small" type="submit" variant="contained">
        {submitText}
      </Button>
    </Box>
  </Box>
);

AdvancedFilterLayout.defaultProps = {
  children: undefined,
  handleClear: undefined,
  clearText: 'Clear',
  submitText: 'Submit',
};

export default AdvancedFilterLayout;
