import { Box, SxProps, Typography } from '@mui/material';

interface IProps {
  text?: string;
  containerSx?: SxProps;
}

const NoRecordsFoundDisplay = ({ text, containerSx }: IProps): JSX.Element => (
  <Box
    sx={{
      backgroundColor: (theme) => theme.palette.grey[100],
      padding: 2,
      ...containerSx,
    }}
  >
    <Typography
      display="block"
      gutterBottom={false}
      textAlign="center"
      variant="body2"
    >
      {text}
    </Typography>
  </Box>
);

NoRecordsFoundDisplay.defaultProps = {
  text: 'There are no records to show.',
  containerSx: null,
};

export default NoRecordsFoundDisplay;
