import React, { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { yupResolver } from '@hookform/resolvers/yup';
import { DialogContent } from '@mui/material';
import { Modal } from 'common';
import ModalFooter from 'common/modal/ModalFooter';
import { IBookForm } from 'interface/book';
import { BookSchema } from 'schema/book';
import {
  useAddBookMutation,
  useBookDetailQuery,
  useUpdateBookMutation,
} from 'services/book';

import BookForm from './BookForm';

const defaultValues = {
  name: '',
};

const AddBookModal = () => {
  const navigate = useNavigate();

  const [searchParams] = useSearchParams();

  const methods = useForm<IBookForm>({
    resolver: yupResolver(BookSchema),
    defaultValues,
    mode: 'onBlur',
  });

  const bookId = searchParams.get('id'); // book Id
  const isEditMode = !!bookId;

  const bookDetailQuery = useBookDetailQuery(bookId!, {
    enabled: isEditMode,
  });

  const addBookMutation = useAddBookMutation();
  const updateBookMutation = useUpdateBookMutation();

  const bookDetail = bookDetailQuery.data;
  const handleClose = () => {
    navigate(-1);
  };
  const onSubmit = (data: IBookForm) => {
    if (isEditMode) {
      updateBookMutation.mutate(
        { data, bookId: bookId! },
        {
          onSuccess: () => {
            handleClose();
          },
        }
      );
    } else {
      addBookMutation.mutate(
        { data },
        {
          onSuccess: () => {
            handleClose();
          },
        }
      );
    }
  };

  useEffect(() => {
    if (isEditMode) {
      methods.reset({
        name: bookDetail?.name,
      });
    }
  }, [bookDetail, isEditMode, methods]);
  const isDisabled = () => {
    if (addBookMutation.isLoading || updateBookMutation.isLoading) return true;
    return false;
  };
  return (
    <Modal
      handleClose={handleClose}
      // icon={isEditMode ? 'faUserEdit' : 'faUserPlus'}
      open
      title={isEditMode ? 'Edit Book' : 'Add Book'}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <DialogContent>
            <BookForm />
          </DialogContent>
          <ModalFooter
            isDisabled={isDisabled()}
            isLoading={
              addBookMutation.isLoading || updateBookMutation.isLoading
            }
            onCancelButtonClick={handleClose}
          />
        </form>
      </FormProvider>
    </Modal>
  );
};

export default AddBookModal;
