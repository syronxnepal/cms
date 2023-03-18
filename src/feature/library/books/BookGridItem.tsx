import React from 'react';

import { Box, Grid, Paper } from '@mui/material';

interface IProps {
  data: any;
}

const BookGridItem = ({ data }: IProps): JSX.Element => (
  <Grid item xs={4}>
    <Box component={Paper} padding={2}>
      BookGridItem
    </Box>
  </Grid>
);

export default BookGridItem;
