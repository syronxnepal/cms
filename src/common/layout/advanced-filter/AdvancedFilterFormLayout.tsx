import { Grid, Typography } from '@mui/material';

interface IProps {
  label: string;
  children: React.ReactNode;
  spacing?: number;
}

const AdvancedFilterFormLayout = ({ label, children, spacing }: IProps) => (
  <Grid container mb={2} spacing={spacing}>
    <Grid item sx={{ alignSelf: 'flex-end' }} xs={4}>
      <Typography
        gutterBottom={false}
        sx={{
          fontWeight: (theme) => theme.typography.fontWeightBold,
        }}
        variant="subtitle2"
      >
        {label}
      </Typography>
    </Grid>
    <Grid item xs={8}>
      {children}
    </Grid>
  </Grid>
);
AdvancedFilterFormLayout.defaultProps = {
  spacing: 2,
};
export default AdvancedFilterFormLayout;
