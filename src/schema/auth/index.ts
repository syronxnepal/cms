import validationMessage from 'constants/validationMessage';
import * as Yup from 'yup';

const { REQUIRED, PASSWORD_NOT_MATCHED, PASSWORD_REQUIREMENT } =
  validationMessage;
export const LoginSchema = Yup.object().shape({
  username: Yup.string().trim().required(REQUIRED),
  password: Yup.string().trim().required(REQUIRED),
  keepLoggedIn: Yup.bool(),
});
