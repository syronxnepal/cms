import {
  Box,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import LoadingIndicator from 'common/LoadingIndicator';
import NoRecordsFoundDisplay from 'common/NoRecordsFoundDisplay';
import { useAppDispatch } from 'stores/hooks';

import BookGridItem from './BookGridItem';
import BookTableRow from './BookTableRow';

interface IProps {
  isLoading: boolean;
  data: any[];
  totalCount: number;
}

const BookGrid = ({ isLoading, data, totalCount }: IProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <Box>
      <Grid container spacing={1}>
        {!isLoading &&
          data.map((row) => <BookGridItem data={row} key={row.id} />)}
      </Grid>
      {totalCount < 1 && !isLoading && <NoRecordsFoundDisplay />}
      {isLoading && <LoadingIndicator />}
    </Box>
  );
};

export default BookGrid;
