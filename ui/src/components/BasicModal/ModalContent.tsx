import { styled, Paper } from '@mui/material';

const ModalContent = styled(Paper)(({ theme }) => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  padding: theme.spacing(4)
})) as typeof Paper;


export default ModalContent;
