import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from 'react';
import { Stepper, Button, Grid } from '@mui/material';
import { useForm, FormProvider } from 'react-hook-form';

import BasicModal from '../../../components/BasicModal';
import ModalFooter from '../../../components/BasicModal/ModalFooter';
import ClientModalForms from './Forms';
import Steps from './Steps';
import StepperContainer from './StepperContainer';
import { formsConfig, defaultInputValues } from '../../../configs/ClientModal';
import { StateContext } from '../../../store/DataProvider';
import { ACTIONS } from '../../../store/Actions';
import { createClient } from '../../../services/api';
import { getClients } from '../../../services/api';

const ClientModal = ({ open, onClose }: BasicModal.BasicModalProps) => {
  const { dispatch } = useContext(StateContext);
  const [forms, setForms] = useState(formsConfig);
  const [isSaving, setIsSaving] = useState(false);
  const methods = useForm<IClient>({
    defaultValues: defaultInputValues,
  });
  const activeStep = useMemo(
    () => forms.findIndex((step) => step.active),
    [forms]
  );
  const { handleSubmit, reset, setValue } = methods;
  const prevStep = activeStep - 1;
  const nextStep = activeStep + 1;
  const hasPrevStep = prevStep > -1;
  const hasNextStep = nextStep + 1 === forms.length;

  const handleBackButton = useCallback(() => {
    if (hasPrevStep)
      setForms((state) =>
        state.map((form, index) => ({ ...form, active: prevStep === index }))
      );
  }, [prevStep, hasPrevStep]);

  const handleCreateNewClient = useCallback(
    async (data: IClient) => {
      setIsSaving(true);
      try {
        await createClient(data);
        const clients = await getClients();
        dispatch({ type: ACTIONS.FETCH_ALL_CLIENTS, data: clients });
        setIsSaving(false);
        onClose && onClose();
      } catch (e) {
        setIsSaving(false);
        console.error(e);
      }
    },
    [dispatch, onClose]
  );

  const handleNextSubmitButton = useCallback(
    (data: IClient) => {
      if (hasNextStep)
        setForms((state) =>
          state.map((form, index) => ({
            ...form,
            completed: !form.completed
              ? index === nextStep - 1
              : form.completed,
            active: nextStep === index,
          }))
        );
      else if (forms.length === activeStep + 1) handleCreateNewClient(data);
    },
    [hasNextStep, nextStep, activeStep, forms.length, handleCreateNewClient]
  );

  useEffect(() => {
    if (!open) {
      // reset form on close side-effect
      setForms(formsConfig);
      reset();
    }
  }, [reset, open, setValue]);

  return (
    <BasicModal open={open} onClose={onClose} header="Create new client">
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(handleNextSubmitButton)} noValidate>
          <StepperContainer item>
            <Stepper
              activeStep={activeStep}
              sx={{
                '.MuiStepConnector-root:first-of-type': { display: 'none' },
              }}
            >
              <Steps forms={forms} />
            </Stepper>
          </StepperContainer>
          <Grid container item spacing={2} direction="column" sx={{ mt: 1 }}>
            <ClientModalForms
              forms={forms}
              activeStep={activeStep}
              disabled={isSaving}
            />
          </Grid>
          <ModalFooter container justifyContent="space-between">
            <Grid item>
              {hasPrevStep && <Button onClick={handleBackButton}>Back</Button>}
            </Grid>
            <Grid item>
              <Button variant="contained" type="submit" size="large">
                {hasNextStep ? 'Continue' : 'Submit'}
              </Button>
            </Grid>
          </ModalFooter>
        </form>
      </FormProvider>
    </BasicModal>
  );
};

export default ClientModal;
