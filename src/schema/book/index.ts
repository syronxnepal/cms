import validationMessage from 'constants/validationMessage';
import * as Yup from 'yup';

const { REQUIRED } = validationMessage;

export const BookSchema = Yup.object().shape({
  name: Yup.string().nullable().trim().required(REQUIRED),
});
