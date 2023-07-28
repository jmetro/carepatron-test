import React from 'react';
import { Grid } from '@mui/material';

const ModalFooter = (props : BasicModal.ModalFooterProps) => {
  return <Grid {...props} sx={{pt: 4}} />;
};

export default ModalFooter;
