import {
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

import BookTableRow from './BookTableRow';

interface IProps {
  isLoading: boolean;
  data: any[];
  totalCount: number;
}

const BookTable = ({ isLoading, data, totalCount }: IProps): JSX.Element => {
  const dispatch = useAppDispatch();

  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table" sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Author</TableCell>
            <TableCell>ISBN</TableCell>
            <TableCell>Publication</TableCell>
            <TableCell />
          </TableRow>
        </TableHead>
        <TableBody>
          {!isLoading &&
            data.map((row) => <BookTableRow data={row} key={row.id} />)}
        </TableBody>
      </Table>
      {totalCount < 1 && !isLoading && <NoRecordsFoundDisplay />}
      {isLoading && <LoadingIndicator />}
    </TableContainer>
  );
};

export default BookTable;
