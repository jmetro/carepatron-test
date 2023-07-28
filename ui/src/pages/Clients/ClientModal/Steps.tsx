import { memo } from 'react';
import { Step, StepLabel, StepIcon, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// import { Circle } from '@mui/icons-material';
const Steps = ({ forms }: { forms: ClientFormProps[] }) => {
  const theme = useTheme();

  return (
    <>
      {forms.map((form, index) => (
        <Step
          key={form.id}
          active={form.active}
          sx={{ '.completedColor': { color: theme.palette.success.main } }}
        >
          <Grid container>
            <StepIcon
              icon={index + 1}
              sx={{ mr: 1 }}
              active={form.active}
              completed={form.completed}
              classes={{
                completed: 'completedColor',
              }}
            />
            <StepLabel>{form.title}</StepLabel>
          </Grid>
        </Step>
      ))}
    </>
  );
};

export default memo(Steps);
