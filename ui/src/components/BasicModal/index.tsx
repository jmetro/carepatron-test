import { Modal, Grid } from '@mui/material';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalContent from './ModalContent';

const BasicModal = ({
  header,
  children,
  footer,
  open,
  onClose,
  ModalProps,
  ModalHeaderProps,
  ModalBodyProps,
  ModalFooterProps,
  ModalContentProps,
}: BasicModal.BasicModalProps) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      hideBackdrop
      disableRestoreFocus
      {...ModalProps}
    >
      <ModalContent
        component={Grid}
        container
        item
        xs={12}
        lg={3}
        md={6}
        sm={9}
        {...ModalContentProps}
        elevation={5}
      >
        {header && (
          <ModalHeader {...ModalHeaderProps} onClose={onClose}>
            {header}
          </ModalHeader>
        )}
        <ModalBody {...ModalBodyProps}>{children}</ModalBody>
        {footer && <ModalFooter {...ModalFooterProps}>{footer}</ModalFooter>}
      </ModalContent>
    </Modal>
  );
};

export default BasicModal;
