export const formsConfig: ClientFormProps[] = [
  {
    title: 'Personal details',
    id: 'personalForm',
    active: true,
    inputs: [
      {
        id: 'firstName',
        label: 'First name',
        required: true,
      },
      {
        id: 'lastName',
        label: 'Last name',
        required: true,
      },
    ],
  },
  {
    title: 'Contact details',
    id: 'contactForm',
    active: false,
    inputs: [
      {
        id: 'email',
        label: 'Email',
        required: true,
      },
      {
        id: 'phoneNumber',
        label: 'Phone number',
        required: true,
      },
    ],
  },
];

export const defaultInputValues: IClient = {
  firstName: '',
  lastName: '',
  email: '',
  phoneNumber: '',
  id: 'This will be replaced onCreate anyway'
}