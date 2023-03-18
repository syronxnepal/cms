import { IFilter } from 'interface/common';

export interface IBookForm {
  name: string;
}

export interface IBook {
  bookId: string | number;
  name: string;
  author: string;
  isbn: number;
  publication: string;
}

export interface IBookFilter extends IFilter {}
