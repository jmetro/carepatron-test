interface IClient {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface ClientInput<T extends string> {
  id: string,
  value: IClient<T>
}
interface ClientForm<S extends string, T extends string> {
  title: string,
  inputs: [ClientInput<S>, ClientInput<T>]
}

interface IApplicationState {
  clients: IClient[];
}
declare namespace BasicModal {
  type ReactNode = import('react').ReactNode;
  type GridProps = import('@mui/material').GridProps;
  type TypographyProps = import('@mui/material').TypographyProps;
  type PaperProps = import('@mui/material').PaperProps;
  
  interface ModalHeaderProps extends GridProps {
    children?: ReactNode,
    onClose?: MouseEventHandler<HTMLAnchorElement>,
    ModalHeaderTypographyProps?: TypographyProps,
    CloseButtonProps?: IconButtonProps
  }
  interface ModalBodyProps extends GridProps {}
  interface ModalFooterProps extends GridProps {}
  interface BasicModalProps {
    header?: ReactNode,
    children?: ReactNode,
    footer?: ReactNode,
    open?: Boolean,
    onClose?: Function,
    ModalProps?: ModalProps,
    ModalHeaderProps?: ModalHeaderProps,
    ModalBodyProps?: ModalBodyProps,
    ModalFooterProps?: ModalFooterProps,
    ModalContentProps?: PaperProps
  }
}
type Inputs = Omit<IClient, 'id'>;
interface ClientFormProps {
  title: string;
  id: string;
  active: boolean,
  completed?: boolean,
  inputs: {
    id: keyof Inputs;
    label: string;
    defaultvalue?: string;
    required: boolean
  }[];
}
interface ClientModalFormProps {
  forms: ClientFormProps[];
  activeStep?: number;
}