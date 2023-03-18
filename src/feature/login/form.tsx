import React from 'react';

import { LoadingButton } from '@mui/lab';
import {
  Box,
  Container,
  InputAdornment,
  Stack,
  Typography,
} from '@mui/material';
import FormTextfield from 'components/form/FormTextField';

interface IProps {
  togglePassword: boolean;
  setTogglePassword: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginForm = ({ togglePassword, setTogglePassword }: IProps) => (
  <Container>
    <Typography gutterBottom variant="h3">
      Member Login
    </Typography>
    <Stack spacing={3}>
      <Box>
        <FormTextfield label="Username" name="username" required />
      </Box>
      <Box>
        <FormTextfield
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment
                onClick={() => setTogglePassword(!togglePassword)}
                position="start"
                style={{ cursor: 'pointer' }}
              >
                {/* <FontAwesomeIcon
                  icon={togglePassword ? faEye : faEyeSlash}
                /> */}
              </InputAdornment>
            ),
          }}
          label="Password"
          name="password"
          required
          type={togglePassword ? 'text' : 'password'}
        />
      </Box>
      {/* <Grid container>
        <Grid item md={7} xs={12}>
          <FormCheckbox label="Keep me logged in" name="keepLoggedIn" />
        </Grid>
        <Grid
          item
          md={5}
          sx={{
            textAlign: { xs: 'left', md: 'right' },
          }}
          textAlign="right"
          xs={12}
        >
          <Link
            color="text.secondary"
            component={RouterLink}
            gutterBottom={false}
            lineHeight={2.5}
            to={`modal?type=${ModalKey.FORGET_PASSWORD}${search?.replace(
              '?',
              '&'
            )}`}
            variant="body1"
          >
            {' '}
            Forgot Password?
          </Link>
        </Grid>
      </Grid> */}

      <LoadingButton
        color="secondary"
        fullWidth
        loading={false}
        size="large"
        type="submit"
        variant="contained"
      >
        Login
      </LoadingButton>
      <Typography variant="body2">
        Don&apos;t have account please
        {/* <Link href={commonConstants.CONTACT_US_URL}> contact us</Link> */}
      </Typography>
    </Stack>
  </Container>
);

export default LoginForm;
