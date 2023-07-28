import {
  memo,
  useContext,
  useEffect,
  useState,
  useCallback,
  useMemo,
} from 'react';
import { Paper, Typography, Grid, Button } from '@mui/material';
import { StateContext } from '../../store/DataProvider';
import Page from '../../components/Page';
import ClientTable from './ClientTable';
import { getClients } from '../../services/api';
import SearchBar from '../../components/SearchBar';
import ClientModal from './ClientModal';

function Clients() {
  const { state, dispatch } = useContext(StateContext);
  const [isClientModalOpen, setIsClientModalOpen] = useState(false);
  const [termSearch, setTermSearch] = useState('');
  const { clients } = state;

  const toggleClientModalHandler = useCallback(() => {
    // Used toggling instead of splitting into 2 handler since button is not clickable when modal is opened
    setIsClientModalOpen((isOpen) => !isOpen);
  }, []);

  const FilteredClients = useMemo(() => {
    if (!termSearch) return clients;
    return clients.filter((client) => {
      const regex = new RegExp(termSearch);
      return (
        regex.test(client.firstName?.toLowerCase()) ||
        regex.test(client.lastName?.toLocaleLowerCase())
      );
    });
  }, [clients, termSearch]);

  const onSearchHandler = useCallback((value: string) => {
    setTermSearch(value);
  }, []);

  useEffect(() => {
    getClients()
      .then((clients) => dispatch({ type: 'FETCH_ALL_CLIENTS', data: clients }))
      .catch((e) => console.error(e));
  }, [dispatch]);

  return (
    <Page>
      <ClientModal
        open={isClientModalOpen}
        onClose={toggleClientModalHandler}
      />
      <Typography variant="h4" sx={{ textAlign: 'start' }}>
        Clients
      </Typography>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ mt: 4 }}
      >
        <SearchBar
          onSearch={onSearchHandler}
          placeholder="Search clients..."
          size="small"
        />
        <Button
          color="primary"
          variant="contained"
          size="large"
          onClick={toggleClientModalHandler}
        >
          Create new client
        </Button>
      </Grid>
      <Paper sx={{ margin: 'auto', marginTop: 3 }}>
        <ClientTable clients={FilteredClients} />
      </Paper>
    </Page>
  );
}

export default memo(Clients);
