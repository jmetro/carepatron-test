import { Grid, Typography, IconButton, styled } from '@mui/material';
import { Close } from '@mui/icons-material';

const ModalHeader = ({
  children,
  onClose,
  ModalHeaderTypographyProps,
  CloseButtonProps,
  ...props
}: BasicModal.ModalHeaderProps) => {
  return (
    <Grid container item justifyContent="space-between" {...props}>
      <Grid container item flex={1} alignItems="center">
        <Typography variant="h5" {...ModalHeaderTypographyProps}>
          {children}
        </Typography>
      </Grid>
      <IconButton {...CloseButtonProps} onClick={onClose}>
        <Close />
      </IconButton>
    </Grid>
  );
};

export default styled(ModalHeader)(({theme})=>({
  paddingTop: theme.spacing(1)
}));
