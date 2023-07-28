import { memo, useCallback } from 'react';
import { TextField, Grid } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

const ClientModalForms = ({ forms, activeStep = 0, disabled }: ClientModalFormProps) => {
  const { control, formState, trigger } = useFormContext();
  const { dirtyFields, isSubmitted, errors, touchedFields } = formState;
  const activeForm = forms.find((form, index) => index === activeStep);
  const onBlurHandler = useCallback(
    (
      e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
      onBlur: Function
    ) => {
      onBlur && onBlur(e);
      trigger(e?.target?.name);
    },
    [trigger]
  );

  return (
    <>
      {activeForm?.inputs.map((input, index) => {
        const hasError =
          !!errors[input.id] &&
          (!!dirtyFields[input.id] || isSubmitted || touchedFields[input.id]);
        return (
          <Grid item key={input.id}>
            <Controller
              name={input.id}
              control={control}
              rules={{ required: input.required }}
              render={({ field }) => (
                <>
                  <TextField
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    size="small"
                    label={input.label}
                    autoFocus={!index}
                    required={input.required}
                    {...field}
                    onBlur={(e) => onBlurHandler(e, field.onBlur)}
                    error={hasError}
                    helperText={hasError && 'This field is required.'}
                    disabled={disabled}
                  />
                </>
              )}
            />
          </Grid>
        );
      })}
    </>
  );
};

export default memo(ClientModalForms);
