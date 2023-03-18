import { useEffect, useMemo, useState } from 'react';

// import {
//   faPlus,
//   faSearch,
//   faSlidersH,
//   faSyncAlt,
// } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import SyncIcon from '@mui/icons-material/Sync';
import TuneIcon from '@mui/icons-material/Tune';
import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Popover from 'components/Popover';
import PageLimitSelect from 'components/select/PageLimitSelect';
import { debounce } from 'utils/lodash';
// import ExcelExport from './ExcelExport';

import ListView from './ListView';
import PermissionGate from './PermissionGate';

interface IProps {
  exportData?: boolean;
  title: string;
  addButtonText?: string;
  onAddClick?: VoidFunction;
  advancedFilterElement?: {
    children: JSX.Element;
    submitText?: string;
    handleClear?: () => void;
    handleSubmit?: (event: any) => void;
    clearText?: string;
  };
  appliedFilterElement?: {
    children: JSX.Element | null;
  };
  searchKeyword: string;
  hideAdvancedFilter?: boolean;
  onSearchKeywordChange: (value: string) => void;
  pageLimit?: {
    data: number;
    onChange: (value: number) => void;
  };
  radiusLimit?: {
    data: number;
    onChange: (value: number) => void;
  };
  onExportAllClick?: VoidFunction;
  onExportAsExcelClick?: VoidFunction;
  onExportCurrentListAsExcelClick?: VoidFunction;
  onRefreshClick: VoidFunction;
  totalCount: number;
  onViewChange?: (value: boolean) => void;
}

const TableBanner = ({
  exportData,
  title,
  addButtonText,
  advancedFilterElement,
  appliedFilterElement,
  hideAdvancedFilter,
  onAddClick,
  searchKeyword,
  onSearchKeywordChange,
  pageLimit,
  radiusLimit,
  onExportAllClick,
  onExportAsExcelClick,
  onExportCurrentListAsExcelClick,
  onRefreshClick,
  totalCount,
  onViewChange,
}: IProps) => {
  const [keyword, setKeyword] = useState('');
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const theme = useTheme();
  const isSmallerThanMd = useMediaQuery(theme.breakpoints.down('md'));

  const onAdvancedSearchFormSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (advancedFilterElement?.handleSubmit) {
      advancedFilterElement.handleSubmit(event);
      setIsPopoverOpen(false);
    }
  };

  const handleClear = () => {
    if (advancedFilterElement?.handleClear) {
      advancedFilterElement?.handleClear();
    }
    setIsPopoverOpen(false);
  };

  const debouncedSearchHandler = useMemo(
    () =>
      debounce(async (value: string) => {
        if (value.length > 2 || !value.length)
          onSearchKeywordChange(value.trim());
      }, 300),
    [onSearchKeywordChange]
  );

  const searchHandler = (value: string) => {
    setKeyword(value);
    debouncedSearchHandler(value);
  };

  useEffect(() => {
    setKeyword(searchKeyword);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (searchKeyword?.trim() === '') {
      setKeyword(searchKeyword);
    }
  }, [searchKeyword]);

  return (
    <Box>
      <Typography variant="h6">{title}</Typography>

      <Box alignItems="center" display="flex" justifyContent="space-between">
        <FormControl variant="standard">
          <Box className="mui__filled-input-with-icon-button-suffix-wrapper">
            <TextField
              className={`filled-variant filled-variant${
                !isSmallerThanMd ? '--search-field' : ''
              }${advancedFilterElement ? '-filter' : ''}`}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              onChange={(event) => searchHandler(event.target.value)}
              placeholder="Search"
              size="small"
              value={keyword}
            />

            {/* {!hideAdvancedFilter && advancedFilterElement && (
              <Popover
                buttonIcon={<TuneIcon />}
                open={isPopoverOpen}
                setOpen={setIsPopoverOpen}
                sx={{ minWidth: '400px' }}
              >
                <form onSubmit={onAdvancedSearchFormSubmit}>
                  <AdvanceFilterLayout
                    clearText={advancedFilterElement?.clearText}
                    handleClear={handleClear}
                    submitText={advancedFilterElement?.submitText}
                  >
                    {advancedFilterElement.children}
                  </AdvanceFilterLayout>
                </form>
              </Popover>
            )} */}
          </Box>
        </FormControl>

        <Stack direction="row" spacing={1}>
          <Tooltip title="Refresh">
            <IconButton aria-label="add" onClick={onRefreshClick} size="medium">
              <SyncIcon />
            </IconButton>
          </Tooltip>
          {onViewChange && <ListView onChange={onViewChange} />}
          {pageLimit && (
            <PageLimitSelect
              data={pageLimit.data}
              disabled={totalCount < 25}
              onChange={pageLimit.onChange}
            />
          )}
          {/* {radiusLimit && (
            <RadiusLimitSelect
              data={radiusLimit.data}
              disabled={false}
              onChange={radiusLimit.onChange}
            />
          )} */}

          {/* {exportData && (
            <ExcelExport
              onExportAllClick={onExportAllClick}
              onExportAsExcelClick={onExportAsExcelClick}
              onExportCurrentListAsExcelClick={onExportCurrentListAsExcelClick}
            />
          )} */}

          {!!onAddClick && (
            <PermissionGate>
              <Button
                color="secondary"
                onClick={onAddClick}
                size="medium"
                startIcon={<AddIcon />}
                type="button"
                variant="contained"
              >
                {addButtonText}
              </Button>
            </PermissionGate>
          )}
        </Stack>
      </Box>

      {appliedFilterElement?.children && (
        <Box alignItems="center" display="flex" mt={2}>
          <Typography gutterBottom={false} variant="body1">
            Filters Applied:{' '}
          </Typography>
          <Stack direction="row" ml={2} spacing={1}>
            {appliedFilterElement.children}
          </Stack>
        </Box>
      )}
    </Box>
  );
};

TableBanner.defaultProps = {
  addButtonText: 'Add',
  exportData: false,
  advancedFilterElement: undefined,
  appliedFilterElement: undefined,
  onAddClick: undefined,
  onExportAsExcelClick: undefined,
  onExportAllClick: undefined,
  onExportCurrentListAsExcelClick: undefined,
  radiusLimit: undefined,
  pageLimit: undefined,
  onViewChange: undefined,
  hideAdvancedFilter: false,
};

export default TableBanner;
