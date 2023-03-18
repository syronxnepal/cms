import { Controller, useFormContext } from 'react-hook-form';

import CloseIcon from '@mui/icons-material/Close';
import { IconButton, MenuItem, TextField, TextFieldProps } from '@mui/material';
import themeVars from 'assets/scss/_theme-vars.module.scss';
import { ISelectOptionProps } from 'interface/common';

type Props = {
  name: string;
  label: string;
  data: any[];
  showHelperText?: boolean;
  isRequired?: boolean;
} & TextFieldProps;

const FormSelectTextField = ({
  name,
  label,
  showHelperText,
  isRequired,
  data,
  ...others
}: Props) => {
  const {
    watch,
    control,
    formState: { errors },
    setValue,
  } = useFormContext();

  const selectedValue = watch(name);

  const handleClear = () => {
    setValue(name, '');
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field }) => (
        <TextField
          {...others}
          {...field}
          error={!!errors[name]}
          fullWidth
          helperText={
            showHelperText ? (errors[name]?.message as React.ReactNode) : null
          }
          InputProps={{
            endAdornment: (
              <IconButton
                onClick={handleClear}
                sx={{
                  display: selectedValue ? 'block' : 'none',
                  position: 'absolute',
                  right: 20,
                }}
              >
                <CloseIcon />
              </IconButton>
            ),
            ...others.InputProps,
          }}
          label={`${label} ${isRequired ? '*' : ''}`}
          select
          size="small"
          variant="standard"
        >
          {data.map((option: ISelectOptionProps) => (
            <MenuItem
              key={option.value}
              sx={{ fontSize: `${themeVars.fontSizeSm}px` }}
              value={option.value}
            >
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
};

FormSelectTextField.defaultProps = {
  showHelperText: false,
  isRequired: false,
};

export default FormSelectTextField;
