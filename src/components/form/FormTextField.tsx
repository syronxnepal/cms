import { Controller, useFormContext } from 'react-hook-form';

import { TextField, TextFieldProps } from '@mui/material';

type Props = {
  name: string;
  label: string;
  placeholder?: string;
  showHelperText?: boolean;
  required?: boolean;
  variant?: 'standard' | 'filled';
  width?: string;
} & TextFieldProps;

const FormTextField = ({
  name,
  label,
  showHelperText,
  required,
  placeholder,
  variant,
  width,
  ...others
}: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) =>
        variant === 'standard' ? (
          <TextField
            {...others}
            {...field}
            error={!!errors[name]}
            fullWidth
            helperText={
              showHelperText ? (errors[name]?.message as React.ReactNode) : null
            }
            InputProps={{ ...others.InputProps, inputProps: { min: 0 } }}
            label={`${label} ${required ? '*' : ''}`}
            size="small"
            variant="standard"
          />
        ) : (
          <TextField
            {...others}
            {...field}
            className="filled-variant filled-variant--white"
            error={!!errors[name]}
            helperText={
              showHelperText ? (errors[name]?.message as React.ReactNode) : null
            }
            InputProps={{ ...others.InputProps, inputProps: { min: 0 } }}
            //   label={`${label} ${required ? '*' : ''}`}
            placeholder={placeholder}
            sx={{ width: `${width}px` }}
          />
        )
      }
    />
  );
};

FormTextField.defaultProps = {
  showHelperText: false,
  required: false,
  variant: 'standard',
  width: undefined,
  placeholder: undefined,
};

export default FormTextField;
