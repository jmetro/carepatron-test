import { TableCell, TableRow, Typography } from '@mui/material';

export interface IProps {
  client: IClient;
}

export default function ClientListItem({ client }: IProps) {
  const { id, firstName, lastName, email, phoneNumber } = client;

  return (
    <TableRow
      key={id}
      sx={{
        '&:last-child td, &:last-child th': { border: 0 },
        cursor: 'pointer',
        '&:hover': {
          backgroundColor: '#f5f5f5',
        },
      }}
    >
      <TableCell component="th" scope="row">
        <Typography color="primary" variant="body2" fontWeight={500}>
          {firstName} {lastName}
        </Typography>
      </TableCell>
      <TableCell>{phoneNumber}</TableCell>
      <TableCell>{email}</TableCell>
    </TableRow>
  );
}
