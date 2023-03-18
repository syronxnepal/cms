import React, { useState } from 'react';
import { useQueryClient } from 'react-query';
import { Outlet, useNavigate } from 'react-router-dom';

import { Pagination, Stack } from '@mui/material';
import TableBanner from 'common/TableBanner';
import ModalKey from 'enums/ModalKey';
import { bookKeys, useBookQuery } from 'services/book';
import { changeFilters, selectBookFilter } from 'stores/book';
import { useAppDispatch, useAppSelector } from 'stores/hooks';
import { getTotalPagesCount } from 'utils/common';

import BookTable from './BookTable';

const Organization = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const filters = useAppSelector(selectBookFilter);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const queryClient = useQueryClient();
  const bookQuery = useBookQuery(filters);

  const totalCount = bookQuery.data?.count || 0;
  const isLoading = bookQuery.isLoading || bookQuery.isFetching;
  const totalPagesCount = totalCount
    ? getTotalPagesCount(totalCount, filters.limit)
    : 0;

  const handleAddClick = () => {
    navigate(`modal?type=${ModalKey.ADD_BOOK}`);
  };
  const onRefreshClick = () => {
    queryClient.invalidateQueries(bookKeys.list(filters));
  };
  const onSearchKeywordChange = (keyword: string) => {
    dispatch(changeFilters({ keyword, offset: 0 }));
    setCurrentPage(1);
  };

  const onPageChange = (_: any, page: number) => {
    const newOffset = (page - 1) * filters.limit;
    dispatch(changeFilters({ offset: newOffset }));
    setCurrentPage(page);
  };

  const onPageLimitChange = (newLimit: number) => {
    dispatch(changeFilters({ limit: newLimit }));
    setCurrentPage(1);
  };

  return (
    <Stack>
      <TableBanner
        onAddClick={handleAddClick}
        onRefreshClick={onRefreshClick}
        onSearchKeywordChange={onSearchKeywordChange}
        pageLimit={{
          data: filters.limit,
          onChange: onPageLimitChange,
        }}
        searchKeyword={filters.keyword ?? ''}
        title="Books"
        totalCount={totalCount}
      />
      <BookTable
        data={bookQuery.data?.rows || []}
        isLoading={isLoading}
        totalCount={totalCount}
      />

      {!isLoading && totalPagesCount > 1 && (
        <Pagination
          count={totalPagesCount}
          onChange={onPageChange}
          page={currentPage}
          shape="rounded"
        />
      )}
      <Outlet />
    </Stack>
  );
};

export default Organization;
