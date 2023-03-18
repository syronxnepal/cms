import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import { Stack } from '@mui/material';
import TableBanner from 'common/TableBanner';
import ModalKey from 'enums/ModalKey';

const Organization = () => {
  const totalCount = 0;
  const filters = {
    limit: 20,
    keyword: '',
  };
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);

  const handleAddClick = () => {
    navigate(`modal?type=${ModalKey.ADD_ORGANIZATION}`);
  };
  const onRefreshClick = () => {};
  const onSearchKeywordChange = () => {};
  const onPageLimitChange = (newLimit: number) => {
    // dispatch(changeFilters({ limit: newLimit }));
    setCurrentPage(1);
  };
  return (
    <Stack>
      <TableBanner
        // advancedFilterElement={{
        //   children: <AdvancedFilter data={advancedSearch} />,
        //   handleClear,
        //   handleSubmit: handleApply,
        //   submitText: 'Apply',
        // }}
        // appliedFilterElement={{
        //   children:
        //     advancedFiltersToDisplay.length > 0 ? (
        //       <AppliedFilter
        //         filters={advancedFiltersToDisplay}
        //         onDelete={onDeleteFilter}
        //       />
        //     ) : null,
        // }}
        exportData
        hideAdvancedFilter
        onAddClick={handleAddClick}
        // onExportAllClick={onExportAllClick}
        // onExportCurrentListAsExcelClick={onExportCurrentListAsExcelClick}
        onRefreshClick={onRefreshClick}
        onSearchKeywordChange={onSearchKeywordChange}
        pageLimit={{
          data: filters.limit,
          onChange: onPageLimitChange,
        }}
        searchKeyword={filters.keyword ?? ''}
        title="Individuals"
        totalCount={totalCount}
      />
      <Outlet />
    </Stack>
  );
};

export default Organization;
