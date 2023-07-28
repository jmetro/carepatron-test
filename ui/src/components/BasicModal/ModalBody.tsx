import { Grid, styled } from '@mui/material';

const ModalBody = ({ children, ...props }: BasicModal.ModalBodyProps) => {
  return <Grid container direction="column" {...props}>{children}</Grid>;
};

export default styled(ModalBody)(({theme})=>({
  paddingTop: theme.spacing(2)
}));
