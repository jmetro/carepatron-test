import { ThemeProvider } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DataProvider from './store/DataProvider';
import Clients from './pages/Clients';
import theme from './themes/customTheme';

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <DataProvider>
          <Routes>
            <Route path="/" element={<Clients />} />
            <Route path="/Clients" element={<Clients />} />
          </Routes>
        </DataProvider>
      </ThemeProvider>
    </div>
  );
}
